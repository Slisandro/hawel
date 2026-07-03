"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card } from "./ui/card"
import { buildRankedCustomers, type DashboardRange } from "@/lib/dashboard-data"

export function BestCustomersTable({ range }: { range: DashboardRange }) {
    const customers = buildRankedCustomers(range, 2)

    return (
        <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow px-3 py-1">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead colSpan={2}>Top 2 vendedores del período</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {customers.map((customer) => (
                        <TableRow key={customer.label}>
                            <TableCell className="font-medium py-2">{customer.label}</TableCell>
                            <TableCell className="text-right py-2">
                                {new Intl.NumberFormat("es-AR", {
                                    style: "currency",
                                    currency: "ARS",
                                    maximumFractionDigits: 0,
                                }).format(customer.total)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}
