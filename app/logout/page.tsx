"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/app/hooks/use-toast'

const LogoutPage: React.FC = () => {
  const router = useRouter()
  const { toast } = useToast()
  const [hasLoggedOut, setHasLoggedOut] = useState(false)

  useEffect(() => {
    // تأكد إننا منفذناش الكود قبل كده
    if (hasLoggedOut) return
    
    const performLogout = () => {
      // مسح كل البيانات من localStorage
      localStorage.removeItem("token")
      localStorage.removeItem("userName")
      localStorage.removeItem("verified")
      
      // مسح الـ cookies
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
      
      // تعليم إن احنا خلصنا logout
      setHasLoggedOut(true)
      
      // إظهار رسالة
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully",
      })
      
      // التوجيه لصفحة تسجيل الدخول
      setTimeout(() => {
        router.push('/?tab=login')
      }, 1500)
    }
    
    performLogout()
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Logging out...</p>
      </div>
    </div>
  )
}

export default LogoutPage