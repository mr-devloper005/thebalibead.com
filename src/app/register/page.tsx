import Link from 'next/link'
import { Bookmark, Building2, FileText, Image as ImageIcon, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

function getRegisterConfig(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return { icon: Building2, title: 'Create your account', body: 'Join the platform and start publishing, sharing, or listing with a clean workflow.' }
  }
  if (kind === 'editorial') {
    return { icon: FileText, title: 'Create your account', body: 'Join the platform and start publishing, sharing, or listing with a clean workflow.' }
  }
  if (kind === 'visual') {
    return { icon: ImageIcon, title: 'Create your account', body: 'Join the platform and start publishing, sharing, or listing with a clean workflow.' }
  }
  return { icon: Bookmark, title: 'Create your account', body: 'Join the platform and start publishing, sharing, or listing with a clean workflow.' }
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getRegisterConfig(productKind)
  const Icon = config.icon

  return (
    <div className="min-h-screen bg-[#FFF6F6] text-[#2C687B]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-[#8CC7C4]/35 bg-[#FFF6F6]/90 p-8">
            <Icon className="h-8 w-8" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{config.title}</h1>
            <p className="mt-5 text-sm leading-8 text-[#2C687B]/80">{config.body}</p>
            <div className="mt-8 grid gap-4">
              {['Different onboarding per product family', 'No repeated one-size-fits-all shell', 'Profile, publishing, and discovery aligned'].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-current/10 px-4 py-4 text-sm">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#8CC7C4]/40 bg-white p-8 shadow-[0_20px_50px_rgba(44,104,123,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Create account</p>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Full name" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Password" type="password" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="What are you creating or publishing?" />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-[#DB1A1A] px-6 text-sm font-semibold text-[#FFF6F6] hover:bg-[#c41515]">Create account</button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-[#2C687B]/80">
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
