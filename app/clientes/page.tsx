"use client"
import { useState } from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Activity, ArrowUpRight, Box, Brain, Calendar, ChevronDown, ChevronUp, DollarSign, Handshake, MessageSquare, Pencil, Search, ShoppingCart, TrendingUp } from "lucide-react"
import { AppNavbar } from "@/components/navbar.components"
import { cn } from "@/lib/utils"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DetailClient {
    id: string;
    name: string;
    location: string;
    status: Filter;
    lastPurchaseDays?: number;
    dateEntrega?: string;
    cxd: string;
    details?: {
        clients: { name: string; quantity: number; unitPrice: number; total: number }[];
    };
}

enum Filter {
    All = "all",
    Day = "day",
    AtRisk = "at_risk"
}

const mockClients: DetailClient[] = [
    {
        id: "CLI-10024",
        name: "Distribuidora Mundo Vegetal",
        location: "Bahía Blanca - Centro",
        status: Filter.Day,
        lastPurchaseDays: 3,
        cxd: "1/5 d",
    },
    {
        id: "CLI-10025",
        name: "Almacén El Cóndor",
        location: "Bahía Blanca - Norte",
        status: Filter.AtRisk,
        lastPurchaseDays: 22,
        cxd: "1/3 d",
    },
    {
        id: "CLI-10026",
        name: "Mini Cooperativa Obrera",
        location: "Punta Alta",
        status: Filter.Day,
        lastPurchaseDays: 2,
        cxd: "1/4 d",
    },
    {
        id: "CLI-10027",
        name: "Autoservicio San Martín",
        location: "Bahía Blanca - Sur",
        status: Filter.Day,
        lastPurchaseDays: 4,
        cxd: "1/6 d",
    },
    {
        id: "CLI-10028",
        name: "Stanich Cristian",
        location: "Ingeniero White",
        status: Filter.AtRisk,
        lastPurchaseDays: 18,
        cxd: "1/2 d",
    }
]

const KPIs = [
    {
        title: "Revenue Total",
        icon: <DollarSign className="h-5 w-5" />,
        subtitle: "desde sept. 2025",
        value: "$63.3M"
    },
    {
        title: "Ticket Promedio",
        icon: <TrendingUp className="h-5 w-5" />,
        subtitle: "53 pedidos",
        value: "$1.193.994"
    },
    {
        title: "Cant. Promedio",
        icon: <Box className="h-5 w-5" />,
        subtitle: "por pedido",
        value: "456.2"
    },
    {
        title: "Frecuencia",
        icon: <Calendar className="h-5 w-5" />,
        subtitle: "Último: Hace 8 días",
        value: "c/9d"
    },
]

