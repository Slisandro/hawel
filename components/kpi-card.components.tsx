"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"

interface KPIProps {
    title: string
    value: string
    subtitle?: string
    icon?: React.ReactNode
    trend?: {
        value: number
        label: string
        type: "up" | "down"
    }
}

export default function KPICard({ title, value, subtitle, icon, trend }: KPIProps) {
    return (
        <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {title}
                </CardTitle>
                {icon && <div className="h-auto w-auto text-muted-foreground border border-muted-foreground/20 p-2 bg-muted-foreground/5 rounded-md">{icon}</div>}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                {subtitle && (
                    <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
                )}
                {trend && (
                    <div className={`flex items-center gap-1 mt-2 text-xs ${trend.type === "up" ? "text-green-600" : "text-red-600"
                        }`}>
                        {trend.type === "up" ? (
                            <ArrowUp className="h-3 w-3" />
                        ) : (
                            <ArrowDown className="h-3 w-3" />
                        )}
                        <span>{trend.value}%</span>
                        <span className="text-muted-foreground">{trend.label}</span>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}