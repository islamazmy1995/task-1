"use client"
import React, { useState, FormEvent } from 'react'
import { verifyAccount } from '@/lib/apiServices'
import { useRouter } from 'next/navigation'
import { useToast } from '@/app/hooks/use-toast'
import AuthCard from '@/components/ui/AuthCard'
import Input from '@/components/ui/Input'

const VerifyForm: React.FC = () => {
  const [code, setCode] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const router = useRouter()
  const { toast } = useToast()

  const handleVerify = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const token = localStorage.getItem('token') || ''
      
      // استخدم رقم ثابت للتجربة: 123456
      const FIXED_CODE = "123456"
      
      if (code === FIXED_CODE) {
        setLoading(false)
        setErrors({})
        
        // حفظ الـ verified cookie
        document.cookie = `verified=true; path=/; max-age=${60 * 60 * 24 * 7}`
        
        toast({
          title: "تم التحقق بنجاح",
          description: "تم التحقق من حسابك بنجاح!",
        })
        
        router.push('/dashboard')
        return
      }
      
      // لو الكود غلط
      setLoading(false)
      setErrors({ code: "كود التحقق غير صحيح" })
      toast({
        title: "فشل التحقق",
        description: "كود التحقق غير صحيح. الكود الصحيح هو: 123456",
        variant: "error",
      })
      
    } catch (err) {
      setLoading(false)
      toast({
        title: "خطأ",
        description: "حدث خطأ ما",
      })
      console.error(err)
    }
  }

  return (
    <div className="flex justify-center items-center py-16">
      <AuthCard title="تحقق من الحساب" subtitle="أدخل الكود المكون من 6 أرقام (123456 للتجربة)">
        <form onSubmit={handleVerify} className="space-y-4">
          <Input
            type="text"
            placeholder="كود التحقق"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            error={errors.code}
            required
            maxLength={6}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors"
          >
            {loading ? 'جاري التحقق...' : 'تحقق'}
          </button>
        </form>
      </AuthCard>
    </div>
  )
}

export default VerifyForm