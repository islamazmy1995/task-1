"use client"

import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export default function Input({ label, className, error, ...props }: Props) {
  return (
    <label className="block space-y-1">
      {label && <span className="text-sm text-gray-600">{label}</span>}
      <input
        className={`w-full rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border'} ${className || ''}`}
        {...props}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}


