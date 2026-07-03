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
import { buildRankedProducts, type DashboardRange } from "@/lib/dashboard-data"

export function BestProductsTable({ range }: { range: DashboardRange }) {
    const products = buildRankedProducts(range, 2)

    return (
        <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow px-3 py-1">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead colSpan={2}>Productos más vendidos en el período</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.label}>
                            <TableCell className="font-medium py-2">{product.label}</TableCell>
                            <TableCell className="text-right py-2">
                                {new Intl.NumberFormat("es-AR", {
                                    style: "currency",
                                    currency: "ARS",
                                    maximumFractionDigits: 0,
                                }).format(product.total)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}
