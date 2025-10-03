"use client"

import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState<any[]>([])

  const toast = ({ title, description, variant }: any) => {
    const id = Date.now()
    setToasts([...toasts, { id, title, description, variant }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000) // auto hide after 3s
  }

  return { toast, toasts }
}
