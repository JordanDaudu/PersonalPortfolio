import { motion } from "framer-motion";
import { PORTFOLIO } from "@/data/portfolio";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const TYPE_CONFIG = {
  education: { label: "Education",   color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",   Icon: GraduationCap },
  work:      { label: "Experience",  color: "bg-primary/10 text-primary border-primary/20",       Icon: Briefcase     },
  project:   { label: "Project",     color: "bg-violet-500/10 text-violet-400 border-violet-500/20", Icon: Code2      },
} as const;

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey</h2>
          <div className="w-12 h-1.5 bg-primary rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border/60" />

          <div className="space-y-8">
            {PORTFOLIO.experience.map((exp, idx) => {
              const cfg = TYPE_CONFIG[exp.type as keyof typeof TYPE_CONFIG] ?? TYPE_CONFIG.work;
              const { Icon } = cfg;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="relative pl-14"
                >
                  {/* Dot on line */}
                  <div className="absolute left-0 top-5 w-9 h-9 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center shadow-md">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  {/* Card */}
                  <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    {/* Type badge + year */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${cfg.color}`}>
                        {cfg.label}
                      </span>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {exp.year}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-foreground">{exp.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">{exp.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                    {/* Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
