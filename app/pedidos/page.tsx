"use client"
import { useState } from "react"
import {
    Card
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Archive, Building2, Calendar, ChevronDown, ChevronUp, CircleCheckBig, Clock, CreditCard, Dot, Download, FileText, FlaskConical, History, MessageCircle, Pencil, Percent, Phone, Plus, Search, ShoppingBag, Trash2, Truck } from "lucide-react"
import { AppNavbar } from "@/components/navbar.components"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

interface DetailClient {
    products: Array<{ name: string; quantity: number; price: number }>
    discount?: number
}

interface Order {
    id: string,
    client: string,
    order: number,
    status: "pending" | "confirmed",
    phone: string,
    lastUpdate: string,
    location: string,
    amount: number,
    date: string,
    dateEntrega?: string,
    details?: DetailClient
}

const mockDetails: DetailClient = {
    products: [
        { name: "Producto 1", quantity: 2, price: 100 },
        { name: "Producto 2", quantity: 1, price: 200 },
        { name: "Producto 3", quantity: 3, price: 150 },
    ]
}

const mockOrders: Order[] = [
    {
        id: "ORD-000",
        client: "Rincón Maceda - Martes",
        order: 1,
        status: "pending",
        phone: "+54 9 11 1234-5678",
        lastUpdate: "Hace 2 horas",
        location: "Rincón Maceda",
        amount: 1500,
        date: "2024-06-10",
        details: mockDetails
    },
    {
        id: "ORD-001",
        client: "Hadal - Martes",
        order: 1,
        status: "confirmed",
        phone: "+54 9 11 1234-5678",
        lastUpdate: "Hace 3 horas",
        location: "Hadal",
        amount: 3000,
        date: "2024-06-10",
        details: mockDetails
    },
    {
        id: "ORD-002",
        client: "Walter David Distribuidor - Lunes",
        order: 1,
        status: "confirmed",
        phone: "+54 9 11 5876-5432",
        lastUpdate: "Hace 3 horas",
        location: "Walter David Distribuidor - Lunes",
        amount: 2000,
        date: "2024-06-10",
        details: mockDetails
    },
    {
        id: "ORD-003",
        client: "Rojas 12 - Jueves",
        order: 1,
        status: "pending",
        phone: "+54 9 11 5876-5432",
        lastUpdate: "Hace 23 horas",
        location: "Rojas 12",
        amount: 2500,
        date: "2024-06-10",
        details: mockDetails
    },
]

const products = [
    {
        name: "9 DE ORO COOKIES CHIPS BLANCOS 16*120 GR.",
        quantity: 6,
        unitPrice: 8582.77,
        total: 51496.62,
    },
    {
        name: "9 DE ORO COOKIES CHIPS COLORES 16*120 GR.",
        quantity: 6,
        unitPrice: 8582.77,
        total: 51496.62,
    },
    {
        name: "9 DE ORO COOKIES CHIPS 16*120 GR.",
        quantity: 6,
        unitPrice: 8582.77,
        total: 51496.62,
    },
    {
        name: "HARINA PUREZA LEUDANTE REFINADA 10*1 KG.",
        quantity: 15,
        unitPrice: 11394.24,
        total: 170913.60,
    },
    {
        name: "HARINA PUREZA 0000 ULTRA/REFINADA C/VITAMINA D 10*1 KG.",
        quantity: 10,
        unitPrice: 9247.44,
        total: 92474.40,
    },
    {
        name: "PASEO CINCO SEMILLAS 14*300 GR.",
        quantity: 10,
        unitPrice: 17125.31,
        total: 171253.10,
    },
    {
        name: "PASEO CRACKERS 14*300 GR",
        quantity: 10,
        unitPrice: 13793.29,
        total: 137932.90,
    },
    {
        name: "GUAYMALLEN ALFAJOR TRIPLE BLANCO 24 UN.",
        quantity: 5,
        unitPrice: 8156.04,
        total: 40780.20,
    },
]

