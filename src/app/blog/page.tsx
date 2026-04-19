import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const posts = [
  { title: 'How local-first discovery beats infinite feeds', category: 'Product', readTime: '6 min read' },
  { title: 'Designing better profile pages for service businesses', category: 'Design', readTime: '4 min read' },
  { title: 'What creators ask for before publishing their first story', category: 'Community', readTime: '5 min read' },
]

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      description="Fresh updates, product notes, and practical playbooks from the team."
      actions={
        <Button asChild>
          <Link href="/community">Join the discussion</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <Badge className="bg-[#2C687B] text-white hover:bg-[#2C687B]">Featured Story</Badge>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">Building a calmer way to discover Bali online.</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              We are shifting from noisy feeds to curated pathways where every click helps users find better places,
              services, and people with confidence.
            </p>
            <Button className="mt-5" variant="outline" asChild>
              <Link href="/blog">Read featured article</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardContent className="space-y-2 p-6">
            <h3 className="text-lg font-semibold text-foreground">Publishing rhythm</h3>
            {['Weekly product journals', 'Monthly community highlights', 'Quarterly roadmap recap'].map((item) => (
              <div key={item} className="rounded-md border border-border bg-secondary/40 px-3 py-2 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="border-border bg-card transition-transform hover:-translate-y-1">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wide text-[#2C687B]">{post.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.readTime}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
