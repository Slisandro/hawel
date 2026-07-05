"use client";

import { useEffect, useState } from "react"

import { BestCustomersTable } from "@/components/best-customers-table.components";
import { BestProductsTable } from "@/components/best-product-table.components";
import { ChartAreaInteractive } from "@/components/chart.components";
import { KPICards } from "@/components/kpi-cards.components"
import { AppNavbar } from "@/components/navbar.components"
import { RangeFilter } from "@/components/range-filter.components"
import { getDashboardRange, type DashboardRange, type DashboardPeriod } from "@/lib/dashboard-data"

export default function Page() {
  const [range, setRange] = useState<DashboardRange>(() => getDashboardRange("month"))
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true)
  }, [])

  // Si no está en el cliente, muestra un loader o skeleton
  if (!isClient) {
    return <div className="flex-1 flex items-center justify-center">Cargando...</div>
  }

  const handleRangeChange = (nextRange: { start: Date; end: Date; period: DashboardPeriod }) => {
    setRange(nextRange)
  }

  return (
    <div className="min-h-svh flex flex-col gap-2 h-[100vh]">
      <AppNavbar />
      <main className="py-1 px-3 md:px-4 flex flex-col gap-2 flex-1 min-h-0">
        <RangeFilter value={range.period} onRangeChange={handleRangeChange} />
        <KPICards count={6} startIndex={0} range={range} />
        <div className="flex-1 flex min-h-0">
          <ChartAreaInteractive range={range} />
        </div>
        <KPICards count={3} startIndex={6} range={range} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <BestCustomersTable range={range} />
          <BestProductsTable range={range} />
        </div>
      </main>
    </div>
  )
}