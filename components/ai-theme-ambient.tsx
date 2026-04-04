import * as React from 'react'

import { cn } from '@/lib/utils'

const green = 'color-mix(in srgb, var(--brand-green) 55%, transparent)'
const red = 'color-mix(in srgb, var(--brand-red) 45%, transparent)'
const dim = 'color-mix(in srgb, var(--foreground) 18%, transparent)'

function NodePulse({
  cx,
  cy,
  delay,
  r = 4,
}: {
  cx: number
  cy: number
  delay: number
  r?: number
}) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      className="animate-ai-node-pulse fill-brand-green"
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

function NeuralCluster({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      className={cn('text-brand-green', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={green} strokeWidth="1.2" strokeLinecap="round">
        <path d="M36 118 L78 62" className="animate-ai-edge-flow" />
        <path
          d="M78 62 L124 96"
          className="animate-ai-edge-flow"
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d="M36 118 L78 168"
          className="animate-ai-edge-flow"
          style={{ animationDelay: '0.8s' }}
        />
        <path
          d="M78 168 L124 132"
          className="animate-ai-edge-flow"
          style={{ animationDelay: '1.2s' }}
        />
        <path
          d="M124 96 L168 54"
          className="animate-ai-edge-flow"
          style={{ animationDelay: '0.2s' }}
        />
        <path
          d="M124 132 L168 174"
          className="animate-ai-edge-flow"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M168 54 L196 112"
          className="animate-ai-edge-flow"
          style={{ animationDelay: '1.4s' }}
        />
        <path
          d="M168 174 L196 112"
          className="animate-ai-edge-flow"
          style={{ animationDelay: '0.6s' }}
        />
      </g>
      <NodePulse cx={36} cy={118} delay={0} r={5} />
      <NodePulse cx={78} cy={62} delay={0.25} />
      <NodePulse cx={78} cy={168} delay={0.5} />
      <NodePulse cx={124} cy={96} delay={0.15} />
      <NodePulse cx={124} cy={132} delay={0.65} />
      <NodePulse cx={168} cy={54} delay={0.4} r={3.5} />
      <NodePulse cx={168} cy={174} delay={0.85} r={3.5} />
      <circle
        cx={196}
        cy={112}
        r={6}
        className="animate-ai-core-glow fill-brand-green/35 stroke-brand-green"
        strokeWidth="1"
      />
    </svg>
  )
}

function ProcessorMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="100"
        cy="100"
        r="78"
        stroke={dim}
        strokeWidth="0.6"
        strokeDasharray="4 10"
        className="animate-ai-orbit-dashed opacity-50"
      />
      <circle
        cx="100"
        cy="100"
        r="58"
        stroke={red}
        strokeWidth="0.75"
        strokeDasharray="2 8"
        className="animate-ai-orbit-dashed opacity-40"
        style={{ animationDirection: 'reverse', animationDuration: '22s' }}
      />
      <rect
        x="64"
        y="64"
        width="72"
        height="72"
        rx="14"
        stroke={green}
        strokeWidth="1.3"
        className="opacity-80"
      />
      <path
        d="M88 88h24v24h-24v-24z"
        stroke={red}
        strokeWidth="1"
        className="opacity-70"
      />
      <path
        d="M100 76v12M100 124v12M76 100h12M124 100h12"
        stroke={green}
        strokeWidth="1"
        opacity={0.45}
      />
      <circle
        cx="100"
        cy="100"
        r="5"
        className="animate-ai-node-pulse fill-brand-red"
        style={{ animationDelay: '0.5s' }}
      />
      <circle cx="76" cy="76" r="2.5" className="fill-brand-green opacity-60" />
      <circle cx="124" cy="124" r="2.5" className="fill-brand-green opacity-60" />
    </svg>
  )
}

function PromptRibbon({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'font-mono text-[10px] uppercase tracking-[0.35em] text-brand-green/50 md:text-xs',
        className,
      )}
    >
      <span className="opacity-50">⟨</span>
      <span className="px-1 opacity-90"> infer </span>
      <span className="inline-block h-2.5 w-px animate-ai-blink-cursor bg-brand-green align-middle" />
      <span className="opacity-50">⟩</span>
    </div>
  )
}

function HexLattice({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 240"
      fill="none"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={dim} strokeWidth="0.5" opacity={0.35}>
        <path d="M200 40l34 20v40l-34 20-34-20V60l34-20z" />
        <path d="M268 80l34 20v40l-34 20-34-20v-40l34-20z" />
        <path d="M132 80l34 20v40l-34 20-34-20v-40l34-20z" />
        <path d="M200 120l34 20v40l-34 20-34-20v-40l34-20z" />
      </g>
      <path
        d="M200 88v32M184 104h32"
        stroke={green}
        strokeWidth="1"
        strokeLinecap="round"
        className="animate-ai-edge-flow opacity-40"
      />
    </svg>
  )
}

export function AiThemeAmbient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-1 select-none overflow-hidden"
      aria-hidden="true"
    >
      <NeuralCluster className="absolute -left-6 top-[18%] h-44 w-44 opacity-[0.42] md:h-56 md:w-56 md:opacity-50 lg:left-4" />

      <ProcessorMotif className="absolute -right-10 bottom-[24%] h-40 w-40 opacity-[0.38] md:bottom-[26%] md:h-52 md:w-52 md:opacity-45 lg:right-2" />

      <HexLattice className="absolute left-1/2 top-[8%] hidden h-32 w-[min(90vw,28rem)] -translate-x-1/2 md:block md:opacity-30" />

      <PromptRibbon className="absolute left-1/2 top-[11%] hidden -translate-x-1/2 md:block md:top-[12%]" />

      <div className="absolute bottom-[18%] left-[8%] hidden font-mono text-[9px] leading-relaxed text-[color-mix(in_srgb,var(--foreground)_25%,transparent)] lg:block">
        <span className="block animate-ai-node-pulse" style={{ animationDelay: '0s' }}>
          01001101 01001100
        </span>
        <span className="mt-1 block animate-ai-node-pulse" style={{ animationDelay: '1.1s' }}>
          ∇ · optimize
        </span>
      </div>

      <div className="absolute bottom-[20%] right-[6%] hidden text-right font-mono text-[9px] text-[color-mix(in_srgb,var(--brand-red)_40%,transparent)] lg:block">
        <span className="block animate-ai-node-pulse" style={{ animationDelay: '0.6s' }}>
          {'{'} model.forward() {'}'}
        </span>
      </div>
    </div>
  )
}
