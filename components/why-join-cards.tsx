'use client';

import { useEffect, useRef, useState } from 'react';
import { Brain, CalendarClock, Palette, Ticket, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Mentorship',
    description: 'Get guided by industry experts to refine your ideas and move faster.',
    stat: 'Expert support',
  },
  {
    icon: Palette,
    title: 'Tools & Resources',
    description: 'Access APIs, datasets, and practical resources to ship faster.',
    stat: 'AI-ready stack',
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Connect with ambitious builders and form impactful teams.',
    stat: '2 to 4 per team',
  },
  {
    icon: Zap,
    title: 'Pitch & Exposure',
    description: 'Present to judges, gain visibility, and unlock new opportunities.',
    stat: 'Live jury pitch',
  },
];

const eventDetails = [
  {
    icon: Ticket,
    label: 'Ticket',
    value: '105 DT / person',
    note: 'Includes transport',
  },
  {
    icon: CalendarClock,
    label: 'Deadline',
    value: '17 April, 00:00',
    note: 'Registration closes at midnight',
  },
  {
    icon: Users,
    label: 'Team Size',
    value: '2 to 4 people / team',
    note: 'Build with your ideal squad',
  },
];

export function WhyJoinCards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary/75">
            Why Participate
          </p>
          <h2 className="text-3xl font-bold leading-tight text-balance md:text-5xl">
            Everything you need to build, ship, and stand out
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-base">
            GreenLab brings mentors, practical tools, and a high-energy environment so your team can
            turn ideas into real projects.
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventDetails.map((detail, index) => (
            <div
              key={detail.label}
              className={`glassmorphism border-white/12 bg-white/6 p-5 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <detail.icon className="h-5 w-5" />
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-foreground/60">{detail.label}</p>
              </div>
              <p className="text-xl font-semibold text-foreground">{detail.value}</p>
              <p className="mt-1 text-sm text-foreground/65">{detail.note}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`glassmorphism border-white/10 bg-white/5 p-6 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120 + 120}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/65">{feature.description}</p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/75">
                {feature.stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
