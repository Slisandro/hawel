"use client"

import { AlertTriangle, Boxes, Clock, DollarSign, ShoppingBag, TrendingUp, Users, Wallet } from "lucide-react"
import KPICard from "./kpi-card.components"
import { buildKpiCards, type DashboardRange } from "@/lib/dashboard-data"

const iconByKey = {
    orders: <ShoppingBag className="h-4 w-4" />,
    sales: <Wallet className="h-4 w-4" />,
    variation: <TrendingUp className="h-4 w-4" />,
    pending: <Clock className="h-4 w-4" />,
    customers: <Users className="h-4 w-4" />,
    ticket: <DollarSign className="h-4 w-4" />,
    debt: <Wallet className="h-4 w-4" />,
    stock: <Boxes className="h-4 w-4" />,
    risk: <AlertTriangle className="h-4 w-4" />,
} as const

interface KPIProps {
    title: string
    value: string
    subtitle: string
    icon?: React.ReactNode
    trend?: {
        type: "up" | "down"
    }
}

export function KPICards({ count = 3, startIndex = 0, range }: { count?: number; startIndex?: number; range: DashboardRange }) {
    const kpis = buildKpiCards(range).map((card): KPIProps => ({
        title: card.title,
        value: card.value,
        subtitle: card.subtitle,
        icon: iconByKey[card.iconKey],
        trend: card.trend,
    }))

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {kpis.slice(startIndex, startIndex + count).map((kpi, index) => (
                <KPICard key={index} {...(kpi as KPIProps)} />
            ))}
        </div>
    )
}