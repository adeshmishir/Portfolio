export const profile = {
  name: "Adesh Mishra",
  role: "Software Development Engineer",
  subtitle: "B.Tech CSE · IIIT Bhopal · Class of 2027",
  intro:
    "I build reliable full-stack systems, enjoy solving hard engineering problems, and am exploring Gen AI workflows alongside product development.",
  email: "mishraadesh770@gmail.com",
  phone: "+91 95694 01419",
  location: "Bhopal, India",
  resumeUrl:
    "https://drive.google.com/file/d/19ZC63eXszU8UM1z8Ig20bUnigzLfv0bY/view?usp=sharing",
  portrait: "/portrait.jpg",
  links: {
    github: "https://github.com/adeshmishir",
    linkedin: "https://linkedin.com/in/adesh-mishra-646ba128b",
    leetcode: "https://leetcode.com/u/mr_adesh_mishra_770",
    codeforces: "https://codeforces.com/profile/mishra_adesh",
    codechef: "https://codechef.com/users/gam_blossom_68",
    instagram: "https://www.instagram.com/adesh_mishrra/",
  },
}

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
]

export const facts = [
  { k: "Education", v: "B.Tech CSE, IIIT Bhopal" },
  { k: "Grad year", v: "2027 · CGPA 8.30" },
  { k: "Address", v: "Bhopal, India" },
  { k: "Focus", v: "Backend / Full-stack" },
]

export const aboutInterests = [
  "Distributed Systems",
  "Backend Architecture",
  "System Design",
  "Gen AI / RAG",
  "Competitive Programming",
]

export const aboutStats = [
  { value: "3+", label: "full-stack products" },
  { value: "10+", label: "REST APIs built" },
  { value: "1200+", label: "DSA problems" },
]

export const experience = [
  {
    role: "Software Development Engineer Intern",
    org: "Quantinent.ai · Remote",
    dates: "Mar 2026 — May 2026",
    tags: ["Node.js", "Express.js", "React.js", "MongoDB"],
    bullets: [
      "Engineered 3 full-stack modules (MongoDB, Express.js, React.js, Node.js) for a financial analytics dashboard — portfolio heatmaps and automated report generation — adopted by all internal analysts within 2 weeks of deployment.",
      "Architected and deployed 10+ REST APIs serving portfolio analytics across 500 financial instruments, introducing request validation middleware and centralized error handling to cut API error rate by 35%.",
      "Diagnosed an N+1 query pattern in MongoDB aggregation and profiled the React render tree, cutting median page load time by 40% (~2.5s to ~1.5s).",
    ],
  },
  {
    role: "Competitive Programming Team Lead",
    org: "Codame Club · IIIT Bhopal",
    dates: "Nov 2024 — Sep 2025",
    tags: ["C++", "DSA", "Contest Design"],
    bullets: [
      "Ranked top 15 among 350+ students through consistent contest participation, applying advanced data structures and optimization techniques under time constraints.",
      "Organized 6 competitive programming contests for 150+ participants — curating problem sets, validating test cases, and managing contest infrastructure end-to-end.",
      "Mentored 50+ junior students through 5 technical workshops on DSA and competitive programming strategy.",
    ],
  },
]

export const projects = [
  {
    title: "JobQueue",
    description:
      "Distributed job processing system with retries, backoff, and live state tracking.",
    highlights: [
      "5 fault-tolerant background workers with automatic retries (up to 3 attempts), exponential backoff, and live states for pending, processing, completed, and failed jobs.",
      "Reduced failed-job recovery time by 40% through structured status tracking and retry handling.",
      "Containerized the API, Redis, PostgreSQL, and worker services with Docker for reproducible, horizontally scalable deployments.",
    ],
    tags: ["Node.js", "Express.js", "BullMQ", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com/adeshmishir/jobQueue",
    featured: true,
  },
  {
    title: "DocQuery AI",
    description:
      "AI-powered book Q&A assistant that answers questions across large PDF documents.",
    highlights: [
      "Implemented an end-to-end RAG pipeline — PDF parsing, recursive chunking, embeddings, and FAISS vector search — supporting uploads up to 100 MB.",
      "Indexed 1000+ text chunks, delivering context-aware answers with ~90% relevance across test queries.",
      "Integrated retrieval chains, memory buffers, and prompt templates with Streamlit session state to preserve multi-turn context.",
    ],
    tags: ["Streamlit", "LangChain", "FAISS", "Mistral AI", "PyPDF", "Python"],
    github:
      "https://github.com/adeshmishir/Book_query_Resolver%28DocQuery%20AI%29",
    featured: true,
  },
  {
    title: "Forever",
    description:
      "Full-stack clothing e-commerce platform with customer and admin workflows.",
    highlights: [
      "Built 15+ REST APIs supporting product, inventory, cart, and order flows across the platform.",
      "Created JWT-authenticated customer and admin portals with 20+ reusable React components.",
      "Configured Cloudinary for optimized image upload and delivery across 200+ product listings, reducing backend storage load by 70%.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/adeshmishir/Forever",
    featured: true,
  },
]

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "C", "Java"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    category: "Infra & Tools",
    items: ["Docker", "AWS EC2", "Git", "GitHub", "CI/CD", "Postman"],
  },
  {
    category: "AI / Gen AI",
    items: ["RAG", "LangChain", "Gen AI", "Prompt design", "pgvector", "FAISS"],
  },
]

export const stats = [
  { value: 1455, label: "Codeforces rating", sub: "Specialist (max)" },
  { value: 863, label: "LeetCode solved", sub: "rank ~48,290" },
  { value: 1692, label: "CodeChef rating", sub: "peak rating" },
  { value: 1200, label: "DSA problems", sub: "across LC, CF & CodeChef", suffix: "+" },
]

export const achievements = [
  {
    title: "Flipkart GRID 6.0 & 8.0",
    description:
      "Semi-finalist in both editions — top 2.3% of participants. Placement available on request.",
  },
  {
    title: "HackWithInfy",
    description:
      "Qualified national-level round; selected for Specialist Programmer (SP) L3 interview.",
  },
  {
    title: "Competitive Programming Team Lead",
    description:
      "Led the CP team at Codame, IIIT Bhopal — 1200+ DSA problems solved across platforms.",
  },
]
