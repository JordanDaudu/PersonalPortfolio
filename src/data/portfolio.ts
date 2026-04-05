import type { SkillIcon, SkillIconName } from "@/lib/skill-icons";
export const NAV_ITEMS = [
  { id: "hero",       label: "Home"       },
  { id: "about",      label: "About"      },
  { id: "skills",     label: "Skills"     },
  { id: "projects",   label: "Projects"   },
  { id: "experience", label: "Experience" },
  { id: "contact",    label: "Contact"    },
] as const;

export const NAV_SECTION_IDS = NAV_ITEMS.map((i) => i.id);

const DEVICON = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const GH_OG = (repo: string) =>
  `https://opengraph.githubassets.com/1/JordanDaudu/${repo}`;

const DEVICON_ICON = (name: string, variant = "original"): SkillIcon => ({
  kind: "image",
  src: DEVICON(name, variant),
});

const IMAGE_ICON = (src: string): SkillIcon => ({
  kind: "image",
  src,
});

const LUCIDE_ICON = (name: SkillIconName): SkillIcon => ({
  kind: "lucide",
  name,
});

export const PORTFOLIO = {
  personal: {
    name: "Jordan Daudu",
    initials: "JD",
    title: "Software Engineering Student | Java, C#, Python Developer",
    tagline: "Software engineering student building scalable systems and elegant solutions.",
    availabilityBadge: "Available for new opportunities",
    bio: [
      "I am a Software Engineering student at SCE (Shamoon College of Engineering) with a strong foundation in Python, Java, C#, and C++. Experienced in OOP, data structures, and problem-solving — I'm a fast learner, adaptable, and motivated to write clean, efficient code while exploring new technologies.",
      "My work spans from architecting robust backend game engines in Java, to building scalable gameplay systems in Unity/C#, to developing deep learning pipelines in PyTorch. I approach every project methodically, prioritizing clean architecture and maintainable code.",
      "Currently looking for software engineering roles where I can contribute to impactful projects, collaborate with talented teams, and continue growing my technical expertise.",
    ],
    phone:    "+972-(054)-250-8121",
    email:    "jordandaudu@gmail.com",
    github:   "https://github.com/JordanDaudu",
    linkedin: "https://www.linkedin.com/in/jordan-daudu-cpp-python-java/",
    cvUrl:    "/JordanDaudu_CV.pdf",
    photoUrl: "/images/jordan-profile.jpg",
  },

  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java",     icon: DEVICON_ICON("java") },
        { name: "Python",   icon: DEVICON_ICON("python") },
        { name: "C++",      icon: DEVICON_ICON("cplusplus") },
        { name: "C#",       icon: DEVICON_ICON("csharp") },
        { name: "GDScript", icon: DEVICON_ICON("godot") },
        { name: "HTML",     icon: DEVICON_ICON("html5") },
      ],
    },
    {
      category: "Frameworks & Engines",
      items: [
        { name: "Unity",   icon: DEVICON_ICON("unity") },
        { name: ".NET",    icon: DEVICON_ICON("dot-net", "plain") },
        { name: "PyTorch", icon: DEVICON_ICON("pytorch") },
        { name: "OpenCV",  icon: DEVICON_ICON("opencv") },
        { name: "NumPy",   icon: DEVICON_ICON("numpy") },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git",       icon: DEVICON_ICON("git") },
        { name: "GitHub",    icon: DEVICON_ICON("github") },
        { name: "Jira",      icon: DEVICON_ICON("jira", "plain") },
        { name: "JetBrains", icon: IMAGE_ICON("https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg") },
        { name: "Replit",    icon: IMAGE_ICON("https://cdn.simpleicons.org/replit/FF3C00") },
      ],
    },
    {
      category: "Backend & Data",
      items: [
        { name: "PostgreSQL", icon: DEVICON_ICON("postgresql") },
      ],
    },
    {
      category: "Engineering Foundations",
      items: [
        { name: "Object Oriented Programming", icon: LUCIDE_ICON("boxes") },
        { name: "Algorithms",                  icon: LUCIDE_ICON("workflow") },
        { name: "Data Structures",             icon: LUCIDE_ICON("database") },
        { name: "System Design",               icon: LUCIDE_ICON("layoutGrid") },
      ],
    },
    {
      category: "Professional Strengths",
      items: [
        { name: "Critical Thinking", icon: LUCIDE_ICON("brain") },
        { name: "Teamwork",          icon: LUCIDE_ICON("users") },
        { name: "Time Management",   icon: LUCIDE_ICON("clock3") },
      ],
    },
  ],

  projects: [
    // ── Featured (newest first) ──────────────────────────────────────────────
    {
      id: "nomad-protocol",
      title: "Nomad Protocol: AETERRA",
      subtitle: "Unity 3D Shooter — C# (In Development)",
      category: "Game Engineering",
      featured: true,
      thumbnail: "/images/project-nomad.png",
      description:
        "In active development. A modular top-down 3D shooter in Unity/C# with a focus on scalable, decoupled architecture. Features pooled projectiles and impact FX, enemy AI (melee + ranged) driven by animation events, a modular weapon system, and a dedicated devlog website to document every engineering decision.",
      tech: ["C#", "Unity", "AI State Machines", "Event-Driven Architecture", "Physics"],
      highlights: [
        "Scalable gameplay systems: pooled projectiles, impact FX, and modular weapon loadouts",
        "Enemy AI (melee + ranged) driven by animation events for responsive, timing-accurate behavior",
        "Fully decoupled architecture enabling independent iteration of every system",
        "Companion devlog website (React/TypeScript) documenting all engineering decisions",
      ],
      githubUrl: "https://github.com/JordanDaudu/Unity-Project-Nomad-Protocol-Aeterra-Showcase",
      demoUrl: "",
    },
    {
      id: "dungeons-and-dragons",
      title: "Dungeons & Dragons",
      subtitle: "Java ARPG — SCE Advanced OOP Course",
      category: "Game Engineering",
      featured: true,
      thumbnail: "/images/project-dnd.png",
      description:
        "A feature-rich, action turn-based RPG inspired by Dungeons & Dragons, built in Java as part of the Advanced Project Oriented Programming course at SCE. Supports up to 4-player local co-op on a customizable grid map, with three character classes (Warrior, Mage, Archer), a full item system, enemy AI with unique behaviors, global world events, and save/load support.",
      tech: ["Java", "OOP", "Swing", "Threading", "Polymorphism", "Data Structures"],
      highlights: [
        "4-player local co-op on a dynamic, customizable grid (minimum 10×10)",
        "Three unique classes with distinct abilities, hit-chance mechanics, and floating damage numbers",
        "Enemy variety: Goblins, Orcs, Dragons — some explode on death, go berserk when hurt, or teleport",
        "Endless Adventure mode, global events (sandstorms, magic waves), and a ranked end-game screen",
        "Inventory & status panels, potions, treasure drops, and full save/load progress support",
      ],
      githubUrl: "https://github.com/JordanDaudu/Dungeons_And_Dragons",
      demoUrl: "",
    },
    {
      id: "eventstaffmanagementsystem",
      title: "Event & Staff Management Platform",
      subtitle: "Full-Stack Event Staffing Management Platform",
      category: "Web Dev",
      featured: true,
      thumbnail: "/images/project-event-staff-management-system.png",
      description:
          "A production-oriented full-stack event staffing management system built for scheduling workers across multiple halls and event slots. Designed with role-based access, smart staffing calculations, admin override flows, weekly planning views, and a responsive Hebrew RTL interface. Showcased publicly as a case study because the original source code was delivered in a workplace context and is not available for redistribution.",
      tech: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
      highlights: [
        "Multi-hall scheduling with separate afternoon and evening event slots",
        "Role-based system with admin, privileged waitress, and waitress workflows",
        "Smart staffing calculation with admin override support",
        "Responsive Hebrew RTL dashboard for scheduling, staff management, and weekly overviews",
        "Led migration from email-based login to phone-number-based authentication",
      ],
      githubUrl: "https://github.com/JordanDaudu/EventStaffManagementSystemShowcase",
      demoUrl: "",
    },

    // ── Other Projects (newest to oldest) ───────────────────────────────────
    {
      id: "nomad-protocol-website",
      title: "AETERRA Engineering Archive Website",
      subtitle: "React + TypeScript + Vite — Static Game Archive",
      category: "Web Dev",
      featured: false,
      thumbnail: "/images/project-aeterra-website.jpg",
      description:
        "A dedicated engineering archive website for Nomad Protocol: AETERRA, featuring devlogs, lore archives, systems documentation, and a media gallery. Built as a fully static React + TypeScript + Vite site with a file-based content pipeline, where Markdown and media are transformed into site content during generation/build. Styled with Tailwind CSS v4.",
      tech: ["React", "TypeScript", "Vite", "Express.js", "Tailwind CSS", "Markdown"],
      highlights: [
        "File-based CMS: drop Markdown files in folders and they appear on the site automatically",
        "Devlogs, game systems docs, lore archive, and media gallery sections",
        "Custom design system with ambient interactive backgrounds",
      ],
      githubUrl: "https://github.com/JordanDaudu/Nomad-Protocol-Aeterra-Website",
      demoUrl: "https://nomad-protocol-aeterra.onrender.com/",
    },
    {
      id: "pathfinding-visualizer",
      title: "Pathfinding Visualizer",
      subtitle: "Algorithm Visualization Tool",
      category: "Algorithms",
      featured: false,
      thumbnail: "/images/project-pathfinding.png",
      description:
        "An interactive pathfinding algorithm visualizer with 7 algorithms (BFS, DFS, Dijkstra, Bellman-Ford, A*, IDA*, Greedy Best-First) running on a weighted grid in real time. Includes wall drawing, adjustable brush weights, speed control, and a live Algorithm Theory panel showing time/space complexity.",
      tech: ["Python", "Pygame", "Algorithms", "Graph Theory"],
      highlights: [
        "7 algorithms: BFS, DFS, Dijkstra, Bellman-Ford, A*, IDA*, Greedy Best-First",
        "Interactive weighted grid with wall drawing, eraser, and brush-weight painting",
        "Live Algorithm Theory panel: time/space complexity, optimality, and observed run stats",
      ],
      githubUrl: "https://github.com/JordanDaudu/Pathfinding_visualizer",
      demoUrl: "",
    },
    {
      id: "flytracking-ai",
      title: "FlyTracking AI",
      subtitle: "Deep Learning Research — PyTorch / RNN",
      category: "AI / Research",
      featured: false,
      thumbnail: "/images/project-flytracking.png",
      description:
        "Research project at SCE: built a Hybrid Neural Network combining a Bidirectional LSTM + Attention Pooling sequence branch with a statistical summary branch to classify fly age into 7 groups from time-series trajectory data (x/y paths), collaborating directly with biology researchers.",
      tech: ["Python", "PyTorch", "BiLSTM", "Attention", "OpenCV", "NumPy"],
      highlights: [
        "Hybrid architecture: BiLSTM + Attention Pooling fused with a statistical summary branch",
        "7-class age prediction from sequential trajectory (x, y) paths and behavioral statistics",
        "Collaborated with biology researchers to engineer biologically relevant features",
      ],
      githubUrl: "https://github.com/JordanDaudu/FlyTrackerDataLearning",
      demoUrl: "",
    },
    {
      id: "notion-stock-tracker",
      title: "Notion Stock Tracker",
      subtitle: "Python Automation — Notion API + Selenium",
      category: "Automation / Tools",
      featured: false,
      thumbnail: "/images/project-notion-stock.png",
      description:
        "A Python automation tool that scrapes live stock and fund prices from Globes and automatically updates linked Notion pages. Supports single-run and continuous update modes, with CSV price history logging and color-coded console output.",
      tech: ["Python", "Selenium", "BeautifulSoup", "Notion API", "python-dotenv"],
      highlights: [
        "Scrapes live prices from Globes and pushes updates to Notion pages via the Notion API",
        "Supports single-run and continuous polling modes at a configurable interval",
        "Logs price history to a local CSV file; skips updates when the price hasn't changed",
      ],
      githubUrl: "https://github.com/JordanDaudu/NotionStockTracker",
      demoUrl: "",
    },
    {
      id: "numerical-analysis",
      title: "Numerical Analysis",
      subtitle: "Python Implementations — SCE Course",
      category: "Academic / Math",
      featured: false,
      thumbnail: "/images/project-numerical.jpg",
      description:
        "Python implementations of key numerical analysis methods covered at SCE: linear system solvers (Gauss, Gauss-Seidel, Jacobi), root-finding (Bisection, Newton-Raphson, Secant), interpolation (Lagrange, Neville, Cubic Spline), and numerical integration (Romberg).",
      tech: ["Python", "NumPy", "SciPy", "Numerical Methods", "Linear Algebra"],
      highlights: [
        "Gauss, Gauss-Seidel, and Jacobi methods for linear system solving",
        "Root-finding: Bisection, Newton-Raphson, and Secant methods",
        "Interpolation: Lagrange, Neville, Cubic Spline; Integration: Romberg",
      ],
      githubUrl: "https://github.com/JordanDaudu/Numerical-Analysis",
      demoUrl: "",
    },
  ],

  experience: [
    // Education — newest/current to oldest
    {
      id: "sce",
      year: "2023 – Present",
      title: "B.Sc. Software Engineering",
      subtitle: "SCE — Shamoon College of Engineering",
      type: "education",
      description:
          "Focusing heavily on OOP, scalable system design, complex algorithms, and data structures. GPA: 95 as of end of year two.",
      highlights: [
        "Rector-President's Award for Excellence",
        "Certificate of Excellence for High Entrance Scores",
        "German Israeli Autumn School Exchange Program Participation Certificate",
        "Score as of end of year two: 95",
      ],
      badges: ["GPA: 95", "Rector-President's Award"],
    },
    {
      id: "germany-autumn-school",
      year: "Oct 2025",
      title: "German–Israeli Autumn School 2025",
      subtitle: "Otto von Guericke University Magdeburg × SCE",
      type: "education",
      description:
          "Participated in an international academic exchange program at Otto von Guericke University Magdeburg in collaboration with Sami Shamoon College of Engineering (SCE), focused on engineering, intercultural collaboration, and hands-on academic activities.",
      highlights: [
        "Participated in academic engineering sessions and lab tours",
        "Visited companies and took part in intercultural workshops",
        "Worked on a collaborative international project and final presentation",
        "Strengthened cross-cultural teamwork and international academic exposure",
      ],
      badges: ["International Exchange"],
    },
    {
      id: "ort",
      year: "2019 – 2021",
      title: "P.Eng — Electronics & Computer Engineering",
      subtitle: "ORT Colleges",
      type: "education",
      description:
          "Practical Engineer diploma in Electronics and Computer Engineering — Electronic Systems. Final score: 95.",
      highlights: [
        "Completed a full technological diploma including 10 units in electronics and computers",
        "Certificate in Electronics and Computers Engineering — Electronic Systems",
      ],
      badges: ["Final Score: 95"],
    },
    {
      id: "exp-start",
      year: "2016 – 2019",
      title: "Technological Diploma",
      subtitle: "ORT",
      type: "education",
      description:
          "Full technological diploma including 10 units in electronics and computers — the foundation of a deep interest in software and systems.",
      highlights: [],
    },

    // Work — newest to oldest
    {
      id: "exp-ta",
      year: "Apr 2026 – Present",
      title: "Teaching Assistant (Assignment Grader)",
      subtitle: "SCE — Shamoon College of Engineering",
      type: "work",
      description:
          "Served as a Teaching Assistant for core computer science courses, reviewing and evaluating programming assignments in Object-Oriented Programming, Advanced OOP, and Principles of Programming Languages.",
      highlights: [
        "Reviewed and graded student assignments with a focus on correctness, abstraction, and design quality",
        "Provided structured feedback on OOP principles, debugging, and code organization",
        "Identified common software design mistakes and guided improvements",
        "Helped uphold code quality expectations around abstraction, correctness, and software design",
      ],
      badges: ["Selected by Faculty"],
      tech: ["Java", "OOP", "Code Review"],
    },
    {
      id: "exp-adama-staffschedule",
      year: "Nov 2025 – Dec 2025",
      title: "Full-Stack Developer",
      subtitle: "Adama Ashdod — Event Staffing Management System",
      type: "work",
      description:
          "Developed a production-oriented full-stack workforce scheduling platform for event operations, supporting multi-hall staffing, role-based access control, smart staffing logic, and responsive Hebrew RTL dashboards.",
      highlights: [
        "Built a multi-hall scheduling system with separate afternoon and evening event slots",
        "Implemented role-based workflows for admins, privileged workers, and standard workers",
        "Designed smart staffing calculation with admin override support",
        "Added weekly overviews, personal shifts, worker management, and hall management flows",
        "Led migration from email-based login to phone-number-based authentication",
      ],
      badges: ["Production Delivery"],
      tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Prisma"],
      links: [
        {
          label: "Showcase Repo",
          url: "https://github.com/JordanDaudu/EventStaffManagementSystemShowcase",
          icon: "github",
        },
      ],
    },
    {
      id: "exp-fly",
      year: "Sep 2025 – Oct 2025",
      title: "Research Assistant",
      subtitle: "SCE — Shamoon College of Engineering",
      type: "work",
      description:
          "Worked on a biological data analysis project predicting fly age from movement tracking data. Extended an existing FlyTracking ML pipeline using PyTorch, developing RNN models and collaborating with biology researchers.",
      highlights: [
        "Developed RNN-based models using PyTorch to analyze time-series motion data from CSV",
        "Engineered biologically relevant features to improve model accuracy",
        "Collaborated with biology researchers to translate biological insights into ML features",
        "Iterated across multiple model versions, optimizing training performance and evaluation metrics",
      ],
      badges: ["Applied ML Research"],
      tech: ["Python", "PyTorch", "RNN", "Time-Series ML"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/JordanDaudu/FlyTrackerDataLearning",
          icon: "github",
        },
      ],
    },

    // Projects — newest/current to oldest
    {
      id: "exp-nomad",
      year: "2024 – Present",
      title: "Lead Developer (Solo)",
      subtitle: "Nomad Protocol: AETERRA",
      type: "project",
      description:
          "Designing and building a modular Unity/C# 3D shooter from scratch. Focused on scalable, maintainable architecture with clean decoupling between systems.",
      highlights: [],
      badges: ["Flagship Project"],
      tech: ["C#", "Unity", "AI State Machines", "Object Pooling"],
      links: [
        {
          label: "Showcase Repo",
          url: "https://github.com/JordanDaudu/Unity-Project-Nomad-Protocol-Aeterra-Showcase",
          icon: "github",
        },
        {
          label: "Engineering Archive",
          url: "https://nomad-protocol-aeterra.onrender.com/",
          icon: "external",
        },
      ],
    },
    {
      id: "exp-aeterra-website",
      year: "2024 – Present",
      title: "Personal Project",
      subtitle: "AETERRA Engineering Archive Website — React / TypeScript / Vite",
      type: "project",
      description:
          "Architected and built a static content-driven website for Nomad Protocol: AETERRA that functions as a combined devlog platform, lore archive, systems documentation hub, and media gallery. The project uses a file-based content pipeline that transforms Markdown and media assets into generated static content, making it easy to scale and maintain as the game evolves.",
      highlights: [
        "Developed a React + TypeScript + Vite static site for project documentation and presentation",
        "Designed a build-time content generation pipeline for Markdown-based devlogs, lore, technical archives, gallery media, and audio assets",
        "Organized the project around a maintainable content-source → generated-output workflow instead of a backend-driven CMS",
        "Built a custom Tailwind CSS v4 interface with atmospheric sci-fi styling, structured content sections, and route-aware soundtrack switching",
      ],
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Markdown"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/JordanDaudu/Nomad-Protocol-Aeterra-Website",
          icon: "github",
        },
        {
          label: "Live Site",
          url: "https://nomad-protocol-aeterra.onrender.com/",
          icon: "external",
        },
      ],
    },
    {
      id: "exp-notion-stock",
      year: "Sep 2025 – Mar 2026",
      title: "Personal Project",
      subtitle: "Notion Stock Tracker — Python Automation",
      type: "project",
      description:
          "Built a Python automation tool that scrapes live stock and fund prices from Globes (Israeli financial news) and automatically syncs them to linked Notion pages via the Notion API. Iterated on the tool with small updates over several months.",
      highlights: [
        "Selenium + BeautifulSoup scraping with a fallback method for reliability",
        "Continuous update mode with configurable polling interval and CSV price logging",
        "Skips unnecessary Notion API calls when the price hasn't changed",
      ],
      tech: ["Python", "Selenium", "BeautifulSoup", "Notion API"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/JordanDaudu/NotionStockTracker",
          icon: "github",
        },
      ],
    },
    {
      id: "exp-pathfinding",
      year: "Feb 2026",
      title: "Personal Project",
      subtitle: "Pathfinding Visualizer — Python / Pygame",
      type: "project",
      description:
          "Built an interactive pathfinding algorithm visualizer in Python, supporting 7 algorithms (BFS, DFS, Dijkstra, Bellman-Ford, A*, IDA*, Greedy Best-First) on a weighted grid with real-time visualization, wall drawing, and a live Algorithm Theory panel.",
      highlights: [
        "7 algorithms with live grid visualization and adjustable speed control",
        "Weighted tiles, wall drawing, and a debug overlay mode",
        "Algorithm Theory panel showing time/space complexity and observed run stats per run",
      ],
      tech: ["Python", "Pygame", "Algorithms", "Graph Theory"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/JordanDaudu/Pathfinding_visualizer",
          icon: "github",
        },
      ],
    },
    {
      id: "exp-aethon",
      year: "2023 – 2024",
      title: "Engine Architect",
      subtitle: "Dungeons & Dragons — Java RPG",
      type: "project",
      description:
          "Architected a custom Java co-op RPG engine from the ground up for the Advanced OOP course at SCE. Handled complex threading, networking logic, and comprehensive game state management.",
      highlights: [],
      tech: ["Java", "Swing", "OOP", "Threading"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/JordanDaudu/Dungeons_And_Dragons",
          icon: "github",
        },
      ],
    },
  ],

  languages: [
    { name: "Hebrew",  level: "Native"     },
    { name: "English", level: "Proficient" },
    { name: "French",  level: "Proficient" },
  ],
};
