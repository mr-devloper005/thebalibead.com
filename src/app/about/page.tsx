import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockTeamMembers } from "@/data/mock-data";
import { SITE_CONFIG } from "@/lib/site-config";

const highlights = [
  { label: 'Creators onboarded', value: '12k+' },
  { label: 'Bookmarks shared', value: '180k' },
  { label: 'Listings published', value: '8.6k' },
]

const values = [
  { title: 'Curated by people', description: 'We believe trusted recommendations beat endless feeds.' },
  { title: 'Designed for focus', description: 'Clear, calm UI helps you find the next best resource fast.' },
  { title: 'Built to share', description: 'Collections make collaboration and knowledge flow effortless.' },
]

const timeline = [
  { year: '2024', milestone: 'Platform concept and first creator interviews' },
  { year: '2025', milestone: 'Public beta with image sharing and profiles' },
  { year: '2026', milestone: 'Expanded company, resources, and legal experience' },
]

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is a local-first discovery platform built for creators, businesses, and communities.`}
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/team">Meet the Team</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <Badge className="bg-[#2C687B] text-white hover:bg-[#2C687B]">Our Story</Badge>
            <h2 className="text-2xl font-semibold text-foreground">
              A single home for trusted discovery in Bali.
            </h2>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.name} combines image sharing, profiles, resources, and community threads so people can find
              quality recommendations without noise.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-secondary/40 p-4">
                  <div className="text-2xl font-semibold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {mockTeamMembers.map((member) => (
          <Card key={member.id} className="border-border bg-card transition-transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              <p className="mt-3 text-xs text-muted-foreground">{member.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-foreground">Journey so far</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {timeline.map((item) => (
            <Card key={item.year} className="border-border bg-card">
              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-wide text-[#2C687B]">{item.year}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.milestone}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
