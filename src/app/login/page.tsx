'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'
import { useAuth } from '@/lib/auth-context'

function getLoginConfig(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return { icon: Building2, title: 'Sign in to your account', body: 'Access your profile, publishing tools, and saved activity in one place.' }
  }
  if (kind === 'editorial') {
    return { icon: FileText, title: 'Sign in to your account', body: 'Access your profile, publishing tools, and saved activity in one place.' }
  }
  if (kind === 'visual') {
    return { icon: ImageIcon, title: 'Sign in to your account', body: 'Access your profile, publishing tools, and saved activity in one place.' }
  }
  return { icon: Bookmark, title: 'Sign in to your account', body: 'Access your profile, publishing tools, and saved activity in one place.' }
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { login, isLoading, isAuthenticated } = useAuth()

  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getLoginConfig(productKind)
  const Icon = config.icon

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    try {
      await login(email, password)
      router.push('/')
    } catch {
      setError('Unable to sign in right now. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF6F6] text-[#2C687B]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-[#8CC7C4]/35 bg-[#FFF6F6]/90 p-8">
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className="mt-5 text-sm leading-8 text-[#2C687B]/80">{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Cleaner product-specific workflows', 'Palette and layout matched to the site family', 'Fewer repeated admin patterns'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#8CC7C4]/40 bg-white p-8 shadow-[0_20px_50px_rgba(44,104,123,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Welcome back</p>
            {isAuthenticated ? (
              <div className="mt-6 rounded-xl border border-current/10 px-4 py-4 text-sm">
                You are already signed in. <Link className="font-semibold underline" href="/">Go to homepage</Link>
              </div>
            ) : null}
            <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
              <input
                className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#DB1A1A] px-6 text-sm font-semibold text-[#FFF6F6] hover:bg-[#c41515] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-[#2C687B]/80">
              <Link href="/forgot-password" className="hover:underline">Forgot password?</Link>
              <Link href="/register" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
