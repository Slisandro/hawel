// app/clientes/[id]/ClientWrapper.tsx
"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Activity, AlertCircle, ArrowLeft, Box, Calendar as CalendarIcon, Clock, DollarSign, Eye, Handshake, Link, MessageSquare, Pencil, ShoppingCart, Trash2, TrendingUp, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, BarChart, Bar, LineChart, Line } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useRouter } from "next/navigation";
import { getDashboardRange, type DashboardRange } from "@/lib/dashboard-data";
import { es } from "date-fns/locale";

// Definir interfaces
enum Filter {
    All = "all",
    Day = "day",
    AtRisk = "at_risk"
}

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

// Props para el Client Wrapper
interface ClientWrapperProps {
    client: DetailClient;
}

// ============================================================
// KPI CARD
// ============================================================
interface KPIProps {
    title: string;
    value: string;
    subtitle?: string;
    icon?: React.ReactNode;
    trend?: {
        type: "up" | "down";
    };
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
                <div className="text-xl font-bold leading-tight">
                    {value}
                </div>
                {subtitle ? (
                    <div className="mt-1 text-xs text-muted-foreground">{subtitle}</div>
                ) : null}
            </CardContent>
        </Card>
    );
}

// ============================================================
// FILTERS - Con opciones 3M, 6M, 9M y Rango
// ============================================================
export type RangePeriod = "day" | "week" | "month" | "range";

interface FiltersProps {
    value?: RangePeriod;
    onRangeChange?: (range: { start: Date; end: Date; period: RangePeriod }) => void;
    variant?: "default" | "ampliado";
}

function Filters({ value, onRangeChange, variant = "default" }: FiltersProps) {
    const [internalPeriod, setInternalPeriod] = useState<RangePeriod>("day");
    const [customRange, setCustomRange] = useState<{
        start: Date | undefined;
        end: Date | undefined;
    }>({
        start: undefined,
        end: undefined,
    });
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const selectedPeriod = value ?? internalPeriod;
    const selectedRange =
        selectedPeriod === "range"
            ? customRange
            : getDashboardRange(selectedPeriod);

    const periods = [
        { label: "3M", value: "day" as const },
        { label: "6M", value: "week" as const },
        { label: "9M", value: "month" as const },
    ];

    const handlePeriodClick = (period: RangePeriod) => {
        const range = getDashboardRange(period);
        setInternalPeriod(period);
        onRangeChange?.(range);
    };

    const handleDateRangeSelect = (range: { from: Date; to: Date }) => {
        const nextRange = { start: range.from, end: range.to, period: "range" as const };
        setCustomRange({ start: range.from, end: range.to });
        setInternalPeriod("range");
        onRangeChange?.(nextRange);
        setIsCalendarOpen(false);
    };

    const isActive = (period: RangePeriod) => selectedPeriod === period;

    // Variante ampliada (para el cliente detail)
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

                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "h-7 px-3 py-0 text-xs font-medium rounded-md transition-all",
                                isActive("range")
                                    ? "bg-white dark:bg-gray-700 shadow-sm text-emerald-600 dark:text-emerald-400"
                                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                            )}
                        >
                            <CalendarIcon className="h-3.5 w-3.5" />
                            <span className="hidden md:inline">Rango</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="range"
                            selected={{
                                from: selectedRange.start,
                                to: selectedRange.end,
                            }}
                            onSelect={(range) => {
                                if (range?.from && range?.to) {
                                    handleDateRangeSelect(range as { from: Date; to: Date });
                                }
                            }}
                            numberOfMonths={2}
                            locale={es}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }

    // Variante default (para la lista de clientes)
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

                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                                "h-8 px-4 py-1 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-800",
                                isActive("range")
                                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-2xl"
                                    : ""
                            )}
                        >
                            <CalendarIcon className="h-3.5 w-3.5" />
                            <span className="hidden md:inline">Rango</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="range"
                            selected={{
                                from: selectedRange.start,
                                to: selectedRange.end,
                            }}
                            onSelect={(range) => {
                                if (range?.from && range?.to) {
                                    handleDateRangeSelect(range as { from: Date; to: Date });
                                }
                            }}
                            numberOfMonths={2}
                            locale={es}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </Card>
    );
}

