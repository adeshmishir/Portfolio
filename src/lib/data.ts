export const profile = {
  name: "Adesh Mishra",
  firstName: "Adesh",
  headline: "I'm a Software Engineer & AI Developer.",
  role: "Software Development Engineer / AI Engineer",
  email: "mishraadesh770@gmail.com",
  phone: "+91 9569401419",
  location: "Bhopal, India",
  education: "IIIT Bhopal — B.Tech in Computer Science & Engineering",
  graduation: "Class of 2027 · CGPA 8.30",
  portfolio: "https://adeshmishra.me",
  portrait: "/portrait.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/19ZC63eXszU8UM1z8Ig20bUnigzLfv0bY/view?usp=sharing",
  about: [
    "I'm a Computer Science student at IIIT Bhopal focused on building scalable full-stack applications, backend systems, and AI-powered developer tools. My work spans software engineering, backend development, and AI/LLM applications.",
    "I enjoy working across distributed systems and full-stack development — backed by a strong foundation in data structures and algorithms. I'm currently exploring Gen AI workflows and preparing for SDE internship and new-grad roles.",
  ],
  links: {
    github: "https://github.com/adeshmishir",
    linkedin: "https://linkedin.com/in/adesh-mishra-646ba128b",
    leetcode: "https://leetcode.com/u/mr_adesh_mishra_770",
    codeforces: "https://codeforces.com/profile/mishra_adesh",
    codechef: "https://codechef.com/users/gam_blossom_68",
    instagram: "https://www.instagram.com/adesh_mishrra/",
    twitter: "https://x.com/aadesssss",
  },
}

export type Project = {
  title: string
  monogram: string
  image?: string
  description: string
  tech: string[]
  demo?: string
  source: string
}

export const projects: Project[] = [
  {
    title: "CodePilot AI",
    monogram: "CP",
    image: "/CodePilot-Ai.png",
    description:
      "AI-powered software engineering agent that connects to GitHub repositories, understands large codebases, and helps developers analyze, debug, and improve their code. Performs semantic code search, RAG-based code Q&A, bug detection, refactoring suggestions, unit-test generation, and PR/code review.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Qdrant",
      "Tree-sitter",
      "GitPython",
      "Redis",
      "Docker",
      "React",
      "Vite",
      "Tailwind CSS",
      "LLM APIs",
    ],
    demo: "https://code-pilot-ai-puce.vercel.app/",
    source: "https://github.com/adeshmishir/CodePilot-AI",
  },
  {
    title: "CoinOracle",
    monogram: "CO",
    image: "/CoinOracle.png",
    description:
      "Real-time cryptocurrency tracking platform with live pricing, deep market analytics, and interactive candlestick charts. Streams instant price updates over WebSockets, includes a global search modal and a BTC/USD converter, all wrapped in a premium dark UI.",
    tech: ["Next.js", "Tailwind CSS", "CoinGecko API", "WebSockets", "TypeScript"],
    demo: "https://coin-oracle.vercel.app/",
    source: "https://github.com/adeshmishir/CoinOracle",
  },
  {
    title: "JobQueue",
    monogram: "JQ",
    image: "/jobQueue.png",
    description:
      "Distributed job processing system with retries, backoff, and live state tracking. Fault-tolerant workers process pending, running, completed, and failed jobs with exponential backoff, structured status tracking, and a live dashboard.",
    tech: ["React", "Vite", "Node.js", "Express.js", "BullMQ", "PostgreSQL", "Redis"],
    source: "https://github.com/adeshmishir/jobQueue",
  },
  {
    title: "AlgoPulse",
    monogram: "AP",
    description:
      "Competitive programming analytics dashboard that tracks LeetCode profiles — contests, submission heatmaps, problem-solving trends, and performance stats — served by a FastAPI backend with a React frontend.",
    tech: ["FastAPI", "PostgreSQL", "React"],
    source: "https://github.com/adeshmishir/AlgoPulse",
  },
]

export const cpStats = [
  {
    value: 1525,
    label: "Codeforces rating",
    sub: "Specialist (max)",
    href: profile.links.codeforces,
  },
  {
    value: 900,
    label: "LeetCode solved",
    sub: "900+ questions",
    suffix: "+",
    href: profile.links.leetcode,
  },
  {
    value: 1697,
    label: "CodeChef rating",
    sub: "peak rating",
    href: profile.links.codechef,
  },
  {
    value: 1500,
    label: "DSA problems",
    sub: "across LC, CF & CodeChef",
    suffix: "+",
  },
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
