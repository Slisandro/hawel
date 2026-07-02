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
    const products = buildRankedProducts(range).slice(0, 3)

    return (
        <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow px-4 flex items-center justify-center">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead colSpan={3}>Top 3 productos del período</TableHead>
                    </TableRow>
                </TableHeader>
                <TableHeader>
                    <TableRow>
                        <TableHead>Producto</TableHead>
                        <TableHead className="text-right">Ventas</TableHead>
                        <TableHead className="text-right">Facturado</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.label}>
                            <TableCell className="font-medium">{product.label}</TableCell>
                            <TableCell className="text-right">{product.count}</TableCell>
                            <TableCell className="text-right">
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
