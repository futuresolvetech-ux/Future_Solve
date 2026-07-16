export const projectsData = [
  {
    id: 1,
    title: "RankCoda",
    description: "A comprehensive web platform designed to enhance digital presence and ranking optimization. Built with modern web technologies to deliver exceptional performance and SEO capabilities.",
    longDescription: "RankCoda is a sophisticated platform that helps businesses improve their online visibility through advanced SEO tools, analytics, and optimization strategies. The platform features real-time monitoring, competitor analysis, and actionable insights.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SEO Tools"],
    link: "https://rankcoda.com/",
    category: "Web Platform",
    featured: true,
    metric: "+180% SEO Traffic",
    headline: "How RankCoda scaled SEO crawling to support 5M+ daily queries",
    challenge: "The platform was bottlenecked by slow indexing and high server latency during peak crawling periods, causing crawl budgets to run out quickly.",
    solution: "Architected a globally distributed caching system using Redis, migrated to serverless edge functions, and optimized database query execution plans.",
    impact: "Response time reduced by 72% globally, SEO crawler indexing speed improved by 180%, and monthly hosting costs were cut by 40%."
  },
  {
    id: 2,
    title: "MAIE EMR",
    description: "AI-powered Electronic Medical Records assistant system that revolutionizes healthcare data management. Features intelligent automation and seamless workflow integration.",
    longDescription: "MAIE EMR is an advanced healthcare platform that leverages artificial intelligence to streamline medical record management. It includes features like automated diagnosis suggestions, patient history analysis, appointment scheduling, and secure data encryption.",
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "AI/ML"],
    link: "https://emr.maie.to/login",
    category: "Healthcare AI",
    featured: true,
    metric: "99.9% AI Accuracy",
    headline: "Automating Electronic Medical Records with high-availability AI assistants",
    challenge: "Sifting through patient records manually was causing clinical bottlenecks, administrative fatigue, and diagnosis delays for healthcare staff.",
    solution: "Integrated a custom natural language processor (NLP) model with secure healthcare databases, using secure local encryption keys and real-time medical terms parsing.",
    impact: "Clinical record retrieval times cut by 85%, diagnosis drafting speeds improved by 50%, with zero HIPAA compliance violations."
  },
  {
    id: 3,
    title: "JobSolv",
    description: "AI-driven HR system that streamlines recruitment processes and candidate management. Leverages machine learning for intelligent job matching and applicant tracking.",
    longDescription: "JobSolv transforms the recruitment landscape with AI-powered candidate screening, automated interview scheduling, resume parsing, and predictive analytics to find the best talent match. The platform reduces hiring time by 60% and improves candidate quality.",
    technologies: ["React", "Node.js", "Machine Learning", "MongoDB", "WebSockets"],
    link: "https://www.jobsolv.com/",
    category: "HR Technology",
    featured: true,
    metric: "-60% Hiring Time",
    headline: "How JobSolv streamlined HR recruitment with automated screening models",
    challenge: "Recruiters spent hours screening thousands of resumes manually, leading to candidate leakage, high churn rates, and lost opportunities.",
    solution: "Built a machine-learning applicant tracking parser that extracts key skills and automatically scores candidates against open job specifications in real-time.",
    impact: "Recruitment cycle cut by 60%, candidate match quality increased by 45%, and team recruitment productivity boosted by 80%."
  },
  {
    id: 4,
    title: "Put It For Sale",
    description: "Online bidding platform specialized in automotive auctions. Features real-time bidding, secure transactions, and comprehensive vehicle listings.",
    longDescription: "Put It For Sale is a dynamic auction platform that connects car sellers with buyers through a transparent bidding system. Features include real-time bid updates, secure payment processing, vehicle verification, detailed inspection reports, and auction analytics.",
    technologies: ["Next.js", "React", "Socket.io", "Stripe", "AWS"],
    link: "https://putitforsale.vercel.app/",
    category: "E-commerce",
    featured: true,
    metric: "$50M+ Bid Volume",
    headline: "Real-time bidding synchronization for automotive auctions",
    challenge: "Bids were dropping or lagging during high-traffic vehicle auctions due to WebSocket socket leaks and lack of cluster message scaling.",
    solution: "Orchestrated microservices using a Socket.io cluster with Redis pub-sub adapters, backed by highly available AWS EC2 application servers.",
    impact: "Bid latency minimized to <50ms globally, supporting over 10,000 active concurrent bidders with zero auction downtime."
  },
  {
    id: 5,
    title: "Darbi",
    description: "Mobile application for ride-hailing and transportation services. Provides seamless booking experience with real-time tracking and payment integration.",
    longDescription: "Darbi is a comprehensive ride-hailing solution that offers users convenient transportation options. The app features GPS tracking, multiple payment methods, driver ratings, trip history, fare estimation, and in-app customer support.",
    technologies: ["React Native", "Firebase", "Google Maps API", "Stripe", "Redux"],
    link: "#",
    category: "Mobile App",
    featured: false,
    metric: "1M+ Rides Booked",
    headline: "Optimizing real-time ride-booking maps for mobile travelers",
    challenge: "High battery drainage and location drift on old mobile devices during real-time GPS tracking frustrated users during trips.",
    solution: "Coded a custom React Native location tracking module with low-power background location loops and Kalman route snapping filters.",
    impact: "Battery consumption reduced by 40%, location accuracy improved to 3 meters, supporting over 1 million completed bookings."
  },
  {
    id: 6,
    title: "Rahal Drive",
    description: "Advanced ride-sharing application with driver and passenger management. Features include route optimization, fare calculation, and in-app communication.",
    longDescription: "Rahal Drive is an innovative ride-sharing platform that optimizes routes for efficiency, provides dynamic pricing, ensures driver-passenger safety through verification systems, and offers seamless in-app communication and payment processing.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Maps SDK"],
    link: "#",
    category: "Mobile App",
    featured: false,
    metric: "+35% Route Efficiency",
    headline: "Dynamic route optimization and ride-sharing clustering",
    challenge: "High pickup wait times due to unoptimized vehicle routing in high-density urban areas caused customer churn.",
    solution: "Developed a custom traveling salesman routing algorithm using graph clustering, sniped via backend Node.js microservices.",
    impact: "Average pickup delay reduced by 25 minutes, driver utilization rates increased by 35%."
  },
  {
    id: 7,
    title: "Sidekick Buddy",
    description: "A premium Progressive Web Application (PWA) serving as an interactive digital companion and workflow automation assistant.",
    longDescription: "Sidekick Buddy is a high-performance Progressive Web Application designed to maximize productivity. It features offline database functionality, secure local storage sync, customizable productivity dashboards, and background service workers that run natively on mobile devices and desktop browsers.",
    technologies: ["React", "PWA", "Service Workers", "Tailwind CSS", "Vite"],
    link: "https://sidekick-web-gilt.vercel.app/",
    category: "Web Platform",
    featured: true,
    metric: "100k+ PWA Users",
    headline: "Building an offline-first workflow companion assistant",
    challenge: "Users lost productivity work logs when moving through zones of poor cellular network coverage.",
    solution: "Engineered a Progressive Web App (PWA) using Service Workers, background sync APIs, and IndexedDB local client storage.",
    impact: "100% data retention during offline usage, near-instant load times (<0.5s) on revisit, reaching over 100,000 active users."
  }
];

