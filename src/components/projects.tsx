import { motion } from "framer-motion";
import { PORTFOLIO } from "@/data/portfolio";
import { Github, ExternalLink, Activity } from "lucide-react";

function thumbSrc(thumbnail: string): string {
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${import.meta.env.BASE_URL}${thumbnail.replace(/^\//, "")}`;
}

export function Projects() {
  const featuredProjects = PORTFOLIO.projects.filter((p) => p.featured);
  const regularProjects = PORTFOLIO.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Engineering</h2>
          <div className="w-12 h-1.5 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            Complex problems solved with scalable, maintainable architectures.
          </p>
        </motion.div>

        {/* Featured Projects — full-width card with thumbnail */}
        <div className="space-y-10 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative bg-card border border-border/50 rounded-3xl overflow-hidden shadow-xl shadow-black/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500"
            >
              {/* Thumbnail */}
              {project.thumbnail && (
                <div className="relative w-full h-56 sm:h-72 overflow-hidden">
                  <img
                    src={thumbSrc(project.thumbnail)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  {/* GitHub / Demo links on thumbnail */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-black/40 backdrop-blur-sm text-white hover:bg-primary/80 transition-colors"
                        aria-label="View Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-black/40 backdrop-blur-sm text-white hover:bg-primary/80 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Activity className="w-4 h-4 text-primary" />
                      <span className="text-primary font-medium tracking-wide text-xs uppercase">Featured Project</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground font-medium mt-1">{project.subtitle}</p>
                  </div>
                  {/* Links — also shown when no thumbnail */}
                  {!project.thumbnail && (
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="View Source">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-4xl">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                      Engineering Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-secondary/80 border border-border/50 rounded-lg text-sm font-medium text-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <>
            <h3 className="text-xl font-bold text-foreground mb-6 text-muted-foreground">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group bg-card border border-border/50 rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                >
                  {/* Thumbnail if available */}
                  {project.thumbnail && (
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={thumbSrc(project.thumbnail)}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/70" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    {!project.thumbnail && (
                      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{project.category}</span>
                    )}
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground leading-tight">{project.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
                      </div>
                      <div className="flex gap-2 shrink-0 ml-3">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="View Source">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live Demo">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-5 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-medium px-2.5 py-1 bg-secondary rounded-md text-secondary-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}
