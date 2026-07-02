"use client";

"use client";

import { useState } from "react"

import { BestCustomersTable } from "@/components/best-customers-table.components";
import { BestProductsTable } from "@/components/best-product-table.components";
import { ChartAreaInteractive } from "@/components/chart.components";
import { KPICards } from "@/components/kpi-cards.components"
import { AppNavbar } from "@/components/navbar.components"
import { RangeFilter } from "@/components/range-filter.components"
import { getDashboardRange, type DashboardRange, type DashboardPeriod } from "@/lib/dashboard-data"

export default function Page() {
  const [range, setRange] = useState<DashboardRange>(() => getDashboardRange("month"))

  const handleRangeChange = (nextRange: { start: Date; end: Date; period: DashboardPeriod }) => {
    setRange(nextRange)
  }

  return (
    <div className="min-h-svh">
      <AppNavbar />
      <main className="p-6 flex flex-col gap-4">
        <RangeFilter value={range.period} onRangeChange={handleRangeChange} />
        <KPICards count={6} range={range} />
        <ChartAreaInteractive range={range} />
        <KPICards count={3} range={range} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BestCustomersTable range={range} />
          <BestProductsTable range={range} />
        </div>
      </main>
    </div>
  )
}