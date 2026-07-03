export type DashboardPeriod = "day" | "week" | "month" | "range"

export interface DashboardRange {
    start: Date
    end: Date
    period: DashboardPeriod
}

export interface OrderRecord {
    id: string
    customer: string
    product: string
    amount: number
    paymentMethod: string
    status: "Paid" | "Pending" | "Unpaid"
    date: string
}

export interface ChartDatum {
    label: string
    desktop: number
    mobile: number
}

export interface KpiCardData {
    title: string
    value: string
    subtitle: string
    iconKey: "orders" | "sales" | "variation" | "pending" | "customers" | "ticket" | "debt" | "stock" | "risk"
    trend?: {
        type: "up" | "down"
    }
}

export interface RankedItem {
    label: string
    total: number
    count: number
}

const customers = ["Julián Daniele", "Mariana Ruiz", "Sofia Perez", "Lucas Gomez", "Valentina Diaz", "Diego Torres"]
const products = ["Blend A", "Blend B", "Capsule Kit", "Cold Brew", "Maintenance Plan", "Training Session"]
const paymentMethods = ["Credit Card", "PayPal", "Bank Transfer"]
const statuses: Array<OrderRecord["status"]> = ["Paid", "Pending", "Unpaid"]

const today = new Date()
today.setHours(12, 0, 0, 0)

export const mockOrders: OrderRecord[] = Array.from({ length: 24 }, (_, index) => {
    const date = new Date(today)
    date.setDate(today.getDate() - index)

    const amount = 180 + ((index * 37) % 9) * 35 + (index % 4) * 22

    return {
        id: `INV${String(index + 1).padStart(3, "0")}`,
        customer: customers[index % customers.length],
        product: products[index % products.length],
        amount,
        paymentMethod: paymentMethods[index % paymentMethods.length],
        status: statuses[index % statuses.length],
        date: date.toISOString(),
    }
})

export function getDashboardRange(period: DashboardPeriod): DashboardRange {
    const end = new Date()
    end.setHours(23, 59, 59, 999)

    const start = new Date(end)

    if (period === "day") {
        start.setHours(0, 0, 0, 0)
    } else if (period === "week") {
        const currentDay = end.getDay()
        const dayOffset = currentDay === 0 ? 6 : currentDay - 1
        start.setDate(end.getDate() - dayOffset)
        start.setHours(0, 0, 0, 0)
    } else if (period === "month") {
        start.setDate(1)
        start.setHours(0, 0, 0, 0)
    } else {
        start.setDate(end.getDate() - 13)
        start.setHours(0, 0, 0, 0)
    }

    return { start, end, period }
}

export function formatRangeLabel(range: DashboardRange) {
    if (range.period === "day") {
        return "Hoy"
    }

    if (range.period === "week") {
        return "Semana en curso"
    }

    if (range.period === "month") {
        return "Mes en curso"
    }

    return `${range.start.toLocaleDateString("es-ES")} - ${range.end.toLocaleDateString("es-ES")}`
}

export function filterOrdersByRange(range: DashboardRange) {
    return mockOrders.filter((order) => {
        const orderDate = new Date(order.date)
        return orderDate >= range.start && orderDate <= range.end
    })
}

function hashSeed(seed: string) {
    let hash = 0

    for (let index = 0; index < seed.length; index += 1) {
        hash = (hash << 5) - hash + seed.charCodeAt(index)
        hash |= 0
    }

    return Math.abs(hash)
}

function seededValue(seed: string, min: number, max: number) {
    const hash = hashSeed(seed)
    return min + (hash % (max - min + 1))
}

function getWeekdayLabels() {
    return ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]
}

function buildDailySeries(range: DashboardRange) {
    const labels: string[] = []
    const current = new Date(range.start)
    current.setHours(0, 0, 0, 0)

    while (current <= range.end) {
        labels.push(current.toLocaleDateString("es-ES", { day: "2-digit", month: "short" }))
        current.setDate(current.getDate() + 1)
    }

    return labels
}

