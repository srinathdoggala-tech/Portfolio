export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI / Multi-Agent' | 'Full Stack AI' | 'Computer Vision' | 'Backend Systems';
  year: string;
  description: string;
  longDescription: string;
  problem?: string;
  whatIBuilt?: string;
  evidence?: string[];
  statusNote?: string;
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

export interface ProofItem {
  id: string;
  category: string;
  icon: string;
  headline: string;
  metric: string;
  detail: string;
  verificationMethod: string;
  linkText?: string;
  linkUrl?: string;
}

export const PERSONAL_INFO = {
  name: "Srinath Doggala",
  roleTitle: "AI Engineer | Systems & Agentic Workflows",
  headline: "AI Engineer building reliable AI systems, not just LLM demos.",
  subheadline: "I build production-oriented AI systems across LLM applications, agentic workflows, RAG, voice AI, and backend infrastructure using Python, FastAPI, React/Next.js, and PostgreSQL.",
  bio: "Founding AI Full Stack Engineer Intern @ Sreeva AI. Focused on building production-oriented AI systems across LLMs, multi-agent swarms, selective RAG, real-time voice streaming, and asynchronous FastAPI/PostgreSQL backends. B.E. CSE (AI/ML) at Chandigarh University (2023–2027).",
  currentRole: "Founding AI Full Stack Engineer Intern @ Sreeva AI",
  degreeInfo: "B.E. CSE (AI/ML), Chandigarh University · 2027",
  location: "Hyderabad, India",
  phone: "+91-7569656550",
  email: "doggalasrinath@gmail.com",
  github: "https://github.com/srinathdoggala",
  linkedin: "https://www.linkedin.com/in/srinath-doggala-081083286",
  portfolio: "https://srinathdoggala.tech",
  resumeUrl: "/resume.pdf",
  availabilityStatus: "Actively Interviewing for AI & Full Stack Roles",
  targetRoles: [
    "AI Engineer",
    "Applied AI Engineer",
    "AI/ML Engineer",
    "AI Full-Stack Engineer",
    "Backend Engineer"
  ],
  targetStatement: "Building production-oriented AI systems involving LLMs, agents, RAG, voice AI, backend infrastructure, and full-stack product engineering."
};

