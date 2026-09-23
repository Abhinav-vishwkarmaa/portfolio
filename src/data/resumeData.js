export const RESUME_DATA = {
  personal: {
    name: "Abhinav Vishwakarma",
    firstName: "Abhinav",
    role: "Backend Developer",
    tagline:
      "Building scalable SaaS and B2B backends with Node.js, PostgreSQL, Redis, and production-grade deployment.",
    email: "abhivishwkarmaa52@gmail.com",
    phone: "+91 7355025752",
    phoneDisplay: "7355025752",
    whatsapp: "https://wa.me/917355025752",
    location: "Kanpur, India",
    linkedin: "https://www.linkedin.com/in/abhinav-vishwakarma-924a4525b/",
    github: "https://github.com/Abhinav-vishwkarmaa",
    resumeUrl: "/Abhinav_Vishwakarma_Resume.pdf",
    resumeDownloadName: "Abhinav_Vishwakarma_Resume.pdf",
    avatar:
      "https://ui-avatars.com/api/?name=Abhinav+Vishwakarma&background=0b1220&color=38bdf8&size=512&bold=true",
    openToWork: true,
  },

  summary:
    "Backend Developer with 1+ year of experience building scalable SaaS and B2B applications using Node.js, Express.js, PostgreSQL, MySQL, Redis and BullMQ. Experienced in REST APIs, multi-tenant architecture, background job processing, database optimization and production deployment using Linux, Nginx and PM2.",

  stats: [
    {
      label: "Production Projects",
      value: "5+",
      sub: "SaaS & B2B Backends",
    },
    { label: "Experience", value: "1+", sub: "Years Backend Engineering" },
    { label: "Core Stack", value: "Node.js", sub: "Express, SQL, Redis" },
    { label: "Academic CGPA", value: "7.4", sub: "B.Tech CSE (2022 - 2026)" },
  ],

  experience: [
    {
      company: "Company Name",
      location: "India",
      role: "Backend Developer",
      project: "Scalable SaaS & B2B Backend Services",
      period: "Sep 2025 – Present",
      techStack: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "BullMQ",
        "JWT",
        "Linux",
        "Nginx",
        "PM2",
      ],
      highlights: [
        "Developed scalable backend services using Node.js and Express.js.",
        "Designed REST APIs, authentication, authorization and database architecture.",
        "Worked with PostgreSQL, MySQL and Redis for production applications.",
        "Implemented BullMQ workers and asynchronous background jobs.",
        "Deployed applications using Linux, PM2 and Nginx.",
        "Collaborated on React frontend while primarily focusing on backend development.",
      ],
    },
  ],

  projects: [
    {
      id: "affiliate-network",
      title: "Affiliate Network – Self-Serve CPA Platform",
      category: "Affiliate Tracking",
      image: "/images/project image/rag.svg",
      featured: true,
      year: "2026",
      description:
        "Self-service affiliate marketing network where advertisers fund wallets and publish offers, and affiliates join, track clicks, fire postbacks, and withdraw after hold.",
      techStack: [
        "NestJS",
        "Fastify",
        "PostgreSQL",
        "Redis",
        "React",
        "Razorpay",
      ],
      highlights: [
        "Built advertiser, affiliate, and admin panels with wallet funding, offer marketplace, and role-based access.",
        "Designed click, conversion, and postback workers on Redis for high-volume tracking without blocking the API.",
        "Implemented tracking links, sub parameters, test postbacks, payout hold, and Razorpay / PayPal withdrawals.",
        "Modeled PostgreSQL schema for offers, joins, wallets, stats, and payouts with hidden network margin.",
      ],
    },
    {
      id: "konvo-shoes",
      title: "Konvo Shoes – B2B Footwear Platform",
      category: "B2B Commerce Backend",
      image: "/images/project image/template-editor.svg",
      featured: true,
      year: "2026",
      description:
        "Scalable B2B footwear platform backend covering authentication, order management, inventory, PostgreSQL schema design, and BullMQ background processing.",
      techStack: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "BullMQ",
      ],
      highlights: [
        "Designed and developed scalable backend APIs.",
        "Designed PostgreSQL schema and optimized database queries.",
        "Implemented asynchronous background jobs using BullMQ and Redis.",
        "Built authentication, order management and inventory modules.",
        "Deployed the application using Linux, Nginx and PM2.",
        "Contributed to React frontend while primarily focusing on backend engineering.",
      ],
    },
    {
      id: "ad-tracking",
      title: "Multi-Tenant Ad Tracking Platform",
      category: "High-Volume Tracking",
      image: "/images/project image/rag.svg",
      featured: true,
      year: "2026",
      description:
        "Multi-tenant affiliate tracking platform handling millions of click events with click, impression and postback APIs plus reporting dashboards.",
      techStack: ["Node.js", "MySQL", "Redis"],
      highlights: [
        "Built a multi-tenant affiliate tracking platform handling millions of click events.",
        "Developed click, impression and postback APIs with reporting dashboards.",
        "Optimized MySQL queries using indexing and schema tuning.",
        "Implemented Redis-based processing and production deployment.",
      ],
    },
    {
      id: "girik",
      title: "GIRIK Maritime Certification System",
      category: "Workflow & Compliance",
      image: "/images/project image/portfolio-template.svg",
      featured: true,
      year: "2025",
      description:
        "Workflow-driven backend for maritime certification with role-based approvals, QR verification, and audit logging.",
      techStack: ["Node.js", "Express.js", "MySQL"],
      highlights: [
        "Developed workflow-driven backend APIs for maritime certification.",
        "Implemented role-based approvals, QR verification and audit logging.",
      ],
    },
    {
      id: "ecommerce-backend",
      title: "E-Commerce Backend",
      category: "Payments & Orders",
      image: "/images/project image/expense-tracker.svg",
      featured: true,
      year: "2025",
      description:
        "E-commerce backend APIs for products, orders, carts and checkout with Razorpay payments and webhook verification.",
      techStack: ["Node.js", "Express.js", "MySQL"],
      highlights: [
        "Built APIs for products, orders, carts and checkout.",
        "Integrated Razorpay payments and webhook verification.",
      ],
    },
  ],

  skills: {
    backend: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "NestJS", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "JWT", level: "Advanced" },
      { name: "RBAC", level: "Advanced" },
    ],
    languages: [
      { name: "JavaScript (ES6)", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
    ],
    databases: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Redis", level: "Advanced" },
    ],
    queue: [
      { name: "BullMQ", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
    ],
    deployment: [
      { name: "Linux", level: "Advanced" },
      { name: "Nginx", level: "Advanced" },
      { name: "PM2", level: "Advanced" },
      { name: "AWS EC2", level: "Intermediate" },
      { name: "S3", level: "Intermediate" },
    ],
    tools: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Postman", level: "Advanced" },
      { name: "Docker (Basic)", level: "Beginner" },
    ],
    languageList: ["JavaScript (ES6)", "C++", "SQL"],
  },

  education: [
    {
      institution: "Dr. Ambedkar Institute of Technology for Handicapped",
      location: "Kanpur",
      degree: "B.Tech Computer Science & Engineering",
      score: "CGPA: 7.4/10",
      period: "2022 – 2026",
    },
  ],

  certifications: [],
};
