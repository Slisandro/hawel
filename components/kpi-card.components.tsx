"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Triangle } from "lucide-react"

interface KPIProps {
    title: string
    value: string
    subtitle?: string
    icon?: React.ReactNode
    trend?: {
        type: "up" | "down"
    }
}

export default function KPICard({ title, value, subtitle, icon, trend }: KPIProps) {
    const isTrendCard = Boolean(trend)

    if (isTrendCard) {
        return (
            <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow py-2 px-2 gap-0 flex items-center justify-center">
                <CardContent className="pt-1 flex items-center justify-center gap-2">
                    <Triangle
                        className={cn(
                            "text-base font-semibold leading-tight text-center flex items-center gap-1 justify-center",
                            trend?.type === "up" && "text-green-700 fill-green-700 dark:text-green-400 dark:fill-green-400",
                            trend?.type === "down" && "text-red-700 fill-red-700 dark:text-red-400 dark:fill-red-400 rotate-180"
                        )} />
                    <div
                        className="text-xl font-bold leading-tight text-center flex items-center gap-1 justify-center"
                    >
                        {value} {subtitle}
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow py-2 px-2 gap-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {title}
                </CardTitle>
                {icon && <div className="h-auto w-auto text-muted-foreground border border-muted-foreground/20 p-1 bg-muted-foreground/5 rounded-md">{icon}</div>}
            </CardHeader>
            <CardContent className="pt-1">
                <div
                    className={cn(
                        "text-xl font-bold leading-tight",
                        trend?.type === "up" && "text-green-600",
                        trend?.type === "down" && "text-red-600"
                    )}
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