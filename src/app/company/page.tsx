import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const companyLinks = [
  { title: 'About', href: '/about', description: 'Our story, mission, and product direction.' },
  { title: 'Team', href: '/team', description: 'People and pods building the platform.' },
  { title: 'Careers', href: '/careers', description: 'Open roles and hiring process.' },
  { title: 'Blog', href: '/blog', description: 'Product updates, guides, and stories.' },
  { title: 'Press', href: '/press', description: 'Media kit, coverage, and announcements.' },
]

export default function CompanyPage() {
  return (
    <PageShell
      title="Company"
      description="Explore everything about The Bali Bead as a company."
      actions={
        <Button asChild>
          <Link href="/about">Read Our Story</Link>
        </Button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {companyLinks.map((item) => (
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
