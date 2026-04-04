import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export const metadata: Metadata = {
  title: 'GreenLab Hackathon',
  description: 'Register for the GreenLab Hackathon 2026. Join us for an exciting showcase of AI and media innovation.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <Script id="strip-bis-skin-checked" strategy="beforeInteractive">
          {`(() => {
  const ATTR = 'bis_skin_checked';

  const stripAttr = () => {
    if (document.documentElement.hasAttribute(ATTR)) {
      document.documentElement.removeAttribute(ATTR);
    }

    if (document.body?.hasAttribute(ATTR)) {
      document.body.removeAttribute(ATTR);
    }

    document.querySelectorAll('[' + ATTR + ']').forEach((el) => {
      el.removeAttribute(ATTR);
    });
  };

  stripAttr();

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === ATTR) {
        mutation.target.removeAttribute(ATTR);
      }

      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        stripAttr();
      }
    }
  });

  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: [ATTR],
  });

  window.addEventListener('load', () => {
    observer.disconnect();
  }, { once: true });
})();`}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