// ============================================================
// TIPO DE GRÁFICO Y DATOS MOCK
// ============================================================
type ChartView = "topProductos" | "cantidad" | "frecuencia";

interface ChartDataItem {
    label: string;
    value: number;
    [key: string]: string | number;
}

// Datos mock para cada vista
const mockData: Record<ChartView, ChartDataItem[]> = {
    // TAB 1: TOP PRODUCTOS - Ranking de artículos más comprados
    topProductos: [
        { label: "01/07/2026", value: 450 },
        { label: "02/07/2026", value: 380 },
        { label: "03/07/2026", value: 320 },
        { label: "04/07/2026", value: 280 },
        { label: "05/07/2026", value: 200 },
        { label: "06/07/2026", value: 150 },
        { label: "07/07/2026", value: 100 },
        { label: "08/07/2026", value: 85 },
        { label: "09/07/2026", value: 70 },
        { label: "10/07/2026", value: 55 },
    ],
    // TAB 2: CANTIDAD - Curva de bultos/unidades totales por mes
    cantidad: [
        { label: "Ene", value: 1200 },
        { label: "Feb", value: 900 },
        { label: "Mar", value: 1500 },
        { label: "Abr", value: 1800 },
        { label: "May", value: 1400 },
        { label: "Jun", value: 2100 },
        { label: "Jul", value: 1600 },
        { label: "Ago", value: 1900 },
        { label: "Sep", value: 2200 },
        { label: "Oct", value: 2000 },
        { label: "Nov", value: 2400 },
        { label: "Dic", value: 2800 },
    ],
    // TAB 3: FRECUENCIA - Evolución de días entre pedidos
    frecuencia: [
        { label: "Sem 1", value: 12 },
        { label: "Sem 2", value: 10 },
        { label: "Sem 3", value: 8 },
        { label: "Sem 4", value: 15 },
        { label: "Sem 5", value: 7 },
        { label: "Sem 6", value: 9 },
        { label: "Sem 7", value: 11 },
        { label: "Sem 8", value: 6 },
        { label: "Sem 9", value: 8 },
        { label: "Sem 10", value: 5 },
        { label: "Sem 11", value: 7 },
        { label: "Sem 12", value: 4 },
    ],
};

// Configuración de colores por vista
const chartColors: Record<ChartView, { primary: string; secondary: string; gradient: string }> = {
    topProductos: {
        primary: "#F59E0B",
        secondary: "#D97706",
        gradient: "fillTopProductos",
    },
    cantidad: {
        primary: "#4AD9C4",
        secondary: "#0D7C6E",
        gradient: "fillCantidad",
    },
    frecuencia: {
        primary: "#8B5CF6",
        secondary: "#6D28D9",
        gradient: "fillFrecuencia",
    },
};

// Configuración de títulos y descripciones
const chartConfigs: Record<ChartView, { title: string; description: string; badge: string; trend: string }> = {
    topProductos: {
        title: "Top Productos",
        description: "Ranking de artículos más comprados",
        badge: "↑ En crecimiento",
        trend: "Pidiendo más items vs. período anterior",
    },
    cantidad: {
        title: "Cantidad",
        description: "Curva de bultos/unidades totales",
        badge: "↑ 23% vs mes anterior",
        trend: "2.800 unidades en diciembre",
    },
    frecuencia: {
        title: "Frecuencia",
        description: "Evolución de días entre pedidos",
        badge: "↓ 33% de separación",
        trend: "Promedio: 8.5 días",
    },
};

