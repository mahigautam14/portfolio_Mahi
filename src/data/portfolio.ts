export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  year: string;
  genres: string[];
  tech: string[];
  description: string;
  bullets: string[];
  keyFeatures: string[];
  metrics: ProjectMetric[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  gradient: string;
  iconType: 'ai' | 'analytics' | 'iot';
}

export interface Episode {
  ep: string;
  num: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
}

export interface Season {
  id: string;
  code: string;
  tabTitle: string;
  tabSubtitle: string;
  headline: string;
  meta: string;
  description: string;
  episodes: Episode[];
}

export interface SkillItem {
  code: string;
  name: string;
  primary?: boolean;
  evidence: string;
}

export interface SkillCategory {
  id: string;
  genre: string;
  countLabel: string;
  tagline: string;
  items: SkillItem[];
}

export interface Achievement {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  certificateUrl?: string;
  certificateImage?: string;
}

export interface Certification {
  id: string;
  issuer: string;
  title: string;
  category: string;
  credentialId?: string;
  url?: string;
  certificateImage?: string;
}

export interface TopPick {
  rank: number;
  kicker: string;
  title: string;
  caption: string;
  targetSection: string;
  gradient: string;
}

export interface IntroSlide {
  epLabel: string;
  title: string;
  line1: string;
  line2: string;
  pills?: string[];
}

export interface ViewerProfile {
  id: 'mahi' | 'recruiter' | 'developer' | 'creative';
  name: string;
  badge?: string;
  icon: string;
  tagline: string;
  bgClass: string;
  sectionOrder: string[];
}

export const profile = {
  name: 'MAHI',
  fullName: 'Mahi',
  seriesTitle: 'MAHI — THE SERIES',
  originalLabel: 'A MAHI ORIGINAL',
  badgeLetter: 'M',
  headline: 'SOFTWARE ENGINEER • FULL-STACK • AI & C/C++',
  heroBio:
    'Software Engineer pursuing MCA at National Institute of Technology Raipur with a strong foundation in C/C++, Python, OOP, Operating Systems, Multi-threading, Cloud Computing, and full-stack AI applications.',
  aboutQuote:
    '“A Software Engineer pursuing MCA at NIT Raipur building real-time streaming AI applications, GitHub analytics platforms, and multi-threaded ESP32 hardware-software sensing pipelines with C/C++, Python, FastAPI, React, and Next.js.”',
  summary:
    'Software Engineer pursuing MCA with a strong foundation in C/C++, Python, Object-Oriented Programming (OOP), Cloud Computing and REST APIs. Solid understanding of Operating Systems and multi-threading concepts, along with Agile development practices. Experienced in building full-stack applications, including AI-integrated tools (LLMs/FastAPI) and hardware-software pipelines (ESP32). Focused on problem-solving, debugging, and developing reliable software solutions.',
  location: 'Noida, Uttar Pradesh',
  collegeLocation: 'Raipur, Chhattisgarh, India',
  phone: '+91-7991264930',
  email: 'mahigautam7991@gmail.com',
  github: 'https://github.com/mahigautam14',
  githubHandle: 'mahigautam14',
  linkedin: 'https://www.linkedin.com/in/mahi-gautam-7b6508252/',
  linkedinHandle: 'mahi-gautam-7b6508252',
  resumeUrl: '/assets/Mahi_Resume.pdf',
  mercorCertImage: '/assets/mercor-certificate.webp',
  mercorCertVerifyUrl: 'https://work.mercor.com/learn/verify/MRC-2026-B82G48PB',
  mercorCertId: 'MRC-2026-B82G48PB',
  portraitWebp480: '/assets/portrait-480.webp',
  portraitWebp720: '/assets/portrait-720.webp',
  portraitWebp1080: '/assets/portrait-1080.webp',
  portraitFallback: '/assets/portrait.png',
  metaRow: ['2024 – Present', 'MCA @ NIT Raipur', '3 Originals', '4 Certifications'],
  heroFloatingCards: [
    { title: 'MCA @ NIT Raipur', sub: 'AUG 2024 – PRESENT', pos: 'top-left' },
    { title: 'Mercor AI Certified', sub: 'AI AGENT EVALUATION', pos: 'top-right' },
    { title: 'Python • FastAPI • React', sub: 'FULL-STACK & AI', pos: 'bottom-right' }
  ],
  aboutMetaGrid: [
    { label: 'NOW', value: 'MCA @ NIT Raipur', sub: 'National Institute of Technology Raipur (2024 – Present)' },
    { label: 'PREVIOUS DEGREE', value: 'B.Sc., Bundelkhand Univ.', sub: 'July 2021 – July 2024 • Jhansi, India' },
    { label: 'PRIMARY LANGUAGES', value: 'C / C++ & Python', sub: 'with Java, JavaScript, SQL' },
    { label: 'BASED IN', value: 'Noida & Raipur', sub: 'India' }
  ],
  interests: [
    'Full-Stack Development',
    'AI Agents & LLMs (FastAPI / Groq)',
    'Operating Systems & Multi-Threading',
    'Cloud Computing & DevOps',
    'Hardware-Software Pipelines (ESP32)'
  ],
  screenplayStats: [
    { value: '150+', label: 'DSA SOLVED' },
    { value: '3', label: 'ORIGINALS' },
    { value: '4', label: 'CERTS' }
  ]
};

