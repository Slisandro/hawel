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
    const customers = buildRankedCustomers(range).slice(0, 3)

    return (
        <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow px-4 flex items-center justify-center">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead colSpan={3}>Top 3 clientes del período</TableHead>
                    </TableRow>
                </TableHeader>
                <TableHeader>
                    <TableRow>
                        <TableHead>Cliente</TableHead>
                        <TableHead className="text-right">Pedidos</TableHead>
                        <TableHead className="text-right">Facturado</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {customers.map((customer) => (
                        <TableRow key={customer.label}>
                            <TableCell className="font-medium">{customer.label}</TableCell>
                            <TableCell className="text-right">{customer.count}</TableCell>
                            <TableCell className="text-right">
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
