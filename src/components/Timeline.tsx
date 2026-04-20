'use client'

import { useEffect, useRef } from 'react'
import Widget from '@/components/Widget'
import { timeline, type TimelineType } from '@/data/timeline'

const typeColor: Record<TimelineType, string> = {
  career:    'var(--color-timeline-career)',
  education: 'var(--color-timeline-education)',
  cert:      'var(--color-timeline-cert)',
  project:   'var(--color-timeline-project)',
  homelab:   'var(--color-timeline-homelab)',
}

const typeLabel: Record<TimelineType, string> = {
  career:    'career',
  education: 'education',
  cert:      'cert',
  project:   'project',
  homelab:   'homelab',
}

export default function Timeline() {
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const entries = listRef.current?.querySelectorAll<HTMLLIElement>('[data-tl-entry]')
    if (!entries) return

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.opacity = '1'
            ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    entries.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(8px)'
      el.style.transition = 'opacity 240ms linear, transform 240ms linear'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Widget title="tyler/journey">
      <ol ref={listRef} className="relative border-l border-[var(--color-border)] ml-[2px] flex flex-col gap-0">
        {timeline.map((entry, i) => (
          <li key={i} data-tl-entry className="pl-[3ch] pb-2lh last:pb-0 relative">
            {/* Spine dot */}
            <span
              className="absolute -left-[7px] top-[3px] w-3 h-3 rounded-full border border-[var(--color-bg)] shrink-0"
              style={{ backgroundColor: typeColor[entry.type] }}
              aria-hidden="true"
            />

            {/* Date + type badge */}
            <div className="flex items-center gap-1ch mb-half-lh">
              <span className="font-mono text-sm text-[var(--color-text-dim)]">{entry.date}</span>
              <span
                className="font-mono text-sm px-1 border"
                style={{
                  color: typeColor[entry.type],
                  borderColor: typeColor[entry.type],
                  opacity: 0.7,
                }}
              >
                {typeLabel[entry.type]}
              </span>
            </div>

            {/* Title */}
            <p className="font-mono text-sm font-semibold text-[var(--color-text)] mb-half-lh">
              {entry.title}
            </p>

            {/* Description */}
            <p className="font-mono text-sm text-[var(--color-text)] opacity-70 leading-relaxed mb-half-lh">
              {entry.description}
            </p>

            {/* Tags */}
            {entry.tags && entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-x-1ch gap-y-half-lh">
                {entry.tags.map((tag) => (
                  <span key={tag} className="font-mono text-sm text-[var(--color-text-dim)]">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Widget>
  )
}
