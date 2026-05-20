import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Mail, Download } from "lucide-react";
import { PORTFOLIO } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-30 dark:opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>{PORTFOLIO.personal.availabilityBadge}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                {PORTFOLIO.personal.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 leading-tight">
              {PORTFOLIO.personal.title}
            </h2>

            <p className="text-lg text-muted-foreground/80 mb-10 max-w-xl leading-relaxed">
              {PORTFOLIO.personal.bio[0]}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}JordanDaudu_CV.pdf`}
                download="JordanDaudu_CV.pdf"
                className="px-7 py-3.5 rounded-xl font-semibold border border-primary/40 text-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Download CV
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-semibold bg-secondary text-secondary-foreground hover:-translate-y-1 hover:bg-secondary/80 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={PORTFOLIO.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={PORTFOLIO.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex justify-center xl:justify-end items-center"
          >
            <div className="relative isolate">
              {/* Theme-aware glow so the portrait feels integrated in both light and dark mode. */}
              <div className="absolute -inset-10 -z-20 rounded-[2.75rem] bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.22),transparent_36%),radial-gradient(circle_at_75%_75%,rgba(129,140,248,0.18),transparent_42%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.30),transparent_36%),radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.24),transparent_42%)] blur-3xl opacity-90" />
              <div className="absolute -inset-px -z-10 rounded-[2.15rem] bg-gradient-to-br from-primary/25 via-cyan-400/15 to-transparent dark:from-primary/35 dark:via-cyan-400/20 dark:to-transparent opacity-80" />

              {/* Portrait frame */}
              <div className="relative w-[22rem] h-[27.5rem] xl:w-[24rem] xl:h-[30rem] rounded-[2.05rem] overflow-hidden border border-white/55 dark:border-primary/25 bg-gradient-to-br from-white/95 via-slate-100 to-slate-200 dark:from-slate-900/95 dark:via-slate-900 dark:to-blue-950/80 shadow-[0_20px_60px_rgba(15,23,42,0.12)] dark:shadow-[0_28px_90px_rgba(37,99,235,0.30)] backdrop-blur-sm p-2">
                <div className="relative h-full w-full overflow-hidden rounded-[1.65rem] bg-slate-200/70 dark:bg-slate-800/70">
                  <img
                    src={`${import.meta.env.BASE_URL}images/jordan-profile-hero.webp`}
                    alt="Jordan Daudu professional portrait"
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/[0.04] dark:from-white/8 dark:to-black/10" />
                  <div className="pointer-events-none absolute inset-0 rounded-[1.65rem] ring-1 ring-black/5 dark:ring-white/10" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-5 bg-card/92 border border-border/70 rounded-2xl px-4 py-3 shadow-xl shadow-black/15 dark:shadow-black/25 backdrop-blur-md">
                <div className="text-xs text-muted-foreground font-medium">Current GPA</div>
                <div className="text-2xl font-bold text-primary">95</div>
              </div>

              {/* Floating experience badge */}
              <div className="absolute -top-4 -right-5 bg-card/92 border border-border/70 rounded-2xl px-4 py-3 shadow-xl shadow-black/15 dark:shadow-black/25 backdrop-blur-md">
                <div className="text-xs text-muted-foreground font-medium">Projects Built</div>
                <div className="text-2xl font-bold text-cyan-400">10+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
