import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const teams = [
  { name: 'Product & Design', members: '8 members', mission: 'Shape intuitive discovery journeys across every page.' },
  { name: 'Engineering', members: '14 members', mission: 'Ship reliable features for publishing, profiles, and search.' },
  { name: 'Community & Growth', members: '6 members', mission: 'Support creators and grow meaningful local participation.' },
]

export default function TeamPage() {
  return (
    <PageShell
      title="Team"
      description="Meet the people behind The Bali Bead and how we build a calmer discovery platform."
      actions={
        <Button asChild>
          <Link href="/careers">Join Our Team</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="space-y-3 p-6">
            <h2 className="text-2xl font-semibold text-foreground">Cross-functional, creator-focused.</h2>
            <p className="text-sm text-muted-foreground">
              We work in small pods that bring design, engineering, and community together so new ideas move from
              concept to launch quickly.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Team members', value: '28' },
                { label: 'Countries', value: '7' },
                { label: 'Avg ship cycle', value: '2 weeks' },
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
            <h3 className="text-lg font-semibold text-foreground">How we collaborate</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              {['Weekly roadmap syncs', 'Monthly creator listening sessions', 'Transparent release notes and retros'].map((item) => (
                <div key={item} className="rounded-md border border-border bg-secondary/40 px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.name} className="border-border bg-card">
            <CardContent className="p-6">
              <p className="text-xs uppercase tracking-wide text-[#2C687B]">{team.members}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{team.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{team.mission}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
