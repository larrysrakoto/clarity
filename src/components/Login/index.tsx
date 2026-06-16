'use client'

import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Divider from '@/components/Divider'
import FeatureCard from '@/components/FeatureCard'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import Logo from '@/components/Logo'
import useLogin from './useLogin'
import './Login.scss'

const Login = () => {
  const {
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
  } = useLogin()

  return (
    <div className="Login">
      <aside className="panel">
        <Logo variant="light" size="lg" />
        <div className="panel-content">
          <h1 className="title">
            Empowering enterprise vision with high-precision insights.
          </h1>
          <p className="description">
            Join over 2,500 organizations worldwide using Clarity360 to bridge the gap between complex data and actionable strategic intelligence. Secure, scalable, and seamless.
          </p>
          <FeatureCard
            icon={<Icon src="/icons/shield.svg" />}
            title="Enterprise Grade Security"
            description="SOC2 Type II compliant with end-to-end encryption for all operational streams."
          />
        </div>
      </aside>

      <section className="form-side">
        <div className="form-container">
          <header className="header">
            <h2 className="title">Welcome back</h2>
            <p className="subtitle">Please enter your credentials to access your workspace.</p>
          </header>

          <div className="oauth-row">
            <Button
              variant="secondary"
              ariaLabel="Continue with Google"
              iconLeft={<Icon src="/icons/google.svg" mode="bg" />}
              onClick={() => handleOAuth('google')}
            />
            <Button
              variant="secondary"
              ariaLabel="Continue with GitHub"
              iconLeft={<Icon src="/icons/github.svg" mode="bg" />}
              onClick={() => handleOAuth('github')}
            />
            <Button
              variant="secondary"
              ariaLabel="Continue with Microsoft"
              iconLeft={<Icon src="/icons/microsoft.svg" mode="bg" />}
              onClick={() => handleOAuth('microsoft')}
            />
          </div>

          <div className="divider-wrap">
            <Divider label="Or continue with email" />
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="name@company.com"
              value={email}
              onChange={setEmail}
              leadingIcon={<Icon src="/icons/mail.svg" />}
              autoComplete="email"
              required
            />

            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={setPassword}
              leadingIcon={<Icon src="/icons/lock.svg" />}
              trailingIcon={
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="password-toggle"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <Icon src={showPassword ? '/icons/eye-off.svg' : '/icons/eye.svg'} />
                </button>
              }
              actionLabel="Forgot password?"
              onActionClick={handleForgotPassword}
              autoComplete="current-password"
              required
            />

            <Checkbox
              id="remember"
              name="remember"
              label="Remember me for 30 days"
              checked={remember}
              onChange={setRemember}
            />

            <Button
              variant="primary"
              type="submit"
              fullWidth
              disabled={submitting}
              iconRight={<Icon src="/icons/login.svg" />}
            >
              Sign In
            </Button>
          </form>

          <p className="signup">
            New to Clarity360? <a href="#">Contact sales</a> or <a href="#">Create an account</a>
          </p>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
