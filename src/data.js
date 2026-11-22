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
  'At E-Sutra Technologies, I investigated production failures across APIs, authentication, SQL, and backend services, then tested fixes through the application and database layers.',
  'Lately, I have been working on retrieval quality in CampusAI and a full-stack chess engine with a local, privacy-first game review and training experience.',
];

export const experience = [
  {
    company: 'E-Sutra Technologies',
    initials: 'ES',
    title: 'Software Developer Intern',
    location: 'Mumbai, India',
    type: 'Internship',
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
  degree: 'B.S. in Computer Science · Minor in Mathematics',
  period: 'Expected 05.2028',
  location: 'Arlington, Texas',
  details: ['GPA: 3.75 / 4.00 · Highest Honors', 'Data Structures & Algorithms, Database Systems, Operating Systems, Software Engineering'],
  tags: ['Computer Science', 'Mathematics', 'Software Engineering'],
};

export const projects = [
  {
    name: 'PlySense',
    subtitle: 'Chess engine & personal improvement platform',
    period: '2026 — Present',
    status: 'Live',
    description: 'Play against a custom Java chess engine, review decisions with local Stockfish, and turn mistakes into spaced-recall practice.',
    points: [
      'Built a Java search engine with legal move generation, alpha-beta pruning, iterative deepening, quiescence search, and transposition caching.',
      'Developed a React and TypeScript interface with FIDE notation, private browser-based game storage, and move review.',
      'Added mistake-pattern analysis and a Decision Lab for practicing better moves without an AI API or cloud account.',
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
      'Built authenticated, course-scoped document management and asynchronous processing with Next.js and FastAPI.',
    ],
    tags: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'RAG'],
  },
  {
    name: 'Hotel Management Platform',
    subtitle: 'Hotel operations & reservations',
    period: '01.2026 — 05.2026',
    description: 'A full-stack operations application for reservations, guests, billing, and reporting, built around real hotel workflows.',
    points: [
      'Implemented manager and front-desk permissions, JWT authentication, and mobile reservation workflows.',
      'Prevented overlapping bookings using PostgreSQL/Prisma constraints and transactional reservation creation.',
      'Integrated Stripe Checkout with verified webhooks and deployed the Dockerized API to Render.',
    ],
    tags: ['React Native', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe'],
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
  { name: 'Next.js', icon: 'nextjs/nextjs-original.svg', invert: true },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'express/express-original.svg', invert: true },
  { name: 'FastAPI', icon: 'fastapi/fastapi-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'Supabase', icon: 'supabase/supabase-original.svg' },
  { name: 'Firebase', icon: 'firebase/firebase-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
  { name: 'GitHub', icon: 'github/github-original.svg', invert: true },
  { name: 'Google Cloud', icon: 'googlecloud/googlecloud-original.svg' },
];