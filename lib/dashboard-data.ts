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
    iconKey: "revenue" | "orders" | "customers" | "frequency" | "topCustomer" | "topProduct"
}

export interface RankedItem {
    label: string
    total: number
    count: number
}

const customers = ["Tomas Lakub", "Mariana Ruiz", "Sofia Perez", "Lucas Gomez", "Valentina Diaz", "Diego Torres"]
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

function getRankedTotals(key: "customer" | "product", range: DashboardRange): RankedItem[] {
    const totals = new Map<string, RankedItem>()

    filterOrdersByRange(range).forEach((order) => {
        const label = order[key]
        const current = totals.get(label) ?? { label, total: 0, count: 0 }

        current.total += order.amount
        current.count += 1
        totals.set(label, current)
    })

    return Array.from(totals.values()).sort((left, right) => right.total - left.total)
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
    const daysInRange = Math.max(
        1,
        Math.round((range.end.getTime() - range.start.getTime()) / (1000 * 60 * 60 * 24)) + 1,
    )
    const ordersPerDay = orders.length / daysInRange
    const topCustomer = getRankedTotals("customer", range)[0]
    const topProduct = getRankedTotals("product", range)[0]

    return [
        {
            title: "Ingresos del período",
            value: formatCurrency(revenue),
            subtitle: `${orders.length} pedidos · ${formatRangeLabel(range)}`,
            iconKey: "revenue",
        },
        {
            title: "Ticket promedio",
            value: formatCurrency(averageTicket),
            subtitle: `${orders.length} pedidos en el rango`,
            iconKey: "orders",
        },
        {
            title: "Clientes activos",
            value: String(activeCustomers),
            subtitle: "Clientes con compras en el período",
            iconKey: "customers",
        },
        {
            title: "Frecuencia",
            value: `${ordersPerDay.toFixed(1)}/día`,
            subtitle: "Pedidos promedio por día",
            iconKey: "frequency",
        },
        {
            title: "Top cliente",
            value: topCustomer ? topCustomer.label : "Sin datos",
            subtitle: topCustomer ? `${formatCurrency(topCustomer.total)} facturados` : "No hay registros",
            iconKey: "topCustomer",
        },
        {
            title: "Top producto",
            value: topProduct ? topProduct.label : "Sin datos",
            subtitle: topProduct ? `${topProduct.count} ventas en el período` : "No hay registros",
            iconKey: "topProduct",
        },
    ]
}

export function buildRankedCustomers(range: DashboardRange) {
    return getRankedTotals("customer", range)
}

export function buildRankedProducts(range: DashboardRange) {
    return getRankedTotals("product", range)
}