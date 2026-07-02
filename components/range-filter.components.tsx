"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { getDashboardRange, type DashboardPeriod } from "@/lib/dashboard-data"

export type RangePeriod = DashboardPeriod

interface RangeFilterProps {
    value?: RangePeriod
    onRangeChange?: (range: { start: Date; end: Date; period: RangePeriod }) => void
}

export function RangeFilter({ value, onRangeChange }: RangeFilterProps) {
    const [internalPeriod, setInternalPeriod] = useState<RangePeriod>("month")
    const [customRange, setCustomRange] = useState<{
        start: Date | undefined
        end: Date | undefined
    }>({
        start: undefined,
        end: undefined,
    })
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    const selectedPeriod = value ?? internalPeriod
    const selectedRange =
        selectedPeriod === "range"
            ? customRange
            : getDashboardRange(selectedPeriod)

    const periods = [
        { label: "Día", value: "day" as const },
        { label: "Semana", value: "week" as const },
        { label: "Mes", value: "month" as const },
    ]

    const handlePeriodClick = (period: RangePeriod) => {
        const range = getDashboardRange(period)

        setInternalPeriod(period)
        onRangeChange?.(range)
    }

    const handleDateRangeSelect = (range: { from: Date; to: Date }) => {
        const nextRange = { start: range.from, end: range.to, period: "range" as const }

        setCustomRange({ start: range.from, end: range.to })
        setInternalPeriod("range")
        onRangeChange?.(nextRange)
        setIsCalendarOpen(false)
    }

    const isActive = (period: RangePeriod) => selectedPeriod === period

    return (
        <div className="flex items-center gap-2 px-2 py-1 rounded-2xl w-full justify-between md:w-fit md:ml-auto bg-stone-100 dark:bg-stone-800">
            {periods.map((period) => (
                <Button
                    key={period.value}
                    variant="ghost"
                    size="sm"
                    className={cn(
                        "h-8 px-4 py-1 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-700",
                        isActive(period.value)
                            ? "bg-gray-300 rounded-2xl dark:hover:bg-stone-700 dark:bg-stone-900"
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
                            "h-8 px-4 py-1 rounded-xl hover:bg-stone-200 dark:hover:bg-stone-700",
                            isActive("range")
                                ? "bg-gray-300 rounded-2xl dark:hover:bg-stone-700 dark:bg-stone-900"
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
                                handleDateRangeSelect(range as { from: Date; to: Date })
                            }
                        }}
                        numberOfMonths={2}
                        locale={es}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}