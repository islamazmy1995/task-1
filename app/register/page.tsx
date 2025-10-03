"use client"
import React, { useState, FormEvent } from 'react'
import { registerUser } from '@/lib/apiServices'
import { useRouter } from 'next/navigation'
import { useToast } from '@/app/hooks/use-toast'
import AuthCard from '@/components/ui/AuthCard'
import Input from '@/components/ui/Input'

const RegisterForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [countryCode, setCountryCode] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [generalError, setGeneralError] = useState<string>("")

  const router = useRouter()
  const { toast } = useToast()

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await registerUser({
        fullName,
        email,
        password,
        phone,
        countryCode,
        type: 'client',
        fcm_token: 'test',
      })

      setLoading(false)

      if (response.status) {
        setErrors({})
        setGeneralError("")
        
        if (response.data?.token) {
          localStorage.setItem("token", response.data.token)
          // حفظ الـ token في cookie عشان الـ middleware
          document.cookie = `token=${response.data.token}; path=/; max-age=${60 * 60 * 24 * 7}`
          // مش بنحفظ verified=true هنا، هيتحفظ بعد ما يدخل الكود
        }
        
        toast({
          title: "تم التسجيل بنجاح",
          description: "تم إنشاء الحساب بنجاح. من فضلك قم بتأكيد حسابك.",
        })

        // توجيه لصفحة التحقق
        router.push('/verify') 
      } else {
        const fieldErrors = response?.errors || {}
        setErrors(Object.keys(fieldErrors).reduce((acc: any, key: string) => {
          const arr = fieldErrors[key]
          acc[key] = Array.isArray(arr) ? arr[0] : String(arr)
          return acc
        }, {}))
        
        if (!response?.errors && response?.message) {
          setGeneralError(String(response.message))
          const msg = String(response.message)
          if (/الهاتف|phone|mobile/i.test(msg)) {
            setErrors((prev) => ({ ...prev, mobile: msg }))
          }
        }
        
        const errorList = response?.errors
          ? Object.values(response.errors).flat().join(" | ")
          : response?.message || "فشل التسجيل"
          
        toast({
          title: "فشل التسجيل",
          description: String(errorList),
          variant: "error",
        })
      }
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
      <AuthCard title="إنشاء حساب" subtitle="انضم إلى TrendySales في ثوانٍ">
        {generalError && (
          <div className="mb-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
            {generalError}
          </div>
        )}
        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            type="text"
            placeholder="الاسم الكامل"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.name || errors.fullName}
            required
          />
          <Input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />
          <Input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            required
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              type="text"
              placeholder="رقم الهاتف"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={errors.mobile || errors.phone}
              required
            />
            <Input
              type="text"
              placeholder="كود الدولة"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              error={errors.mobile_country_code || errors.countryCode}
              required
            />
          </div>
          <div className="text-xs text-gray-500 -mt-1">
            مثال: 971 للإمارات، 20 لمصر، 966 للسعودية
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors"
          >
            {loading ? 'جاري التسجيل...' : 'تسجيل'}
          </button>
        </form>
      </AuthCard>
    </div>
  )
}

export default RegisterForm