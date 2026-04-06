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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 95% 60% at 50% -5%, color-mix(in srgb, ${G} 9%, transparent), transparent 42%),
            radial-gradient(circle at 84% 62%, color-mix(in srgb, ${R} 6%, transparent), transparent 30%),
            radial-gradient(circle at 16% 68%, color-mix(in srgb, ${G} 5%, transparent), transparent 32%)
          `,
        }}
      />

      <div
        className="absolute -left-16 top-20 size-52 rounded-full bg-[color-mix(in_srgb,var(--brand-green)_10%,transparent)] blur-[70px] animate-float-slow"
      />

      <div
        className="absolute -right-20 bottom-10 size-52 rounded-full bg-[color-mix(in_srgb,var(--brand-red)_9%,transparent)] blur-[72px] animate-float-reverse"
      />

      <div
        className="absolute left-1/2 top-[24%] h-56 w-56 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--brand-green)_8%,transparent)] blur-[70px] animate-pulse-glow-soft"
      />

      <div
        className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[88px_88px]"
        style={{
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 84%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, black 30%, transparent 84%)',
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-black via-black/80 to-transparent" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, transparent 22%, rgba(0, 0, 0, 0.48) 100%)',
        }}
      />
    </div>
  )
}

export { AnimatedBackground, animatedBackgroundVariants }
