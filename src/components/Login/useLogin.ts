import { useState } from 'react'
import type { FormEvent } from 'react'

type OAuthProvider = 'google' | 'github' | 'microsoft'

const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)
    // submission placeholder
    console.log('login', { email, password, remember })
    setTimeout(() => setSubmitting(false), 600)
  }

  const handleOAuth = (provider: OAuthProvider) => {
    console.log('oauth', provider)
  }

  const handleForgotPassword = () => {
    console.log('forgot password')
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    remember,
    setRemember,
    submitting,
    handleSubmit,
    handleOAuth,
    handleForgotPassword
  }
}

export default useLogin
