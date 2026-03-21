import { motion } from "framer-motion";
import { PORTFOLIO } from "@/data/portfolio";
import { Code2, Server, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
        >
          {/* Left Col - Title */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full mb-8"></div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">System Design</h3>
                  <p className="text-sm text-muted-foreground">Architecting scalable and maintainable structures</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Clean Code</h3>
                  <p className="text-sm text-muted-foreground">Focusing on object-oriented and functional patterns</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">AI / ML Pipelines</h3>
                  <p className="text-sm text-muted-foreground">Integrating complex data models into applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col - Bio */}
          <div className="lg:col-span-8 bg-card border border-border/50 rounded-2xl p-8 sm:p-10 shadow-xl shadow-black/5 relative overflow-hidden">
            {/* Subtle bg glow inside card */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed relative z-10">
              {PORTFOLIO.personal.bio.map((paragraph, idx) => (
                <p key={idx} className="text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
