import { PORTFOLIO, NAV_ITEMS } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

const FOOTER_NAV = NAV_ITEMS.filter((item) => item.id !== "hero");

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <p className="font-display font-bold text-xl tracking-tight text-foreground mb-1">
              {PORTFOLIO.personal.name}<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground max-w-xs">
              {PORTFOLIO.personal.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Quick Links</p>
            <ul className="space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Connect</p>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${PORTFOLIO.personal.email}`}
                className="p-2.5 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {PORTFOLIO.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
