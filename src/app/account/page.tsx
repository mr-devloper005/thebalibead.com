'use client'

import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

export default function AccountPage() {
  const { user, isAuthenticated, logout } = useAuth()

  if (!isAuthenticated || !user) {
    return (
      <PageShell
        title="Account"
        description="Sign in to view your account details."
        actions={
          <Button asChild>
            <Link href="/login">Go to Login</Link>
          </Button>
        }
      >
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">You are not logged in.</p>
          </CardContent>
        </Card>
      </PageShell>
    )
  }

  return (
    <PageShell title="Account" description="Your logged-in account details.">
      <Card className="border-border bg-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 border border-border">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold text-foreground">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-secondary/40 p-4">
              <p className="text-xs text-muted-foreground">Account ID</p>
              <p className="mt-1 text-sm font-medium text-foreground">{user.id}</p>
            </div>
            <div className="rounded-lg border border-border bg-secondary/40 p-4">
              <p className="text-xs text-muted-foreground">Joined</p>
              <p className="mt-1 text-sm font-medium text-foreground">{user.joinedDate || 'N/A'}</p>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="destructive" onClick={logout}>Sign Out</Button>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}