// ============================================================
// CHARTS
// ============================================================
function TabCharts({
    active,
    onClick
}: {
    active?: "charts" | "cronologia" | "acuerdos" | "pedidos" | null;
    onClick: (tab: "charts" | "cronologia" | "acuerdos" | "pedidos" | null) => void;
}) {
    const [selectedView, setSelectedView] = useState<ChartView>("topProductos");
    const [chartType, setChartType] = useState<"area" | "bar" | "line">("line");

    const currentData = mockData[selectedView];
    const colors = chartColors[selectedView];
    const config = chartConfigs[selectedView];

    const handleViewChange = (view: ChartView) => {
        setSelectedView(view);
        // Cambiar tipo de gráfico según la vista
        if (view === "topProductos") {
            setChartType("line");
        } else if (view === "cantidad") {
            setChartType("area");
        } else if (view === "frecuencia") {
            setChartType("line");
        }
    };

    const handleClick = () =>
        active === "charts" ?
            onClick("charts")
            : onClick(null);

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
                            <Badge
                                variant="secondary"
                                className={cn(
                                    "p-3 text-medium flex items-center gap-2 cursor-pointer transition-all",
                                    selectedView === "topProductos"
                                        ? "bg-gray-800 dark:bg-zinc-600 text-white dark:text-white"
                                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleViewChange("topProductos");
                                }}
                            >
                                Top Productos
                            </Badge>
                            <Badge
                                variant="secondary"
                                className={cn(
                                    "p-3 text-medium flex items-center gap-2 cursor-pointer transition-all",
                                    selectedView === "cantidad"
                                        ? "bg-gray-800 dark:bg-zinc-600 text-white dark:text-white"
                                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleViewChange("cantidad");
                                }}
                            >
                                Cantidad
                            </Badge>
                            <Badge
                                variant="secondary"
                                className={cn(
                                    "p-3 text-medium flex items-center gap-2 cursor-pointer transition-all",
                                    selectedView === "frecuencia"
                                        ? "bg-gray-800 dark:bg-zinc-600 text-white dark:text-white"
                                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleViewChange("frecuencia");
                                }}
                            >
                                Frecuencia
                            </Badge>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary" className="p-2 text-medium flex items-center gap-2 text-emerald-500 bg-emerald-50 dark:bg-emerald-900 dark:text-emerald-400">
                            {config.badge}
                        </Badge>
                        <Badge variant="ghost">{config.trend}</Badge>
                    </div>
                </div>

                <ChartContainer config={{
                    value: {
                        label: "Valor",
                        color: colors.primary,
                    }
                }} className="flex-1 w-full min-h-0">
                    {chartType === "bar" && (
                        <BarChart data={currentData} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
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
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => {
                                    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
                                    return value.toString();
                                }}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent labelFormatter={(value) => value} indicator="dot" />}
                            />
                            <Bar
                                dataKey="value"
                                fill={colors.primary}
                                radius={[4, 4, 0, 0]}
                            />
                        </BarChart>
                    )}

                    {chartType === "area" && (
                        <AreaChart data={currentData} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                            <defs>
                                <linearGradient id={colors.gradient} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={colors.primary} stopOpacity={0.8} />
                                    <stop offset="95%" stopColor={colors.primary} stopOpacity={0.1} />
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
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => {
                                    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
                                    return value.toString();
                                }}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent labelFormatter={(value) => value} indicator="dot" />}
                            />
                            <Area
                                dataKey="value"
                                type="natural"
                                fill={`url(#${colors.gradient})`}
                                stroke={colors.primary}
                            />
                        </AreaChart>
                    )}

                    {chartType === "line" && (
                        <LineChart data={currentData} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
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
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => {
                                    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
                                    return value.toString();
                                }}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent labelFormatter={(value) => value} indicator="dot" />}
                            />
                            <Line
                                dataKey="value"
                                type="monotone"
                                stroke={colors.primary}
                                strokeWidth={2}
                                dot={{ fill: colors.primary }}
                            />
                        </LineChart>
                    )}
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

