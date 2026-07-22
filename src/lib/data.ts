export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI / Multi-Agent' | 'Full Stack AI' | 'Computer Vision' | 'Backend Systems';
  year: string;
  description: string;
  longDescription: string;
  architecture: {
    title: string;
    steps: { step: string; detail: string }[];
  };
  metrics: string[];
  challenges: string[];
  solutions: string[];
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  type: string;
  period: string;
  description: string;
  bulletPoints: string[];
  metrics: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: string; tag: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeColor: string;
  skillsCovered: string[];
  verifyUrl: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  score?: string;
  details: string[];
}

export const PERSONAL_INFO = {
  name: "Srinath Doggala",
  roleTitle: "AI Engineer | Full Stack Architect | Agentic Systems Builder",
  headline: "Building autonomous multi-agent AI systems, high-performance FastAPI backends, and production-grade full stack applications.",
  bio: "Engineering student & Founding AI Full Stack Engineer Intern with hands-on expertise building production-ready LLM pipelines, autonomous swarms, asynchronous REST APIs, and modern React/Next.js interfaces. Passionate about solving complex system challenges at scale.",
  location: "Hyderabad, India",
  phone: "+91-7569656550",
  email: "doggalasrinath@gmail.com",
  github: "https://github.com/srinathdoggala",
  linkedin: "https://linkedin.com/in/srinathdoggala",
  portfolio: "https://srinathdoggala.tech",
  resumeUrl: "#contact",
  availabilityStatus: "Available for AI & Full Stack Roles",
  targetCompanies: [
    "OpenAI", "Anthropic", "Google DeepMind", "Microsoft AI", "Meta", "Apple",
    "Amazon", "NVIDIA", "Databricks", "Cloudflare", "Stripe", "Vercel", "Scale AI", "Cursor", "Perplexity"
  ]
};

