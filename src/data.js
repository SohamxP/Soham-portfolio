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
    date: "Expected Dec 2027",
    details: "GPA: 3.75",
  },
];

export const experience = [
  {
    title: "Software Developer Intern",
    company: "E-Sutra Technologies",
    date: "Jun 2026 — Present",
    location: "Mumbai, India · Remote",
    points: [
      "Drove the stabilization of critical application workflows by resolving cross-layer failures spanning backend services, API integrations, authentication, and database architecture.",
      "Hardened backend functionality by eliminating logic defects, strengthening validation, and correcting data-integrity issues that caused inconsistent application behavior.",
      "Led complex issue resolution from root-cause analysis to QA readiness, coordinating implementation, environment testing, regression validation, and release preparation.",
    ],
    impact: [
      "Cross-layer ownership",
      "API reliability",
      "Database integrity",
      "Release validation",
    ],
  },
];

export const projects = [
  {
    name: "CampusAI",
    subtitle: "AI Academic Productivity Platform",
    featured: true,
    status: "Featured Build",
    date: "May 2026 — Present",
    description:
      "A unified academic workspace that transforms course material into searchable notes, summaries, flashcards, document-based answers, and personalized tutoring conversations.",
    highlights: [
      {
        label: "Product",
        value:
          "Combined document management, AI-assisted studying, and persistent learning history into one focused workflow.",
      },
      {
        label: "Engineering",
        value:
          "Built reusable service layers for authentication, uploads, model requests, response parsing, and resilient error handling.",
      },
      {
        label: "Data",
        value:
          "Designed structured models for users, files, generated study resources, and conversation history across web and mobile experiences.",
      },
    ],
    tech: [
      "React Native",
      "Next.js",
      "Node.js",
      "TypeScript",
      "OpenAI API",
    ],
    github: "https://github.com/SohamxP/campus-ai",
    demo: "",
  },
  {
    name: "Hotel Management Platform",
    subtitle: "Operations and Intelligence Platform",
    featured: false,
    status: "Completed",
    date: "Jan 2026 — May 2026",
    description:
      "An operations platform for reservations, guests, services, billing, reporting, payments, and AI-assisted management insights.",
    points: [
      "Designed a relational database spanning 12 entities with business-rule triggers and structured operational data.",
      "Developed service workflows for reservations, rooms, guests, billing, reporting, and payment processing.",
      "Added manager briefings, occupancy forecasting, revenue insights, and guest-recovery assistance.",
    ],
    tech: [
      "React Native",
      "Node.js",
      "Express",
      "SQLite",
      "OpenAI API",
      "Stripe",
    ],
    github: "https://github.com/SohamxP/hotel-management-app",
    demo: "",
  },
  {
    name: "RideWise",
    subtitle: "Smart Ride Comparison App",
    featured: false,
    status: "Maintained",
    date: "Oct 2025 — Present",
    description:
      "A native ride-comparison application that estimates trip costs using route, distance, trip mode, and dynamic pricing inputs.",
    points: [
      "Built synchronized user sessions and route-based trip calculations.",
      "Developed a fare-comparison engine using distance, route, trip mode, and pricing variables.",
      "Separated data access, application logic, and interface responsibilities across distinct layers.",
    ],
    tech: ["Java", "Android SDK", "Firebase", "Google Maps API"],
    github: "https://github.com/SohamxP/ridewise",
    demo: "",
  },
];

export const skills = [
  {
    category: "Languages",
    description:
      "Core languages used across application, backend, and data work.",
    items: ["Java", "JavaScript", "TypeScript", "SQL", "Python", "C/C++"],
  },
  {
    category: "Frameworks",
    description:
      "Tools used to build user-facing products and backend services.",
    items: [
      "Spring Boot",
      "React Native",
      "React",
      "Next.js",
      "Node.js",
      "Express",
    ],
  },
  {
    category: "Data & Cloud",
    description:
      "Relational systems, hosted services, and application infrastructure.",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Firebase",
      "Supabase",
      "Vercel",
      "Render",
    ],
  },
  {
    category: "Engineering Tools",
    description:
      "Development, testing, collaboration, and delivery tooling.",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Swagger",
      "Jira",
      "Figma",
    ],
  },
];