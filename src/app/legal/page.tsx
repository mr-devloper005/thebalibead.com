import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const legalLinks = [
  { title: 'Privacy', href: '/privacy', description: 'How personal information is collected and used.' },
  { title: 'Terms', href: '/terms', description: 'Rules for using platform features and services.' },
  { title: 'Cookies', href: '/cookies', description: 'Cookie categories and preference controls.' },
  { title: 'Licenses', href: '/licenses', description: 'Open-source acknowledgements and licenses.' },
]

export default function LegalPage() {
  return (
    <PageShell
      title="Legal"
      description="Policies and legal information for all users."
      actions={
        <Button asChild>
          <Link href="/privacy">View Privacy Policy</Link>
        </Button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {legalLinks.map((item) => (
          <Card key={item.title} className="border-border bg-card transition-transform hover:-translate-y-1">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href={item.href}>Open {item.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