export default function ClientsPanel() {
    const [clients] = useState<DetailClient[]>(mockClients)
    const [expandedId, setExpandedId] = useState<string | null>(null)
    const [activeFilter, setActiveFilter] = useState<Filter>(Filter.All)

    const filteredClients = clients.filter(client => {
        if (activeFilter === Filter.All) return true
        return client.status === activeFilter
    })

    const getStatusBadge = (status: DetailClient["status"]) => {
        switch (status) {
            case Filter.Day:
                return (
                    <Badge
                        className={`
                            font-semibold
                            bg-[#E0F7F3] 
                            text-[#0D7C6E] 
                            border-[#7DD4C4]
                            dark:bg-[#1A3D38] 
                            dark:text-[#4AD9C4] 
                            dark:border-[#4AD9C4]
                        `}
                    >
                        Al día
                    </Badge>
                )
            case Filter.AtRisk:
                return (
                    <Badge
                        className={`
                            font-semibold
                            bg-[#F2A9A2] 
                            text-[#7A2E2A] 
                            border-[#E8837A]
                            dark:bg-[#3D1A1A] 
                            dark:text-[#F2A9A2] 
                            dark:border-[#E8837A]
                        `}
                    >
                        En riesgo
                    </Badge>
                )
            case Filter.All:
                return (
                    <Badge
                        className={`
                            font-semibold
                            bg-[#E8F0F9] 
                            text-[#0B3A8A] 
                            border-[#99C0E8]
                            dark:bg-[#1A2D3D] 
                            dark:text-[#4A9BF2] 
                            dark:border-[#4A9BF2]
                        `}
                    >
                        Todos
                    </Badge>
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-svh flex flex-col gap-2 h-[100vh]">
            <AppNavbar />
            <main className="py-1 px-3 md:px-4 flex flex-col gap-2 flex-1 min-h-0">
                <div className="border rounded-md p-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-8 w-full">
                        <div className="flex flex-col gap-1.5 flex-1">
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupInput placeholder="Buscar por nombre, razón social o código ERP" />
                            </InputGroup>
                        </div>

                        <div className="flex items-center gap-2">
                            <Filters
                                value={activeFilter}
                                onFilterChange={setActiveFilter}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-auto">
                    <div className="pt-3 flex-1 h-full gap-2 flex flex-col overflow-auto">
                        {/* HEADER DE TABLA - UNA SOLA VEZ */}
                        <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700">
                            <div className="col-span-1">
                                <span className="text-sm font-bold text-muted-foreground">Código ERP</span>
                            </div>
                            <div className="col-span-3">
                                <span className="text-sm font-bold text-muted-foreground">Nombre del Comercio / Razón Social</span>
                            </div>
                            <div className="col-span-2">
                                <span className="text-sm font-bold text-muted-foreground">Localidad / Zona</span>
                            </div>
                            <div className="col-span-1">
                                <span className="text-sm font-bold text-muted-foreground">c/X d</span>
                            </div>
                            <div className="col-span-2">
                                <span className="text-sm font-bold text-muted-foreground">Estado</span>
                            </div>
                            <div className="col-span-2">
                                <span className="text-sm font-bold text-muted-foreground">Última Compra</span>
                            </div>
                            <div className="col-span-1 text-right">
                                <span className="text-sm font-bold text-muted-foreground">Acción</span>
                            </div>
                        </div>

                        {/* LISTA DE CLIENTES */}
                        {filteredClients.map((client) => (
                            <Collapsible
                                key={client.id}
                                open={expandedId === client.id}
                            >
                                <Card
                                    className="shadow-sm transition-shadow p-0 ring-0 border gap-0"
                                    onClick={() =>
                                        setExpandedId(expandedId === client.id ? null : client.id)
                                    }
                                >
                                    <CollapsibleTrigger
                                        asChild
                                        className={
                                            cn("w-full h-full hover:bg-gray-100 dark:hover:bg-gray-800",
                                                expandedId === client.id ? "bg-gray-100 dark:bg-gray-800" : "")
                                        }
                                    >
                                        <div className="cursor-pointer">
                                            <div className="grid grid-cols-12 gap-2 items-center px-4 py-2">
                                                <div className="col-span-1">
                                                    <p className="text-sm font-semibold">{client.id}</p>
                                                </div>
                                                <div className="col-span-3">
                                                    <p className="text-sm font-semibold">{client.name}</p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="text-sm font-semibold">{client.location}</p>
                                                </div>
                                                <div className="col-span-1">
                                                    <p className="text-sm font-semibold">{client.cxd}</p>
                                                </div>
                                                <div className="col-span-2">
                                                    {getStatusBadge(client.status)}
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="text-sm font-semibold">
                                                        {client.lastPurchaseDays !== undefined
                                                            ? `${client.lastPurchaseDays} días`
                                                            : "N/A"}
                                                    </p>
                                                </div>
                                                <div className="col-span-1 flex justify-end">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setExpandedId(expandedId === client.id ? null : client.id)
                                                        }}
                                                    >
                                                        {expandedId === client.id ? (
                                                            <ChevronUp className="h-4 w-4" />
                                                        ) : (
                                                            <ChevronDown className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CollapsibleTrigger>

                                    <CollapsibleClientDetail client={client} />
                                </Card>
                            </Collapsible>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

// FILTERS

function Filters({
    value,
    onFilterChange,
    variant = "default"
}: {
    value?: Filter;
    onFilterChange?: (filter: Filter) => void;
    variant?: "default" | "ampliado";
}) {
    const [internalPeriod, setInternalPeriod] = useState<Filter>(Filter.All);
    const periods = [
        { label: "Todos", value: Filter.All },
        { label: "Al día", value: Filter.Day },
        { label: "En riesgo", value: Filter.AtRisk },
    ]

    const selectedPeriod = value ?? internalPeriod

    const handlePeriodClick = (period: Filter) => {
        setInternalPeriod(period)
        onFilterChange?.(period)
    }

    const isActive = (period: Filter) => selectedPeriod === period

    if (variant === "ampliado") {
        return (
            <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                {periods.map((period) => (
                    <Button
                        key={period.value}
                        variant="ghost"
                        size="sm"
                        className={cn(
                            "h-7 px-3 py-0 text-xs font-medium rounded-md transition-all",
                            isActive(period.value)
                                ? "bg-white dark:bg-gray-700 shadow-sm text-emerald-600 dark:text-emerald-400"
                                : "hover:bg-gray-200 dark:hover:bg-gray-700"
                        )}
                        onClick={() => handlePeriodClick(period.value)}
                    >
                        {period.label}
                    </Button>
                ))}
            </div>
        )
    }

    return (
        <Card className="w-auto ml-auto border-border/40 shadow-sm hover:shadow-md transition-shadow px-3 py-1">
            <div className="flex items-center gap-2 p-0 rounded-2xl w-full justify-between md:w-fit md:ml-auto">
                {periods.map((period) => (
                    <Button
                        key={period.value}
                        variant="ghost"
                        size="sm"
                        className={cn(
                            "h-8 px-4 py-1 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800",
                            isActive(period.value)
                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-2xl"
                                : ""
                        )}
                        onClick={() => handlePeriodClick(period.value)}
                    >
                        {period.label}
                    </Button>
                ))}
            </div>
        </Card>
    )
}

// FILTERS

// KPI CARD
interface KPIProps {
    title: string
    value: string
    subtitle?: string
    icon?: React.ReactNode
    trend?: {
        type: "up" | "down"
    }
}

function KPICard({ title, value, subtitle, icon }: KPIProps) {
    return (
        <Card className="border-border/40 shadow-lg hover:shadow-md transition-shadow py-4 gap-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {title}
                </CardTitle>
                {icon && <div className="h-auto w-auto text-emerald-600 border border-emerald-200/20 p-1 bg-emerald-50 dark:bg-emerald-950/20 rounded-md">{icon}</div>}
            </CardHeader>
            <CardContent className="pt-1">
                <div className={"text-xl font-bold leading-tight"}>
                    {value}
                </div>
                {subtitle ? (
                    <div className="mt-1 text-xs text-muted-foreground">{subtitle}</div>
                ) : null}
            </CardContent>
        </Card>
    )
}

// KPI CARD

// COLLAPSIBLE CLIENT DETAIL

const CollapsibleClientDetail = ({ client }: { client: DetailClient }) => {
    const [activeFilter, setActiveFilter] = useState<Filter>(Filter.All)
    const [activeTab, setActiveTab] = useState<"charts" | "memorias" | "acuerdos" | "pedidos">("charts")

    return (
        <CollapsibleContent className="p-4 gap-3 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <span className="font-medium flex items-center gap-2 text-sm">
                        {client.name}
                        <Badge variant="default" className="bg-gray-800 dark:bg-gray-700 text-white dark:text-white">Activo</Badge>
                        <span className="text-xs font-light">Distribuidora Premium - José León Suarez </span>
                        <span className="text-xs flex items-center font-light">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-xs font-light">29 ago</span>
                        </span>
                    </span>

                    <div className="flex ml-auto gap-2">
                        <Filters
                            value={activeFilter}
                            onFilterChange={setActiveFilter}
                            variant="ampliado"
                        />
                        <Button variant="outline">
                            <MessageSquare />
                        </Button>
                        <Button variant="secondary" className="text-black dark:text-white gap-2">
                            <Pencil />
                            Editar
                        </Button>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-4">
                    {KPIs.map((item, index) => (
                        <KPICard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>

                <TabCharts active={activeTab} onClick={() => setActiveTab("charts")} />

                <TabMemories active={activeTab} onClick={() => setActiveTab("memorias")} />

                <TabAcuerdos active={activeTab} onClick={() => setActiveTab("acuerdos")} />

                <TabPedidos active={activeTab} onClick={() => setActiveTab("pedidos")} />
            </div>
        </CollapsibleContent>
    )
}

// TABS 

// CHARTS

const chartConfig = {
    desktop: {
        label: "Cantidad",
        color: "#4AD9C4", // Turquesa principal
    },
    mobile: {
        label: "Frecuencia",
        color: "#0D7C6E", // Turquesa oscuro
    },
    price: {
        label: "Precio",
        color: "#66D9C9", // Turquesa medio
    }
} satisfies ChartConfig

function TabCharts({ active, onClick }: { active?: "charts" | "memorias" | "acuerdos" | "pedidos" | null; onClick: (tab: "charts" | "memorias" | "acuerdos" | "pedidos" | null) => void }) {
    const filteredData = [
        { label: "2026-06-01", desktop: 4000, mobile: 2400, price: 12500 },
        { label: "2026-06-02", desktop: 3000, mobile: 1398, price: 8900 },
        { label: "2026-06-03", desktop: 2000, mobile: 9800, price: 15000 },
        { label: "2026-06-04", desktop: 2780, mobile: 3908, price: 11200 },
        { label: "2026-06-05", desktop: 1890, mobile: 4800, price: 9800 },
        { label: "2026-06-06", desktop: 2390, mobile: 3800, price: 13400 },
        { label: "2026-06-07", desktop: 3490, mobile: 4300, price: 21000 }
    ]

    const handleClick = () =>
        active === "charts" ?
            onClick("charts")
            : onClick(null)

    if (active === "charts") {
        return (
            <Card className="py-3 px-0 border-emerald-300 flex flex-col flex-1 min-h-0 max-h-[400px]" onClick={() => handleClick()}>
                <CardContent className="flex flex-col gap-2 justify-between flex-1 min-h-0">
                    <div className="text-sm font-semibold text-muted-foreground mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <Activity className="text-emerald-500 h-5 w-5" />
                                <span>Ciclo de Vida</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="p-3 text-medium flex items-center gap-2 bg-gray-800 dark:bg-zinc-600 text-white dark:text-white">
                                    Cantidad
                                </Badge>
                                <Badge variant="secondary" className="p-3 text-medium flex items-center gap-2">
                                    Top productos
                                </Badge>
                                <Badge variant="secondary" className="p-3 text-medium flex items-center gap-2">
                                    Frecuencia
                                </Badge>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <Badge variant="secondary" className="p-2 text-medium flex items-center gap-2 text-emerald-500 bg-emerald-50 dark:bg-emerald-900 dark:text-emerald-400">
                                <ArrowUpRight />
                                En crecimiento
                            </Badge>
                            <Badge variant="ghost">Pidiendo mas items vs. período anterior</Badge>
                        </div>
                    </div>
                    <ChartContainer config={chartConfig} className="flex-1 w-full min-h-0">
                        <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                            <defs>
                                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4AD9C4" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#4AD9C4" stopOpacity={0.1} />
                                </linearGradient>
                                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0D7C6E" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#0D7C6E" stopOpacity={0.1} />
                                </linearGradient>
                                <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#66D9C9" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#66D9C9" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="label"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value) => value}
                            />
                            <YAxis
                                yAxisId="left"
                                orientation="left"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => {
                                    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`
                                    return value.toString()
                                }}
                            />
                            <YAxis
                                yAxisId="right"
                                orientation="right"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => {
                                    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
                                    if (value >= 1000) return `$${(value / 1000).toFixed(0)}k`
                                    return `$${value.toString()}`
                                }}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent labelFormatter={(value) => value} indicator="dot" />}
                            />
                            <Area
                                yAxisId="left"
                                dataKey="mobile"
                                type="natural"
                                fill="url(#fillMobile)"
                                stroke="#0D7C6E"
                                stackId="a"
                            />
                            <Area
                                yAxisId="left"
                                dataKey="desktop"
                                type="natural"
                                fill="url(#fillDesktop)"
                                stroke="#4AD9C4"
                                stackId="a"
                            />
                            <Area
                                yAxisId="right"
                                dataKey="price"
                                type="natural"
                                fill="url(#fillPrice)"
                                stroke="#66D9C9"
                                stackId="b"
                            />
                            {/* ELIMINADO: <ChartLegend content={<ChartLegendContent />} /> */}
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="py-3 px-0 border-emerald-300" onClick={() => handleClick()}>
            <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                <Activity className="text-emerald-500 h-5 w-5" />
                <span className="text-md font-semibold">Ciclo de Vida</span>
            </CardContent>
        </Card>
    )
}

// CHARTS

// MEMORIAS

function TabMemories({ active, onClick }: { active?: "charts" | "memorias" | "acuerdos" | "pedidos" | null; onClick: (tab: "charts" | "memorias" | "acuerdos" | "pedidos" | null) => void }) {
    const handleClick = () =>
        active === "memorias" ?
            onClick("memorias")
            : onClick(null)

    if (active === "memorias") {
        return (
            <Card className="py-3 px-0 border-emerald-300" onClick={() => handleClick()}>
                <CardContent className="flex flex-col gap-2 items-start justify-center flex-1 min-h-0">
                    <div className="flex flex-1 gap-2 items-center justify-start">
                        <Brain className="text-emerald-500 h-5 w-5" />
                        <span className="text-md font-semibold">Memorías</span>
                    </div>

                    <div className="flex-1 mt-4 p-4 flex items-center justify-center mx-auto">Content</div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="py-3 px-0 border-emerald-300" onClick={() => handleClick()}>
            <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                <Activity className="text-emerald-500 h-5 w-5" />
                <span className="text-md font-semibold">Ciclo de Vida</span>
            </CardContent>
        </Card>
    )
}

// MEMORIAS

// ACUERDOS

function TabAcuerdos({ active, onClick }: { active?: "charts" | "memorias" | "acuerdos" | "pedidos" | null; onClick: (tab: "charts" | "memorias" | "acuerdos" | "pedidos" | null) => void }) {
    const handleClick = () =>
        active === "acuerdos" ?
            onClick("acuerdos")
            : onClick(null)

    if (active === "acuerdos") {
        return (
            <Card className="py-3 px-0 border-emerald-300" onClick={() => handleClick()}>
                <CardContent className="flex flex-col gap-2 items-start justify-center flex-1 min-h-0">
                    <div className="flex flex-1 gap-2 items-center justify-start">
                        <Handshake className="text-emerald-500 h-5 w-5" />
                        <span className="text-md font-semibold">Acuerdos</span>
                    </div>

                    <div className="flex-1 mt-4 p-4 flex items-center justify-center mx-auto">Content</div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="py-3 px-0 border-emerald-300" onClick={() => handleClick()}>
            <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                <Handshake className="text-emerald-500 h-5 w-5" />
                <span className="text-md font-semibold">Acuerdos</span>
            </CardContent>
        </Card>
    )
}

// ACUERDOS

// PEDIDOS

function TabPedidos({ active, onClick }: { active?: "charts" | "memorias" | "acuerdos" | "pedidos" | null; onClick: (tab: "charts" | "memorias" | "acuerdos" | "pedidos" | null) => void }) {
    const handleClick = () =>
        active === "pedidos" ?
            onClick("pedidos")
            : onClick(null)

    if (active === "pedidos") {
        return (
            <Card className="py-3 px-0 border-emerald-300" onClick={() => handleClick()}>
                <CardContent className="flex flex-col gap-2 items-start justify-center flex-1 min-h-0">
                    <div className="flex flex-1 gap-2 items-center justify-start">
                        <ShoppingCart className="text-emerald-500 h-5 w-5" />
                        <span className="text-md font-semibold">Pedidos</span>
                    </div>

                    <div className="flex-1 mt-4 p-4 flex items-center justify-center mx-auto">Pedidos Content</div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="py-3 px-0 border-emerald-300" onClick={() => handleClick()}>
            <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                <ShoppingCart className="text-emerald-500 h-5 w-5" />
                <span className="text-md font-semibold">Pedidos</span>
            </CardContent>
        </Card>
    )
}

// PEDIDOS