"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { LayoutDashboard, Users, ShoppingCart, MessageSquare, User, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

const menuItems = [
    { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { title: "CRM", icon: Users, href: "/crm" },
    { title: "Pedidos", icon: ShoppingCart, href: "/pedidos" },
    { title: "WhatsApp", icon: MessageSquare, href: "/whatsapp" },
    { title: "Clientes", icon: User, href: "/clientes" },
]

export default function NavigationComponent() {
    const router = useRouter()
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    const handleNavigate = (href: string) => {
        router.push(href)
        setOpen(false)
    }

    return (
        <>
            {/* Menú Desktop */}
            <div className="hidden lg:block">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink asChild>
                                        <Button 
                                            variant={isActive ? "default" : "ghost"} 
                                            className="px-4 gap-2"
                                            onClick={() => handleNavigate(item.href)}
                                        >
                                            <item.icon className="h-4 w-4" />
                                            {item.title}
                                        </Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Menú Mobile */}
            <div className="lg:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[280px] pt-10">
                        <div className="flex flex-col gap-4">
                            <div className="font-bold text-lg mb-4 px-2">
                                Golo
                            </div>
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Button 
                                        key={item.title}
                                        variant={isActive ? "default" : "ghost"} 
                                        className="justify-start gap-3 w-full px-2"
                                        onClick={() => handleNavigate(item.href)}
                                    >
                                        <item.icon className="h-4 w-4" />
                                        {item.title}
                                    </Button>
                                )
                            })}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}