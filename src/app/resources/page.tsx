import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const resourceLinks = [
  { title: 'Help Center', href: '/help', description: 'Guides, FAQs, and troubleshooting.' },
  { title: 'Community', href: '/community', description: 'Discussions with creators and local users.' },
  { title: 'Developers', href: '/developers', description: 'Integration docs and platform tooling.' },
  { title: 'Status', href: '/status', description: 'Uptime, incidents, and service health.' },
]

export default function ResourcesPage() {
  return (
    <PageShell
      title="Resources"
      description="Helpful resources for users, creators, and developers."
      actions={
        <Button asChild>
          <Link href="/help">Get Support</Link>
        </Button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {resourceLinks.map((item) => (
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
