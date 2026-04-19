import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const pressAssets = [
  { id: '1', title: 'Brand Logos Pack', description: 'Primary, dark, and light lockups for media use.', fileType: 'ZIP' },
  { id: '2', title: 'Product Screenshots', description: 'Updated product pages in desktop and mobile formats.', fileType: 'PNG' },
  { id: '3', title: 'Boilerplate', description: 'Company summary and leadership notes for journalists.', fileType: 'DOC' },
]

const coverage = [
  { id: '1', outlet: 'Island Tech Weekly', headline: 'The Bali Bead redesigns local-first discovery.', date: 'Apr 01, 2026' },
  { id: '2', outlet: 'Creator Journal', headline: 'Why creators are moving to calmer publishing spaces.', date: 'Mar 11, 2026' },
  { id: '3', outlet: 'Travel Commerce', headline: 'How profile-led discovery helps local businesses grow.', date: 'Feb 22, 2026' },
]

export default function PressPage() {
  return (
    <PageShell
      title="Press"
      description="Media resources, brand assets, and press coverage."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Press Kit</h2>
            <p className="text-sm text-muted-foreground">
              Download logos, product screenshots, and brand guidelines for media use.
            </p>
            <div className="grid gap-2">
              {pressAssets.map((asset) => (
                <div key={asset.id} className="rounded-lg border border-border bg-secondary/40 px-4 py-3">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{asset.title}</p>
                      <p className="text-xs text-muted-foreground">{asset.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{asset.fileType}</Badge>
                      <Button size="sm" variant="outline">Request Access</Button>
                      <Button size="sm">Download</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {coverage.map((item) => (
            <Card key={item.id} className="border-border bg-card transition-transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{item.outlet}</div>
                <p className="mt-2 text-sm text-foreground">{item.headline}</p>
                <p className="mt-2 text-xs text-muted-foreground">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
