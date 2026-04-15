import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const channels = [
  { name: 'Creator Circle', members: '3.4k members', description: 'Publishing tips, launches, and featured stories.' },
  { name: 'Business Owners Hub', members: '1.9k members', description: 'Operations, growth ideas, and collaborations.' },
  { name: 'Local Explorers', members: '2.6k members', description: 'Recommendations, questions, and curated guides.' },
]

export default function CommunityPage() {
  return (
    <PageShell
      title="Community"
      description="Connect with creators, businesses, and locals in active topic-based spaces."
      actions={
        <Button asChild>
          <Link href="/register">Join Community</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-foreground">Where good recommendations get better together.</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Community now has clearer discussion hubs, better moderation signals, and easier ways to surface trusted
              answers for everyone.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Active discussions', value: '420+' },
                { label: 'Questions resolved', value: '1.2k' },
                { label: 'Weekly contributors', value: '870+' },
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
            <h3 className="text-lg font-semibold text-foreground">Community standards</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              {['Respectful and constructive dialogue', 'Source-backed recommendations', 'No spam or promotional flooding'].map((item) => (
                <div key={item} className="rounded-md border border-border bg-secondary/40 px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {channels.map((channel) => (
          <Card key={channel.name} className="border-border bg-card">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wide text-[#2C687B]">{channel.members}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{channel.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{channel.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
