"use client";

import { useEffect, useState } from 'react';
import { Hero } from '@/components/hero';
import { WhyJoinCards } from '@/components/why-join-cards';
import { RegistrationForm } from '@/components/registration-form';
import { Footer } from '@/components/footer';
import { AuroraBackground } from '@/components/aurora-background';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-black" aria-hidden="true" />;
  }

  return (
    <AuroraBackground className="isolate min-h-screen text-foreground">
      <Hero />
      <WhyJoinCards />
      <RegistrationForm />
      <Footer />
    </AuroraBackground>
  );
}