export const viewerProfiles: ViewerProfile[] = [
  {
    id: 'mahi',
    name: 'Mahi',
    badge: 'MAIN',
    icon: 'PORTRAIT',
    tagline: 'The full series, in order',
    bgClass: 'from-red-900/80 to-zinc-900',
    sectionOrder: ['explore', 'about', 'journey', 'originals', 'top10', 'skills', 'achievements', 'screenplay']
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    icon: 'R',
    tagline: 'Resume, achievements & skills first',
    bgClass: 'from-sky-900/80 to-slate-900',
    sectionOrder: ['explore', 'originals', 'achievements', 'screenplay', 'skills', 'journey', 'top10', 'about']
  },
  {
    id: 'developer',
    name: 'Developer',
    icon: '</>',
    tagline: 'Projects, stack & GitHub first',
    bgClass: 'from-emerald-900/80 to-zinc-900',
    sectionOrder: ['originals', 'skills', 'explore', 'top10', 'achievements', 'journey', 'about', 'screenplay']
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: '✦',
    tagline: 'The story as a highlight reel',
    bgClass: 'from-amber-800/80 to-zinc-900',
    sectionOrder: ['about', 'journey', 'originals', 'top10', 'achievements', 'skills', 'explore', 'screenplay']
  }
];

export const introSlides: IntroSlide[] = [
  {
    epLabel: 'EPISODE 01 • EDUCATION',
    title: 'MCA • NIT RAIPUR',
    line1: 'National Institute of Technology Raipur',
    line2: 'August 2024 – Present • Raipur, India',
    pills: ['MCA @ NIT Raipur', 'B.Sc. @ Bundelkhand University']
  },
  {
    epLabel: 'EPISODE 02 • SKILLS',
    title: 'C/C++ & PYTHON.',
    line1: 'C, C++, Python, Java, JavaScript, SQL • React, Next.js, FastAPI, Node.js',
    line2: 'PostgreSQL, MongoDB, MySQL • Docker, Kubernetes, Linux, REST, JWT',
    pills: ['C/C++', 'Python', 'FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Docker']
  },
  {
    epLabel: 'EPISODE 03 • AI & FULL-STACK TRAINING',
    title: 'THE TRAINING ARC',
    line1: 'Mercor “Introduction to Agents” Certified • MySirG C++ DSA Bootcamp',
    line2: 'iNeuron Full Stack Web Development (Agile) • HackerRank Problem Solving',
    pills: ['Mercor AI Agents', 'MySirG C++ OOP', 'iNeuron Full-Stack', 'HackerRank']
  },
  {
    epLabel: 'EPISODE 04 • PROJECTS',
    title: 'THREE ORIGINALS',
    line1: 'AskLio AI Chatbot — Groq LLaMA, FastAPI, Real-Time SSE & PostgreSQL',
    line2: 'GitOrbit GitHub Tracker — Next.js, FastAPI, MongoDB Snapshots & REST API,Wi-Fi CSI Activity Recognition — ESP32 C++, Multi-Threaded Python GUI Logger'
  },
  {
    epLabel: 'EPISODE 05 • ACHIEVEMENTS',
    title: 'TOP MOMENTS',
    line1: '150+ DSA Problems Solved on LeetCode & GeeksforGeeks in C++ & Python',
    line2: 'Mercor AI Agent Evaluation Recognition (MRC-2026-B82G48PB) HackerRank Certified • MySirG C++ Pointers & OOP Mastery'
  },
  {
    epLabel: 'EPISODE 06 • CERTIFIED',
    title: '4 CERTIFICATIONS',
    line1: 'Mercor AI Agents • HackerRank Problem Solving • MySirG C++ DSA • iNeuron FSD',
    line2: 'Verified credentials across AI Agent Evaluation, Algorithms & Full-Stack Engineering'
  }
];

