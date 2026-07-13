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
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DetailClient {
    id: string;
    name: string;
    location: string;
    status: Filter;
    lastPurchase?: string;
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
        id: "C001",
        name: "Comercio ABC",
        location: "Zona Norte",
        status: Filter.Day,
        lastPurchase: "2026-06-15",
        cxd: "1/5 d",
    },
    {
        id: "C002",
        name: "Comercio ABC",
        location: "Zona Norte",
        status: Filter.AtRisk,
        lastPurchase: "2026-06-15",
        cxd: "1/3 d",
    }
]

const KPIs = [
    {
        title: "Renevue Total",
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

    const getStatusBadge = (status: DetailClient["status"]) => {
        switch (status) {
            case Filter.Day:
                return (
                    <Badge
                        className={`
                            font-semibold
                            /* Modo claro */
                            bg-[#E8F9F4] 
                            text-[#0B8A6E] 
                            border-[#99E8D2]
                            
                            /* Modo oscuro */
                            dark:bg-[#1A3D35] 
                            dark:text-[#4AD9B0] 
                            dark:border-[#4AD9B0]
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
                            /* Modo claro */
                            bg-[#F2A9A2] 
                            text-[#7A2E2A] 
                            border-[#E8837A]
                            
                            /* Modo oscuro */
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
                            /* Modo claro */
                            bg-[#E8F0F9] 
                            text-[#0B3A8A] 
                            border-[#99C0E8]
                            
                            /* Modo oscuro */
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
                            <Filters value={Filter.Day} onRangeChange={(range) => console.log("Rango seleccionado:", range)} />
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-auto">
                    <div className="pt-3 flex-1 h-full gap-2 flex flex-col overflow-auto">
                        {clients.map((client) => (
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
                                            cn("w-full h-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800", expandedId === client.id ? "bg-gray-100 dark:bg-gray-800" : "")
                                        }
                                    >
                                        <div className="cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div className="flex flex-col gap-1 pr-4">
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Código</span>
                                                    <p className="text-sm font-bold">{client.id}</p>
                                                </div>
                                                <div className="flex flex-col gap-1 flex-1">
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Nombre del Comercio / Razón Social</span>
                                                    <p className="text-sm font-bold">{client.name}</p>
                                                </div>
                                                <div className="flex flex-col gap-1 flex-1">
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Localidad / Zona</span>
                                                    <p className="text-sm font-bold">{client.location}</p>
                                                </div>
                                                <div className="flex flex-col gap-1 flex-1">
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">c/X d</span>
                                                    <p className="text-sm font-bold">{client.cxd}</p>
                                                </div>
                                                <div className="flex flex-col gap-1 flex-1">
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Estado</span>
                                                    {getStatusBadge(client.status)}
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Última Compra</span>
                                                    <p className="text-sm font-bold">{client.lastPurchase ?? "N/A"}</p>
                                                </div>
                                                <div className="flex items-center gap-2" >
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() =>
                                                            setExpandedId(expandedId === client.id ? null : client.id)
                                                        }
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
                                                    <Filters onRangeChange={() => { }} value={Filter.All} />
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

                                            <ChartAreaInteractive />

                                            <Card className="py-3 px-0">
                                                <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                                                    <Brain className="text-lime-500 h-5 w-5" />
                                                    <span className="text-md font-semibold">Memorías</span>
                                                </CardContent>
                                            </Card>

                                            <Card className="py-3 px-0">
                                                <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                                                    <Handshake className="text-lime-500 h-5 w-5" />
                                                    <span className="text-md font-semibold">Acuerdos</span>
                                                </CardContent>
                                            </Card>

                                            <Card className="py-3 px-0">
                                                <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                                                    <ShoppingCart className="text-lime-500 h-5 w-5" />
                                                    <span className="text-md font-semibold">Pedidos (53)</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CollapsibleContent>
                                </Card>
                            </Collapsible>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

function Filters({ value, onRangeChange }: { value?: Filter; onRangeChange?: (range: { start: Date; end: Date; period: Filter }) => void }) {
    const [internalPeriod, setInternalPeriod] = useState<Filter>(Filter.Day);
    const periods = [
        { label: "Todos", value: "all" as const },
        { label: "Al día", value: "day" as const },
        { label: "En riesgo", value: "at_risk" as const },
    ]

    const selectedPeriod = value ?? internalPeriod

    const handlePeriodClick = (period: Filter) => {
        setInternalPeriod(period)
        onRangeChange?.({ start: new Date(), end: new Date(), period })
    }

    const isActive = (period: Filter) => selectedPeriod === period

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
                            isActive(period.value as Filter)
                                ? "bg-gray-300 rounded-2xl dark:hover:bg-stone-800 dark:bg-stone-700"
                                : ""
                        )}
                        onClick={() => handlePeriodClick(period.value as Filter)}
                    >
                        {period.label}
                    </Button>
                ))}
            </div>
        </Card>
    )
}

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
                {icon && <div className="h-auto w-auto text-muted-foreground border border-muted-foreground/20 p-1 bg-muted-foreground/5 rounded-md">{icon}</div>}
            </CardHeader>
            <CardContent className="pt-1">
                <div
                    className={"text-xl font-bold leading-tight"}
                >
                    {value}
                </div>
                {subtitle ? (
                    <div className="mt-1 text-xs text-muted-foreground">{subtitle}</div>
                ) : null}
            </CardContent>
        </Card>
    )
}

const chartConfig = {
    XAxis: {
        label: "Fecha",
        color: "var(--text-muted-foreground)",
    }
} satisfies ChartConfig

function ChartAreaInteractive() {
    const filteredData = [
        { label: "2026-06-01", desktop: 4000, mobile: 2400, price: 12500 },
        { label: "2026-06-02", desktop: 3000, mobile: 1398, price: 8900 },
        { label: "2026-06-03", desktop: 2000, mobile: 9800, price: 15000 },
        { label: "2026-06-04", desktop: 2780, mobile: 3908, price: 11200 },
        { label: "2026-06-05", desktop: 1890, mobile: 4800, price: 9800 },
        { label: "2026-06-06", desktop: 2390, mobile: 3800, price: 13400 },
        { label: "2026-06-07", desktop: 3490, mobile: 4300, price: 21000 }
    ]

    return (
        <Card className="py-4 flex-1 flex flex-col border-border/40 shadow-sm hover:shadow-md transition-shadow min-h-0 max-h-[300px]">
            <CardContent className="px-2 pt-0 sm:px-4 sm:pt-3 flex flex-col flex-1 min-h-0">
                <div className="text-sm font-semibold text-muted-foreground mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <Activity className="text-lime-500 h-5 w-5" />
                            <span>Ciclo de Vida</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="p-2 text-medium flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white dark:text-white">
                                Cantidad
                            </Badge>
                            <Badge variant="secondary" className="p-2 text-medium flex items-center gap-2">
                                Top productos
                            </Badge>
                            <Badge variant="secondary" className="p-2 text-medium flex items-center gap-2">
                                Frecuencia
                            </Badge>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary" className="p-2 text-medium flex items-center gap-2 text-lime-500 bg-lime-200 dark:bg-gray-700">
                            <ArrowUpRight />
                            En crecimiento
                        </Badge>
                        <Badge variant="ghost">Pidiendo mas items vs. período anterior</Badge>
                    </div>
                </div>
                <ChartContainer
                    config={chartConfig}
                    className="flex-1 w-full min-h-0"
                >
                    <AreaChart
                        data={filteredData}
                        margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-mobile)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-mobile)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-price)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-price)"
                                    stopOpacity={0.1}
                                />
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

                        {/* EJE Y IZQUIERDO - Cantidad/Número */}
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => {
                                if (value >= 1000) {
                                    return `${(value / 1000).toFixed(0)}`
                                }
                                return value.toString()
                            }}
                        />

                        {/* EJE Y DERECHO - Precio */}
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => {
                                if (value >= 1000000) {
                                    return `$${(value / 1000000).toFixed(1)}M`
                                }
                                if (value >= 1000) {
                                    return `$${(value / 1000).toFixed(0)}M`
                                }
                                return `$${value.toString()}`
                            }}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => value}
                                    indicator="dot"
                                />
                            }
                        />

                        {/* Área para cantidad (eje izquierdo) */}
                        <Area
                            yAxisId="left"
                            dataKey="mobile"
                            type="natural"
                            fill="url(#fillMobile)"
                            stroke="var(--color-mobile)"
                            stackId="a"
                        />
                        <Area
                            yAxisId="left"
                            dataKey="desktop"
                            type="natural"
                            fill="url(#fillDesktop)"
                            stroke="var(--color-desktop)"
                            stackId="a"
                        />

                        {/* Área para precio (eje derecho) */}
                        <Area
                            yAxisId="right"
                            dataKey="price"
                            type="natural"
                            fill="url(#fillPrice)"
                            stroke="var(--color-price)"
                            stackId="b"
                        />

                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}