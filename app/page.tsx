"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import LoginForm from "@/app/login/page"
import RegisterForm from "@/app/register/page"
import AuthCard from "@/components/ui/AuthCard"

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [tab, setTab] = useState<"login" | "register">("login")

  useEffect(() => {
    const q = searchParams.get("tab")
    if (q === "register" || q === "login") {
      setTab(q)
    }
  }, [searchParams])

  const changeTab = (next: "login" | "register") => {
    setTab(next)
    const sp = new URLSearchParams(Array.from(searchParams.entries()))
    sp.set("tab", next)
    router.replace(`/?${sp.toString()}`)
  }
  return (
    <div className="min-h-[80vh] flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border">
        <div className="grid grid-cols-2">
          <button onClick={() => changeTab("login")} className={`py-3 font-semibold ${tab==='login' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Login</button>
          <button onClick={() => changeTab("register")} className={`py-3 font-semibold ${tab==='register' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}>Register</button>
        </div>
        <div className="p-6">
          {tab === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  )
}
