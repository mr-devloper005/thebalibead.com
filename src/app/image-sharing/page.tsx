import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const collections = [
  { title: 'Travel Stories', count: '2.1k images', description: 'Destination albums from creators and local guides.' },
  { title: 'Food & Cafes', count: '1.4k images', description: 'Menus, ambience, and hidden brunch spots.' },
  { title: 'Wellness Spaces', count: '860 images', description: 'Studios, retreats, and calm corners to reset.' },
]

const features = ['Fast uploads with drag-and-drop', 'Smart tags by location and mood', 'Private boards for teams and clients']

export default function ImageSharingPage() {
  return (
    <PageShell
      title="Image Sharing"
      description="A visual-first space to publish albums, organize by category, and discover Bali through trusted creators."
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/search">Browse Gallery</Link>
          </Button>
          <Button asChild>
            <Link href="/create/image">Upload Images</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-[#2C687B] text-white hover:bg-[#2C687B]">Fresh Layout</Badge>
              <Badge variant="outline">Creator-first</Badge>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">Turn moments into discoverable collections.</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Image Sharing helps businesses and creators publish consistent visual stories that are easy to search,
              share, and revisit.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Active creators', value: '1,280+' },
                { label: 'Monthly uploads', value: '24k+' },
                { label: 'Saved boards', value: '9.7k' },
              ].map((metric) => (
                <div key={metric.label} className="rounded-lg border border-border bg-secondary/40 p-3">
                  <p className="text-lg font-semibold text-foreground">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="space-y-3 p-6">
            <h3 className="text-lg font-semibold text-foreground">What you can do</h3>
            {features.map((feature) => (
              <div key={feature} className="rounded-md border border-border bg-secondary/40 px-3 py-2 text-sm text-muted-foreground">
                {feature}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {collections.map((item) => (
          <Card key={item.title} className="border-border bg-card transition-transform hover:-translate-y-1">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wide text-[#2C687B]">{item.count}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
