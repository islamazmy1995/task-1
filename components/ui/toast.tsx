"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const toastVariants = cva(
  "fixed bottom-4 right-4 z-50 w-80 rounded-lg shadow-lg p-4 text-white transition-all",
  {
    variants: {
      variant: {
        default: "bg-zinc-800",
        success: "bg-green-600",
        error: "bg-red-600",
        warning: "bg-yellow-600 text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  title?: string
  description?: string
}

export function Toast({ title, description, variant, className }: ToastProps) {
  return (
    <div className={cn(toastVariants({ variant }), className)}>
      {title && <div className="font-semibold">{title}</div>}
      {description && <div className="text-sm opacity-90">{description}</div>}
    </div>
  )
}
