import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const tools = [
  { name: 'REST APIs', description: 'Read and publish listings, profiles, and media securely.' },
  { name: 'Webhooks', description: 'Receive real-time events when content is created or updated.' },
  { name: 'Embeds', description: 'Drop curated cards into your own website or campaign pages.' },
]

export default function DevelopersPage() {
  return (
    <PageShell
      title="Developers"
      description="Build integrations and automations with a cleaner developer experience."
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/status">API Status</Link>
          </Button>
          <Button asChild>
            <Link href="/help">Read Docs</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <Badge className="bg-[#2C687B] text-white hover:bg-[#2C687B]">Developer Platform</Badge>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">Fast integration, stable delivery.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              The refreshed developers page is organized around first call success, environment setup, and practical
              examples for common workflows.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Avg API uptime', value: '99.95%' },
                { label: 'Webhook events/day', value: '120k+' },
                { label: 'SDK examples', value: '35+' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-secondary/40 p-3">
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Quick start</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              {['Create API key in dashboard', 'Call your first read endpoint', 'Subscribe to update events'].map((item) => (
                <div key={item} className="rounded-md border border-border bg-secondary/40 px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.name} className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
