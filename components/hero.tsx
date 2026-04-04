import Image from 'next/image';
import { AiThemeAmbient } from '@/components/ai-theme-ambient';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 py-14 md:py-20 isolate">
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[color-mix(in_srgb,var(--brand-green)_8%,transparent)] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,color-mix(in_srgb,var(--brand-green)_10%,transparent),transparent_26%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.025),transparent_50%)]" />
      <AiThemeAmbient />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-3xl items-center justify-center text-center">
        <div className="space-y-5">
          <div className="flex justify-center">
            <Image
              src="/logo-01.png"
              alt="GreenLab hackathon logo"
              width={520}
              height={520}
              priority
            />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.38em] text-primary/80">
              HACKATHON 2026
            </p>
            <h1 className="text-4xl font-black leading-[0.98] text-balance md:text-6xl lg:text-7xl">
              Build the <span className="text-primary drop-shadow-[0_0_28px_rgba(60,226,95,0.45)]">future</span> at GreenLab
            </h1>
          </div>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-foreground/72 md:text-lg">
A Dynamic Hackathon Taking Place 1-2 Mai 2026 at Hotel Mouradi Skanes, Monastir         </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="h-11 rounded-full px-6 text-sm font-semibold shadow-[0_0_24px_rgba(60,226,95,0.2)]">
              <a href="#register">Register now</a>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full border-white/15 bg-white/5 px-6 text-sm font-semibold text-foreground backdrop-blur-md hover:bg-white/10">
              <a href="#register">Go to form</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3 text-sm text-foreground/65">
            <span className="h-px w-12 bg-linear-to-r from-primary/80 to-transparent" />
            Scroll down to register
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 h-16 w-px -translate-x-1/2 bg-linear-to-b from-primary/80 to-transparent" />
    </section>
  );
}