export const QUICK_STATS = [
  {
    label: "Med. API Latency Reduction",
    value: "35%",
    subtext: "Redis Caching + AsyncIO Pipelines",
    evidence: "Measured on production endpoint request workloads at Sreeva AI"
  },
  {
    label: "VoxPilot Automated Tests",
    value: "27",
    subtext: "Automated Unit & Integration Tests",
    evidence: "Routing policies, voice streaming, RAG, circuit breakers & safety"
  },
  {
    label: "Autonomous Research Swarm",
    value: "4 Agents",
    subtext: "Planner, Researcher, Verifier, Writer",
    evidence: "Real-time web retrieval with automated claim verification"
  },
  {
    label: "Resumes Evaluated",
    value: "500+",
    subtext: "Continuous Load & ATS Scoring",
    evidence: "Benchmarked parsing stability and vector embedding match consistency"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "sreeva-ai",
    company: "Sreeva AI",
    role: "Founding AI Full Stack Engineer Intern",
    location: "Remote",
    type: "Internship",
    period: "May 2026 – Present",
    description: "Engineering production-oriented AI features and backend microservices using Python, FastAPI, React/Next.js, PostgreSQL, and LLM APIs.",
    bulletPoints: [
      "Built AI-powered full-stack features using Python, FastAPI, React/Next.js, PostgreSQL, and LLM APIs.",
      "Designed asynchronous backend workflows, validated REST APIs, and Redis-backed application infrastructure.",
      "Developed RAG and multi-step LLM workflows using LangChain/LangGraph with deterministic validation and failure handling.",
      "Reduced API response latency by ~35% through asynchronous processing and Redis caching."
    ],
    metrics: [
      "35% lower API response times via Redis caching & async pipelines",
      "Robust REST & WebSocket microservices architecture",
      "Automated CI/CD workflows with Docker & GitHub Actions"
    ],
    technologies: [
      "Python", "FastAPI", "React/Next.js", "PostgreSQL", "Redis", "Docker", "GitHub Actions", "REST APIs", "LLM APIs"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "voxpilot-ai",
    title: "VoxPilot AI: Real-Time Voice Agent Platform",
    tagline: "Real-time voice AI infrastructure with WebSocket audio transport, adaptive model routing, selective RAG, and circuit breakers.",
    category: "AI / Multi-Agent",
    year: "2026",
    description: "Engineered a real-time voice AI platform featuring WebSocket audio streaming, provider health monitoring, multi-agent supervision, and RAG knowledge retrieval.",
    longDescription: "VoxPilot AI addresses the inherent unpredictability of voice agents by combining low-latency WebSocket audio transport with resilient provider abstractions, automated circuit breakers, deterministic risk classification for tool calls, and complete observability telemetry.",
    problem: "Real-time voice agents fail unpredictably in production due to upstream provider outages, latency jitter, unverified tool executions, and brittle session state.",
    whatIBuilt: "A full-stack voice AI platform with WebSocket audio transport, STT/LLM/TTS provider abstractions, adaptive multi-agent routing, selective RAG, deterministic tool safety confirmation gates, provider failovers, circuit breakers, session replay, and token/cost telemetry.",
    evidence: [
      "27 automated tests passing (routing, voice pipeline, RAG, circuit breakers, safety)",
      "Provider failure recovery with sub-second circuit breaker failovers",
      "Deterministic risk-classified tool execution schema",
      "Session replay and latency/cost telemetry dashboard"
    ],
    statusNote: "Frontend live on Vercel. 27/27 automated tests passing in CI. Backend requires cloud API credentials or local Docker runner.",
    architecture: {
      title: "Real-Time Voice Pipeline & Fault-Tolerant Routing",
      steps: [
        { step: "1. WebSocket Audio Transport", detail: "Low-latency bidirectional streaming connecting browser audio to backend voice orchestrator." },
        { step: "2. Adaptive Model Router & Circuit Breaker", detail: "Monitors upstream provider health and latency; automatically triggers fallback failovers upon errors." },
        { step: "3. Supervisor Agent & Tool Safety Gates", detail: "Orchestrates intent classification with strict risk classification and approval gates before executing tools." },
        { step: "4. Selective RAG & Observability Engine", detail: "Contextual vector retrieval, per-request latency & cost telemetry, plus session replay for evaluation." }
      ]
    },
    metrics: [
      "27 automated tests passing in CI",
      "Sub-second circuit breaker failover",
      "Deterministic risk classification for tools"
    ],
    challenges: [
      "Maintaining sub-second voice response latency while routing across third-party LLM providers with variable latency.",
      "Enforcing deterministic safety guarantees over probabilistic LLM tool-calling outputs."
    ],
    solutions: [
      "Built a provider health monitor with circuit-breaker logic and real-time latency scoring for adaptive routing.",
      "Designed a strict risk-classification schema with confirmation gates decoupled from the LLM inference path."
    ],
    features: [
      "Low-latency WebSocket bidirectional voice streaming",
      "Adaptive LLM provider routing with automatic circuit breakers",
      "Multi-agent supervision with specialized sub-agent roles",
      "Selective RAG workflows for dynamic knowledge retrieval",
      "Deterministic safety controls and permission gates for tool execution",
      "Session replay, cost tracking & telemetry dashboard"
    ],
    technologies: ["Python", "FastAPI", "React.js", "WebSockets", "LLMs", "RAG", "LangChain", "Vector Search", "Docker"],
    githubUrl: "https://github.com/srinathdoggala-tech/voxpilot",
    liveUrl: "https://voxpilot-two.vercel.app/",
    featured: true
  },
  {
    id: "research-gpt",
    title: "ResearchGPT: Multi-Agent AI Research Assistant",
    tagline: "Autonomous 4-agent research pipeline executing concurrent web retrieval, claim verification, and cited synthesis.",
    category: "AI / Multi-Agent",
    year: "2025",
    description: "Designed a multi-agent AI research platform using Python, FastAPI, ReactJS, PostgreSQL, and LangChain with Planner, Researcher, Verifier, and Writer agents.",
    longDescription: "ResearchGPT eliminates hallucinations and manual web scraping by deploying an orchestrated swarm of 4 autonomous LLM agents. Each agent specializes in a distinct sub-task of the research journey, backed by asynchronous FastAPI pipelines and PostgreSQL state tracking.",
    problem: "Single-prompt LLMs hallucinate citations and rely on stale training weights, producing unverified reports unfit for serious analysis.",
    whatIBuilt: "An orchestrated multi-agent research pipeline where Planner breaks queries into targeted hypotheses, Researcher gathers web documents concurrently via Tavily, Verifier cross-references claims against raw sources, and Writer synthesizes cited Markdown/PDF briefs.",
    evidence: [
      "4 synchronized agents with isolated JSON schema validation",
      "15+ REST micro-endpoints supporting asynchronous document processing",
      "PostgreSQL audit trail storing reasoning steps and verified citations"
    ],
    architecture: {
      title: "Orchestrated Multi-Agent Workflow Engine",
      steps: [
        { step: "1. Planner Agent", detail: "Deconstructs complex user queries into structured research sub-questions and search parameters." },
        { step: "2. Researcher Agent", detail: "Executes concurrent web queries via Tavily API and extracts full text content." },
        { step: "3. Verifier Agent", detail: "Cross-checks extracted claims against primary sources to systematically eliminate hallucinations." },
        { step: "4. Writer Agent", detail: "Synthesizes multi-source data into formatted Markdown/PDF reports with verified inline citations." }
      ]
    },
    metrics: [
      "4 Autonomous AI Agents orchestrated concurrently",
      "15+ REST endpoints with async processing",
      "Automated claim verification against source URLs"
    ],
    challenges: [
      "Preventing cascading agent hallucination across multi-step research pipelines.",
      "Managing asynchronous web search latencies without blocking the API event loop."
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
    id: "review-gpt",
    title: "ReviewGPT: AI-Powered Code Review Platform",
    tagline: "GitHub repository scanner combining AST static analysis, security audits, and Gemini 2.5 Flash refactoring.",
    category: "Backend Systems",
    year: "2026",
    description: "Built an AI-powered GitHub repository analysis platform using React, Vite, FastAPI, Python, and Google Gemini 2.5 Flash to perform automated code reviews, security vulnerability audits, and complexity scoring.",
    longDescription: "ReviewGPT bridges static code analysis and Large Language Models to provide actionable repository health insights before code reaches production. Combining GitHub REST API ingestion, custom AST analyzers, and Gemini 2.5 Flash, it identifies bugs, hardcoded secrets, SQL injection patterns, XSS risks, and cyclomatic complexity hotspots.",
    problem: "Developers push avoidable security flaws (hardcoded secrets, SQLi, XSS) and high-complexity functions that standard linters miss and code reviews overlook.",
    whatIBuilt: "An automated repository analysis platform combining Python AST parsing for deterministic cyclomatic complexity and vulnerability patterns with Google Gemini 2.5 Flash for contextual line-level explanations and automated refactoring diffs.",
    evidence: [
      "Deterministic AST checks for SQLi, XSS, and hardcoded credential leaks",
      "Cyclomatic complexity metrics computed per function and file",
      "FastAPI serverless microservices deployed on Vercel with asynchronous GitHub ingestion"
    ],
    architecture: {
      title: "AST Static Analysis & Gemini Refactoring Pipeline",
      steps: [
        { step: "1. GitHub REST API Ingestion", detail: "Scans public GitHub repositories, retrieving multi-branch structures and source file AST representations." },
        { step: "2. Static Code Analyzer", detail: "Runs AST static checks for cyclomatic complexity, security risks (SQLi, XSS, exposed keys), and boundary bugs." },
        { step: "3. Gemini 2.5 Flash Engine", detail: "Prompts Google Gemini 2.5 Flash to generate contextual code explanations, quality metrics, and refactoring fixes." },
        { step: "4. ReviewGPT Dashboard", detail: "Renders real-time repository health score, issue distribution, file complexity metrics, and AI assistant UI." }
      ]
    },
    metrics: [
      "Sub-second static AST analysis & complexity scoring pipeline",
      "5 Core Audit Vectors: Bugs, Security, Performance, Complexity, Quality",
      "FastAPI serverless microservices deployed on Vercel"
    ],
    challenges: [
      "Analyzing deeply nested repository file structures efficiently within Vercel serverless function timeouts.",
      "Filtering static check false positives while ensuring Gemini LLM outputs structured, line-specific remediation guidance."
    ],
    solutions: [
      "Implemented asynchronous GitHub REST API fetching with concurrent FastAPI serverless execution routines.",
      "Designed rigid Pydantic validation schemas and combined deterministic AST rules with LLM context prompts."
    ],
    features: [
      "Public GitHub repository & branch-specific scanner",
      "Automated Security Audits (SQLi, XSS, hardcoded credentials)",
      "Cyclomatic & function complexity analysis engine",
      "Interactive Code Health Dashboard with Overall Repository Score",
      "AI Refactor Assistant providing line-level code improvements and explanations"
    ],
    technologies: ["React", "Vite", "FastAPI", "Python", "Google Gemini 2.5 Flash", "GitHub REST API", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/srinathdoggala-tech/AI-Code-Review-Platform",
    liveUrl: "https://ai-code-review-platform-tbdp.vercel.app",
    featured: true
  },
  {
    id: "talentlens-ai",
    title: "TalentLens AI: AI Recruiter & Career Intelligence Platform",
    tagline: "Enterprise resume intelligence & ATS engine performing deep semantic document evaluation and recruiter simulations.",
    category: "Full Stack AI",
    year: "2025",
    description: "Built a full-stack AI career platform using Next.js, FastAPI, PostgreSQL, and LLMs to parse PDF/DOCX documents, perform ATS match scoring, document analysis, recruiter simulation, and AI-powered career recommendations.",
    longDescription: "TalentLens AI gives job seekers and recruiters instant, objective analysis of resumes against complex job descriptions. Powered by vector search and LLMs, it parses raw PDF/DOCX layouts into structured JSON telemetry.",
    problem: "Job seekers lack objective feedback on resume formatting and keyword compatibility against modern semantic ATS engines.",
    whatIBuilt: "An end-to-end recruitment intelligence system with asynchronous PDF/DOCX layout parsing, vector embedding matching, LLM qualitative scoring, and interactive interview question generation.",
    evidence: [
      "500+ resumes benchmarked in continuous stress and parsing tests",
      "Strict Pydantic/Zod schemas ensuring quantitative score stability",
      "Sub-3s document parsing and vector matching pipeline"
    ],
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
    title: "AI-Based Produce Recognition System",
    tagline: "Edge-optimized computer vision system providing sub-200ms item classification and instant nutritional telemetry.",
    category: "Computer Vision",
    year: "2025",
    description: "Developed an AI-powered computer vision system using MobileNetV2 and Transfer Learning for fruit and vegetable classification integrated with real-time nutritional analysis.",
    longDescription: "Combines deep learning computer vision with web backend microservices. Users upload or capture image frames of produce items, receiving instant visual classification across 30 categories alongside deep nutritional metrics (calories, carbs, protein, fats, vitamins).",
    problem: "Edge produce identification requires lightweight model footprints while maintaining high accuracy across varied real-world lighting.",
    whatIBuilt: "A MobileNetV2 transfer-learning classification pipeline integrated with Django REST APIs and CalorieNinjas macronutrient lookups.",
    evidence: [
      "Sub-200ms model inference runtime on web endpoints",
      "30 produce categories classified with high accuracy",
      "Live integration with nutritional database APIs"
    ],
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
      { name: "Multi-Agent Workflows", level: "Swarm Supervision", tag: "LangChain · LangGraph · Agentic Workflows" },
      { name: "LLM Orchestration", level: "API Routing", tag: "OpenAI · Claude · Gemini APIs · Fallbacks" },
      { name: "RAG & Vector Search", level: "Retrieval", tag: "Chunking · Vector Embeddings · Similarity Search" },
      { name: "Structured Outputs", level: "Deterministic AI", tag: "Pydantic Schemas · Tool Calling · Safety Gates" },
      { name: "Computer Vision", level: "Edge Models", tag: "MobileNetV2 · TensorFlow · Transfer Learning" },
      { name: "Observability & Eval", level: "Telemetry", tag: "Session Replay · Cost Tracking · Latency Monitoring" }
    ]
  },
  {
    title: "Backend & Microservices",
    iconName: "Server",
    skills: [
      { name: "FastAPI", level: "Async APIs", tag: "AsyncIO · WebSockets · REST · Dependency Injection" },
      { name: "Python", level: "Core Backend", tag: "AsyncIO · Event Loops · Concurrency · Pydantic" },
      { name: "RESTful API Design", level: "API Contracts", tag: "OpenAPI Specs · Validation · Error Handling" },
      { name: "WebSockets", level: "Streaming", tag: "Bidirectional Audio Transport · Real-Time Events" },
      { name: "Django", level: "Framework", tag: "Django REST Framework · ORM · Microservices" },
      { name: "Asynchronous Tasks", level: "Background Jobs", tag: "Redis Queues · Non-blocking IO · Workers" }
    ]
  },
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "ReactJS", level: "Component UI", tag: "Hooks · State Architecture · Performance Profiling" },
      { name: "Next.js", level: "App Router", tag: "Server/Client Components · SSR · API Routes" },
      { name: "TypeScript", level: "Type Safety", tag: "Strict Types · Generics · Interface Contracts" },
      { name: "Tailwind CSS", level: "Styling", tag: "Custom Design Tokens · Responsive Layouts · Dark Mode" },
      { name: "Framer Motion", level: "Interactions", tag: "Spring Physics · Micro-Animations · Layout Transitions" }
    ]
  },
  {
    title: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: "Relational DB", tag: "Schema Design · Indexing · ACID Transactions · SQL" },
      { name: "Redis", level: "In-Memory", tag: "Caching Layers · TTL · Pub/Sub · Session State" },
      { name: "Vector Databases", level: "Embeddings", tag: "Similarity Search · Cosine Distance · Indexing" },
      { name: "MongoDB", level: "Document Store", tag: "JSON Documents · Aggregations · Indexing" }
    ]
  },
  {
    title: "DevOps & Infrastructure",
    iconName: "Cloud",
    skills: [
      { name: "Docker", level: "Containers", tag: "Multi-stage Builds · Docker Compose · Container Isolation" },
      { name: "GitHub Actions", level: "CI/CD", tag: "Automated Test Suites · Linting · Build Pipelines" },
      { name: "Vercel", level: "Edge Hosting", tag: "Serverless Deployments · Edge Runtime · Routing" },
      { name: "Git & Version Control", level: "Collaboration", tag: "Branching Workflows · Code Reviews · Semantic PRs" },
      { name: "Linux / Bash", level: "System Admin", tag: "Shell Scripting · Process Management · CLI Tooling" }
    ]
  },
  {
    title: "Core Computer Science",
    iconName: "Code2",
    skills: [
      { name: "Data Structures & Algorithms", level: "Problem Solving", tag: "Arrays · Trees · Graphs · DP · Complexity" },
      { name: "Object-Oriented Design", level: "Patterns", tag: "Design Patterns · Separation of Concerns · Clean Code" },
      { name: "DBMS & Transactions", level: "Database Theory", tag: "ACID · Concurrency Control · Query Planning" },
      { name: "Operating Systems", level: "Systems", tag: "Processes · Threads · Memory Allocation · Virtualization" }
    ]
  }
];

