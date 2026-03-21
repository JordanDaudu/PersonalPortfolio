import { motion } from "framer-motion";
import { PORTFOLIO } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function SkillPill({ name, icon }: { name: string; icon: string | null }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/60 hover:bg-secondary border border-border/40 hover:border-primary/30 transition-all duration-200 cursor-default group">
      {icon && (
        <img
          src={icon}
          alt={name}
          className="w-5 h-5 object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-200 dark:brightness-90"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      )}
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-12 h-1.5 bg-primary rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {PORTFOLIO.skills.map((group, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              {/* Category header */}
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5 pb-3 border-b border-border/60">
                {group.category}
              </h3>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <SkillPill key={i} name={item.name} icon={item.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Language spoken section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {PORTFOLIO.languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 text-sm">
              <span className="font-semibold text-foreground">{lang.name}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{lang.level}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