export function buildChartData(range: DashboardRange): ChartDatum[] {
    if (range.period === "day") {
        return Array.from({ length: 11 }, (_, index) => {
            const hour = 8 + index
            const label = `${String(hour).padStart(2, "0")}:00`
            const seed = `${range.start.toDateString()}-${label}`

            return {
                label,
                desktop: seededValue(seed, 140, 480),
                mobile: seededValue(`${seed}-mobile`, 90, 360),
            }
        })
    }

    if (range.period === "week") {
        return getWeekdayLabels().map((label, index) => {
            const seed = `${range.start.toDateString()}-${label}-${index}`

            return {
                label,
                desktop: seededValue(seed, 140, 480),
                mobile: seededValue(`${seed}-mobile`, 90, 360),
            }
        })
    }

    if (range.period === "month") {
        return ["Semana 1", "Semana 2", "Semana 3", "Semana 4"].map((label, index) => {
            const seed = `${range.start.toDateString()}-${label}-${index}`

            return {
                label,
                desktop: seededValue(seed, 320, 980),
                mobile: seededValue(`${seed}-mobile`, 220, 760),
            }
        })
    }

    return buildDailySeries(range).map((label, index) => {
        const seed = `${range.start.toDateString()}-${label}-${index}`

        return {
            label,
            desktop: seededValue(seed, 120, 520),
            mobile: seededValue(`${seed}-mobile`, 80, 380),
        }
    })
}

function getRankedTotals(key: "customer" | "product", range: DashboardRange, limit: number): RankedItem[] {
    const totals = new Map<string, RankedItem>()

    filterOrdersByRange(range).forEach((order) => {
        const label = order[key]
        const current = totals.get(label) ?? { label, total: 0, count: 0 }

        current.total += order.amount
        current.count += 1
        totals.set(label, current)
    })

    return Array.from(totals.values()).sort((left, right) => right.total - left.total).slice(0, limit)
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
    }).format(value)
}

export function buildKpiCards(range: DashboardRange): KpiCardData[] {
    const orders = filterOrdersByRange(range)
    const revenue = orders.reduce((sum, order) => sum + order.amount, 0)
    const averageTicket = orders.length ? revenue / orders.length : 0
    const activeCustomers = new Set(orders.map((order) => order.customer)).size
    const pendingOrders = orders.filter((order) => order.status === "Pending").length
    const retainedDebt = orders
        .filter((order) => order.status !== "Paid")
        .reduce((sum, order) => sum + order.amount, 0)
    const stockIssues = Math.max(1, Math.round(orders.length * 0.06))
    const riskyCustomers = new Set(
        orders.filter((order) => order.status === "Unpaid").map((order) => order.customer)
    ).size

    const rangeDuration = range.end.getTime() - range.start.getTime()
    const previousEnd = new Date(range.start.getTime() - 1)
    const previousStart = new Date(previousEnd.getTime() - rangeDuration)

    const previousRevenue = mockOrders
        .filter((order) => {
            const orderDate = new Date(order.date)
            return orderDate >= previousStart && orderDate <= previousEnd
        })
        .reduce((sum, order) => sum + order.amount, 0)

    const rawVariation =
        previousRevenue === 0
            ? revenue > 0
                ? 100
                : 0
            : ((revenue - previousRevenue) / previousRevenue) * 100

    const positiveVariation = Math.abs(rawVariation)

    const variation = `${new Intl.NumberFormat("es-AR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
        signDisplay: "always",
    }).format(positiveVariation)}%`

    return [
        {
            title: "Pedidos Totales",
            value: String(orders.length),
            subtitle: "",
            iconKey: "orders",
        },
        {
            title: "Venta Total ($)",
            value: formatCurrency(revenue),
            subtitle: "",
            iconKey: "sales",
        },
        {
            title: "Variación",
            value: variation,
            subtitle: "vs período anterior",
            iconKey: "variation",
            trend: {
                type: "up",
            },
        },
        {
            title: "Por Confirmar",
            value: String(pendingOrders),
            subtitle: "",
            iconKey: "pending",
        },
        {
            title: "Clientes Activos",
            value: String(activeCustomers),
            subtitle: "",
            iconKey: "customers",
        },
        {
            title: "Ticket Promedio",
            value: formatCurrency(averageTicket),
            subtitle: "",
            iconKey: "ticket",
        },
        {
            title: "Monto retenido por deuda",
            value: formatCurrency(retainedDebt),
            subtitle: "",
            iconKey: "debt",
        },
        {
            title: "Pedidos sin Stock",
            value: String(stockIssues),
            subtitle: "",
            iconKey: "stock",
        },
        {
            title: "Clientes en Riesgo",
            value: String(riskyCustomers),
            subtitle: "",
            iconKey: "risk",
        },
    ]
}

export function buildRankedCustomers(range: DashboardRange, limit: number) {
    return getRankedTotals("customer", range, limit)
}

export function buildRankedProducts(range: DashboardRange, limit: number) {
    return getRankedTotals("product", range, limit)
}