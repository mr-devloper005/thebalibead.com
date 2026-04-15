import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const spotlightProfiles = [
  { name: 'Maya Santoso', role: 'Travel Curator', focus: 'Boutique stays and local experiences' },
  { name: 'Eka Wibowo', role: 'Food Storyteller', focus: 'Bali cafes and chef interviews' },
  { name: 'Rina Pradana', role: 'Wellness Guide', focus: 'Retreats, spas, and mindful spaces' },
]

export default function ProfilePage() {
  return (
    <PageShell
      title="Profiles"
      description="Discover trusted creators, local experts, and business profiles in one polished directory."
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/community">Explore Community</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Create Profile</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-foreground">Build a profile that gets discovered.</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Profiles now feature cleaner storytelling blocks, clearer category labels, and stronger calls-to-action
              for enquiries and collaborations.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Verified profiles', value: '940+' },
                { label: 'Avg profile visits', value: '3.8k/mo' },
                { label: 'Saved to lists', value: '12k+' },
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
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground">New profile sections</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              {['Story highlights and intro video', 'Service gallery and pricing overview', 'Availability, location, and contact cards'].map((item) => (
                <div key={item} className="rounded-md border border-border bg-secondary/40 px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {spotlightProfiles.map((person) => (
          <Card key={person.name} className="border-border bg-card transition-transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-[#2C687B] text-white">
                  <AvatarFallback>{person.name.slice(0, 1)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{person.focus}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}
