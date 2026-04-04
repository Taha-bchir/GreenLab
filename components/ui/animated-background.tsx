import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/** Brand accents for ambient motion only (hex from design). */
const G = 'var(--brand-green)'
const R = 'var(--brand-red)'

const animatedBackgroundVariants = cva(
  'pointer-events-none overflow-hidden bg-black',
  {
    variants: {
      attach: {
        viewport: 'fixed inset-0 z-0',
        section: 'absolute inset-0 z-0 min-h-full',
      },
    },
    defaultVariants: {
      attach: 'viewport',
    },
  },
)

export type AnimatedBackgroundProps = React.ComponentProps<'div'> &
  VariantProps<typeof animatedBackgroundVariants>

function AnimatedBackground({
  className,
  attach,
  ...props
}: AnimatedBackgroundProps) {
  return (
    <div
      data-slot="animated-background"
      className={cn(animatedBackgroundVariants({ attach }), className)}
      {...props}
    >
      {/* Sparse drifting wash — mostly black, tiny color */}
      <div
        className="absolute -inset-[50%] animate-gradient-shift opacity-35 blur-3xl"
        style={{
          backgroundImage: `linear-gradient(
            125deg,
            transparent 0%,
            color-mix(in srgb, ${G} 14%, transparent) 28%,
            transparent 42%,
            color-mix(in srgb, ${R} 10%, transparent) 58%,
            transparent 72%,
            color-mix(in srgb, ${G} 12%, transparent) 88%,
            transparent 100%
          )`,
        }}
      />

      <div
        className="absolute inset-0 animate-base-glow-drift"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 100% 70% at 50% -5%, color-mix(in srgb, ${G} 10%, transparent), transparent 38%),
            radial-gradient(circle at 78% 55%, color-mix(in srgb, ${R} 7%, transparent), transparent 32%),
            radial-gradient(circle at 18% 62%, color-mix(in srgb, ${G} 6%, transparent), transparent 30%)
          `,
        }}
      />

      <div
        className="absolute -inset-[20%] animate-aurora opacity-35 blur-[100px]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 50% at 22% 40%, color-mix(in srgb, ${G} 12%, transparent), transparent 55%),
            radial-gradient(ellipse 65% 55% at 78% 55%, color-mix(in srgb, ${R} 9%, transparent), transparent 58%),
            radial-gradient(ellipse 80% 40% at 50% 95%, color-mix(in srgb, ${G} 8%, transparent), transparent 52%)
          `,
        }}
      />

      <div
        className="absolute inset-0 animate-mesh-pan opacity-40 blur-3xl"
        style={{
          backgroundImage: `linear-gradient(
            118deg,
            color-mix(in srgb, ${G} 6%, transparent) 0%,
            transparent 32%,
            color-mix(in srgb, ${R} 5%, transparent) 52%,
            transparent 72%,
            color-mix(in srgb, ${G} 5%, transparent) 100%
          )`,
        }}
      />

      <div
        className="absolute inset-0 animate-bg-sweep opacity-40"
        style={{
          backgroundImage: `linear-gradient(
            100deg,
            transparent 8%,
            color-mix(in srgb, ${G} 11%, transparent) 38%,
            transparent 52%,
            color-mix(in srgb, ${R} 7%, transparent) 68%,
            transparent 82%
          )`,
        }}
      />

      <div
        className={cn(
          'absolute -left-28 top-20 size-72 rounded-full blur-[100px] animate-float-slow',
          'bg-[color-mix(in_srgb,var(--brand-green)_14%,transparent)]',
        )}
      />

      <div
        className={cn(
          'absolute -right-36 bottom-8 size-64 rounded-full blur-[100px] animate-float-reverse',
          'bg-[color-mix(in_srgb,var(--brand-red)_12%,transparent)]',
        )}
      />

      <div
        className={cn(
          'absolute left-1/2 top-[20%] size-96 -translate-x-1/2 rounded-full blur-[120px] animate-pulse-glow-soft',
          'bg-[color-mix(in_srgb,var(--brand-green)_10%,transparent)]',
        )}
      />

      <div
        className="absolute left-1/2 top-[12%] size-144 -translate-x-1/2 rounded-full blur-3xl animate-orbit-slow opacity-40"
        style={{
          background: `conic-gradient(
            from 200deg,
            color-mix(in srgb, ${G} 12%, transparent),
            transparent 22%,
            transparent 48%,
            color-mix(in srgb, ${R} 10%, transparent),
            transparent 62%,
            color-mix(in srgb, ${G} 8%, transparent),
            transparent 88%,
            color-mix(in srgb, ${G} 12%, transparent)
          )`,
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 size-176 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] animate-spin-slow-reverse opacity-30"
        style={{
          background: `conic-gradient(
            from 90deg,
            color-mix(in srgb, ${G} 7%, transparent),
            transparent 30%,
            color-mix(in srgb, ${R} 6%, transparent),
            transparent 55%,
            color-mix(in srgb, ${G} 6%, transparent),
            transparent 100%
          )`,
        }}
      />

      <div
        className={cn(
          'absolute left-[10%] top-[45%] size-48 rounded-full blur-3xl animate-blob',
          'bg-[color-mix(in_srgb,var(--brand-green)_11%,transparent)]',
        )}
      />

      <div
        className={cn(
          'absolute right-[14%] top-[32%] size-40 rounded-full blur-3xl animate-blob-delayed',
          'bg-[color-mix(in_srgb,var(--brand-red)_10%,transparent)]',
        )}
      />

      <div
        className="absolute inset-0 opacity-[0.12] animate-grid-shift bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[72px_72px]"
        style={{
          maskImage: 'radial-gradient(circle at center, black 28%, transparent 84%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black 28%, transparent 84%)',
        }}
      />

      <div className="absolute inset-0 animate-drift-slow opacity-25">
        <div
          className="absolute inset-0 animate-dot-field-drift bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[28px_28px]"
          style={{
            maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black 20%, transparent 80%)',
          }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-black via-black/80 to-transparent" />

      <div
        className="absolute inset-0 animate-vignette-breathe"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, transparent 22%, rgba(0, 0, 0, 0.5) 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-screen animate-scanline bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.06)_48%,transparent_100%)] bg-size-[100%_18px]"
      />
    </div>
  )
}

export { AnimatedBackground, animatedBackgroundVariants }
