"use client"

import * as React from "react"
import { Button as BaseButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { GlassCustomization } from "@/lib/glass-utils"
import { hoverEffects, type HoverEffect } from "@/lib/hover-effects"

// Este tipo es para las variantes de glass del Card, NO para el Button
type GlassVariant = "default" | "glass" | "frosted" | "fluted" | "crystal"

export interface ButtonProps
  extends Omit<React.ComponentProps<typeof BaseButton>, "glass"> {
  effect?: HoverEffect
  glass?: GlassCustomization
  // Eliminamos variant de aquí porque el BaseButton ya tiene su propio variant
  // Si quieres agregar glass, usa la prop glass directamente
}

/**
 * Glass UI Button - A beautifully designed button component with glassy effects
 * Built on top of the base Button component with enhanced visual effects
 * 
 * @example
 * ```tsx
 * <Button 
 *   glass={{
 *     color: "rgba(59, 130, 246, 0.2)",
 *     blur: 25,
 *     outline: "rgba(59, 130, 246, 0.4)"
 *   }}
 * >
 *   Click me
 * </Button>
 * ```
 */
export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, effect = "glow", glass, ...props }, ref) => {
  const glassClasses = glass ? [
    "glass-bg",
    glass.color ? `[--glass-color:${glass.color}]` : "",
    glass.blur ? `[--glass-blur:${glass.blur}px]` : "",
    glass.transparency ? `[--glass-opacity:${glass.transparency}]` : "",
    glass.outline ? `[--glass-border:${glass.outline}]` : "",
  ].filter(Boolean).join(" ") : ""

  return (
    <BaseButton
      ref={ref}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        glassClasses,
        hoverEffects({ hover: effect }),
        className
      )}
      {...props}
    />
  )
})
Button.displayName = "Button"