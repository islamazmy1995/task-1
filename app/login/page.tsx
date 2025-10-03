"use client"
import React, { useState, FormEvent } from 'react'
import { loginUser } from '@/lib/apiServices'
import { useRouter } from 'next/navigation'
import { useToast } from '@/app/hooks/use-toast'
import AuthCard from '@/components/ui/AuthCard'
import Input from '@/components/ui/Input'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await loginUser(email, password)
      setLoading(false)

      if (response.status) {
        setErrors({})
        localStorage.setItem("token", response.data.token)
        // user object may differ; fallback to name/email keys
        const userName = response.data?.user?.fullName || response.data?.name || response.data?.user?.name || 'User'
        localStorage.setItem("userName", userName)
        // also set cookie for middleware protection
        document.cookie = `token=${response.data.token}; path=/; max-age=${60 * 60 * 24 * 7}`

        toast({
          title: "Login Success",
          description: "You are logged in",
        })

        router.push('/verify')
      } else {
        const fieldErrors = response?.errors || {}
        setErrors(Object.keys(fieldErrors).reduce((acc: any, key: string) => {
          const arr = fieldErrors[key]
          acc[key] = Array.isArray(arr) ? arr[0] : String(arr)
          return acc
        }, {}))
        const errorList = response?.errors
          ? Object.values(response.errors).flat().join(" | ")
          : response?.message || "Login failed"
        toast({
          title: "Login Failed",
          description: String(errorList),
          variant: "error",
        })
      }
    } catch (err) {
      setLoading(false)
      toast({
        title: "Error",
        description: "Something went wrong",
      })
      console.error(err)
    }
  }

  return (
    <div className="flex justify-center items-center py-16">
      <AuthCard title="Sign in" subtitle="Welcome back to TrendySales">
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </AuthCard>
    </div>
  )
}

export default LoginForm
