"use client"

import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { UserMenu } from "./user-menu.components"
import { ThemeToggle } from "./theme-toggle.components"
import NavigationComponent from "./navigation-components"
import Image from "next/image"
import Link from "next/link"

export function AppNavbar() {

    return (
        <nav className="border-b border-border bg-background/95">
            <div className="flex h-16 items-center justify-between px-2 md:px-4 mx-auto">
                <div className="flex items-center gap-4 md:gap-12">
                    <Link href="/" className="min-w-[100px] min-h-16 flex items-center justify-center relative">
                        <div className="relative h-16 w-auto aspect-square">
                            <Image
                                src="/hawel.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 100%"
                            />
                        </div>
                    </Link>

                    <NavigationComponent />
                </div>

                <div className="flex-1 hidden md:block" />

                <div className="flex items-center gap-2 md:gap-4">
                    <Button variant="ghost" className="gap-2 hidden md:flex">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="hidden lg:inline">Más</span>
                    </Button>

                    <ThemeToggle />

                    <Button variant="outline" size="default" className="hidden sm:flex md:size-lg">
                        90%
                    </Button>

                    <UserMenu />
                </div>
            </div>
        </nav>
    )
}