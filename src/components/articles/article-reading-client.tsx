'use client'

import { useCallback, useEffect, useState } from 'react'
import { Check, Link2, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ArticleReadingProgress({ containerSelector }: { containerSelector: string }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.querySelector(containerSelector)
      if (!el || !(el instanceof HTMLElement)) return
      const rect = el.getBoundingClientRect()
      const total = el.offsetHeight - window.innerHeight * 0.35
      if (total <= 0) {
        setPct(100)
        return
      }
      const past = Math.min(Math.max(-rect.top, 0), total)
      setPct((past / total) * 100)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [containerSelector])

  return (
    <div
      className="reading-progress"
      style={{ width: `${pct}%` }}
      aria-hidden
      role="presentation"
    />
  )
}

type TocItem = { id: string; text: string; level: number }

function useArticleToc(containerSelector: string) {
  const [items, setItems] = useState<TocItem[]>([])

  useEffect(() => {
    const root = document.querySelector(containerSelector)
    if (!root) return
    const headings = root.querySelectorAll('.article-content h2, .article-content h3')
    const next: TocItem[] = []
    headings.forEach((node, i) => {
      const h = node as HTMLElement
      if (!h.id) {
        const text = (h.textContent || '').trim()
        let slug = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
        if (!slug) slug = `section-${i}`
        let id = slug
        let n = 0
        while (document.getElementById(id)) {
          n += 1
          id = `${slug}-${n}`
        }
        h.id = id
      }
      next.push({
        id: h.id,
        text: (h.textContent || '').trim() || `Section ${i + 1}`,
        level: h.tagName === 'H2' ? 2 : 3,
      })
    })
    setItems(next)
  }, [containerSelector])

  return items
}

export function ArticleTableOfContents({
  containerSelector,
  className,
}: {
  containerSelector: string
  className?: string
}) {
  const items = useArticleToc(containerSelector)
  if (items.length < 2) return null

  return (
    <nav
      className={`rounded-2xl border border-[#8CC7C4]/40 bg-white/95 p-4 shadow-sm ${className ?? ''}`}
      aria-label="On this page"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2C687B]/65">On this page</p>
      <ul className="mt-3 max-h-[min(60vh,22rem)] space-y-2 overflow-y-auto text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'pl-3' : ''}>
            <a href={`#${item.id}`} className="text-[#2C687B] transition-colors hover:text-[#DB1A1A]">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function ArticleShareRow({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }, [url])

  const tweet = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`

  return (
    <div className="flex flex-wrap items-center gap-2 border-y border-[#8CC7C4]/35 py-4">
      <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-[#2C687B]/70">Share</span>
      <Button type="button" variant="outline" size="sm" className="h-9 rounded-full border-[#8CC7C4]/50 bg-white text-[#2C687B]" onClick={() => void copy()}>
        {copied ? <Check className="mr-1.5 h-3.5 w-3.5 text-[#DB1A1A]" /> : <Link2 className="mr-1.5 h-3.5 w-3.5" />}
        {copied ? 'Copied' : 'Copy link'}
      </Button>
      <Button variant="outline" size="sm" className="h-9 rounded-full border-[#8CC7C4]/50 bg-white text-[#2C687B]" asChild>
        <a href={tweet} target="_blank" rel="noopener noreferrer">
          <Twitter className="mr-1.5 h-3.5 w-3.5" />
          Post
        </a>
      </Button>
    </div>
  )
}