export default function OrdersPanel() {
    const [orders] = useState<Order[]>(mockOrders)
    const [typeFilter, setTypeFilter] = useState<string>("all");
    const [filteredOrders, setFilteredOrders] = useState<Order[]>(orders);
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const getStatusBadge = (status: Order["status"]) => {
        switch (status) {
            case "pending":
                return (
                    <Badge
                        className={`
                            font-semibold
                            /* Modo claro */
                            bg-[#E8F9F4] 
                            text-[#0B8A6E] 
                            border-[#99E8D2]
                            
                            /* Modo oscuro */
                            dark:bg-[#1A3D35] 
                            dark:text-[#4AD9B0] 
                            dark:border-[#4AD9B0]
                        `}
                    >
                        Pendiente
                    </Badge>
                )
            case "confirmed":
                return (
                    <Badge
                        className={`
                            font-semibold
                            /* Modo claro */
                            bg-[#F2A9A2] 
                            text-[#7A2E2A] 
                            border-[#E8837A]
                            
                            /* Modo oscuro */
                            dark:bg-[#3D1A1A] 
                            dark:text-[#F2A9A2] 
                            dark:border-[#E8837A]
                        `}
                    >
                        Confirmado
                    </Badge>
                )
            default:
                return null
        }
    }

    return (
        <div className="min-h-svh flex flex-col gap-2 h-[100vh]">
            <AppNavbar />
            <main className="py-1 px-3 md:px-4 flex flex-col gap-2 flex-1 min-h-0">
                <div className="flex items-center justify-start gap-2">
                    <Button variant="outline"
                        onClick={() => { setFilteredOrders(orders); setExpandedId(null); setTypeFilter("all"); }}
                        className={
                            cn("text-sm rounded-xl px-3 py-2 gap-2 bg-gray-0", typeFilter === "all" ? "bg-gray-100 border-black" : "")
                        }
                    >
                        <ShoppingBag className="h-6 w-6" />
                        {orders.length} Total
                    </Button>
                    <Button variant="outline"
                        onClick={() => { setFilteredOrders(orders.filter(order => order.status === "pending")); setExpandedId(null); setTypeFilter("pending"); }}
                        className={
                            cn("text-sm rounded-xl px-3 py-2 gap-2 bg-gray-0", typeFilter === "pending" ? "bg-gray-100 border-black" : "")
                        }
                    >
                        <Clock className="h-6 w-6" />
                        {orders.filter(order => order.status === "pending").length} Pendientes
                    </Button>
                    <Button variant="outline"
                        onClick={() => { setFilteredOrders(orders.filter(order => order.status === "confirmed")); setExpandedId(null); setTypeFilter("confirmed"); }}
                        className={
                            cn("text-sm rounded-xl px-3 py-2 gap-2 bg-gray-0", typeFilter === "confirmed" ? "bg-gray-100 border-black" : "")
                        }
                    >
                        <CircleCheckBig className="h-6 w-6" />
                        {orders.filter(order => order.status === "confirmed").length} Confirmadas
                    </Button>
                </div>
                <div className="border rounded-md p-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-4 w-full">
                        <div className="flex flex-col gap-1.5 flex-1">
                            <InputGroup>
                                <InputGroupAddon align="inline-start">
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupInput placeholder="Buscar por código, cliente o producto" />
                            </InputGroup>
                        </div>

                        <div className="flex items-center gap-2">
                            <Switch id="archived" className="h-full" />
                            <Archive className="w-4 h-4 text-muted-foreground" />
                            <Label htmlFor="archived" className="text-sm text-muted-foreground">Archivadas</Label>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-end gap-4 py-2">
                        {/* Entrega */}
                        <div className="h-[40px] flex gap-1.5 flex items-center justify-center border pl-2 rounded-md">
                            <Label htmlFor="day" className="text-sm text-muted-foreground font-medium">Entrega:</Label>
                            <Select defaultValue="all">
                                <SelectTrigger id="day" className="h-9 bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0 flex-1">
                                    <SelectValue placeholder="Todos los días" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all" defaultValue="all">Todos los días</SelectItem>
                                    <SelectItem value="lunes">Lunes</SelectItem>
                                    <SelectItem value="martes">Martes</SelectItem>
                                    <SelectItem value="miercoles">Miércoles</SelectItem>
                                    <SelectItem value="jueves">Jueves</SelectItem>
                                    <SelectItem value="viernes">Viernes</SelectItem>
                                    <SelectItem value="sabado">Sábado</SelectItem>
                                    <SelectItem value="domingo">Domingo</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Estado */}
                        <div className="h-[40px] flex gap-1.5 flex items-center justify-center border pl-2 rounded-md">
                            <Label htmlFor="status" className="text-sm text-muted-foreground">Estado</Label>
                            <Select defaultValue="all">
                                <SelectTrigger id="day" className="h-9 bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0 flex-1">
                                    <SelectValue placeholder="Todos" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todos</SelectItem>
                                    <SelectItem value="pendiente">Pendiente</SelectItem>
                                    <SelectItem value="confirmado">Confirmado</SelectItem>
                                    <SelectItem value="rechazado">Rechazado</SelectItem>
                                    <SelectItem value="entregado">Entregado</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Zona */}
                        <div className="h-[40px]">
                            <Select>
                                <SelectTrigger className="w-[140px] !h-full flex-1">
                                    <SelectValue placeholder="Zona" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="todas">Todas</SelectItem>
                                    <SelectItem value="cat1">Categoría 1</SelectItem>
                                    <SelectItem value="cat2">Categoría 2</SelectItem>
                                    <SelectItem value="cat3">Categoría 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Categoría */}
                        <div className="h-[40px] flex gap-1.5 flex items-center justify-center border pl-2 rounded-md">
                            <Label className="text-sm text-muted-foreground">Categoría</Label>
                            <Select defaultValue="todas">
                                <SelectTrigger id="day" className="flex-1 h-full! bg-transparent border-0 shadow-none focus:ring-0 focus:ring-offset-0 flex-1">
                                    <SelectValue placeholder="Todas" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="todas">Todas</SelectItem>
                                    <SelectItem value="cat1">Categoría 1</SelectItem>
                                    <SelectItem value="cat2">Categoría 2</SelectItem>
                                    <SelectItem value="cat3">Categoría 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Fecha creación */}
                        <div className="h-[40px] flex flex-col gap-1.5 w-auto">
                            <InputGroup className="h-full">
                                <InputGroupAddon align="inline-start">
                                    <Calendar />
                                </InputGroupAddon>
                                <InputGroupInput placeholder="Fecha creación" type="date" />
                            </InputGroup>
                        </div>

                        {/* Origen */}
                        <div className="h-[40px] flex flex-col gap-1.5">
                            <Select>
                                <SelectTrigger className="w-[140px] h-full flex-1">
                                    <SelectValue placeholder="Origen" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="todas">Todas</SelectItem>
                                    <SelectItem value="origen1">Origen 1</SelectItem>
                                    <SelectItem value="origen2">Origen 2</SelectItem>
                                    <SelectItem value="origen3">Origen 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Tipo de Documento */}
                        <div className="h-[40px] flex flex-col">
                            <Select>
                                <SelectTrigger className="h-full flex-1">
                                    <SelectValue placeholder="Tipo de Documento" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="todas">Todas</SelectItem>
                                    <SelectItem value="cat1">Categoría 1</SelectItem>
                                    <SelectItem value="cat2">Categoría 2</SelectItem>
                                    <SelectItem value="cat3">Categoría 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="flex-1 overflow-auto">
                    <div className="pt-3 flex-1 h-full gap-2 flex flex-col overflow-auto">
                        {filteredOrders.map((order) => (
                            <Collapsible
                                key={order.id}
                                open={expandedId === order.id}
                            >
                                <Card
                                    className="shadow-sm transition-shadow p-0 ring-0 border gap-0"
                                    onClick={() =>
                                        setExpandedId(expandedId === order.id ? null : order.id)
                                    }
                                >
                                    <CollapsibleTrigger
                                        asChild
                                        className={
                                            cn("w-full h-full p-2", expandedId === order.id ? "bg-gray-100 dark:bg-gray-800" : "")
                                        }
                                    >
                                        <div className="cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <Checkbox />
                                                <Avatar className={
                                                    cn("w-8 h-8 text-white flex items-center justify-center",
                                                        order.status === "pending" ? "bg-[#4AD9B0]" : "bg-[#F26666]"
                                                    )
                                                }>
                                                    <AvatarFallback className={
                                                        cn("w-8 h-8 text-white flex items-center justify-center",
                                                            order.status === "pending" ? "bg-[#4AD9B0]" : "bg-[#F26666]"
                                                        )
                                                    }>{order.client.charAt(0) + order.client.charAt(1).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 flex-wrap">
                                                        <span className="font-medium text-sm">
                                                            {order.client}
                                                        </span>
                                                        <Badge variant="outline" className="flex items-center gap-1">
                                                            <ShoppingBag className="h-3 w-3" />
                                                            1 pedido
                                                        </Badge>
                                                        {getStatusBadge(order.status)}
                                                    </div>
                                                    <div className="flex items-center gap-1 flex-wrap mt-1">
                                                        <Badge variant="ghost" className="flex items-center gap-1 h-5 px-1">
                                                            <Phone className="h-3 w-3" />
                                                            <span className="text-xs">{order.phone}</span>
                                                        </Badge>
                                                        <Badge variant="ghost" className="flex items-center gap-1 h-5 px-1">
                                                            <Clock className="h-3 w-3" />
                                                            <span className="text-xs">{order.lastUpdate}</span>
                                                        </Badge>
                                                        <Badge variant="ghost" className="flex items-center gap-1 h-5 px-1">
                                                            <Building2 className="h-3 w-3" />
                                                            <span className="text-xs">{order.location}</span>
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <div>
                                                    {
                                                        (() => {
                                                            switch (order.status) {
                                                                case "pending":
                                                                    return (
                                                                        <div className="flex items-center gap-2">
                                                                            <div className="flex flex-col items-end justify-end">
                                                                                <p className="text-md font-bold">$ 332.434,80</p>
                                                                                <p className="text-xs font-semibold text-[#4AD9B0]">Ahorro: -$50.000,00</p>
                                                                                <p className="text-xs font-semibold text-gray-500">Total acumulado</p>
                                                                            </div>

                                                                            <Button variant="ghost" size="lg" className="font-semibold">
                                                                                <Download className="h-4 w-4 mr-1" strokeWidth={2.5} />
                                                                                Exportar
                                                                            </Button>


                                                                            <Button variant="secondary" size="lg" className="font-semibold bg-gray-700 text-white">
                                                                                <CircleCheckBig className="h-4 w-4 mr-1" strokeWidth={2.5} />
                                                                                Confirmar
                                                                            </Button>
                                                                        </div>
                                                                    )
                                                                case "confirmed":
                                                                    return (

                                                                        <div className="flex items-center gap-2">
                                                                            <div className="flex flex-col items-end justify-end">
                                                                                <p className="text-md font-bold">$ 332.434,80</p>
                                                                                {order.details?.discount && (
                                                                                    <p className="text-xs font-semibold text-red-600">
                                                                                        Ahorro: -${order.details.discount.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
                                                                                    </p>
                                                                                )}
                                                                                <p className="text-xs font-semibold text-gray-500">Total acumulado</p>
                                                                            </div>

                                                                            <Button variant="ghost" size="lg" className="font-semibold">
                                                                                <Download className="h-4 w-4 mr-1" strokeWidth={2.5} />
                                                                                Exportar
                                                                            </Button>
                                                                        </div>
                                                                    )
                                                                default:
                                                                    return null
                                                            }
                                                        })()
                                                    }
                                                </div>
                                                <div className="flex items-center gap-2" >
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() =>
                                                            setExpandedId(expandedId === order.id ? null : order.id)
                                                        }
                                                    >
                                                        {expandedId === order.id ? (
                                                            <ChevronUp className="h-4 w-4" />
                                                        ) : (
                                                            <ChevronDown className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent className="p-4 gap-3 flex flex-col" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-4">
                                                <Avatar className={
                                                    cn("w-8 h-8 text-white flex items-center justify-center",
                                                        order.status === "pending" ? "bg-[#4AD9B0]" : "bg-blue-500"
                                                    )
                                                }>
                                                    <AvatarFallback className={
                                                        cn("w-8 h-8 text-white flex items-center justify-center",
                                                            order.status === "pending" ? "bg-[#4AD9B0]" : "bg-blue-500"
                                                        )
                                                    }>{order.client.charAt(0) + order.client.charAt(1).toUpperCase()}</AvatarFallback>
                                                </Avatar>

                                                <span className="font-medium text-sm">
                                                    {order.client}
                                                </span>

                                                <div className="flex ml-auto gap-2">
                                                    <Button variant="outline" size="default" className="font-semibold">
                                                        <MessageCircle className="w-4 h-4" />
                                                        Ir a la conversación
                                                    </Button>
                                                    <Button variant="outline" size="default" className="font-semibold">
                                                        <Plus className="w-4 h-4" />
                                                        Agregar producto
                                                    </Button>
                                                    <Button variant="outline" size="default" className="font-semibold">
                                                        <FileText className="w-4 h-4 text-blue-700" />
                                                    </Button>
                                                    <Button variant="outline" size="default" className="font-semibold">
                                                        <History className="w-4 h-4" />
                                                    </Button>
                                                    <Button variant="outline" size="default" className="font-semibold">
                                                        <FlaskConical className="w-4 h-4 text-orange-500" />
                                                    </Button>
                                                    <Button variant="outline" size="default" className="font-semibold">
                                                        <Archive className="w-4 h-4" />
                                                    </Button>
                                                    <Button variant="outline" size="default" className="font-semibold">
                                                        <Trash2 className="w-4 h-4 text-red-500" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
                                                <div>
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Código</span>
                                                    <p className="text-sm font-bold">{order.id}</p>
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Recibido</span>
                                                    <p className="text-sm font-bold">{order.date}</p>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Entrega</span>
                                                    {
                                                        order.dateEntrega ? (
                                                            <p className="text-sm font-bold">{order.dateEntrega}</p>
                                                        ) : (
                                                            <Button variant="ghost" size="sm" className="font-semibold">
                                                                <Calendar className="h-4 w-4 mr-1" />
                                                                Seleccionar fecha de entrega
                                                            </Button>
                                                        )
                                                    }
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Sucursal</span>
                                                    <p className="text-sm font-bold">{order.location}</p>
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Vendedor</span>
                                                    <p className="text-sm font-bold">Javier Recepción</p>
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-semibold uppercase text-muted-foreground">Productos</span>
                                                    <p className="text-sm font-bold flex items-center justify-center">
                                                        {order.details?.products.length} ítems
                                                        <Dot className="mx-1 w-4 h-4 text-gray-500" /> WA
                                                        <Dot className="mx-1 w-4 h-4 text-gray-500" /> Remito
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-start gap-2">
                                                <Badge variant="outline" className="flex items-center p-3 gap-2 mt-2">
                                                    <Truck />
                                                    Retiro
                                                </Badge>
                                                <Badge variant="outline" className="flex items-center p-3 gap-2 mt-2">
                                                    <CreditCard />
                                                    Pago
                                                </Badge>
                                            </div>

                                            <Button variant="ghost" className="font-semibold px-2 w-[max-content] text-muted-foreground gap-2 flex items-center justify-center">
                                                <Plus />
                                                Agregar nota
                                            </Button>
                                        </div>
                                        <p className="text-lg font-semibold">Productos</p>
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="hover:bg-transparent">
                                                    <TableHead className="flex-1 font-semibold w-1/4">Producto</TableHead>
                                                    <TableHead className="flex-1 font-semibold text-center w-1/4">Cantidad</TableHead>
                                                    <TableHead className="flex-1 font-semibold text-center w-1/4">Precio</TableHead>
                                                    <TableHead className="flex-1 font-semibold text-right">&nbsp;</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {products.map((product, index) => (
                                                    <TableRow key={index} className="border-b border-muted/20">
                                                        <TableCell className="text-md font-semibold flex-1">
                                                            {product.name}
                                                        </TableCell>
                                                        <TableCell className="text-center flex-1">
                                                            <div className="flex items-center justify-center border rounded-md overflow-hidden w-[max-content] mx-auto">
                                                                <Button className="border-0 px-4 rounded-r" variant="ghost">
                                                                    -
                                                                </Button>
                                                                <Input value={product.quantity} readOnly className="rounded-none border-none text-center w-20" />
                                                                <Button className="border-0 px-4 rounded-l" variant="ghost">
                                                                    +
                                                                </Button>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-center flex-1">
                                                            <span className="text-xs text-muted-foreground">
                                                                ${product.unitPrice.toLocaleString('es-AR', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                })} c/u
                                                            </span>
                                                            <b className="ml-2 text-md font-semibold">
                                                                ${product.total.toLocaleString('es-AR', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                })}
                                                            </b>
                                                        </TableCell>
                                                        <TableCell className="text-right space-x-2 flex items-center justify-end">
                                                            <Button variant="ghost" size="sm">
                                                                <Percent />
                                                            </Button>
                                                            <Button variant="ghost" size="sm">
                                                                <Pencil />
                                                            </Button>
                                                            <Button variant="ghost" size="sm">
                                                                <Trash2 />
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CollapsibleContent>
                                </Card>
                            </Collapsible>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}