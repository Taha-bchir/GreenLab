export function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">
              Green<span className="text-primary">Lab</span>
            </h3>
            <p className="text-foreground/60 text-sm">
              Showcasing innovation in AI and media technology.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#register" className="text-foreground/70 hover:text-primary transition-colors">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold">Contact</h4>
            <p className="text-foreground/60 text-sm">
              Email:{' '}
              <a href="mailto:hello@greenlab.com" className="text-primary hover:underline">
                hello@greenlab.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 text-center text-sm text-foreground/50">
          <p>&copy; 2026 GreenLab Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