export const seasons: Season[] = [
  {
    id: 's01',
    code: 'SEASON 01',
    tabTitle: 'The Beginning',
    tabSubtitle: 'B.Sc. Foundation',
    headline: 'S01 BUILDING THE FOUNDATION',
    meta: '2021 – 2024 • 2 Episodes',
    description:
      'Three years of undergraduate science and programming fundamentals at Bundelkhand University, Jhansi.',
    episodes: [
      {
        ep: 'S01',
        num: 'EPISODE 01',
        title: 'B.SC. AT BUNDELKHAND UNIVERSITY',
        year: 'Jul 2021 – Jul 2024',
        summary:
          'Completed Bachelor of Science (B.Sc.) at Bundelkhand University, Jhansi, India, developing strong analytical and mathematical foundations.',
        tags: ['Bundelkhand University', 'B.Sc.', 'Jhansi, India']
      },
      {
        ep: 'S01',
        num: 'EPISODE 02',
        title: 'CORE PROGRAMMING & POINTERS',
        year: '2022 – 2024',
        summary:
          'Mastered C, C++, pointers, memory management, and Object-Oriented Programming (OOP) principles alongside SQL and core data structures.',
        tags: ['C', 'C++', 'OOP', 'Pointers', 'SQL']
      }
    ]
  },
  {
    id: 's02',
    code: 'SEASON 02',
    tabTitle: 'Enter: NIT Raipur',
    tabSubtitle: 'MCA Degree',
    headline: 'S02 ENTER: NIT RAIPUR (MCA)',
    meta: 'Aug 2024 – Present • 2 Episodes',
    description:
      'Pursuing Master of Computer Applications (MCA) at National Institute of Technology Raipur with focus on Operating Systems, Multi-threading, Cloud, and Full-Stack Engineering.',
    episodes: [
      {
        ep: 'S02',
        num: 'EPISODE 01',
        title: 'MCA AT NIT RAIPUR',
        year: 'Aug 2024 – Present',
        summary:
          'Admitted to National Institute of Technology Raipur for Master of Computer Applications (MCA), advancing in OS, Multi-threading, DSA, and Cloud Computing.',
        tags: ['NIT Raipur', 'MCA', 'Operating Systems', 'Multi-threading']
      },
      {
        ep: 'S02',
        num: 'EPISODE 02',
        title: 'ALGORITHMIC PROBLEM SOLVING',
        year: '2024 – Present',
        summary:
          'Solved 150+ Data Structures and Algorithms problems in C++ and Python on LeetCode and GeeksforGeeks and earned HackerRank Problem Solving certification.',
        tags: ['150+ DSA', 'LeetCode', 'GeeksforGeeks', 'HackerRank']
      }
    ]
  },
  {
    id: 's03',
    code: 'SEASON 03',
    tabTitle: 'Learning to Build',
    tabSubtitle: 'Bootcamps & AI Agents',
    headline: 'S03 INTENSIVE TRAINING & AI AGENTS',
    meta: '2024 – 2026 • 3 Episodes',
    description:
      'Mastering C++ DSA, Agile Full-Stack Web Development, and rigorous AI Agent Evaluation.',
    episodes: [
      {
        ep: 'S03',
        num: 'EPISODE 01',
        title: 'MYSIRG C++ DSA BOOTCAMP',
        year: 'Bootcamp',
        summary:
          'Successfully completed an intensive C++ DSA Bootcamp by MySirG, mastering Object-Oriented Programming principles, pointers, and algorithmic thinking.',
        tags: ['C++', 'DSA', 'OOP', 'MySirG']
      },
      {
        ep: 'S03',
        num: 'EPISODE 02',
        title: 'INEURON FULL STACK TRAINING',
        year: 'Agile FSD',
        summary:
          'Completed Full Stack Web Development training at iNeuron in an Agile learning environment covering React, Next.js, Node.js, FastAPI, and databases.',
        tags: ['React', 'Next.js', 'FastAPI', 'Agile', 'iNeuron']
      },
      {
        ep: 'S03',
        num: 'EPISODE 03',
        title: 'MERCOR AI AGENTS RECOGNITION',
        year: 'Oct 2026',
        summary:
          'Earned Certificate of Recognition from Mercor (MRC-2026-B82G48PB) for completing "Introduction to Agents", demonstrating rigor, calibration, and clarity in AI agent evaluation.',
        tags: ['Mercor', 'AI Agents', 'Evaluation', 'MRC-2026-B82G48PB']
      }
    ]
  },
  {
    id: 's04',
    code: 'SEASON 04',
    tabTitle: 'Building Real Products',
    tabSubtitle: '3 Originals',
    headline: 'S04 BUILDING REAL PRODUCTS',
    meta: '2025 – 2026 • 3 Episodes',
    description:
      'Three Originals — a real-time streaming LLM chatbot, a full-stack GitHub analytics platform, and an ESP32 Wi-Fi CSI human activity sensing pipeline.',
    episodes: [
      {
        ep: 'S04',
        num: 'EPISODE 01',
        title: 'THE AI BUILDER (ASKLIO AI)',
        year: '2025',
        summary:
          'Engineered AskLio AI Chatbot using Groq LLaMA and Python FastAPI with Server-Sent Events (SSE) token streaming, PostgreSQL chat history, and JWT auth.',
        tags: ['Python', 'FastAPI', 'React', 'Groq LLaMA', 'SSE']
      },
      {
        ep: 'S04',
        num: 'EPISODE 02',
        title: 'THE ARCHITECT (GITORBIT)',
        year: '2025',
        summary:
          'Built GitOrbit full-stack GitHub analytics dashboard with Next.js, FastAPI, MongoDB snapshot comparison, and append-only follow/unfollow event logs.',
        tags: ['Next.js', 'FastAPI', 'MongoDB', 'GitHub REST API']
      },
      {
        ep: 'S04',
        num: 'EPISODE 03',
        title: 'THE SYSTEMS ENGINEER (WI-FI CSI)',
        year: '2025',
        summary:
          'Designed an ESP32 Wi-Fi CSI human activity recognition pipeline with a multi-threaded real-time Python GUI logger using NumPy, Pandas, and Matplotlib.',
        tags: ['C++ (ESP32)', 'Python', 'Multi-threading', 'NumPy']
      }
    ]
  },
  {
    id: 's05',
    code: 'SEASON 05',
    tabTitle: "What's Next",
    tabSubtitle: 'Season Finale',
    headline: "S05 WHAT'S NEXT",
    meta: '2026 & Beyond • 1 Episode',
    description:
      'Ready to contribute to high-impact Software Engineering, Full-Stack, Backend (Python/FastAPI), and Systems/AI teams.',
    episodes: [
      {
        ep: 'S05',
        num: 'EPISODE 01',
        title: 'READY FOR THE NEXT PRODUCTION',
        year: 'Now Streaming',
        summary:
          'Bringing strong C/C++, Python, FastAPI, React/Next.js, Cloud/DevOps, and AI Agent Evaluation rigor to software engineering roles.',
        tags: ['Software Engineering', 'Full-Stack', 'AI Systems', 'Cloud & DevOps']
      }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'asklio-ai-chatbot',
    number: '01',
    title: 'ASKLIO AI CHATBOT',
    subtitle: 'REAL-TIME STREAMING LLM APPLICATION',
    tagline: 'AI • LLAMA • FASTAPI • SSE',
    year: '2025',
    genres: ['Full-Stack', 'AI / LLM', 'Real-Time SSE'],
    tech: ['Python', 'FastAPI', 'React', 'Groq API (AI)', 'PostgreSQL', 'JWT', 'Vercel'],
    description:
      'A ChatGPT-style AI application using Groq LLaMA and Python FastAPI with real-time Server-Sent Events (SSE) token streaming and persistent PostgreSQL history.',
    bullets: [
      'Engineered a ChatGPT-style AI application using AI tools (Groq LLaMA) and Python backend (FastAPI).',
      'Integrated Server-Sent Events (SSE) for real-time AI token streaming and managed persistent PostgreSQL chat history.',
      'Implemented secure JWT authentication and token-based session handling across REST API endpoints.'
    ],
    keyFeatures: [
      'Real-time AI token streaming via Server-Sent Events (SSE)',
      'Persistent multi-session chat history in PostgreSQL',
      'Secure JWT authentication & protected REST API endpoints',
      'Deployed live on Vercel for instant interactive streaming'
    ],
    metrics: [
      { value: 'SSE', label: 'real-time token stream' },
      { value: 'LLaMA', label: 'Groq AI inference' },
      { value: 'JWT', label: 'stateless session auth' },
      { value: 'PostgreSQL', label: 'persistent chat store' },
      { value: '100%', label: 'full-stack cloud deploy' }
    ],
    liveUrl: 'https://asklio-chat.vercel.app/',
    githubUrl: 'https://github.com/mahigautam14/AskLio-ai',
    accent: '#e50914',
    gradient: 'from-[#450a0a] via-[#18080a] to-[#09090d]',
    iconType: 'ai'
  },
  {
    id: 'gitorbit-github-tracker',
    number: '02',
    title: 'GITORBIT TRACKER',
    subtitle: 'GITHUB ANALYTICS & SNAPSHOT ENGINE',
    tagline: 'NEXT.JS • FASTAPI • MONGODB • REST API',
    year: '2025',
    genres: ['Full-Stack', 'Analytics SaaS', 'Cloud'],
    tech: ['Next.js', 'FastAPI', 'MongoDB', 'GitHub REST API', 'Vercel', 'Render'],
    description:
      'A full-stack GitHub analytics dashboard tracking followers, following, repository activity, and historical audience changes via MongoDB snapshot comparison.',
    bullets: [
      'Built a full-stack GitHub analytics dashboard to track followers, following, repository activity, and historical audience changes, deployed on Vercel (frontend) and Render (backend).',
      'Integrated GitHub REST API with token authentication to sync profile/repository data into MongoDB snapshots.',
      'Implemented snapshot comparison and append-only event logs to detect follow/unfollow events over time.',
      'Designed responsive dashboard UI with search, filters, and manual sync for real-time insights.'
    ],
    keyFeatures: [
      'Automated MongoDB snapshot diffing for follow/unfollow detection',
      'Append-only historical event logs for audience analytics',
      'GitHub REST API integration with token authentication',
      'Responsive Next.js dashboard with search, filters & manual sync'
    ],
    metrics: [
      { value: 'Next.js', label: 'responsive dashboard UI' },
      { value: 'FastAPI', label: 'async Python backend' },
      { value: 'MongoDB', label: 'snapshot diff engine' },
      { value: 'REST API', label: 'authenticated GitHub sync' },
      { value: '2 Clouds', label: 'Vercel + Render deploy' }
    ],
    liveUrl: 'https://git-orbit.vercel.app/',
    githubUrl: 'https://github.com/mahigautam14/GitOrbit',
    accent: '#f59e0b',
    gradient: 'from-[#422006] via-[#1c1208] to-[#09090d]',
    iconType: 'analytics'
  },
  {
    id: 'wifi-csi-har',
    number: '03',
    title: 'WI-FI CSI ACTIVITY RECOGNITION',
    subtitle: 'ESP32 HARDWARE-SOFTWARE SENSING PIPELINE',
    tagline: 'PYTHON • ESP32 C++ • MULTI-THREADING • NUMPY',
    year: '2025',
    genres: ['Systems & IoT', 'Multi-Threading', 'Signal Processing'],
    tech: ['C++ (ESP32)', 'Python', 'Multi-threading', 'NumPy', 'Pandas', 'Matplotlib'],
    description:
      'A hardware-software sensing pipeline using ESP32 Wi-Fi CSI to recognize human activities via signal processing and a non-blocking multi-threaded Python GUI logger.',
    bullets: [
      'Designed a hardware-software sensing pipeline using ESP32 Wi-Fi CSI to recognize human activities via signal processing.',
      'Developed a real-time Python GUI logger utilizing multi-threading to handle concurrent data capturing, labeling, and CSV storage without blocking the main process.',
      'Applied OOP principles to structure the data parsing logic for scalable and reproducible dataset generation.'
    ],
    keyFeatures: [
      'ESP32 Wi-Fi Channel State Information (CSI) signal capture in C++',
      'Concurrent multi-threaded Python GUI logger for zero-block I/O',
      'Real-time activity labeling & automated CSV dataset generation',
      'OOP-structured signal parsing with NumPy, Pandas & Matplotlib'
    ],
    metrics: [
      { value: 'ESP32', label: 'Wi-Fi CSI hardware sensing' },
      { value: 'Multi-Thread', label: 'non-blocking Python GUI' },
      { value: 'OOP', label: 'modular parser architecture' },
      { value: 'NumPy', label: 'real-time signal processing' },
      { value: 'CSV', label: 'reproducible ML datasets' }
    ],
    githubUrl: 'https://github.com/mahigautam14',
    accent: '#10b981',
    gradient: 'from-[#064e3b] via-[#091e1a] to-[#09090d]',
    iconType: 'iot'
  }
];

export const topPicks: TopPick[] = [
  {
    rank: 1,
    kicker: 'PRIMARY SYSTEMS & AI',
    title: 'C/C++ & PYTHON',
    caption: 'Core languages powering ESP32 firmware, 150+ DSA solutions, and FastAPI AI backends.',
    targetSection: 'skills',
    gradient: 'from-amber-950/70 to-zinc-950'
  },
  {
    rank: 2,
    kicker: 'THE #1 ORIGINAL',
    title: 'ASKLIO AI CHATBOT',
    caption: 'Groq LLaMA + FastAPI + React with real-time SSE token streaming & PostgreSQL.',
    targetSection: 'originals',
    gradient: 'from-red-950/80 to-zinc-950'
  },
  {
    rank: 3,
    kicker: 'VERIFIED AI CREDENTIAL',
    title: 'MERCOR AI AGENTS',
    caption: 'Certificate of Recognition (MRC-2026-B82G48PB) in AI agent evaluation rigor & calibration.',
    targetSection: 'achievements',
    gradient: 'from-purple-950/80 to-zinc-950'
  },
  {
    rank: 4,
    kicker: 'ANALYTICS SAAS',
    title: 'GITORBIT TRACKER',
    caption: 'Next.js + FastAPI + MongoDB snapshot comparison engine for GitHub activity.',
    targetSection: 'originals',
    gradient: 'from-emerald-950/80 to-zinc-950'
  },
  {
    rank: 5,
    kicker: 'POSTGRADUATE DEGREE',
    title: 'MCA @ NIT RAIPUR',
    caption: 'Master of Computer Applications at National Institute of Technology Raipur (2024–Present).',
    targetSection: 'journey',
    gradient: 'from-sky-950/80 to-zinc-950'
  },
  {
    rank: 6,
    kicker: 'HARDWARE-SOFTWARE PIPELINE',
    title: 'WI-FI CSI SENSING',
    caption: 'ESP32 C++ & multi-threaded Python GUI logger for human activity recognition.',
    targetSection: 'originals',
    gradient: 'from-teal-950/80 to-zinc-950'
  },
  {
    rank: 7,
    kicker: 'ALGORITHMIC MASTERY',
    title: '150+ DSA SOLVED',
    caption: 'Solved 150+ DSA problems in C++ & Python across LeetCode and GeeksforGeeks.',
    targetSection: 'achievements',
    gradient: 'from-rose-950/80 to-zinc-950'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    genre: 'LANGUAGES',
    countLabel: '6 skills • C/C++ & Python are primary',
    tagline: 'Languages — C/C++ & Python are the primary languages',
    items: [
      { code: 'C++', name: 'C++', primary: true, evidence: 'ESP32 CSI firmware • 150+ DSA problems • MySirG C++ DSA Bootcamp' },
      { code: 'PY', name: 'Python', primary: true, evidence: 'AskLio AI • GitOrbit FastAPI • Wi-Fi CSI Multi-threaded GUI' },
      { code: 'C', name: 'C', evidence: 'Systems programming • pointers & memory management' },
      { code: 'JV', name: 'Java', evidence: 'Object-Oriented Programming & backend development' },
      { code: 'JS', name: 'JavaScript', evidence: 'Interactive web frontends in React & Next.js' },
      { code: 'SQL', name: 'SQL', evidence: 'PostgreSQL & MySQL relational queries' }
    ]
  },
  {
    id: 'core-concepts',
    genre: 'CORE CONCEPTS',
    countLabel: '5 skills • Computer Science foundations',
    tagline: 'Core Concepts — OOP, OS, Multi-threading, DSA & Agile',
    items: [
      { code: 'OOP', name: 'Object-Oriented Programming (OOP)', primary: true, evidence: 'Wi-Fi CSI modular parser • MySirG C++ Bootcamp' },
      { code: 'OS', name: 'Operating Systems', evidence: 'Process scheduling, concurrency & memory management' },
      { code: 'MT', name: 'Multi-threading', primary: true, evidence: 'Concurrent capture, labeling & CSV logger in Wi-Fi CSI HAR' },
      { code: 'DSA', name: 'DSA', primary: true, evidence: '150+ problems on LeetCode & GFG • HackerRank Certified' },
      { code: 'AGL', name: 'Agile', evidence: 'Iterative full-stack development • iNeuron training' }
    ]
  },
  {
    id: 'ai-tools-tech',
    genre: 'AI TOOLS & TECH',
    countLabel: '4 skills • LLMs, Agents & ML',
    tagline: 'AI Tools & Tech — Real-time LLM streaming & AI Agent evaluation',
    items: [
      { code: 'GRQ', name: 'Groq API (LLaMA)', primary: true, evidence: 'AskLio AI Chatbot real-time SSE token streaming' },
      { code: 'SAI', name: 'Spring AI', evidence: 'AI integration framework in technical toolkit' },
      { code: 'PRM', name: 'AI Prompting', primary: true, evidence: 'Mercor Introduction to Agents Certified • AskLio AI' },
      { code: 'ML', name: 'Machine Learning Concepts', evidence: 'Wi-Fi CSI human activity recognition dataset pipeline' }
    ]
  },
  {
    id: 'backend-db',
    genre: 'BACKEND & DB',
    countLabel: '7 skills • Server-side & databases',
    tagline: 'Backend & Databases — High-performance APIs & persistent storage',
    items: [
      { code: 'FAP', name: 'FastAPI', primary: true, evidence: 'AskLio AI & GitOrbit asynchronous Python backends' },
      { code: 'PYD', name: 'Pydantic', evidence: 'Data validation & schema enforcement in FastAPI' },
      { code: 'NJS', name: 'Node.js', evidence: 'Full-stack JavaScript server runtime' },
      { code: 'API', name: 'REST APIs', primary: true, evidence: 'JWT-secured endpoints in AskLio & GitHub sync in GitOrbit' },
      { code: 'PG', name: 'PostgreSQL', primary: true, evidence: 'Persistent chat history in AskLio AI Chatbot' },
      { code: 'MDB', name: 'MongoDB', primary: true, evidence: 'Profile snapshots & append-only event logs in GitOrbit' },
      { code: 'SQL', name: 'MySQL', evidence: 'Relational database design & queries' }
    ]
  },
  {
    id: 'cloud-devops',
    genre: 'CLOUD & DEVOPS',
    countLabel: '7 skills • Shipping & infrastructure',
    tagline: 'Cloud & DevOps — Containers, Linux & CI/CD automation',
    items: [
      { code: 'LNX', name: 'Linux', evidence: 'CLI environment, bash workflows & server deployment' },
      { code: 'DCK', name: 'Docker', primary: true, evidence: 'Containerized application environments' },
      { code: 'K8S', name: 'Kubernetes', evidence: 'Container orchestration & cloud-native scaling' },
      { code: 'BSH', name: 'Bash Scripting', evidence: 'Automated shell scripts & build tasks' },
      { code: 'CLD', name: 'Cloud Computing', evidence: 'Production deployments on Vercel & Render' },
      { code: 'GHA', name: 'GitHub Actions', evidence: 'Automated CI/CD workflows' },
      { code: 'CI', name: 'CI/CD', evidence: 'Continuous integration & delivery pipelines' }
    ]
  },
  {
    id: 'ai-data-processing',
    genre: 'AI & DATA PROCESSING',
    countLabel: '4 skills • Signal & numerical computing',
    tagline: 'AI & Data Processing — Scientific computing & visualization',
    items: [
      { code: 'NPY', name: 'NumPy', primary: true, evidence: 'Wi-Fi CSI signal processing & matrix operations' },
      { code: 'PDS', name: 'Pandas', primary: true, evidence: 'Wi-Fi CSI activity labeling & CSV dataset pipelines' },
      { code: 'MPL', name: 'Matplotlib', evidence: 'Signal waveform & activity plots in Wi-Fi CSI HAR' },
      { code: 'SKL', name: 'Scikit-learn', evidence: 'Machine learning feature extraction & evaluation' }
    ]
  },
  {
    id: 'tools-frontend',
    genre: 'TOOLS & FRONTEND',
    countLabel: '7 skills • Interfaces & deployment',
    tagline: 'Tools & Frontend — Modern web UIs & cloud hosting',
    items: [
      { code: 'RCT', name: 'React', primary: true, evidence: 'AskLio AI streaming chat interface' },
      { code: 'NXT', name: 'Next.js', primary: true, evidence: 'GitOrbit responsive analytics dashboard' },
      { code: 'TWD', name: 'Tailwind CSS', primary: true, evidence: 'Responsive utility-first styling across projects' },
      { code: 'GIT', name: 'Git', evidence: 'Version control & branching workflows' },
      { code: 'GHB', name: 'GitHub', evidence: 'Repository hosting & GitHub REST API integration' },
      { code: 'VCL', name: 'Vercel', evidence: 'Frontend & full-stack production hosting' },
      { code: 'RND', name: 'Render', evidence: 'FastAPI backend cloud hosting for GitOrbit' }
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: 'mercor-ai-cert',
    kicker: 'AI AGENT EVALUATION',
    title: 'MERCOR CERTIFIED',
    subtitle: 'INTRODUCTION TO AGENTS',
    description:
      'Completed Mercor’s "Introduction to Agents" course (Oct 2026), demonstrating rigor, calibration, and clarity in AI agent evaluation (ID: MRC-2026-B82G48PB).',
    certificateUrl: 'https://work.mercor.com/learn/verify/MRC-2026-B82G48PB',
    certificateImage: '/assets/mercor-certificate.webp'
  },
  {
    id: 'dsa-150',
    kicker: 'COMPETITIVE CODING',
    title: '150+ PROBLEMS SOLVED',
    subtitle: 'LEETCODE • GEEKSFORGEEKS',
    description:
      'Solved 150+ data structures and algorithms problems utilizing C++ and Python on LeetCode and GeeksforGeeks.'
  },
  {
    id: 'mysirg-cpp',
    kicker: 'INTENSIVE BOOTCAMP',
    title: 'C++ DSA MASTER',
    subtitle: 'MYSIRG BOOTCAMP',
    description:
      'Successfully completed an intensive C++ DSA Bootcamp (MySirG), mastering Object-Oriented principles and pointers.'
  },
  {
    id: 'hackerrank-cert',
    kicker: 'ALGORITHMIC THINKING',
    title: 'PROBLEM SOLVING',
    subtitle: 'HACKERRANK CERTIFIED',
    description:
      'Earned Problem Solving certification from HackerRank, demonstrating strong algorithmic thinking.'
  },
  {
    id: 'ineuron-fsd',
    kicker: 'AGILE ENGINEERING',
    title: 'FULL STACK WEB DEV',
    subtitle: 'INEURON TRAINING',
    description:
      'Completed Full Stack Web Development training (iNeuron) in an Agile learning environment.'
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-mercor',
    issuer: 'MERCOR',
    title: 'Introduction to Agents — AI Agent Evaluation',
    category: 'Mercor',
    credentialId: 'MRC-2026-B82G48PB',
    url: 'https://work.mercor.com/learn/verify/MRC-2026-B82G48PB',
    certificateImage: '/assets/mercor-certificate.webp'
  },
  {
    id: 'cert-hackerrank',
    issuer: 'HACKERRANK',
    title: 'Problem Solving Certification (Algorithms & Data Structures)',
    category: 'HackerRank'
  },
  {
    id: 'cert-mysirg',
    issuer: 'MYSIRG',
    title: 'Intensive C++ DSA Bootcamp (OOP & Pointers)',
    category: 'MySirG'
  },
  {
    id: 'cert-ineuron',
    issuer: 'INEURON',
    title: 'Full Stack Web Development Training (Agile Environment)',
    category: 'iNeuron'
  }
];
