export const profile = {
  name: "Soham Panchal",
  role: "Software Developer",
  location: "Arlington, TX",
  email: "work.panchalsoham@gmail.com",
  linkedin: "https://linkedin.com/in/soham-panchal/",
  github: "https://github.com/SohamxP",
  resume: "/resume.pdf",
};

export const education = [
  {
    school: "University of Texas at Arlington",
    degree: "Honors Bachelor of Science in Computer Science",
    location: "Arlington, TX",
    date: "Expected May 2028",
    details: "Minor in Mathematics · GPA: 3.75",
  },
];

export const experience = [
  {
    title: "Software Developer Intern",
    company: "E-Sutra Technologies",
    date: "Jun 2026 — Aug 2026",
    location: "Mumbai, India",
    points: [
      "Took ownership of stabilizing production backend workflows, tracing defects across REST APIs, authentication, SQL queries, relational data, and request/response handling to resolve failures at their source.",
      "Strengthened backend reliability through request validation, centralized error handling, and data-integrity checks, resolving server exceptions, inconsistent API responses, missing records, and invalid relational states.",
      "Performed end-to-end root-cause analysis and regression testing across application and database layers, collaborating with developers and QA to validate fixes before production release.",
    ],
    impact: [
      "Backend reliability",
      "Root-cause analysis",
      "API & authentication workflows",
      "Regression testing",
    ],
  },
];

export const projects = [
  {
    name: "PlyForge",
    subtitle: "Java Chess Engine & Interactive Game Review",
    featured: false,
    status: "Live",
    date: "Oct 2026 — Present",
    description:
      "A full-stack chess application built around a custom Java engine, with a responsive React interface for human-versus-computer play and a separate, browser-based Stockfish review experience.",
    points: [
      "Implemented chess rules and legal move validation in Java, including castling, promotion, en passant, checkmate, and draw conditions, exposed through Spring Boot APIs.",
      "Developed a custom AI opponent with iterative deepening, negamax, alpha-beta pruning, quiescence search, and a history-aware transposition table.",
      "Built a React/TypeScript game with SAN notation, move replay, captured pieces, and a separate Stockfish-powered review page; tested with Java, frontend, and Playwright suites.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Stockfish.js",
      "Playwright",
      "Docker",
    ],
    github: "https://github.com/SohamxP/chess-engine",
    demo: "https://openfile-chess.onrender.com/",
  },
  {
    name: "CampusAI",
    subtitle: "AI Academic Productivity Platform",
    featured: false,
    status: "Completed",
    date: "May 2026 — Sep 2026",
    description:
      "A deployed full-stack RAG study platform that turns uploaded course PDFs into searchable, source-grounded learning material through document ingestion, retrieval, reranking, and AI-assisted study workflows.",
    points: [
      "Built a full-stack RAG study platform using PDF ingestion, PostgreSQL/pgvector, hybrid semantic and keyword search, and Cross-Encoder reranking.",
      "Evaluated retrieval on 42 labeled questions, improving Recall@1 from 64.29% to 85.71% and MRR from 0.745 to 0.900.",
      "Implemented course-scoped question answering with citations, flashcards, quizzes, mastery tracking, automated tests, and CI.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "pgvector",
      "Supabase",
    ],
    github: "https://github.com/SohamxP/campus-ai",
    demo: "https://campus-ai-peach.vercel.app",
  },
  {
    name: "Hotel Management Platform",
    subtitle: "Full-Stack Hotel Operations Platform",
    featured: false,
    status: "Completed",
    date: "Jan 2026 — May 2026",
    description:
      "A production-style hotel operations platform for reservations, guests, services, billing, reporting, payments, and role-aware workflows across a React Native client and deployed Express API.",
    points: [
      "Implemented JWT authentication with Manager/Front Desk RBAC plus date-aware room availability and interval-overlap validation to prevent conflicting or blocked-room reservations.",
      "Migrated persistence from SQLite to PostgreSQL with Prisma migrations, repository/service architecture, Zod validation, database transactions, and PostgreSQL-backed integration tests.",
      "Integrated Stripe Checkout with signature-verified webhooks and deployed the Dockerized API on Render with Supabase PostgreSQL and GitHub Actions CI.",
    ],
    tech: [
      "React Native",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Docker",
    ],
    github: "https://github.com/SohamxP/hotel-management-app",
    demo: "",
  },
  {
    name: "RideWise",
    subtitle: "ML Ride Decision Platform",
    featured: false,
    status: "Completed",
    date: "Oct 2025 — Dec 2025",
    description:
      "An Android ride-decision platform that combines traffic-aware routing with NYC-trained machine-learning models to estimate historical Uber and Lyft fares and recommend whether to ride now, wait, or walk to a nearby pickup point.",
    points: [
      "Trained provider-specific XGBoost fare models on approximately 1.5M NYC TLC high-volume for-hire trip records using a chronological validation split, achieving R² of 0.835 for Uber and 0.894 for Lyft with MAEs of $4.90 and $3.15.",
      "Built Wait & Save and Walk Nearby decision algorithms using future departure windows, alternate pickup locations, taxi-zone resolution, and traffic-aware driving and walking routes.",
      "Deployed the FastAPI prediction service on Google Cloud Run and integrated Firebase Authentication, Cloud Firestore, Google Routes, and provider deep links in the native Android client.",
    ],
    tech: [
      "Java",
      "FastAPI",
      "XGBoost",
      "Firebase",
      "Google Cloud Run",
      "Google Routes",
    ],
    github: "https://github.com/SohamxP/ridewise",
    demo: "",
  },
];

export const skills = [
  {
    category: "Languages",
    description:
      "Languages used across backend, web, mobile, machine learning, and systems coursework.",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C/C++"],
  },
  {
    category: "Frameworks & Libraries",
    description:
      "Frameworks and libraries used to build application, API, and machine-learning systems.",
    items: [
      "Next.js",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "FastAPI",
      "Spring Boot",
      "XGBoost",
      "scikit-learn",
      "Prisma",
    ],
  },
  {
    category: "Data & AI",
    description:
      "Databases, vector infrastructure, hosted data services, and AI integrations.",
    items: [
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "Supabase",
      "Firebase",
      "OpenAI API",
    ],
  },
  {
    category: "Testing & DevOps",
    description:
      "Tooling for automated validation, integration testing, CI, and repeatable delivery.",
    items: [
      "Pytest",
      "Vitest",
      "Playwright",
      "Supertest",
      "GitHub Actions",
      "Docker",
      "Postman",
    ],
  },
  {
    category: "Cloud & APIs",
    description:
      "Cloud deployment and external platforms used in production-style project workflows.",
    items: [
      "Google Cloud Run",
      "Render",
      "Vercel",
      "Stripe",
      "Google Maps Platform",
    ],
  },
  {
    category: "Core Engineering",
    description:
      "Concepts I apply when designing reliable data, backend, and intelligent application systems.",
    items: [
      "Data Structures & Algorithms",
      "Game Tree Search",
      "Alpha-Beta Pruning",
      "Machine Learning",
      "RAG",
      "Vector Search",
      "API Design",
      "Database Transactions",
      "Relational Database Design",
    ],
  },
];
