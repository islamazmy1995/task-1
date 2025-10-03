"use client"

import { ReactNode } from "react"

type Props = {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border">
      <div className="px-6 pt-6 pb-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </div>
      <div className="p-6 pt-2">
        {children}
      </div>
    </div>
  )
}