interface TimelineEvent {
    id: string;
    time: string;
    category: "Stock" | "Logistica" | "Anomalia";
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const timelineEvents: TimelineEvent[] = [
    {
        id: "1",
        time: "Hace 2 horas",
        category: "Stock",
        title: "Ajuste de Pedido",
        description: "Confirmó en el chat que para el pedido de hoy no se incluya la variedad de Quinoa Sin Sal.",
        icon: <Box className="h-4 w-4" />,
        color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
        id: "2",
        time: "Hace 5 horas",
        category: "Logistica",
        title: "Cambio de Dirección",
        description: "Indicó que esta semana la descarga debe realizarse en el depósito secundario de la vuelta debido a obras en el ingreso principal.",
        icon: <Truck className="h-4 w-4" />,
        color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
        id: "3",
        time: "Hace 1 día",
        category: "Stock",
        title: "Sustitución de Producto",
        description: "Rechazó el reemplazo automático de marca en el chat y exigió esperar a que entre mercadería el jueves.",
        icon: <Box className="h-4 w-4" />,
        color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
        id: "4",
        time: "Hace 2 días",
        category: "Logistica",
        title: "Excepción de Entrega",
        description: "No habrá personal disponible para recibir al camión durante el turno tarde.",
        icon: <Truck className="h-4 w-4" />,
        color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
        id: "5",
        time: "Hace 3 días",
        category: "Stock",
        title: "Error de Carga",
        description: "Aclaró que se solicitaron 100 unidades por error en el bot y que la cantidad real requerida es de 10 unidades.",
        icon: <Box className="h-4 w-4" />,
        color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
        id: "6",
        time: "Hace 4 días",
        category: "Logistica",
        title: "Restricción de Vehículo",
        description: "Advirtió que solo pueden ingresar camiones de tamaño chico o mediano debido a la estrechez de la calle de acceso.",
        icon: <Truck className="h-4 w-4" />,
        color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
        id: "7",
        time: "Hace 12 días",
        category: "Anomalia",
        title: "Cierre Temporal",
        description: "Avisó que el local comercial permanecerá cerrado por vacaciones del personal desde el 15 al 22 de julio.",
        icon: <AlertCircle className="h-4 w-4" />,
        color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    },
    {
        id: "8",
        time: "Hace 14 días",
        category: "Anomalia",
        title: "Promesa de Pago",
        description: "Solicitó reprogramar el vencimiento de la factura pendiente y se comprometió a realizar la transferencia el lunes a primera hora.",
        icon: <AlertCircle className="h-4 w-4" />,
        color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    },
];

// Filtros para cronología
type TimelineFilter = "todas" | "Stock" | "Logistica" | "Anomalia";

function TabCronologia({
    active,
    onClick
}: {
    active?: "charts" | "cronologia" | "acuerdos" | "pedidos" | null;
    onClick: (tab: "charts" | "cronologia" | "acuerdos" | "pedidos" | null) => void;
}) {
    const [filter, setFilter] = useState<TimelineFilter>("todas");

    const filteredEvents = timelineEvents.filter(event => {
        if (filter === "todas") return true;
        return event.category === filter;
    });

    const handleClick = () =>
        active === "cronologia" ?
            onClick("cronologia")
            : onClick(null);

    if (active === "cronologia") {
        return (
            <Card className="py-6 px-0 border-emerald-300 flex flex-col flex-1" onClick={() => handleClick()}>
                <CardContent className="flex flex-col gap-4 flex-1 min-h-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Clock className="text-emerald-500 h-5 w-5" />
                            <span className="text-md font-semibold">Cronología</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge
                                variant="secondary"
                                className={cn(
                                    "cursor-pointer transition-all",
                                    filter === "todas"
                                        ? "bg-emerald-800 dark:bg-emerald-600 text-white dark:text-white"
                                        : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setFilter("todas");
                                }}
                            >
                                Todas
                            </Badge>
                            <Badge
                                variant="secondary"
                                className={cn(
                                    "cursor-pointer transition-all",
                                    filter === "Stock"
                                        ? "bg-emerald-600 text-white"
                                        : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setFilter("Stock");
                                }}
                            >
                                Stock
                            </Badge>
                            <Badge
                                variant="secondary"
                                className={cn(
                                    "cursor-pointer transition-all",
                                    filter === "Logistica"
                                        ? "bg-emerald-600 text-white"
                                        : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setFilter("Logistica");
                                }}
                            >
                                Logística
                            </Badge>
                            <Badge
                                variant="secondary"
                                className={cn(
                                    "cursor-pointer transition-all",
                                    filter === "Anomalia"
                                        ? "bg-emerald-600 text-white"
                                        : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                )}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setFilter("Anomalia");
                                }}
                            >
                                Anomalía
                            </Badge>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto max-h-[300px] space-y-3 py-4 pr-2">
                        {filteredEvents.map((event) => (
                            <div key={event.id} className="grid grid-cols-12 gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                <div className="col-span-2 gap-3 flex items-center justify-start pl-4">
                                    <Clock className="h-4 w-4" />
                                    <span className="text-xs flex-1 text-muted-foreground whitespace-nowrap">
                                        {event.time}
                                    </span>
                                </div>
                                <div className="col-span-2 flex items-center justify-start">
                                    <Badge variant="secondary" className={cn(
                                        "p-2 text-medium flex items-center gap-2",
                                        event.color
                                    )}>
                                        {event.category}
                                    </Badge>
                                </div>
                                <div className="col-span-8">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold">{event.title}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="py-5 border-emerald-300" onClick={() => handleClick()}>
            <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                <Clock className="text-emerald-500 h-5 w-5" />
                <span className="text-md font-semibold">Cronología</span>
            </CardContent>
        </Card>
    );
}

// ============================================================
// ACUERDOS
// ============================================================
interface Acuerdo {
    id: string;
    date: string;
    title: string;
    description: string;
    status: "activo" | "pendiente" | "vencido";
    category: "Financiero" | "Comercial" | "Operativo";
}

const acuerdosMock: Acuerdo[] = [
    {
        id: "1",
        date: "15/07/2026",
        title: "Acuerdo de Pago",
        description: "Se estableció un plan de pago en 3 cuotas para la factura pendiente N° 12345.",
        status: "activo",
        category: "Financiero",
    },
    {
        id: "2",
        date: "10/07/2026",
        title: "Descuento por Volumen",
        description: "Se otorgó un 10% de descuento en pedidos superiores a $500.000.",
        status: "activo",
        category: "Comercial",
    },
    {
        id: "3",
        date: "05/07/2026",
        title: "Renovación de Contrato",
        description: "Se renovó el contrato de distribución por 6 meses con condiciones preferenciales.",
        status: "pendiente",
        category: "Comercial",
    },
    {
        id: "4",
        date: "28/06/2026",
        title: "Acuerdo de Logística",
        description: "Se acordó que los pedidos se entregarán en el depósito secundario los días martes y jueves.",
        status: "vencido",
        category: "Operativo",
    },
];

type AcuerdoFilter = "todas" | "Financiero" | "Comercial" | "Operativo";

function TabAcuerdos({
    active,
    onClick
}: {
    active?: "charts" | "cronologia" | "acuerdos" | "pedidos" | null;
    onClick: (tab: "charts" | "cronologia" | "acuerdos" | "pedidos" | null) => void;
}) {
    const [filter, setFilter] = useState<AcuerdoFilter>("todas");

    const filteredAcuerdos = acuerdosMock.filter(acuerdo => {
        if (filter === "todas") return true;
        return acuerdo.category === filter;
    });

    const handleClick = () =>
        active === "acuerdos" ?
            onClick("acuerdos")
            : onClick(null);

    if (active === "acuerdos") {
        return (
            <Card className="py-6 px-0 border-emerald-300 flex flex-col flex-1" onClick={() => handleClick()}>
                <CardContent className="flex flex-col gap-4 flex-1 min-h-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Handshake className="text-emerald-500 h-5 w-5" />
                            <span className="text-md font-semibold">Acuerdos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Filtros */}
                            <div className="flex items-center gap-1">
                                <Badge
                                    variant="secondary"
                                    className={cn(
                                        "cursor-pointer transition-all",
                                        filter === "todas"
                                            ? "bg-emerald-800 dark:bg-emerald-600 text-white dark:text-white"
                                            : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFilter("todas");
                                    }}
                                >
                                    Todas
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className={cn(
                                        "cursor-pointer transition-all",
                                        filter === "Financiero"
                                            ? "bg-emerald-600 text-white"
                                            : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFilter("Financiero");
                                    }}
                                >
                                    Financiero
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className={cn(
                                        "cursor-pointer transition-all",
                                        filter === "Comercial"
                                            ? "bg-emerald-600 text-white"
                                            : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFilter("Comercial");
                                    }}
                                >
                                    Comercial
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className={cn(
                                        "cursor-pointer transition-all",
                                        filter === "Operativo"
                                            ? "bg-emerald-600 text-white"
                                            : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFilter("Operativo");
                                    }}
                                >
                                    Operativo
                                </Badge>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto max-h-[300px] space-y-3 py-4 pr-2">
                        {filteredAcuerdos.map((acuerdo) => (
                            <div key={acuerdo.id} className="grid grid-cols-10 gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                                <div className="col-span-1 flex items-center justify-start pl-2">
                                    <Badge variant="ghost" className={"p-2 text-medium flex items-center gap-2 bg-gray-100 text-gray-700 dark:bg-zinc-600 dark:text-gray-400"}>
                                        {acuerdo.category}
                                    </Badge>
                                </div>
                                <div className="col-span-7">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold">{acuerdo.title}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{acuerdo.description}</p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="text-xs text-muted-foreground">{acuerdo.date}</span>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center justify-end gap-4 pr-2">
                                    <Button
                                        variant="ghost"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log("Editar:", acuerdo.id);
                                        }}
                                        className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <Pencil className="h-3.5 w-3.5 text-gray-600 dark:text-gray-400" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log("Eliminar:", acuerdo.id);
                                        }}
                                        className="p-3 rounded-md hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                                    >
                                        <Trash2 className="h-3.5 w-3.5 text-red-500" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="py-5 border-emerald-300" onClick={() => handleClick()}>
            <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                <Handshake className="text-emerald-500 h-5 w-5" />
                <span className="text-md font-semibold">Acuerdos</span>
            </CardContent>
        </Card>
    );
}

// ============================================================
// PEDIDOS
// ============================================================
interface Pedido {
    id: string;
    date: string;
    total: string;
    items: number;
    status: "completado" | "en_proceso" | "cancelado";
}

const pedidosMock: Pedido[] = [
    { id: "ORD-000", date: "Hoy", total: "$1.193.994", items: 12, status: "en_proceso" },
    { id: "ORD-001", date: "09 de Jul", total: "$1.900.194", items: 15, status: "completado" },
    { id: "ORD-002", date: "02 de Jul", total: "$1.300.000", items: 10, status: "completado" },
    { id: "ORD-003", date: "01 de Jul", total: "$700.00", items: 3, status: "cancelado" },
];

type PedidosFilter = "todas" | "en_proceso" | "completado" | "cancelado";

function TabPedidos({
    active,
    onClick
}: {
    active?: "charts" | "cronologia" | "acuerdos" | "pedidos" | null;
    onClick: (tab: "charts" | "cronologia" | "acuerdos" | "pedidos" | null) => void;
}) {
    const [filter, setFilter] = useState<PedidosFilter>("todas");

    const filteredPedidos = pedidosMock.filter(pedido => {
        if (filter === "todas") return true;
        return pedido.status === filter;
    });

    const handleClick = () =>
        active === "pedidos" ?
            onClick(null)
            : onClick("pedidos");

    const getStatusBadge = (status: Pedido["status"]) => {
        switch (status) {
            case "completado":
                return <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Confirmado</Badge>;
            case "en_proceso":
                return <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">Pendiente</Badge>;
            case "cancelado":
                return <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">Cancelado</Badge>;
        }
    };

    if (active === "pedidos") {
        return (
            <Card className="py-6 px-0 border-emerald-300 flex flex-col flex-1" onClick={() => handleClick()}>
                <CardContent className="flex flex-col gap-4 flex-1 min-h-0">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <ShoppingCart className="text-emerald-500 h-5 w-5" />
                            <span className="text-md font-semibold">Pedidos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Filtros */}
                            <div className="flex items-center gap-1">
                                <Badge
                                    variant="secondary"
                                    className={cn(
                                        "cursor-pointer transition-all",
                                        filter === "todas"
                                            ? "bg-emerald-800 dark:bg-emerald-600 text-white dark:text-white"
                                            : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFilter("todas");
                                    }}
                                >
                                    Todas
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className={cn(
                                        "cursor-pointer transition-all",
                                        filter === "en_proceso"
                                            ? "bg-emerald-600 text-white"
                                            : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFilter("en_proceso");
                                    }}
                                >
                                    En Proceso
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className={cn(
                                        "cursor-pointer transition-all",
                                        filter === "completado"
                                            ? "bg-emerald-600 text-white"
                                            : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFilter("completado");
                                    }}
                                >
                                    Completado
                                </Badge>
                                <Badge
                                    variant="secondary"
                                    className={cn(
                                        "cursor-pointer transition-all",
                                        filter === "cancelado"
                                            ? "bg-emerald-600 text-white"
                                            : "hover:bg-emerald-200 dark:hover:bg-emerald-700"
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFilter("cancelado");
                                    }}
                                >
                                    Cancelado
                                </Badge>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto max-h-[350px] px-4">
                        <table className="w-full px-4">
                            <thead className="border-b border-gray-200 dark:border-gray-700">
                                <tr className="text-xs text-muted-foreground">
                                    <th className="text-left font-medium py-2">Código</th>
                                    <th className="text-left font-medium py-2">Fecha</th>
                                    <th className="text-left font-medium py-2">Monto</th>
                                    <th className="text-left font-medium py-2">Estado</th>
                                    <th className="text-right font-medium py-2 pr-4">Ver detalle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pedidosMock.map((pedido) => (
                                    <tr
                                        key={pedido.id}
                                        className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                                    >
                                        <td className="py-3 text-sm font-medium">{pedido.id}</td>
                                        <td className="py-3 text-sm text-muted-foreground">{pedido.date}</td>
                                        <td className="py-3 text-sm font-semibold">{pedido.total}</td>
                                        <td className="py-3">{getStatusBadge(pedido.status)}</td>
                                        <td className="py-3 text-right pr-4">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    console.log("Ver detalle:", pedido.id);
                                                }}
                                                className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400"
                                            >
                                                <Eye className="h-4 w-4" />
                                                <span className="hidden sm:inline">Ver</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Link "Ver todos los pedidos de este cliente" */}
                        <div className="mt-4 text-start">
                            <Button
                                variant="link"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("Ver todos los pedidos");
                                }}
                                className="p-0 text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                            >
                                Ver todos los pedidos de este cliente
                                <Link className="w-3 h-3" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="py-5 border-emerald-300" onClick={() => handleClick()}>
            <CardContent className="flex gap-2 items-center flex-1 min-h-0">
                <ShoppingCart className="text-emerald-500 h-5 w-5" />
                <span className="text-md font-semibold">Pedidos</span>
            </CardContent>
        </Card>
    );
}

