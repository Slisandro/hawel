"use client"

import { Clock, Package, ShoppingBag, TrendingUp, UserRound, Users } from "lucide-react"
import KPICard from "./kpi-card.components"
import { buildKpiCards, type DashboardRange } from "@/lib/dashboard-data"

const iconByKey = {
    revenue: <TrendingUp className="h-4 w-4" />,
    orders: <ShoppingBag className="h-4 w-4" />,
    customers: <Users className="h-4 w-4" />,
    frequency: <Clock className="h-4 w-4" />,
    topCustomer: <UserRound className="h-4 w-4" />,
    topProduct: <Package className="h-4 w-4" />,
} as const

interface KPIProps {
    title: string
    value: string
    subtitle: string
    icon?: React.ReactNode
}

export function KPICards({ count = 3, range }: { count?: number; range: DashboardRange }) {
    const kpis = buildKpiCards(range).map((card): KPIProps => ({
        title: card.title,
        value: card.value,
        subtitle: card.subtitle,
        icon: iconByKey[card.iconKey],
    }))

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kpis.slice(0, count).map((kpi, index) => (
                <KPICard key={index} {...(kpi as KPIProps)} />
            ))}
        </div>
    )
}