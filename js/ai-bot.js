/**
 * ABHINAV VISHWAKARMA - RESUME AI ASSISTANT ("Abhinav AI")
 * Knowledge base aligned with Abhinav's backend resume.
 */

const ABHINAV_KNOWLEDGE = {
  name: "Abhinav Vishwakarma",
  title: "Backend Developer",
  email: "abhivishwkarmaa52@gmail.com",
  phone: "+91 7355025752",
  whatsapp: "https://wa.me/917355025752",
  location: "Kanpur, India",
  degree: "B.Tech in Computer Science & Engineering (2022 - 2026), CGPA: 7.4/10",
  college: "Dr. Ambedkar Institute of Technology for Handicapped, Kanpur",
  resumePath: "Abhinav_Vishwakarma_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/abhinav-vishwakarma-924a4525b/",
  github: "https://github.com/Abhinav-vishwkarmaa",
  summary: `Backend Developer with 1+ year of experience building scalable SaaS and B2B applications using Node.js, Express.js, PostgreSQL, MySQL, Redis and BullMQ. Experienced in REST APIs, multi-tenant architecture, background job processing, database optimization and production deployment using Linux, Nginx and PM2.`,
  experience: {
    role: "Backend Developer",
    period: "Sep 2025 – Present",
    techStack: "Node.js, Express.js, PostgreSQL, MySQL, Redis, BullMQ, JWT, Linux, Nginx, PM2",
    highlights: [
      "Developed scalable backend services using Node.js and Express.js.",
      "Designed REST APIs, authentication, authorization and database architecture.",
      "Worked with PostgreSQL, MySQL and Redis for production applications.",
      "Implemented BullMQ workers and asynchronous background jobs.",
      "Deployed applications using Linux, PM2 and Nginx.",
      "Collaborated on React frontend while primarily focusing on backend development."
    ]
  },
  projects: [
    {
      id: "konvo",
      title: "Konvo Shoes – B2B Footwear Platform",
      stack: "Node.js, Express.js, PostgreSQL, Redis, BullMQ",
      overview: "Scalable B2B footwear platform backend covering authentication, order management and inventory.",
      details: [
        "Designed and developed scalable backend APIs.",
        "Designed PostgreSQL schema and optimized database queries.",
        "Implemented asynchronous background jobs using BullMQ and Redis.",
        "Built authentication, order management and inventory modules.",
        "Deployed the application using Linux, Nginx and PM2."
      ]
    },
    {
      id: "tracking",
      title: "Multi-Tenant Ad Tracking Platform",
      stack: "Node.js, MySQL, Redis",
      overview: "Multi-tenant affiliate tracking platform handling millions of click events.",
      details: [
        "Built a multi-tenant affiliate tracking platform handling millions of click events.",
        "Developed click, impression and postback APIs with reporting dashboards.",
        "Optimized MySQL queries using indexing and schema tuning.",
        "Implemented Redis-based processing and production deployment."
      ]
    },
    {
      id: "girik",
      title: "GIRIK Maritime Certification System",
      stack: "Node.js, Express.js, MySQL",
      overview: "Workflow-driven backend for maritime certification.",
      details: [
        "Developed workflow-driven backend APIs for maritime certification.",
        "Implemented role-based approvals, QR verification and audit logging."
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Backend",
      stack: "Node.js, Express.js, MySQL",
      overview: "E-commerce backend APIs for products, orders, carts and checkout.",
      details: [
        "Built APIs for products, orders, carts and checkout.",
        "Integrated Razorpay payments and webhook verification."
      ]
    }
  ],
  skills: {
    backend: ["Node.js", "Express.js", "REST APIs", "JWT", "RBAC"],
    languages: ["JavaScript (ES6)", "C++", "SQL"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    queue: ["BullMQ", "Redis"],
    deployment: ["Linux", "Nginx", "PM2", "AWS EC2", "S3"],
    tools: ["Git", "GitHub", "Postman", "Docker (Basic)"]
  }
};

class AbhinavAI {
  constructor() {
    this.history = [];
  }

  generateAnswer(userQuery) {
    const q = userQuery.toLowerCase().trim();
    const K = ABHINAV_KNOWLEDGE;

    if (q.match(/\b(hi|hello|hey|greetings|namaste|who are you|kaun ho|kya ho|introduce)\b/)) {
      return `Hello! 👋 I'm **Abhinav's AI Portfolio Assistant**.\n\nI have complete knowledge of Abhinav Vishwakarma's **backend skills, SaaS/B2B projects, and production deployments**.\n\nYou can ask me things like:\n- *"What is Abhinav's tech stack?"*\n- *"Tell me about Konvo Shoes"*\n- *"What is his backend experience?"*\n- *"How can I hire or contact Abhinav?"*`;
    }

    if (q.match(/\b(why hire|strength|strengths|why should|fit|advantage|best candidate)\b/)) {
      return `### 🌟 Why Abhinav is a Strong Addition to Your Team:\n\n` +
        `1. **Production Backend Focus:** ${K.summary}\n` +
        `2. **High-scale systems:** Multi-tenant tracking, B2B commerce, workflow certification, and payments.\n` +
        `3. **Ops-ready:** Linux, Nginx, PM2, AWS EC2/S3, Redis and BullMQ workers.`;
    }

    if (q.match(/\b(contact|hire|email|phone|call|whatsapp|reach|connect|interview|freelance|available)\b/)) {
      return `You can connect directly with Abhinav Vishwakarma right now:\n\n` +
        `• 📧 **Email:** [${K.email}](mailto:${K.email})\n` +
        `• 📱 **Phone:** [${K.phone}](tel:${K.phone.replace(/[^0-9+]/g, '')})\n` +
        `• 💬 **WhatsApp:** [Message on WhatsApp](${K.whatsapp})\n` +
        `• 📍 **Location:** ${K.location}\n` +
        `• 🔗 **LinkedIn:** [Profile](${K.linkedin})\n` +
        `• 💻 **GitHub:** [Abhinav-vishwkarmaa](${K.github})\n\n` +
        `He is open for **Backend Developer** roles focused on Node.js, SQL, Redis, and scalable SaaS/B2B systems.`;
    }

    if (q.match(/\b(resume|cv|download|pdf|profile)\b/)) {
      return `You can download Abhinav Vishwakarma's resume right here:\n\n` +
        `📄 **[Click to View & Download Resume (PDF)](./${K.resumePath})**`;
    }

    if (q.match(/\b(experience|work experience|company|tenure|role|job|jobs|work history|career|intern|developer role|kaam|where does he work|working at|works at|work at)\b/)) {
      const exp = K.experience;
      return `### 🏢 Experience: ${exp.role}\n` +
        `**Duration:** ${exp.period}\n` +
        `**Tech Stack:** ${exp.techStack}\n\n` +
        `**Key Contributions:**\n` +
        exp.highlights.map(h => `• ${h}`).join('\n');
    }

    if (q.match(/\b(project|projects|konvo|shoes|tracking|girik|maritime|ecommerce|e-commerce|razorpay|saas|b2b|app|apps|application|applications)\b/)) {
      const found = K.projects.find(p => q.includes(p.id) || q.includes(p.title.split(' ')[0].toLowerCase()) || (q.includes('shoes') && p.id === 'konvo') || (q.includes('tracking') && p.id === 'tracking') || ((q.includes('ecommerce') || q.includes('e-commerce') || q.includes('razorpay')) && p.id === 'ecommerce') || ((q.includes('girik') || q.includes('maritime')) && p.id === 'girik'));
      if (found) {
        return `### ${found.title}\n\n${found.overview}\n\n**Tech Stack:** ${found.stack}\n\n**Key Engineering:**\n` + found.details.map(d => `• ${d}`).join('\n');
      }
      return `Abhinav has built 4 production backend systems:\n\n` +
        K.projects.map((p, i) => `${i + 1}. **${p.title}:** ${p.overview}`).join('\n') +
        `\n\nWould you like in-depth details on any specific project?`;
    }

    if (q.match(/\b(skill|skills|stack|tech|frontend|backend|database|node|express|mongo|javascript|sql|docker|mysql|postgres|redis|bullmq)\b/)) {
      const s = K.skills;
      return `### 🛠️ Abhinav's Technical Skills Matrix\n\n` +
        `• **Backend:** ${s.backend.join(", ")}\n` +
        `• **Languages:** ${s.languages.join(", ")}\n` +
        `• **Databases:** ${s.databases.join(", ")}\n` +
        `• **Queues:** ${s.queue.join(", ")}\n` +
        `• **Deployment:** ${s.deployment.join(", ")}\n` +
        `• **Tools:** ${s.tools.join(", ")}`;
    }

    if (q.match(/\b(education|college|btech|degree|cert|certification|cgpa|school|qualification)\b/)) {
      return `### 🎓 Education\n\n` +
        `• **${K.degree}**\n` +
        `  *${K.college}*`;
    }

    return `I am only programmed to answer questions related to **Abhinav Vishwakarma's resume**, skills, projects, and professional background.\n\n` +
      `Please feel free to ask me anything about Abhinav:\n` +
      `• *"What are Abhinav's top projects?"*\n` +
      `• *"Tell me about his technical skills & tech stack"*\n` +
      `• *"What is his backend work experience?"*\n` +
      `• *"What is his education?"*\n` +
      `• *"How can I contact or hire Abhinav?"*`;
  }
}

// UI Integration
document.addEventListener("DOMContentLoaded", () => {
  const botEngine = new AbhinavAI();

  const launcherBtn = document.getElementById("aiLauncherBtn");
  const modalBackdrop = document.getElementById("aiModalBackdrop");
  const chatWindow = document.getElementById("aiChatWindow");
  const closeBtn = document.getElementById("aiCloseBtn");
  const messagesArea = document.getElementById("aiMessagesArea");
  const inputField = document.getElementById("aiInputField");
  const sendBtn = document.getElementById("aiSendBtn");
  const suggestionsBar = document.getElementById("aiSuggestionsBar");
  const quickAiTriggers = document.querySelectorAll(".trigger-ai-modal");

  function openChat() {
    chatWindow.classList.add("open");
    modalBackdrop.classList.add("open");
    inputField.focus();
  }

  function closeChat() {
    chatWindow.classList.remove("open");
    modalBackdrop.classList.remove("open");
  }

  if (launcherBtn) launcherBtn.addEventListener("click", openChat);
  if (closeBtn) closeBtn.addEventListener("click", closeChat);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeChat);

  quickAiTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openChat();
    });
  });

  function appendMessage(text, sender = "bot") {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;

    // Simple markdown formatting (bold, italic, links, lists)
    let formatted = text
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code style='background:rgba(255,255,255,0.1);padding:2px 5px;border-radius:4px;'>$1</code>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' target='_blank' style='color:#a78bfa;text-decoration:underline;'>$1</a>");

    bubble.innerHTML = formatted;
    messagesArea.appendChild(bubble);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  function showTypingIndicator() {
    const indicator = document.createElement("div");
    indicator.className = "typing-indicator";
    indicator.id = "activeTypingIndicator";
    indicator.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;
    messagesArea.appendChild(indicator);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById("activeTypingIndicator");
    if (indicator) indicator.remove();
  }

  function handleSend(userText) {
    const text = userText || inputField.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    if (!userText) inputField.value = "";

    showTypingIndicator();

    // Natural bot response delay
    setTimeout(() => {
      removeTypingIndicator();
      const answer = botEngine.generateAnswer(text);
      appendMessage(answer, "bot");
    }, 450);
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => handleSend());
  }

  if (inputField) {
    inputField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    });
  }

  // Suggestion chips click
  if (suggestionsBar) {
    suggestionsBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".ai-chip");
      if (chip) {
        const query = chip.getAttribute("data-query") || chip.textContent.trim();
        handleSend(query);
      }
    });
  }
});