// ============================================================
// COLLAPSIBLE CLIENT DETAIL
// ============================================================
const CollapsibleClientDetail = ({ client }: { client: DetailClient }) => {
    const router = useRouter();
    const [range, setRange] = useState<DashboardRange>(() => getDashboardRange("month"));
    const [activeTab, setActiveTab] = useState<"charts" | "cronologia" | "acuerdos" | "pedidos">("charts");

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
            icon: <CalendarIcon className="h-5 w-5" />,
            subtitle: "Último: Hace 8 días",
            value: "c/9d"
        },
    ];

    const handleRangeChange = (nextRange: { start: Date; end: Date; period: RangePeriod }) => {
        setRange(nextRange);
    };

    return (
        <Card className="p-4 gap-3 flex flex-col !border-transparent bg-transparent ring-0" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <span className="font-medium flex items-center gap-4 text-sm">
                        {/* volver atras */}
                        <Button variant="ghost" size="icon" className="p-1" onClick={() => router.push("/clientes")}>
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        {client.name}
                        <Badge variant="default" className="bg-gray-800 dark:bg-gray-700 text-white dark:text-white">Activo</Badge>
                        <span className="text-xs font-light">Distribuidora Premium - José León Suarez </span>
                        <span className="text-xs flex items-center font-light">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span className="text-xs font-light">29 ago</span>
                        </span>
                    </span>

                    <div className="flex ml-auto gap-2">
                        <Filters
                            value={range.period}
                            onRangeChange={handleRangeChange}
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

                <TabCronologia active={activeTab} onClick={() => setActiveTab("cronologia")} />

                <TabAcuerdos active={activeTab} onClick={() => setActiveTab("acuerdos")} />

                <TabPedidos active={activeTab} onClick={() => setActiveTab("pedidos")} />
            </div>
        </Card>
    );
};

// ============================================================
// COMPONENTE PRINCIPAL - EXPORTADO POR DEFECTO
// ============================================================
export default function ClientWrapper({ client }: ClientWrapperProps) {
    return <CollapsibleClientDetail client={client} />;
}