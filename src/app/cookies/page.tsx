import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Essential Cookies', body: 'Required for authentication and core features.' },
  { title: 'Analytics Cookies', body: 'Help us understand how the platform is used.' },
  { title: 'Preference Cookies', body: 'Remember your settings and saved filters.' },
  { title: 'Marketing Cookies', body: 'Used for campaign performance and audience insights where allowed.' },
]

export default function CookiesPage() {
  return (
    <PageShell
      title="Cookie Policy"
      description="Details about the cookies we use."
    >
      <Card className="border-border bg-card">
        <CardContent className="p-6 space-y-4">
          <p className="text-xs text-muted-foreground">Last updated: March 16, 2026</p>
          {sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-border bg-secondary/40 p-4">
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{section.body}</p>
            </div>
          ))}
          <div className="rounded-lg border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
            You can update cookie preferences anytime from account settings.
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}
