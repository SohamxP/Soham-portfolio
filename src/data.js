export const profile = {
  name: 'Soham Panchal',
  headline: 'Software Engineer · Full-Stack & AI',
  tagline: 'I like building things that hold up beyond the demo.',
  location: 'Arlington, Texas, USA',
  email: 'work.panchalsoham@gmail.com',
  github: 'https://github.com/SohamxP',
  linkedin: 'https://linkedin.com/in/soham-panchal',
  resume: '/resume.pdf',
};

export const about = [
  'Computer Science student at the University of Texas at Arlington, interested in the engineering behind reliable products — the APIs, data models, and systems that make the interface work.',
  'I build across the stack with Java, Python, TypeScript, React, Next.js, PostgreSQL, and cloud services. I enjoy taking a feature all the way from an idea to something people can actually use.',
  'During my summer 2026 internship at E-Sutra Technologies, I investigated production failures across APIs, authentication, SQL, and backend services, and validated fixes across the application and database layers.',
  'Lately, I have been building PlySense, a chess improvement platform with a custom Java engine, local Stockfish game review, and private, adaptive training based on mistakes from your own games.',
];

export const experience = [
  {
    company: 'E-Sutra Technologies',
    initials: 'ES',
    logo: 'https://e-sutra.com/api/settings/logo?type=light',
    title: 'Software Developer Intern',
    location: 'Mumbai, India',
    type: 'Completed internship',
    period: '06.2026 — 08.2026',
    duration: '3 months',
    points: [
      'Traced production defects through REST APIs, authentication, SQL queries, and relational data to fix failures at their source.',
      'Improved request validation, error handling, and data-integrity checks to reduce inconsistent responses and invalid states.',
      'Worked with developers and QA on end-to-end regression testing and release validation.',
    ],
    tags: ['REST APIs', 'SQL', 'Backend', 'Authentication', 'Testing'],
  },
];

export const education = {
  school: 'University of Texas at Arlington',
  initials: 'UTA',
  logo: 'https://cdn.prod.web.uta.edu/-/media/project/website/hr/images/belonging-engagement/erg/new-initials-logo.jpg?hash=1F856F32B7DC6579C3BC4B0BBF4BE427&mw=1050&rev=d1570e2789914c5ebd799204e9fc54c5&revision=d1570e27-8991-4c5e-bd79-9204e9fc54c5',
  degree: 'B.S. in Computer Science · Minor in Mathematics',
  period: 'Expected 05.2028',
  location: 'Arlington, Texas',
  details: ['GPA: 3.75 / 4.00 · Highest Honors'],
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Operating Systems',
    'Database Systems',
    'Computer Network Organization',
    'Artificial Intelligence',
    'Neural Networks & Deep Learning',
  ],
};

export const projects = [
  {
    name: 'PlySense',
    subtitle: 'Chess engine & personal improvement platform',
    period: '10.2026 — 11.2026',
    description: 'Play against a custom Java chess engine, review decisions with local Stockfish, and turn mistakes into spaced-recall practice.',
    points: [
      'Implemented iterative deepening, negamax, alpha-beta pruning, quiescence search, and transposition tables; validated legal move generation against canonical perft positions.',
      'Reduced median depth-2 search latency by 24–29% across three CI benchmarks (seven runs each) while preserving moves and scores.',
      'Built React/Spring Boot gameplay, PGN import, local Stockfish review, mistake-pattern detection, and adaptive practice.',
      'Moved game storage to IndexedDB (2,000-game capacity) with JSON backup/restore; tested with JUnit, Vitest, Playwright, and Docker CI.',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Stockfish', 'Docker'],
    github: 'https://github.com/SohamxP/chess-engine',
    demo: 'https://openfile-chess.onrender.com/',
  },
  {
    name: 'CampusAI',
    subtitle: 'AI academic productivity platform',
    period: '05.2026 — 06.2026',
    description: 'A document-grounded study workspace that turns course PDFs into searchable notes, questions, flashcards, and quizzes.',
    points: [
      'Built a RAG retrieval pipeline with page-aware PDF chunking, pgvector, hybrid keyword/semantic search, and Cross-Encoder reranking.',
      'Measured retrieval on 42 labeled questions: 85.71% Recall@1, 97.62% Recall@5, and 0.900 MRR.',
      'Built asynchronous PDF ingestion, course-scoped document management, flashcard and quiz generation, mastery tracking, and authenticated ownership controls.',
      'Added automated API, retrieval, PDF-processing, authentication, and generation tests with GitHub Actions CI.',
    ],
    tags: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'RAG'],
    github: 'https://github.com/SohamxP/campus-ai',
    demo: 'https://campus-ai-peach.vercel.app',
  },
  {
    name: 'Hotel Management Platform',
    subtitle: 'Hotel operations & reservations',
    period: '01.2026 — 05.2026',
    description: 'A full-stack operations application for reservations, guests, billing, and reporting, built around real hotel workflows.',
    points: [
      'Implemented manager and front-desk permissions, JWT authentication, and mobile reservation workflows.',
      'Prevented overlapping bookings using PostgreSQL/Prisma constraints and transactional reservation creation.',
      'Built database-backed reservation workflows with repository/service architecture and integration tests for authentication, booking conflicts, cancellation, and transaction rollback.',
      'Integrated Stripe Checkout with signature-verified webhooks and deployed the Dockerized API to Render with Supabase PostgreSQL.',
    ],
    tags: ['React Native', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe'],
    github: 'https://github.com/SohamxP/hotel-management-app',
  },
  {
    name: 'RideWise',
    subtitle: 'ML-powered ride decision app',
    period: '10.2025',
    description: 'An Android app that uses route information and historical NYC trip data to compare estimated ride prices and smarter pickup options.',
    points: [
      'Trained XGBoost fare-estimation models on about 1.5 million NYC high-volume for-hire trip records.',
      'Built Wait & Save and Walk Nearby recommendations using traffic-aware driving and walking routes.',
      'Integrated Google Routes, geospatial taxi-zone processing, Firebase, and FastAPI.',
    ],
    tags: ['Java', 'Android', 'Python', 'XGBoost', 'FastAPI', 'Google Maps'],
    github: 'https://github.com/SohamxP/RideWise',
  },
];

export const stack = [
  { name: 'Java', icon: 'java/java-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'Spring Boot', icon: 'spring/spring-original.svg' },
  { name: 'Next.js', icon: 'nextjs/nextjs-original.svg', invert: true },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'express/express-original.svg', invert: true },
  { name: 'FastAPI', icon: 'fastapi/fastapi-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'mysql/mysql-original.svg' },
  { name: 'Supabase', icon: 'supabase/supabase-original.svg' },
  { name: 'Firebase', icon: 'firebase/firebase-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
  { name: 'GitHub', icon: 'github/github-original.svg', invert: true },
  { name: 'Google Cloud', icon: 'googlecloud/googlecloud-original.svg' },
];
// Tool icons are visual identifiers, not a claim of endorsement or partnership.
export const aiTools = [
  { name: 'Codex', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/openai.svg', invert: true },
  { name: 'Claude', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/claude.svg', invert: true },
  { name: 'Gemini', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/googlegemini.svg', invert: true },
];
