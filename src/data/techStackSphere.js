// Helper to create crisp, high-resolution SVG data URIs for 3D sphere rendering
function makeTechBadgeSvg({
  name,
  category,
  brandColor = "#38bdf8",
  glowColor = "#0284c7",
  logoSvg,
}) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0e172a" />
        <stop offset="60%" stop-color="#070c18" />
        <stop offset="100%" stop-color="#030509" />
      </linearGradient>
      <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${brandColor}" stop-opacity="0.95" />
        <stop offset="50%" stop-color="${glowColor}" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.8" />
      </linearGradient>
      <radialGradient id="aura" cx="50%" cy="46%" r="45%">
        <stop offset="0%" stop-color="${brandColor}" stop-opacity="0.25" />
        <stop offset="60%" stop-color="${glowColor}" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Card Background -->
    <rect x="16" y="16" width="480" height="480" rx="44" fill="url(#bgGrad)" />
    
    <!-- Outer Glow Aura -->
    <circle cx="256" cy="235" r="160" fill="url(#aura)" />

    <!-- Sleek Card Border with Glass Inset -->
    <rect x="16" y="16" width="480" height="480" rx="44" fill="none" stroke="url(#borderGrad)" stroke-width="3.5" />
    <rect x="22" y="22" width="468" height="468" rx="38" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.5" />

    <!-- Category Pill Tag -->
    <g transform="translate(256, 68)">
      <rect x="-85" y="-18" width="170" height="36" rx="18" fill="${brandColor}" fill-opacity="0.18" stroke="${brandColor}" stroke-opacity="0.5" stroke-width="1.5" />
      <text x="0" y="5" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="${brandColor}" letter-spacing="2.5">${category.toUpperCase()}</text>
    </g>

    <!-- Central Tech Logo Icon -->
    <g transform="translate(156, 125)">
      ${logoSvg}
    </g>

    <!-- Tech Name -->
    <text x="256" y="415" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="800" fill="#ffffff" letter-spacing="0.5">${name}</text>

    <!-- Bottom Accent Line -->
    <line x1="180" y1="440" x2="332" y2="440" stroke="${brandColor}" stroke-width="3.5" stroke-linecap="round" stroke-opacity="0.85" />
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const TECH_STACK_ITEMS = [
  {
    id: "nodejs",
    name: "Node.js",
    category: "Runtime",
    group: "backend",
    level: "Advanced",
    brandColor: "#5FA04E",
    glowColor: "#22c55e",
    docUrl: "https://nodejs.org",
    experience: "1+ Years in SaaS & B2B",
    description: "Core asynchronous runtime for building high-throughput REST APIs, streaming pipelines, and microservices.",
    projects: ["Konvo Shoes", "Affiliate Network", "Ad Tracking Platform", "GIRIK"],
    image: makeTechBadgeSvg({
      name: "Node.js",
      category: "Runtime",
      brandColor: "#5FA04E",
      glowColor: "#22c55e",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <path fill="#5FA04E" d="M64 8.5L112.5 36.5v56L64 120.5 15.5 92.5v-56L64 8.5z"/>
          <path fill="#333333" d="M64 18.5L103.5 41.5v46L64 110.5 24.5 87.5v-46L64 18.5z"/>
          <path fill="#ffffff" d="M64 35c-15.5 0-25 8.5-25 21 0 13.5 11 17.5 21 19.5 9.5 2 13 4 13 8.5 0 4.5-4 7.5-10 7.5-7 0-11.5-3-15-7.5l-8 7.5c5 6.5 13 10.5 23 10.5 16 0 26-8.5 26-21.5 0-13-10-17-21-19.5-9.5-2-13-4-13-8.5 0-4 4-7 9.5-7 6 0 10 2.5 13.5 6.5l7.5-7.5C79 38.5 72.5 35 64 35z"/>
        </svg>
      `,
    }),
  },
  {
    id: "docker",
    name: "Docker",
    category: "Containers",
    group: "devops",
    level: "Intermediate",
    brandColor: "#2496ED",
    glowColor: "#0284c7",
    docUrl: "https://www.docker.com",
    experience: "Containers & Isolation",
    description: "Containerizing backend microservices, Redis workers, PM2 instances, and multi-service staging environments.",
    projects: ["Microservices", "Worker Containers", "Database Sandboxes"],
    image: makeTechBadgeSvg({
      name: "Docker",
      category: "Containers",
      brandColor: "#2496ED",
      glowColor: "#0284c7",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <rect x="24" y="52" width="14" height="12" rx="2" fill="#2496ED"/>
          <rect x="42" y="52" width="14" height="12" rx="2" fill="#2496ED"/>
          <rect x="60" y="52" width="14" height="12" rx="2" fill="#2496ED"/>
          <rect x="42" y="36" width="14" height="12" rx="2" fill="#2496ED"/>
          <rect x="60" y="36" width="14" height="12" rx="2" fill="#2496ED"/>
          <rect x="78" y="36" width="14" height="12" rx="2" fill="#2496ED"/>
          <rect x="60" y="20" width="14" height="12" rx="2" fill="#2496ED"/>
          <rect x="78" y="52" width="14" height="12" rx="2" fill="#2496ED"/>
          <path fill="#2496ED" d="M120 66c-2.5-1.5-8-2-12-1-1.5-6-5-11-10-14l-4 3c3 4 5 9 5 14-8 1-22 3-32 9-5-1-12-1-17 1H10c-3 8-1 19 6 25 10 9 27 12 44 12 28 0 51-14 60-31 4 0 9-1 12-4 2-2 3-5 3-7-4-2-10-4-15-3z"/>
          <circle cx="98" cy="74" r="3" fill="#0b1329"/>
        </svg>
      `,
    }),
  },
  {
    id: "pm2",
    name: "PM2",
    category: "Process Mgr",
    group: "devops",
    level: "Advanced",
    brandColor: "#22c55e",
    glowColor: "#16a34a",
    docUrl: "https://pm2.keymetrics.io",
    experience: "Production Clustering",
    description: "Production process management, zero-downtime reloads, cluster mode across multi-core CPUs, daemon monitoring.",
    projects: ["Konvo Shoes", "Affiliate Platform", "Production VPS"],
    image: makeTechBadgeSvg({
      name: "PM2",
      category: "Process Mgr",
      brandColor: "#22c55e",
      glowColor: "#16a34a",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="54" fill="#0b132b" stroke="#22c55e" stroke-width="4"/>
          <path fill="#22c55e" d="M38 42h22c10 0 17 6 17 15s-7 15-17 15H49v18H38V42zm11 20h10c4.5 0 7.5-2.5 7.5-6s-3-6-7.5-6H49v12z"/>
          <path fill="#38bdf8" d="M82 62c6-5 12-10 12-16 0-7-5-11-12-11-7 0-12 4-13 10l9 2c.5-3 2-4 4-4s4 2 4 4c0 3-3 6-7 10l-12 12v7h26v-9H82z"/>
          <circle cx="104" cy="92" r="6" fill="#22c55e"/>
        </svg>
      `,
    }),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    group: "database",
    level: "Advanced",
    brandColor: "#38bdf8",
    glowColor: "#0284c7",
    docUrl: "https://www.postgresql.org",
    experience: "Relational Modeling",
    description: "Complex schemas, multi-tenant isolation, composite indexing, transactions, and foreign key cascades.",
    projects: ["Konvo Shoes", "Affiliate Network", "SaaS Billing"],
    image: makeTechBadgeSvg({
      name: "PostgreSQL",
      category: "Database",
      brandColor: "#38bdf8",
      glowColor: "#0284c7",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <path fill="#336791" d="M64 16C42 16 26 31 26 53c0 14 7 26 18 33v21l16-9c1.5.3 3 .5 4.8.7l-2.8-12.7c-4-1-7-3-9-6l3-6c2 2 5 4 8 4 6 0 10-5 10-12V44c0-2-2-4-4-4s-4 2-4 4v16l-7 1c-1-5-1-10 0-14 3-10 11-18 22-20V16z"/>
          <path fill="#38bdf8" d="M64 16c22 0 38 15 38 37 0 14-7 26-18 33v21l-16-9c-1.5.3-3 .5-4.8.7l2.8-12.7c4-1 7-3 9-6l-3-6c-2 2-5 4-8 4-6 0-10-5-10-12V44c0-2 2-4 4-4s4 2 4 4v16l7 1c1-5 1-10 0-14-3-10-11-18-22-20V16z"/>
          <circle cx="50" cy="46" r="4" fill="#ffffff"/>
          <circle cx="78" cy="46" r="4" fill="#ffffff"/>
        </svg>
      `,
    }),
  },
  {
    id: "redis",
    name: "Redis",
    category: "In-Memory",
    group: "database",
    level: "Advanced",
    brandColor: "#ef4444",
    glowColor: "#dc2626",
    docUrl: "https://redis.io",
    experience: "High-Volume Caching",
    description: "Sub-millisecond token blacklisting, rate limiting, click event buffering, and pub/sub messaging.",
    projects: ["Affiliate Network", "Konvo Shoes", "Ad Tracking Platform"],
    image: makeTechBadgeSvg({
      name: "Redis",
      category: "In-Memory",
      brandColor: "#ef4444",
      glowColor: "#dc2626",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <g transform="translate(64, 42)">
            <polygon points="0,-22 45,0 0,22 -45,0" fill="#ef4444"/>
            <polygon points="0,22 45,0 45,16 0,38" fill="#b91c1c"/>
            <polygon points="-45,0 0,22 0,38 -45,16" fill="#991b1b"/>
          </g>
          <g transform="translate(64, 68)">
            <polygon points="0,-18 38,0 0,18 -38,0" fill="#f87171"/>
            <polygon points="0,18 38,0 38,14 0,32" fill="#dc2626"/>
            <polygon points="-38,0 0,18 0,32 -38,14" fill="#b91c1c"/>
          </g>
        </svg>
      `,
    }),
  },
  {
    id: "bullmq",
    name: "BullMQ",
    category: "Queue Workers",
    group: "backend",
    level: "Advanced",
    brandColor: "#f97316",
    glowColor: "#ea580c",
    docUrl: "https://bullmq.io",
    experience: "Async Job Workers",
    description: "Robust asynchronous background job workers, automated retries, rate-limited queues, and postback dispatchers.",
    projects: ["Konvo Shoes", "Affiliate Network", "Order Processing"],
    image: makeTechBadgeSvg({
      name: "BullMQ",
      category: "Queue Workers",
      brandColor: "#f97316",
      glowColor: "#ea580c",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#1e1b2e" stroke="#f97316" stroke-width="3"/>
          <path fill="#f97316" d="M36 40c4-12 16-18 28-18s24 6 28 18c-8-2-16 0-20 4-4-4-12-6-20-4-4-4-10-4-16 0z"/>
          <path fill="#ea580c" d="M42 46c6 14 14 26 22 36 8-10 16-22 22-36-8 4-18 6-22 6s-14-2-22-6z"/>
          <polygon points="64,68 76,96 64,88 52,96" fill="#fbbf24"/>
          <circle cx="54" cy="56" r="3" fill="#ffffff"/>
          <circle cx="74" cy="56" r="3" fill="#ffffff"/>
        </svg>
      `,
    }),
  },
  {
    id: "express",
    name: "Express.js",
    category: "Framework",
    group: "backend",
    level: "Advanced",
    brandColor: "#38bdf8",
    glowColor: "#0284c7",
    docUrl: "https://expressjs.com",
    experience: "Production REST APIs",
    description: "Modular routing, global error handlers, custom auth middlewares, and rate limiters.",
    projects: ["Konvo Shoes", "GIRIK Maritime", "E-Commerce Backend"],
    image: makeTechBadgeSvg({
      name: "Express.js",
      category: "Framework",
      brandColor: "#38bdf8",
      glowColor: "#0284c7",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#090d16" stroke="#38bdf8" stroke-width="3"/>
          <text x="64" y="74" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-1">ex</text>
          <circle cx="92" cy="74" r="4" fill="#38bdf8"/>
        </svg>
      `,
    }),
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "Framework",
    group: "backend",
    level: "Advanced",
    brandColor: "#f43f5e",
    glowColor: "#e11d48",
    docUrl: "https://nestjs.com",
    experience: "Enterprise Architecture",
    description: "Modular architectural patterns, dependency injection, custom guards, interceptors, and Fastify adapter.",
    projects: ["Affiliate Network CPA Platform"],
    image: makeTechBadgeSvg({
      name: "NestJS",
      category: "Framework",
      brandColor: "#f43f5e",
      glowColor: "#e11d48",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <path fill="#e11d48" d="M64 18l36 21v46L64 106 28 85V39l36-21z"/>
          <path fill="#ffffff" d="M64 30l24 14v28L64 86 40 72V44l24-14z"/>
          <path fill="#e11d48" d="M64 42l12 7v14L64 70 52 63V49l12-7z"/>
        </svg>
      `,
    }),
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    group: "database",
    level: "Advanced",
    brandColor: "#0ea5e9",
    glowColor: "#f59e0b",
    docUrl: "https://www.mysql.com",
    experience: "High-Scale SQL",
    description: "Query execution plan analysis (EXPLAIN), B-Tree composite indexing, multi-table joins, and schema normalization.",
    projects: ["Multi-Tenant Ad Tracking", "GIRIK Maritime", "E-Commerce"],
    image: makeTechBadgeSvg({
      name: "MySQL",
      category: "Database",
      brandColor: "#0ea5e9",
      glowColor: "#f59e0b",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#0b1726" stroke="#0ea5e9" stroke-width="3"/>
          <path fill="#0ea5e9" d="M88 44c-8-8-22-10-34-4-10 5-16 16-18 28-2 11 2 22 9 30 2-4 5-8 9-11 5-4 12-6 19-7 8-1 16-4 22-10 4-4 7-9 8-15-4 1-9 0-13-2 6-3 10-8 12-14-5 1-10 0-14-2 6-3 9-8 11-14-4 2-8 3-12 3 3-5 5-11 5-17-7 6-15 10-24 12z"/>
          <path fill="#f59e0b" d="M38 78c-4 3-8 8-10 14 6-2 12-4 18-4-3-3-6-6-8-10z"/>
        </svg>
      `,
    }),
  },
  {
    id: "nginx",
    name: "Nginx",
    category: "Reverse Proxy",
    group: "devops",
    level: "Advanced",
    brandColor: "#22c55e",
    glowColor: "#16a34a",
    docUrl: "https://nginx.org",
    experience: "Edge Server Config",
    description: "Reverse proxying Node.js applications, SSL/TLS termination with Certbot, gzip compression, and security headers.",
    projects: ["Konvo Shoes VPS", "Affiliate Network", "Production Domains"],
    image: makeTechBadgeSvg({
      name: "Nginx",
      category: "Reverse Proxy",
      brandColor: "#22c55e",
      glowColor: "#16a34a",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <path fill="#009639" d="M64 12l48 27.7v55.4L64 122.8 16 95.1V39.7L64 12z"/>
          <path fill="#ffffff" d="M42 42h10l24 32V42h10v44H76L52 54v32H42V42z"/>
        </svg>
      `,
    }),
  },
  {
    id: "linux",
    name: "Linux (Ubuntu)",
    category: "OS & Server",
    group: "devops",
    level: "Advanced",
    brandColor: "#eab308",
    glowColor: "#ca8a04",
    docUrl: "https://ubuntu.com",
    experience: "CLI & System Admin",
    description: "Ubuntu server administration, systemd service units, SSH keys, UFW firewalls, bash scripting, and cron jobs.",
    projects: ["Cloud VPS", "PM2 Daemons", "Nginx Deployments"],
    image: makeTechBadgeSvg({
      name: "Linux",
      category: "OS & Server",
      brandColor: "#eab308",
      glowColor: "#ca8a04",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <ellipse cx="64" cy="68" rx="34" ry="40" fill="#1e293b"/>
          <ellipse cx="64" cy="74" rx="22" ry="28" fill="#f8fafc"/>
          <circle cx="56" cy="46" r="4" fill="#0f172a"/>
          <circle cx="72" cy="46" r="4" fill="#0f172a"/>
          <polygon points="64,52 54,60 74,60" fill="#f59e0b"/>
          <ellipse cx="46" cy="106" rx="14" ry="6" fill="#f59e0b"/>
          <ellipse cx="82" cy="106" rx="14" ry="6" fill="#f59e0b"/>
        </svg>
      `,
    }),
  },
  {
    id: "fastify",
    name: "Fastify",
    category: "High Speed API",
    group: "backend",
    level: "Advanced",
    brandColor: "#38bdf8",
    glowColor: "#0284c7",
    docUrl: "https://fastify.dev",
    experience: "Low-Overhead APIs",
    description: "High-performance JSON serialization with schema validation for heavy click-event intake and tracking postbacks.",
    projects: ["Affiliate Network CPA Platform"],
    image: makeTechBadgeSvg({
      name: "Fastify",
      category: "High Speed API",
      brandColor: "#38bdf8",
      glowColor: "#0284c7",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#080e1a" stroke="#38bdf8" stroke-width="3"/>
          <path fill="#38bdf8" d="M68 24L36 68h28l-8 36 32-44H60l8-36z"/>
        </svg>
      `,
    }),
  },
  {
    id: "aws",
    name: "AWS (EC2 & S3)",
    category: "Cloud",
    group: "devops",
    level: "Intermediate",
    brandColor: "#f59e0b",
    glowColor: "#d97706",
    docUrl: "https://aws.amazon.com",
    experience: "EC2 & S3 Buckets",
    description: "Deploying production Node.js backends on EC2 instances, S3 object storage for asset uploads, and IAM credentials.",
    projects: ["Cloud Deployment", "Asset Storage", "Backups"],
    image: makeTechBadgeSvg({
      name: "AWS",
      category: "Cloud Compute",
      brandColor: "#f59e0b",
      glowColor: "#d97706",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#0d1424" stroke="#f59e0b" stroke-width="3"/>
          <text x="64" y="60" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="2">AWS</text>
          <path fill="none" stroke="#f59e0b" stroke-width="5" stroke-linecap="round" d="M34 76c18 12 42 12 60 0"/>
          <polygon points="96,76 86,72 88,82" fill="#f59e0b"/>
        </svg>
      `,
    }),
  },
  {
    id: "jwt",
    name: "JWT & RBAC",
    category: "Security",
    group: "backend",
    level: "Advanced",
    brandColor: "#ec4899",
    glowColor: "#db2777",
    docUrl: "https://jwt.io",
    experience: "Auth Architecture",
    description: "Stateless access/refresh token rotation, role-based access control, cookie-based sessions, and brute-force protection.",
    projects: ["Affiliate Network", "Konvo Shoes", "GIRIK Maritime"],
    image: makeTechBadgeSvg({
      name: "JWT & Auth",
      category: "Security",
      brandColor: "#ec4899",
      glowColor: "#db2777",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#140a1e" stroke="#ec4899" stroke-width="3"/>
          <path fill="#ec4899" d="M64 28c14 0 26 5 26 18v22c0 20-26 34-26 34S38 88 38 68V46c0-13 12-18 26-18z"/>
          <rect x="54" y="58" width="20" height="16" rx="3" fill="#ffffff"/>
          <path fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" d="M58 58v-6a6 6 0 0 1 12 0v6"/>
        </svg>
      `,
    }),
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    group: "tools",
    level: "Advanced",
    brandColor: "#ef4444",
    glowColor: "#dc2626",
    docUrl: "https://git-scm.com",
    experience: "Git Workflows",
    description: "Branching strategies, rebase workflows, interactive history rewrites, merge conflict resolution, and commit hygiene.",
    projects: ["All Repositories", "Production Pipelines"],
    image: makeTechBadgeSvg({
      name: "Git",
      category: "Version Control",
      brandColor: "#ef4444",
      glowColor: "#dc2626",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <g transform="translate(64, 64) rotate(45)">
            <rect x="-36" y="-36" width="72" height="72" rx="14" fill="#ef4444"/>
            <line x1="-16" y1="-16" x2="-16" y2="16" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
            <line x1="-16" y1="0" x2="16" y2="-16" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
            <circle cx="-16" cy="-16" r="6" fill="#ffffff"/>
            <circle cx="-16" cy="16" r="6" fill="#ffffff"/>
            <circle cx="16" cy="-16" r="6" fill="#ffffff"/>
          </g>
        </svg>
      `,
    }),
  },
  {
    id: "github",
    name: "GitHub",
    category: "Collaboration",
    group: "tools",
    level: "Advanced",
    brandColor: "#a855f7",
    glowColor: "#9333ea",
    docUrl: "https://github.com",
    experience: "CI/CD & Reviews",
    description: "Automated webhook listeners, pull request workflows, issue triage, and GitHub Actions deployments.",
    projects: ["Open Source", "Client Projects"],
    image: makeTechBadgeSvg({
      name: "GitHub",
      category: "Collaboration",
      brandColor: "#a855f7",
      glowColor: "#9333ea",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#0d0818" stroke="#a855f7" stroke-width="3"/>
          <path fill="#ffffff" d="M64 24c-22 0-40 18-40 40 0 18 11.5 33 27.5 38.5 2 .4 2.7-.9 2.7-2v-7c-11 2.5-13.5-5.5-13.5-5.5-1.8-4.5-4.5-5.8-4.5-5.8-3.6-2.5.3-2.5.3-2.5 4 .3 6 4 6 4 3.5 6 9.5 4.5 12 3.5.3-2.5 1.5-4.5 2.7-5.5-9-1-18.5-4.5-18.5-20 0-4.5 1.6-8 4.2-11-.4-1-1.8-5 .4-10.5 0 0 3.5-1 11.5 4.3 3.3-1 6.8-1.4 10.3-1.4s7 .4 10.3 1.4c8-5.3 11.5-4.3 11.5-4.3 2.2 5.5.8 9.5.4 10.5 2.6 3 4.2 6.5 4.2 11 0 15.5-9.5 19-18.5 20 1.5 1.3 2.8 3.8 2.8 7.7v11.5c0 1.1.7 2.4 2.8 2 16-5.5 27.5-20.5 27.5-38.5 0-22-18-40-40-40z"/>
        </svg>
      `,
    }),
  },
  {
    id: "postman",
    name: "Postman",
    category: "API Testing",
    group: "tools",
    level: "Advanced",
    brandColor: "#f97316",
    glowColor: "#ea580c",
    docUrl: "https://www.postman.com",
    experience: "API Suite & Testing",
    description: "Automated collection runners, pre-request auth scripts, mock servers, and regression testing for RESTful endpoints.",
    projects: ["Affiliate APIs", "Konvo API Docs", "Payment Webhooks"],
    image: makeTechBadgeSvg({
      name: "Postman",
      category: "API Testing",
      brandColor: "#f97316",
      glowColor: "#ea580c",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#180e08" stroke="#f97316" stroke-width="3"/>
          <circle cx="64" cy="64" r="38" fill="#f97316"/>
          <circle cx="64" cy="50" r="10" fill="#ffffff"/>
          <path fill="#ffffff" d="M50 78c0-8 6-14 14-14s14 6 14 14v6H50v-6z"/>
          <circle cx="64" cy="50" r="6" fill="#180e08"/>
        </svg>
      `,
    }),
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Language",
    group: "languages",
    level: "Advanced",
    brandColor: "#eab308",
    glowColor: "#ca8a04",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    experience: "ES6+ Modern JS",
    description: "Event loop concurrency, async/await, closures, prototypical inheritance, Streams, and Buffer operations.",
    projects: ["All Backend Services", "Worker Threads"],
    image: makeTechBadgeSvg({
      name: "JavaScript",
      category: "Language",
      brandColor: "#eab308",
      glowColor: "#ca8a04",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <rect x="20" y="20" width="88" height="88" rx="16" fill="#facc15"/>
          <text x="56" y="90" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#000000">J</text>
          <text x="76" y="90" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#000000">S</text>
        </svg>
      `,
    }),
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    group: "languages",
    level: "Advanced",
    brandColor: "#38bdf8",
    glowColor: "#2563eb",
    docUrl: "https://www.typescriptlang.org",
    experience: "Type-Safe Systems",
    description: "Strict compile-time checks, DTO generics, NestJS decorators, and strongly-typed Prisma/TypeORM schemas.",
    projects: ["Affiliate Network", "Modern Microservices"],
    image: makeTechBadgeSvg({
      name: "TypeScript",
      category: "Language",
      brandColor: "#38bdf8",
      glowColor: "#2563eb",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <rect x="20" y="20" width="88" height="88" rx="16" fill="#2563eb"/>
          <text x="36" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="38" font-weight="900" fill="#ffffff">TS</text>
        </svg>
      `,
    }),
  },
  {
    id: "rest-api",
    name: "REST APIs",
    category: "Architecture",
    group: "backend",
    level: "Advanced",
    brandColor: "#38bdf8",
    glowColor: "#0ea5e9",
    docUrl: "https://restfulapi.net",
    experience: "Scalable Contracts",
    description: "Idempotent HTTP methods, pagination (cursor & offset), rate limits, standardized JSON responses, and webhooks.",
    projects: ["Konvo Shoes", "Affiliate Network", "GIRIK"],
    image: makeTechBadgeSvg({
      name: "REST APIs",
      category: "Architecture",
      brandColor: "#38bdf8",
      glowColor: "#0ea5e9",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#061220" stroke="#38bdf8" stroke-width="3"/>
          <circle cx="64" cy="40" r="10" fill="#38bdf8"/>
          <circle cx="40" cy="80" r="10" fill="#0ea5e9"/>
          <circle cx="88" cy="80" r="10" fill="#2563eb"/>
          <line x1="64" y1="40" x2="40" y2="80" stroke="#38bdf8" stroke-width="4"/>
          <line x1="64" y1="40" x2="88" y2="80" stroke="#38bdf8" stroke-width="4"/>
          <line x1="40" y1="80" x2="88" y2="80" stroke="#38bdf8" stroke-width="4"/>
        </svg>
      `,
    }),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL DB",
    group: "database",
    level: "Intermediate",
    brandColor: "#22c55e",
    glowColor: "#16a34a",
    docUrl: "https://www.mongodb.com",
    experience: "Document Store",
    description: "Schema-less document storage, aggregation pipelines, flexible payload caching, and replica sets.",
    projects: ["Document Archives", "Logging Store"],
    image: makeTechBadgeSvg({
      name: "MongoDB",
      category: "NoSQL DB",
      brandColor: "#22c55e",
      glowColor: "#16a34a",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#09180c" stroke="#22c55e" stroke-width="3"/>
          <path fill="#22c55e" d="M64 24c0 0-18 24-18 48 0 18 10 32 18 32s18-14 18-32c0-24-18-48-18-48z"/>
          <path fill="#15803d" d="M64 24v80c8 0 18-14 18-32 0-24-18-48-18-48z"/>
        </svg>
      `,
    }),
  },
  {
    id: "cpp",
    name: "C++",
    category: "Algorithms",
    group: "languages",
    level: "Intermediate",
    brandColor: "#38bdf8",
    glowColor: "#0284c7",
    docUrl: "https://isocpp.org",
    experience: "DSA & Core",
    description: "Solid foundation in Data Structures, Algorithms, memory allocation, and algorithmic time-complexity optimization.",
    projects: ["Academic Problem Solving", "DSA LeetCode"],
    image: makeTechBadgeSvg({
      name: "C++",
      category: "Algorithms",
      brandColor: "#38bdf8",
      glowColor: "#0284c7",
      logoSvg: `
        <svg width="200" height="200" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="50" fill="#081426" stroke="#38bdf8" stroke-width="3"/>
          <text x="64" y="74" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#ffffff">C++</text>
        </svg>
      `,
    }),
  },
];

export const TECH_CATEGORIES = [
  { id: "all", label: "All Tech (3D)" },
  { id: "backend", label: "Backend Core" },
  { id: "database", label: "Databases & Queues" },
  { id: "devops", label: "DevOps, PM2 & Docker" },
  { id: "languages", label: "Languages & Tools" },
];