export const servicesData = [
  {
    id: "web",
    title: "Web Platforms for Growth",
    description: "We engineer high-fidelity web solutions, internal portals, and dashboards tailored for small and medium enterprises (SMEs) to streamline operations and accelerate business growth.",
    technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "GraphQL", "PostgreSQL"],
    icon: "desktop_windows",
    color: "indigo"
  },
  {
    id: "mobile",
    title: "Mobile App Scaling",
    description: "Sleek, cross-platform and native mobile applications that extend your small business reach. Deployed on iOS and Android with offline-first features for seamless customer interaction.",
    technologies: ["React Native", "Flutter", "Kotlin", "Firebase", "Redux", "APIs Integration"],
    icon: "devices",
    color: "cyan"
  },
  {
    id: "ai",
    title: "Process & AI Automation",
    description: "We solve complex bottleneck problems with custom AI integrations, smart natural language processors, and workflow automations, enabling growing teams to focus on scaling.",
    technologies: ["Python", "TensorFlow", "OpenAI API", "Data Science", "LangChain", "Vector DBs"],
    icon: "psychology",
    color: "purple"
  },
  {
    id: "cloud",
    title: "Digital Transformation",
    description: "We guide growing businesses through migrating legacy systems to secure, future-proof cloud architectures. Establishing CI/CD pipelines, container orchestration, and serverless scalability.",
    technologies: ["AWS", "Docker", "Git/GitHub", "Vercel", "CI/CD Pipelines", "Redis"],
    icon: "cloud_queue",
    color: "emerald"
  }
];

export const workflowData = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    description: "We define project objectives, analyze user needs, map technical requirements, and outline initial product architectures.",
    color: "text-cyan-400"
  },
  {
    phase: "02",
    title: "UX/UI & System Design",
    description: "We create interactive visual mockups and layout high-availability backend schema optimized for secure scaling.",
    color: "text-indigo-400"
  },
  {
    phase: "03",
    title: "Agile Development",
    description: "We code using test-driven workflows, clean modular structures, and maintain continuous integrations for quality control.",
    color: "text-cyan-400"
  },
  {
    phase: "04",
    title: "Deployment & Scale",
    description: "We orchestrate container launches, configure security walls, and establish real-time dashboard analytics monitoring.",
    color: "text-indigo-400"
  }
];

export const statsData = {
  yearsActive: "5+",
  projectsDelivered: "50+",
  clientSatisfaction: "100%",
  email: "contact@futuresolve.com",
  phone: "+20 128 415 2740",
  location: "Egypt"
};
