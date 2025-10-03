"use client"

import { Toast } from "./toast"
import { useToast } from "@/app/hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div>
      {toasts.map((t: any) => (
        <Toast
          key={t.id}
          title={t.title}
          description={t.description}
          variant={t.variant}
        />
      ))}
    </div>
  )
}
