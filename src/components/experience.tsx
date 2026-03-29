import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO } from "@/data/portfolio";
import {
  GraduationCap,
  Briefcase,
  Code2,
  LucideIcon,
  Award,
  Github,
  ExternalLink,
  FileText,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Category configuration
// To add a new category: add one entry here. Everything else adapts automatically.
// ─────────────────────────────────────────────────────────────────────────────
interface CategoryMeta {
  label: string;
  icon: LucideIcon;
  order: number;
  headingColor: string;
  iconColor: string;
  groupIconBg: string;
  dotBorder: string;
  yearBadge: string;
}

const CATEGORY_CONFIG: Record<string, CategoryMeta> = {
  education: {
    label: "Education",
    icon: GraduationCap,
    order: 0,
    headingColor: "text-cyan-400",
    iconColor: "text-cyan-400",
    groupIconBg: "bg-cyan-500/10",
    dotBorder: "border-cyan-500/40",
    yearBadge: "bg-cyan-500/10 text-cyan-400",
  },
  work: {
    label: "Experience",
    icon: Briefcase,
    order: 1,
    headingColor: "text-primary",
    iconColor: "text-primary",
    groupIconBg: "bg-primary/10",
    dotBorder: "border-primary/40",
    yearBadge: "bg-primary/10 text-primary",
  },
  project: {
    label: "Projects",
    icon: Code2,
    order: 2,
    headingColor: "text-violet-400",
    iconColor: "text-violet-400",
    groupIconBg: "bg-violet-500/10",
    dotBorder: "border-violet-500/40",
    yearBadge: "bg-violet-500/10 text-violet-400",
  },
} satisfies Record<string, CategoryMeta>;

const ORDERED_CATEGORIES = Object.entries(CATEGORY_CONFIG).sort(
    ([, a], [, b]) => a.order - b.order,
);

type FilterValue = "all" | string;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  ...ORDERED_CATEGORIES.map(([key, cfg]) => ({ value: key, label: cfg.label })),
];

// ─────────────────────────────────────────────────────────────────────────────
// Entry sub-types
// ─────────────────────────────────────────────────────────────────────────────
type LinkIconKey = "github" | "external" | "briefcase" | "school" | "file";

interface EntryLink {
  label: string;
  url: string;
  icon?: LinkIconKey;
}

const LINK_ICONS: Record<LinkIconKey, LucideIcon> = {
  github:    Github,
  external:  ExternalLink,
  briefcase: Briefcase,
  school:    GraduationCap,
  file:      FileText,
};

function resolveLinkIcon(key?: LinkIconKey): LucideIcon {
  return key ? (LINK_ICONS[key] ?? ExternalLink) : ExternalLink;
}

interface ExpEntry {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  type: string;
  description: string;
  highlights?: string[];
  badges?: string[];
  tech?: string[];
  links?: EntryLink[];
}