export const ENGINEERING_PROOF: ProofItem[] = [
  {
    id: "testing",
    category: "Automated Testing",
    icon: "CheckCircle2",
    headline: "27 Automated Tests Passing in VoxPilot",
    metric: "27/27 Tests",
    detail: "Comprehensive test harness validating provider routing policies, WebSocket audio transport, selective RAG retrieval, circuit breaker state transitions, and deterministic tool safety gates.",
    verificationMethod: "Pytest unit & integration test suite executed across mock audio and provider failure streams.",
    linkText: "View VoxPilot Tests on GitHub",
    linkUrl: "https://github.com/srinathdoggala-tech/voxpilot"
  },
  {
    id: "latency",
    category: "Performance Rigor",
    icon: "Zap",
    headline: "35% Median API Response Reduction",
    metric: "35% Faster",
    detail: "Measured optimization at Sreeva AI achieved by refactoring blocking synchronous routes to Python asyncio event loops paired with in-memory Redis caching.",
    verificationMethod: "Before/after benchmark comparing repeated query latencies on production endpoint traffic.",
    linkText: "View Sreeva AI Experience",
    linkUrl: "#experience"
  },
  {
    id: "benchmarks",
    category: "Document Benchmarking",
    icon: "FileCheck2",
    headline: "500+ Resumes Document Evaluation",
    metric: "500+ Tested",
    detail: "Stress-tested TalentLens AI document ingestion across varied formatting, multi-column layouts, and ATS keyword extraction under continuous load conditions.",
    verificationMethod: "Automated batch processing test harness verifying parsing stability and schema adherence.",
    linkText: "View TalentLens Repository",
    linkUrl: "https://github.com/srinathdoggala/TalentLens-AI"
  },
  {
    id: "architecture",
    category: "Reliability & Safety",
    icon: "ShieldCheck",
    headline: "Deterministic Guardrails & Circuit Breakers",
    metric: "Zero Cascades",
    detail: "Decoupled tool safety confirmation schema preventing unverified actions, combined with health-aware provider fallback routing when LLM APIs degrade.",
    verificationMethod: "Simulated upstream failure injection with automatic sub-second fallback failover.",
    linkText: "Explore Interactive Architecture",
    linkUrl: "#architecture"
  },
  {
    id: "deployment",
    category: "CI/CD & Delivery",
    icon: "Layers",
    headline: "Dockerized Microservices & CI/CD",
    metric: "100% CI/CD",
    detail: "Multi-stage Docker builds paired with automated GitHub Actions workflows for continuous linting, testing, and deployment to Vercel edge networks.",
    verificationMethod: "Automated GitHub Actions runners on every commit with pull-request status gates.",
    linkText: "Review ReviewGPT on GitHub",
    linkUrl: "https://github.com/srinathdoggala-tech/AI-Code-Review-Platform"
  },
  {
    id: "source",
    category: "Public Repositories",
    icon: "Code2",
    headline: "100% Verifiable Open-Source Repositories",
    metric: "Public Code",
    detail: "Complete transparency: VoxPilot, ResearchGPT, ReviewGPT, and TalentLens have public GitHub repositories with setup documentation and clean git history.",
    verificationMethod: "Inspectable source code, architecture diagrams, test fixtures, and environment templates.",
    linkText: "Browse GitHub Profile",
    linkUrl: "https://github.com/srinathdoggala"
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
    degree: "Intermediate (MPC: Mathematics, Physics, Chemistry)",
    period: "2021 – 2023",
    location: "Hanmakonda, India",
    score: "97.5% Academic Distinction",
    details: [
      "Senior Secondary Board Examination: 97.5% aggregate percentage (Academic Distinction).",
      "Demonstrated analytical excellence in Advanced Mathematics, Physics, and Chemistry."
    ]
  }
];
