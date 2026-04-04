import { Hero } from '@/components/hero';
import { RegistrationForm } from '@/components/registration-form';
import { Footer } from '@/components/footer';
import { AnimatedBackground } from '@/components/ui/animated-background';

export default function Home() {
  return (
    <div className="relative isolate min-h-screen text-foreground">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <RegistrationForm />
        <Footer />
      </div>
    </div>
  );
}
