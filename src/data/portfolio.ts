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
      category: "Languages",
      items: [
        { name: "Java",     icon: DEVICON("java")       },
        { name: "Python",   icon: DEVICON("python")     },
        { name: "C++",      icon: DEVICON("cplusplus")  },
        { name: "C#",       icon: DEVICON("csharp")     },
        { name: "GDScript", icon: DEVICON("godot")      },
        { name: "HTML",     icon: DEVICON("html5")      },
      ],
    },
    {
      category: "Frameworks & Engines",
      items: [
        { name: "Unity",   icon: DEVICON("unity")          },
        { name: "PyTorch", icon: DEVICON("pytorch")        },
        { name: ".NET",    icon: DEVICON("dot-net", "plain") },
        { name: "OpenCV",  icon: DEVICON("opencv")         },
        { name: "NumPy",   icon: DEVICON("numpy")          },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git",       icon: DEVICON("git")                  },
        { name: "GitHub",    icon: DEVICON("github")               },
        { name: "Jira",      icon: DEVICON("jira", "plain")        },
        { name: "JetBrains", icon: "https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg" },
        { name: "Replit",    icon: "https://cdn.simpleicons.org/replit/FF3C00" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: DEVICON("postgresql") },
      ],
    },
    {
      category: "Core Concepts",
      items: [
        { name: "Object Oriented Programming", icon: null },
        { name: "Algorithms",                  icon: null },
        { name: "Data Structures",             icon: null },
        { name: "System Design",               icon: null },
        { name: "Critical Thinking",           icon: null },
        { name: "Teamwork",                    icon: null },
        { name: "Time Management",             icon: null },
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
      githubUrl: "https://github.com/JordanDaudu/Nomad-Protocol-Aeterra-Website",
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

    // ── Other Projects (newest to oldest) ───────────────────────────────────
    {
      id: "nomad-protocol-website",
      title: "AETERRA Devlog Website",
      subtitle: "React + TypeScript + Express — Game Archive",
      category: "Web Dev",
      featured: false,
      thumbnail: "/images/project-aeterra-website.jpg",
      description:
        "A dedicated devlog, lore archive, and media gallery website for Nomad Protocol: AETERRA. Built with React, TypeScript, Vite, and Express.js, using a file-based CMS where Markdown files automatically appear on the site. Styled with Tailwind CSS v4.",
      tech: ["React", "TypeScript", "Vite", "Express.js", "Tailwind CSS", "Markdown"],
      highlights: [
        "File-based CMS: drop Markdown files in folders and they appear on the site automatically",
        "Devlogs, game systems docs, lore archive, and media gallery sections",
        "Custom design system with ambient interactive backgrounds",
      ],
      githubUrl: "https://github.com/JordanDaudu/Nomad-Protocol-Aeterra-Website",
      demoUrl: "",
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
    },
    {
      id: "exp-nomad",
      year: "2024 – Present",
      title: "Lead Developer (Solo)",
      subtitle: "Nomad Protocol: AETERRA",
      type: "project",
      description:
        "Designing and building a modular Unity/C# 3D shooter from scratch. Focused on scalable, maintainable architecture with clean decoupling between systems.",
      highlights: [],
    },
    {
      id: "exp-aeterra-website",
      year: "2024 – Present",
      title: "Personal Project",
      subtitle: "AETERRA Devlog Website — React / TypeScript / Express",
      type: "project",
      description:
        "Designed and built a full-stack devlog, lore archive, and media gallery website for Nomad Protocol: AETERRA, running alongside the game's development. Uses a file-based CMS where Markdown files automatically populate the site.",
      highlights: [
        "React + TypeScript + Vite frontend with a Node.js/Express backend",
        "File-based CMS: drop Markdown files in a folder, they appear on the site automatically",
        "Tailwind CSS v4 design system with ambient interactive backgrounds",
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
  ],

  languages: [
    { name: "Hebrew",  level: "Native"     },
    { name: "English", level: "Proficient" },
    { name: "French",  level: "Proficient" },
  ],
};
