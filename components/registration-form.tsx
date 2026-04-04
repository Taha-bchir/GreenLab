'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  faculty: z.string().min(1, 'Please select a faculty'),
  levelOfStudy: z.string().min(1, 'Please select your level of study'),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const faculty = watch('faculty');
  const levelOfStudy = watch('levelOfStudy');

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        const error = await response.json();
        setSubmitStatus('error');
        setErrorMessage(error.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="min-h-screen flex items-center justify-center px-4 py-20 relative scroll-mt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 size-112 bg-primary/18 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 -left-40 size-128 bg-secondary/12 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <div className="glassmorphism border-white/15 bg-white/6 p-8 md:p-12 space-y-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          {/* Header */}
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-primary/70">
              Registration
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Join GreenLab
            </h2>
            <p className="text-foreground/70">
              Register now and become part of the innovation
            </p>
          </div>

          {/* Success State */}
          {submitStatus === 'success' ? (
            <div className="space-y-4 text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Registration Successful!</h3>
              <p className="text-foreground/70">
                Thank you for registering. We&apos;ll be in touch with more details soon.
              </p>
              <Button
                onClick={() => {
                  setSubmitStatus('idle');
                  window.location.reload();
                }}
                className="w-full mt-4"
              >
                Register Another
              </Button>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  {...register('fullName')}
                  className="input-glow"
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  {...register('phone')}
                  className="input-glow"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register('email')}
                  className="input-glow"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Faculty */}
              <div className="space-y-2">
                <Label htmlFor="faculty">Faculty</Label>
                <Select value={faculty} onValueChange={(value) => setValue('faculty', value)}>
                  <SelectTrigger id="faculty" className="input-glow">
                    <SelectValue placeholder="Select your faculty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">ISET SFAX</SelectItem>
                    <SelectItem value="business">ESEAC</SelectItem>
                  </SelectContent>
                </Select>
                {errors.faculty && (
                  <p className="text-sm text-destructive">{errors.faculty.message}</p>
                )}
              </div>

              {/* Level of Study */}
              <div className="space-y-2">
                <Label htmlFor="levelOfStudy">Level of Study</Label>
                <Select value={levelOfStudy} onValueChange={(value) => setValue('levelOfStudy', value)}>
                  <SelectTrigger id="levelOfStudy" className="input-glow">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first-year">First Year</SelectItem>
                    <SelectItem value="second-year">Second Year</SelectItem>
                    <SelectItem value="third-year">Third Year</SelectItem>
                  </SelectContent>
                </Select>
                {errors.levelOfStudy && (
                  <p className="text-sm text-destructive">{errors.levelOfStudy.message}</p>
                )}
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm text-destructive">{errorMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full button-glow text-base py-6 font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="mr-2 h-4 w-4" />
                    Registering...
                  </>
                ) : (
                  'Register Now'
                )}
              </Button>

              {/* Terms */}
              <p className="text-xs text-foreground/50 text-center">
                See You Soon! :3
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