// ─────────────────────────────────────────────────────────────────────────────
// EntryBadges — subtle achievement chips (optional, high-signal only)
// ─────────────────────────────────────────────────────────────────────────────
function EntryBadges({ badges }: { badges: string[] }) {
  if (badges.length === 0) return null;
  return (
      <div className="flex flex-wrap gap-1.5 mt-1.5 mb-2.5">
        {badges.map((label) => (
            <span
                key={label}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-500/8 text-cyan-300 border border-cyan-500/20"
            >
          <Award className="w-2.5 h-2.5 shrink-0 text-cyan-400/70" />
              {label}
        </span>
        ))}
      </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TechChips — muted technology tags, lighter than badges
// ─────────────────────────────────────────────────────────────────────────────
function TechChips({ tech }: { tech: string[] }) {
  if (tech.length === 0) return null;
  return (
      <div className="flex flex-wrap gap-1.5 mt-4">
        {tech.map((t) => (
            <span
                key={t}
                className="px-2 py-0.5 rounded text-xs text-muted-foreground/75 bg-secondary/50 border border-border/40"
            >
          {t}
        </span>
        ))}
      </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EntryLinks — minimal inline action links at the card bottom
// ─────────────────────────────────────────────────────────────────────────────
function EntryLinks({ links }: { links: EntryLink[] }) {
  if (links.length === 0) return null;
  return (
      <div className="flex flex-wrap gap-4 mt-4 pt-3.5 border-t border-border/30">
        {links.map((link) => {
          const Icon = resolveLinkIcon(link.icon);
          return (
              <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {link.label}
              </a>
          );
        })}
      </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ExperienceCard
// ─────────────────────────────────────────────────────────────────────────────
function ExperienceCard({ exp, idx }: { exp: ExpEntry; idx: number }) {
  const cfg = CATEGORY_CONFIG[exp.type] ?? CATEGORY_CONFIG.work;
  const Icon = cfg.icon;

  return (
      <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: idx * 0.07, duration: 0.45 }}
          className="relative pl-12 sm:pl-14"
      >
        {/* Timeline dot */}
        <div
            className={`absolute left-0 top-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-card border-2 ${cfg.dotBorder} flex items-center justify-center shadow-md shrink-0`}
        >
          <Icon className={`w-3.5 h-3.5 ${cfg.iconColor}`} />
        </div>

        {/* Card */}
        <div className="bg-card border border-border/50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300">

          {/* Year */}
          <div className="mb-2">
          <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${cfg.yearBadge}`}>
            {exp.year}
          </span>
          </div>

          {/* Achievement badges (optional) */}
          {exp.badges && <EntryBadges badges={exp.badges} />}

          {/* Title + subtitle */}
          <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
            {exp.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-0.5 mb-3">
            {exp.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {exp.description}
          </p>

          {/* Highlight bullets */}
          {exp.highlights && exp.highlights.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                ))}
              </ul>
          )}

          {/* Tech chips (optional) */}
          {exp.tech && <TechChips tech={exp.tech} />}

          {/* Action links (optional) */}
          {exp.links && <EntryLinks links={exp.links} />}

        </div>
      </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ExperienceGroup — one grouped section (Education / Experience / Projects / …)
// ─────────────────────────────────────────────────────────────────────────────
function ExperienceGroup({
                           categoryKey,
                           entries,
                           groupIdx,
                         }: {
  categoryKey: string;
  entries: ExpEntry[];
  groupIdx: number;
}) {
  const cfg = CATEGORY_CONFIG[categoryKey] ?? CATEGORY_CONFIG.work;
  const Icon = cfg.icon;

  return (
      <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: groupIdx * 0.08, duration: 0.5 }}
          className="mb-16 last:mb-0"
      >
        {/* Group heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className={`w-9 h-9 rounded-xl ${cfg.groupIconBg} flex items-center justify-center shrink-0`}>
            <Icon className={`w-4 h-4 ${cfg.iconColor}`} />
          </div>
          <h3 className={`text-lg sm:text-xl font-bold ${cfg.headingColor}`}>{cfg.label}</h3>
          <div className="flex-1 h-px bg-border/40" />
          <span className="text-xs font-medium text-muted-foreground bg-secondary/70 px-2.5 py-1 rounded-full shrink-0">
          {entries.length} {entries.length === 1 ? "entry" : "entries"}
        </span>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border/40" />
          <div className="space-y-5 sm:space-y-6">
            {entries.map((exp, idx) => (
                <ExperienceCard key={exp.id} exp={exp} idx={idx} />
            ))}
          </div>
        </div>
      </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Experience section
// ─────────────────────────────────────────────────────────────────────────────
export function Experience() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const experienceEntries = PORTFOLIO.experience as unknown as ExpEntry[];

  const grouped = experienceEntries.reduce<Record<string, ExpEntry[]>>((acc, exp) => {
    const key = exp.type;
    if (!acc[key]) acc[key] = [];
    acc[key].push(exp);
    return acc;
  }, {});

  const visibleGroups = ORDERED_CATEGORIES
      .filter(([key]) => activeFilter === "all" || activeFilter === key)
      .filter(([key]) => (grouped[key]?.length ?? 0) > 0)
      .map(([key], groupIdx) => ({ key, entries: grouped[key]!, groupIdx }));

  return (
      <section id="experience" className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Section heading */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey</h2>
            <div className="w-12 h-1.5 bg-primary rounded-full mx-auto mb-5" />
            <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
              Education, professional experience, and engineering projects — organized for quick scanning.
            </p>
          </motion.div>

          {/* Filter controls */}
          <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap justify-center gap-2 mb-14"
              role="group"
              aria-label="Filter experience by category"
          >
            {FILTERS.map(({ value, label }) => (
                <button
                    key={value}
                    onClick={() => setActiveFilter(value)}
                    aria-pressed={activeFilter === value}
                    className={[
                      "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
                      activeFilter === value
                          ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/25"
                          : "bg-card text-muted-foreground border-border/50 hover:border-primary/40 hover:text-foreground",
                    ].join(" ")}
                >
                  {label}
                </button>
            ))}
          </motion.div>

          {/* Grouped content */}
          <AnimatePresence mode="wait">
            <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
            >
              {visibleGroups.map(({ key, entries, groupIdx }) => (
                  <ExperienceGroup
                      key={key}
                      categoryKey={key}
                      entries={entries}
                      groupIdx={groupIdx}
                  />
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
  );
}