export const QUICK_STATS = [
  { label: "API Latency Speedup", value: "35%", subtext: "via Redis & Async Pipelines" },
  { label: "Resumes Tested", value: "500+", subtext: "Continuous Load & ATS Scoring" },
  { label: "Autonomous AI Swarm", value: "4 Agents", subtext: "Planner, Researcher, Verifier, Writer" },
  { label: "Intermediate Score", value: "97.5%", subtext: "Academic Distinction Marks" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "sreeva-ai",
    company: "Sreeva AI",
    role: "Founding AI Full Stack Engineer Intern",
    location: "Remote",
    type: "Internship",
    period: "May 2026 – Present",
    description: "Building production-ready full-stack applications using React, FastAPI, PostgreSQL, and AI-powered services for user-facing features and internal workflows.",
    bulletPoints: [
      "Building production-ready full-stack applications using React, FastAPI, PostgreSQL, and AI-powered services for user-facing features and internal workflows.",
      "Developing asynchronous FastAPI services, PostgreSQL-backed REST APIs, Redis caching, backend data pipelines, and third-party API integrations.",
      "Implemented API integrations, asynchronous processing, and Redis caching, reducing average API response time by approximately 35%.",
      "Collaborated with cross-functional teams to design, test, deploy, and maintain production-ready AI applications.",
      "Assisted in testing, documenting, and deploying AI services using Docker and GitHub Actions while maintaining technical documentation for reliable software releases."
    ],
    metrics: [
      "35% reduction in API response times",
      "Asynchronous pipeline architecture",
      "100% CI/CD workflow coverage with Docker & GitHub Actions"
    ],
    technologies: [
      "Python", "FastAPI", "ReactJS", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "REST APIs", "LLM APIs"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "research-gpt",
    title: "ResearchGPT: Multi-Agent AI Research Assistant",
    tagline: "Autonomous 4-agent research swarm executing real-time web retrieval, fact verification, and report synthesis.",
    category: "AI / Multi-Agent",
    year: "2025",
    description: "Designed a production-ready multi-agent AI research platform using Python, FastAPI, ReactJS, PostgreSQL, and LangChain with Planner, Researcher, Verifier, and Writer agents.",
    longDescription: "ResearchGPT solves the challenge of AI hallucinations and incomplete web research by deploying an orchestrated swarm of 4 autonomous LLM agents. Each agent specializes in a distinct sub-task of the research process, connected via asynchronous FastAPI pipelines and PostgreSQL state tracking.",
    architecture: {
      title: "Orchestrated Multi-Agent Workflow Engine",
      steps: [
        { step: "1. Planner Agent", detail: "Deconstructs high-level queries into structured research goals & search queries." },
        { step: "2. Researcher Agent", detail: "Executes concurrent search via Tavily API and extracts web page content." },
        { step: "3. Verifier Agent", detail: "Cross-references claims against primary web sources to strip out hallucinations." },
        { step: "4. Writer Agent", detail: "Synthesizes multi-source data into formatted Markdown/LaTeX reports with inline citations." }
      ]
    },
    metrics: [
      "4 Autonomous AI Agents orchestrated concurrently",
      "15+ REST API micro-endpoints supporting asynchronous document processing",
      "Zero-downtime deployment via Docker & GitHub Actions"
    ],
    challenges: [
      "Preventing cascading agent hallucination across multi-step research pipelines.",
      "Managing asynchronous web search latencies without blocking API event loops."
    ],
    solutions: [
      "Engineered strict JSON schema outputs and secondary Verifier agent cross-checking.",
      "Utilized Python asyncio with Tavily API batch calls and Redis state caching."
    ],
    features: [
      "Interactive multi-agent execution visualizer",
      "Real-time source verification score matrix",
      "Export research briefs to PDF & Markdown",
      "PostgreSQL audit trail for agent reasoning steps"
    ],
    technologies: ["Python", "FastAPI", "ReactJS", "PostgreSQL", "LangChain", "OpenAI API", "Anthropic Claude API", "Tavily API", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/srinathdoggala/ResearchGPT",
    liveUrl: "https://research-gpt-demo.srinathdoggala.tech",
    featured: true
  },
  {
    id: "talentlens-ai",
    title: "TalentLens AI: AI Recruiter & Career Intelligence Platform",
    tagline: "Enterprise resume intelligence & ATS engine performing deep semantic document evaluation and recruiter simulations.",
    category: "Full Stack AI",
    year: "2025",
    description: "Built a full-stack AI career platform using Next.js, FastAPI, PostgreSQL, and LLMs to parse PDF/DOCX documents, perform ATS match scoring, document analysis, recruiter simulation, and AI-powered career recommendations.",
    longDescription: "TalentLens AI transforms the hiring workflow by giving job seekers and recruiters instant, objective analysis of resumes against complex job descriptions. Powered by vector search and LLMs, it parses raw PDF/DOCX layouts into structured JSON telemetry.",
    architecture: {
      title: "Document Parsing & Vector Match Telemetry",
      steps: [
        { step: "1. Ingestion & Extraction", detail: "Asynchronous PDF/DOCX parsing using Python extractors into structured text chunks." },
        { step: "2. Vector Embedding", detail: "Generating dense vector embeddings for candidate experience vs job requirement matrices." },
        { step: "3. LLM Scoring Engine", detail: "FastAPI REST service invoking OpenAI/Claude models for qualitative candidate evaluation." },
        { step: "4. Next.js Dashboard", detail: "Responsive telemetry interface rendering ATS match breakdown and interactive feedback." }
      ]
    },
    metrics: [
      "500+ resumes benchmarked in continuous stress testing",
      "Sub-3 second document parsing & ATS scoring pipeline",
      "PostgreSQL schema optimized for high concurrency candidate lookups"
    ],
    challenges: [
      "Parsing non-standard PDF table layouts and multi-column resume formats accurately.",
      "Achieving consistent quantitative ATS compatibility scores from probabilistic LLMs."
    ],
    solutions: [
      "Built custom regex + PDF text-chunking extractors combined with LLM structural normalization.",
      "Designed rigid Zod/Pydantic validation schemas with few-shot calibration prompts."
    ],
    features: [
      "Instant ATS compatibility percentage meter",
      "Automated custom interview question generator based on candidate gaps",
      "Actionable resume optimization recommendations",
      "Interactive recruiter simulation chat interface"
    ],
    technologies: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Vector Search", "LLMs", "Tailwind CSS", "Redis", "Docker"],
    githubUrl: "https://github.com/srinathdoggala/TalentLens-AI",
    liveUrl: "https://talentlens.srinathdoggala.tech",
    featured: true
  },
  {
    id: "fruit-veg-recognition",
    title: "AI-Based Fruit & Vegetable Recognition System",
    tagline: "Edge-optimized computer vision system providing sub-200ms item classification and instant nutritional telemetry.",
    category: "Computer Vision",
    year: "2025",
    description: "Developed an AI-powered computer vision system using MobileNetV2 and Transfer Learning for fruit and vegetable classification integrated with real-time nutritional analysis.",
    longDescription: "Combines deep learning computer vision with web backend microservices. Users upload or capture image frames of produce items, receiving instant visual classification across 30 categories alongside deep nutritional metrics (calories, carbs, protein, fats, vitamins).",
    architecture: {
      title: "Inference Engine to Nutritional Data Pipeline",
      steps: [
        { step: "1. MobileNetV2 Model", detail: "Transfer learning neural network trained on 30 fresh produce categories." },
        { step: "2. Django REST API", detail: "High-throughput inference gateway receiving image payloads." },
        { step: "3. CalorieNinjas Integration", detail: "Automated API call retrieving real-time macronutrient breakdown for top predictions." },
        { step: "4. React UI Display", detail: "Interactive visual cards rendering macro charts and item confidence scores." }
      ]
    },
    metrics: [
      "30 Produce categories classified with high accuracy",
      "Sub-200ms model inference runtime on web endpoints",
      "Real-time CalorieNinjas API synchronization"
    ],
    challenges: [
      "Optimizing heavy deep learning models for fast web server inference without high latency.",
      "Handling variations in visual lighting, angles, and item background noise."
    ],
    solutions: [
      "Applied transfer learning with MobileNetV2 architecture and model weight quantization.",
      "Augmented dataset with brightness, scale, and background transformations during training."
    ],
    features: [
      "Real-time webcam photo scanner",
      "Macronutrient radar & calorie distribution chart",
      "High accuracy top-3 prediction probabilities",
      "Django REST backend API endpoints"
    ],
    technologies: ["Python", "TensorFlow", "MobileNetV2", "Django", "ReactJS", "CalorieNinjas API", "Transfer Learning", "REST APIs"],
    githubUrl: "https://github.com/srinathdoggala/Fruit-Veg-AI-Classifier",
    liveUrl: "https://fruit-veg-ai.srinathdoggala.tech",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Autonomous Systems",
    iconName: "Cpu",
    skills: [
      { name: "Multi-Agent Workflows", level: "Advanced", tag: "LangChain / Swarms" },
      { name: "LLM Orchestration", level: "Advanced", tag: "OpenAI / Claude / Gemini APIs" },
      { name: "RAG & Vector Search", level: "Advanced", tag: "Retrieval Pipelines" },
      { name: "Prompt Engineering", level: "Expert", tag: "Few-Shot / Structured Output" },
      { name: "TensorFlow & PyTorch", level: "Intermediate", tag: "MobileNetV2 / Vision" },
      { name: "LangChain & LlamaIndex", level: "Advanced", tag: "Agent Frameworks" }
    ]
  },
  {
    title: "Backend & Microservices",
    iconName: "Server",
    skills: [
      { name: "FastAPI", level: "Expert", tag: "Asynchronous REST / Microservices" },
      { name: "Python", level: "Expert", tag: "Asyncio / Data Pipelines" },
      { name: "Django", level: "Intermediate", tag: "REST Framework" },
      { name: "Node.js", level: "Intermediate", tag: "Express / APIs" },
      { name: "RESTful API Design", level: "Expert", tag: "OpenAPI / Swagger" },
      { name: "Asynchronous Pipelines", level: "Advanced", tag: "Redis / Celery" }
    ]
  },
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "ReactJS", level: "Expert", tag: "Hooks / Context / Fiber" },
      { name: "Next.js 15", level: "Advanced", tag: "App Router / RSC" },
      { name: "TypeScript", level: "Advanced", tag: "Strict Types / Generics" },
      { name: "Tailwind CSS", level: "Expert", tag: "Custom Tokens / Glassmorphism" },
      { name: "Framer Motion", level: "Advanced", tag: "Scroll & Micro-Animations" },
      { name: "HTML5 & CSS3", level: "Expert", tag: "Semantic UI / Layouts" }
    ]
  },
  {
    title: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", tag: "Relational Design / Indexing" },
      { name: "MongoDB", level: "Intermediate", tag: "Document Store" },
      { name: "Redis", level: "Advanced", tag: "In-Memory Caching / Pub-Sub" },
      { name: "Vector Databases", level: "Advanced", tag: "Embeddings / Similarity Search" },
      { name: "SQL Query Optimization", level: "Advanced", tag: "Joins / Query Plans" }
    ]
  },
  {
    title: "DevOps & Cloud Infrastructure",
    iconName: "Cloud",
    skills: [
      { name: "Docker", level: "Advanced", tag: "Containerization / Docker Compose" },
      { name: "GitHub Actions", level: "Advanced", tag: "CI/CD Pipelines" },
      { name: "Vercel", level: "Expert", tag: "Edge Deployment" },
      { name: "Git & GitHub", level: "Expert", tag: "Version Control / Code Reviews" },
      { name: "Linux / Bash", level: "Intermediate", tag: "CLI / Shell Scripting" }
    ]
  },
  {
    title: "Core Computer Science",
    iconName: "Code2",
    skills: [
      { name: "Data Structures & Algorithms", level: "Expert", tag: "Arrays, Trees, Graphs, DP" },
      { name: "Object-Oriented Programming", level: "Expert", tag: "OOP Design Patterns" },
      { name: "DBMS & Transactions", level: "Advanced", tag: "ACID Compliance / Schema Design" },
      { name: "Operating Systems", level: "Advanced", tag: "Concurrency / Threads / Memory" },
      { name: "Software Design (SDLC)", level: "Advanced", tag: "Clean Code / Modular Architecture" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "google-cloud-ai",
    title: "Innovating with Google Cloud AI",
    issuer: "Google Cloud",
    badgeColor: "from-blue-500 to-red-500",
    skillsCovered: ["Vertex AI", "Google Cloud ML", "Generative AI Solutions"],
    verifyUrl: "https://cloud.google.com/training"
  },
  {
    id: "ibm-gen-ai",
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    badgeColor: "from-blue-600 to-indigo-700",
    skillsCovered: ["Foundation Models", "LLM Prompting", "Enterprise GenAI"],
    verifyUrl: "https://coursera.org/verify/ibm-genai"
  },
  {
    id: "duke-ml",
    title: "Introduction to Machine Learning",
    issuer: "Duke University",
    badgeColor: "from-blue-700 to-sky-600",
    skillsCovered: ["Supervised Learning", "Regression & Classification", "Neural Nets"],
    verifyUrl: "https://coursera.org/verify/duke-ml"
  },
  {
    id: "coursera-advanced-ai",
    title: "Advanced AI Techniques in Python",
    issuer: "Coursera",
    badgeColor: "from-cyan-500 to-blue-600",
    skillsCovered: ["Python ML Pipelines", "Feature Engineering", "Model Evaluation"],
    verifyUrl: "https://coursera.org/verify/advanced-ai"
  },
  {
    id: "ucb-sql",
    title: "The Structured Query Language (SQL)",
    issuer: "University of Colorado Boulder",
    badgeColor: "from-amber-500 to-yellow-600",
    skillsCovered: ["Complex Joins", "Subqueries", "Database Schema Optimization"],
    verifyUrl: "https://coursera.org/verify/ucb-sql"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "chandigarh-university",
    institution: "Chandigarh University",
    degree: "B.E. Computer Science Engineering (AI/ML)",
    period: "2023 – 2027",
    location: "Punjab, India",
    details: [
      "Specializing in Artificial Intelligence, Machine Learning, and Distributed Software Systems.",
      "Core Coursework: Data Structures & Algorithms, Deep Learning, Operating Systems, Database Management Systems, Computer Networks, Software Engineering.",
      "Active participant in technical coding clubs, hackathons, and AI research projects."
    ]
  },
  {
    id: "sr-junior-college",
    institution: "SR Junior College",
    degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
    period: "2021 – 2023",
    location: "Hanmakonda, India",
    score: "97.5%",
    details: [
      "Graduated with Academic Distinction (97.5% aggregate percentage).",
      "Demonstrated analytical excellence in Mathematics and Physical Sciences."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "35% API Response Time Optimization",
    description: "Architected asynchronous FastAPI pipelines with Redis caching at Sreeva AI, boosting system throughput and lowering backend response latency by 35%."
  },
  {
    title: "500+ Resume Stress Testing Pipeline",
    description: "Engineered scalable document evaluation routines for TalentLens AI capable of parsing and scoring 500+ resumes during continuous load testing."
  },
  {
    title: "Autonomous 4-Agent Research Engine",
    description: "Designed ResearchGPT featuring 4 synchronized LLM agents (Planner, Researcher, Verifier, Writer) with Tavily API real-time search & source verification."
  },
  {
    title: "97.5% Board Academic Distinction",
    description: "Achieved top academic performance in Senior Secondary Examinations with a 97.5% score."
  }
];
