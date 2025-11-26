import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors",
        outline:
          "border border-border bg-background/50 hover:bg-accent hover:text-accent-foreground hover:border-primary transition-colors",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-colors",
        link: "text-primary underline-offset-4 hover:underline transition-colors",
        glass: "relative bg-white/8 backdrop-blur-xl border border-white/20 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.25)] hover:bg-white/12 hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.2),0_12px_40px_rgba(255,255,255,0.08),0_4px_12px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvc3ZnPg==')] after:opacity-20 after:mix-blend-overlay after:pointer-events-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
