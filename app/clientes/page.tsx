"use client"
import { useState } from "react"
import {
    Card
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search} from "lucide-react"
import { AppNavbar } from "@/components/navbar.components"
import { cn } from "@/lib/utils"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { useRouter } from "next/navigation"

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

export default function ClientsPanel() {
    const router = useRouter();
    const [clients] = useState<DetailClient[]>(mockClients)
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
                <div className="border border-gray-200 dark:border-zinc-800 rounded-md p-4 flex flex-col gap-2">
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
                            <div className="col-span-2">
                                <span className="text-sm font-bold text-muted-foreground">c/X d</span>
                            </div>
                            <div className="col-span-2">
                                <span className="text-sm font-bold text-muted-foreground">Estado</span>
                            </div>
                            <div className="col-span-2 text-end">
                                <span className="text-sm font-bold text-muted-foreground">Última Compra</span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-auto gap-2 flex flex-col px-1 pt-1">
                            {/* LISTA DE CLIENTES */}
                            {filteredClients.map((client) => (
                                <Card
                                    key={client.id}
                                    className="p-3 w-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                    onClick={() => router.push(`/clientes/${client.id}`)}
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
                                            <div className="col-span-2">
                                                <p className="text-sm font-semibold">{client.cxd}</p>
                                            </div>
                                            <div className="col-span-2">
                                                {getStatusBadge(client.status)}
                                            </div>
                                            <div className="col-span-2 flex items-center justify-end">
                                                <p className="text-sm font-semibold">
                                                    {client.lastPurchaseDays !== undefined
                                                        ? `${client.lastPurchaseDays} días`
                                                        : "N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </main >
        </div >
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
