export const DATA = {
  cv: "/Mariem_Saffar_CV.pdf",
  home: {
    hero: {
      name: "Mariem Saffar",
      title: "Odoo Consultant & Full-Stack Engineer",
      subtitle:
        "Computer engineer with 2+ years of experience across Odoo ERP consulting and full-stack web development. I own the Odoo.sh environment of a real-estate company — from access rights and custom modules to version migrations — and I build the web software behind business processes.",
      current: {
        label: "Currently at",
        company: "Société Kahloun Immobilière",
        logo: "ski.png",
      },
      stats: [
        { value: "2+", label: "Years of experience" },
        { value: "v18 → v19", label: "Odoo.sh migration led" },
        { value: "7+", label: "Projects delivered" },
      ],
    },
    expertise: {
      eyebrow: "What I do",
      sectionTitle: "Core Expertise",
      sectionDescription:
        "From ERP configuration to production-grade web applications — I bridge business needs and the software that serves them.",
      items: [
        {
          title: "Odoo ERP & Odoo.sh",
          icon: "simple-icons:odoo",
          description:
            "Custom modules, module customisation from a defined functional design, version migrations, and administration of production, staging and development instances.",
          tags: ["Odoo 18 / 19", "Odoo.sh", "Odoo Studio", "Python"],
        },
        {
          title: "Access & Identity Management",
          icon: "lucide:shield-check",
          description:
            "Odoo user groups, access rights and record rules, plus Microsoft 365 account administration — creation, licensing, roles and permissions.",
          tags: ["Roles & rights", "Microsoft 365", "Segregation of duties"],
        },
        {
          title: "Full-Stack Development",
          icon: "lucide:code-xml",
          description:
            "Responsive front-ends and secure REST APIs with React, Angular, NestJS and Symfony, backed by clean architecture and automated tests.",
          tags: ["React", "Angular", "NestJS", "Symfony"],
        },
        {
          title: "DevOps & Cloud",
          icon: "lucide:cloud-cog",
          description:
            "Containerised services and CI/CD pipelines with Docker, GitLab CI and AWS for faster, more reliable releases.",
          tags: ["Docker", "GitLab CI", "AWS", "Nginx"],
        },
      ],
    },
    experience: {
      eyebrow: "Career",
      sectionTitle: "Where I've Worked",
      sectionDescription:
        "Companies where I've built, shipped and supported software in production.",
    },
  },
  about: {
    profile: {
      name: "Mariem Saffar",
      title: "Odoo Consultant & Full-Stack Engineer",
      image: "pmariem.png",
      description: [
        "I am a computer engineer with 2+ years of experience spanning Odoo ERP consulting and full-stack web development.",
        "At Société Kahloun Immobilière I own the Odoo.sh environment: I manage roles and access rights, customise modules according to a well-defined functional design, build custom modules when the business needs them, administer Microsoft 365 accounts, and led the production migration from Odoo 18 to Odoo 19.",
        "Before that, I built Angular / Symfony applications and CI/CD pipelines as a full-stack developer. I am equally comfortable analysing a business process with end users and building the software behind it.",
      ],
      facts: [
        { icon: "lucide:map-pin", label: "Sahloul, Sousse — Tunisia" },
        { icon: "lucide:graduation-cap", label: "Computer Engineer — Polytechnic School of Sousse" },
        { icon: "lucide:languages", label: "Arabic · French (B2) · English" },
      ],
    },
    experience: [
      {
        role: "Odoo Consultant & IT Support",
        company: "Société Kahloun Immobilière",
        logo: "ski.png",
        location: "Sousse, Tunisia",
        date: "Oct 2025 – Present",
        current: true,
        summary:
          "Owner of the company's Odoo.sh platform — configuration, customisation, security and migrations.",
        highlights: [
          "Led the Odoo.sh migration from v18 to v19: impact analysis, refactoring and adaptation of custom modules, regression testing on staging and controlled production rollout.",
          "Manage roles on Odoo: user groups, access rights and record rules per department, in line with security policies and segregation of duties.",
          "Customise existing modules according to a well-defined functional design, validated with business stakeholders.",
          "Develop custom Odoo modules tailored to business needs, alongside Odoo Studio fields, views, server actions, automation rules and webhooks.",
          "Administer Microsoft 365 accounts: creation, licensing, roles and permissions.",
          "Administer production, staging and development instances on Odoo.sh, and support CRM, Accounting, Inventory, Purchase, Sales and Quality.",
          "Deliver L1/L2 support and hands-on Odoo training with end-user documentation.",
        ],
        tags: ["Odoo 18 / 19", "Odoo.sh", "Python", "Odoo Studio", "PostgreSQL", "Microsoft 365"],
      },
      {
        role: "Full-Stack Developer",
        company: "Euro Tech Conseil",
        logo: "etc.jpg",
        location: "Sousse, Tunisia",
        date: "Sept 2024 – June 2025",
        current: false,
        summary:
          "Web & mobile development agency — front-end and back-end delivery on client projects.",
        highlights: [
          "Built responsive Angular interfaces, cutting task completion time by up to 70% on core workflows.",
          "Maintained and extended Symfony / PHP back-end services, optimising performance and adding business logic.",
          "Designed secure REST APIs with Symfony API Platform and JWT authentication.",
          "Set up CI/CD pipelines with GitLab CI, Docker and AWS.",
          "Implemented unit and integration tests with Jest and PHPUnit.",
        ],
        tags: ["Angular", "Symfony", "API Platform", "Docker", "AWS", "GitLab CI"],
      },
      {
        role: "Full-Stack Developer — Final-Year Project",
        company: "Anypli",
        logo: "anypli.jpg",
        location: "Sousse, Tunisia",
        date: "Feb 2024 – May 2024",
        current: false,
        summary: "Internship — real-time collaborative platform.",
        highlights: [
          "Built a real-time collaborative platform with React (TypeScript) and NestJS.",
          "Integrated Redis caching and WebSockets to serve 2,000+ concurrent users at <200 ms latency.",
          "Added AI-powered recommendations via Google Cloud AI APIs and an interactive Leaflet map system.",
        ],
        tags: ["React", "TypeScript", "NestJS", "Redis", "Google Cloud"],
      },
      {
        role: "Full-Stack Developer",
        company: "ADN Expertise",
        logo: "adn_exp.jpg",
        location: "Sousse, Tunisia",
        date: "July 2023 – Aug 2023",
        current: false,
        summary: "Internship — ReactJS / NestJS application.",
        highlights: [
          "Developed a ReactJS / NestJS application with Redux state management across complex UI modules.",
          "Built RESTful APIs backed by MongoDB and Dockerized services deployed through GitLab CI/CD.",
        ],
        tags: ["React", "Redux", "NestJS", "MongoDB", "Docker"],
      },
      {
        role: "Front-End Developer",
        company: "ENVAST",
        logo: "envast.png",
        location: "Sousse, Tunisia",
        date: "July 2022 – Sept 2022",
        current: false,
        summary: "Internship — responsive ReactJS application.",
        highlights: [
          "Built a responsive ReactJS application with clean architecture and reusable components, integrating RESTful APIs.",
        ],
        tags: ["React", "REST API"],
      },
    ],
    education: [
      {
        title: "Computer Engineering Degree",
        school: "Polytechnic School of Sousse",
        date: "2021 – 2024",
        description:
          "Engineering degree specialised in software engineering: software development, system design, deployment and testing.",
      },
      {
        title: "Classical Preparatory Cycle (MP)",
        school: "Polytechnic School of Sousse",
        date: "2019 – 2021",
        description:
          "Intensive mathematics–physics cycle preparing for the National Engineering Entrance Exam.",
      },
      {
        title: "Mathematics Baccalaureate",
        school: "Pilot Secondary School of Kairouan",
        date: "2019",
        description:
          "Elite secondary school admitting students through competitive selection.",
      },
    ],
    skills: [
      {
        title: "ERP & Business Systems",
        icon: "simple-icons:odoo",
        items: [
          "Odoo 18 / 19",
          "Odoo.sh",
          "Odoo Studio",
          "Custom modules",
          "Server actions",
          "Automation rules",
          "Webhooks",
          "Microsoft 365",
        ],
      },
      {
        title: "Front-End",
        icon: "lucide:layout-template",
        items: ["React.js", "Next.js", "Angular", "TypeScript", "Three.js", "Tailwind CSS"],
      },
      {
        title: "Back-End",
        icon: "lucide:server",
        items: ["Node.js", "NestJS", "Express.js", "Symfony / PHP", "Spring Boot", "Python"],
      },
      {
        title: "APIs & Databases",
        icon: "lucide:database",
        items: [
          "REST",
          "GraphQL",
          "API Platform",
          "JWT",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
        ],
      },
      {
        title: "DevOps & Cloud",
        icon: "lucide:cloud-cog",
        items: ["Docker", "Docker Compose", "Kubernetes", "Nginx", "Jenkins", "GitLab CI", "AWS"],
      },
      {
        title: "Tools & Methods",
        icon: "lucide:wrench",
        items: ["Git", "Jira", "Postman", "Swagger", "Figma", "Agile / Scrum", "CCNA1 / CCNA2"],
      },
    ],
    certifications: [
      { name: "CCNA1 / CCNA2", issuer: "Cisco Networking Academy", year: "2022" },
      { name: "DELF B2", issuer: "French International Education", year: "2023" },
      { name: "TOEIC", issuer: "Amideast", year: "2023" },
    ],
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "French", level: "Fluent (DELF B2)" },
      { name: "English", level: "Professional working proficiency" },
    ],
    achievements: [
      "Silver medal — national DevOps challenge, Nuit de l'Info (2021)",
      "Active member — Microsoft Club, Polytechnic School of Sousse (2021 – 2023)",
      "Built Amena, a web app connecting charitable clubs with people in need (2022)",
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of web platforms, ERP work and data projects I've designed and built.",
    work: [
      {
        id: 1,
        title: "Harmony Academy App",
        description:
          "Developed a full-stack web platform for learning musical instruments, featuring live/recorded lessons with scheduling and maps integration, and an e-commerce module for buying/selling instruments. Managed over seven user roles, including platform, course, and shop administration.",
        image: "harm1.png",
        gallery: [
          "harm3.png",
          "harm2.png",
          "ha3.png",
          "ha6.png",
          "ha9.png",
          "ha10.png",
          "ha12.png",
        ],
        category: "Applications",
        details:
          "Developed a full-stack web application as my final year project for learning musical instruments, featuring live/recorded classes (Google Meet), scheduling with Google Maps, a marketplace for buying/selling instruments, blogs, and multi-role administration (7+ actors). Built with React, Redux Toolkit & RTK Query, Nest.js, MySQL, Redis, and Firebase Storage, and deployed with Laravel Forge.",
        github: "https://github.com/Mariemsaffar",
        live: "",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss" },
          { name: "TypeScript", icon: "logos:typescript" },
          { name: "Node.js", icon: "logos:nodejs" },
          { name: "MySQL", icon: "logos:mysql" },
          { name: "JWT", icon: "simple-icons:jsonwebtokens" },
          { name: "Swagger", icon: "simple-icons:swagger" },
        ],
      },
      {
        id: 2,
        title: "APO Platform",
        description:
          "APO is a platform designed to centralize and provide access to laws, decrees, and regulations related to the petroleum sector, published by the relevant ministry. It enables users to easily consult current legislation and stay informed about regulatory updates.",
        image: "apo4.png",
        gallery: ["apo3.png", "apo12.png", "apo11.png", "apo15.jpeg"],
        category: "Web Development",
        details:
          "APO is a platform designed to centralize and provide access to laws, decrees, and regulations related to the petroleum sector, published by the relevant ministry. It enables users to easily consult current legislation and stay informed about regulatory updates.",
        github: "https://github.com/Mariemsaffar",
        live: "",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
        ],
      },
      {
        id: 3,
        title: "MediConsult",
        description:
          "MediConsult is a platform dedicated to medical practices, designed to manage patient records efficiently. It allows patients to book appointments with the medical office through an integrated messaging system and to ask questions online directly to their doctors.",
        image: "mediconsult1.png",
        gallery: ["mediconsult2.png", "mediConsult3.png", "mediConsult4.png"],
        category: "Web Development",
        details:
          "MediConsult is a platform dedicated to medical practices, designed to manage patient records efficiently. It allows patients to book appointments with the medical office through an integrated real-time messaging system (Socket.io) and to ask questions online directly to their doctors.",
        github: "https://github.com/Mariemsaffar",
        live: "",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
        ],
      },
      {
        id: 4,
        title: "Deeops",
        description:
          "DeeOps is an intelligent ERP platform designed to optimize business management by centralizing key processes such as invoicing, treasury, sales, purchases, inventory, subscriptions, and accounting. I contributed to developing front-end and back-end interfaces, including the dashboard and client records, enhancing the platform’s functionality and usability.",
        image: "dashboard-deeops.png",
        gallery: ["dashboard-deeops.png", "pc1.png", "pc2.png"],
        category: "Applications",
        details:
          "DeeOps is an intelligent ERP platform designed to optimize business management by centralizing key processes such as invoicing, treasury, sales, purchases, inventory, subscriptions, and accounting. I contributed to developing front-end and back-end interfaces, including the dashboard and client records, enhancing the platform’s functionality and usability.",
        github: "https://github.com/Mariemsaffar",
        live: "",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
        ],
      },
      {
        id: 5,
        title: "BI Salary Analytics Dashboard",
        description:
          "A business intelligence project that provides an interactive dashboard visualizing salaries of software engineers across various roles, including Data Analysts, BI Developers, Data Engineers, and Machine Learning Engineers. I collected and prepared a dataset, performed data analysis with machine learning techniques, and implemented the results into a BI dashboard to deliver actionable insights and salary comparisons by domain.",
        image: "bi1.png",
        gallery: ["bi2.png", "bi3.png", "bi4.png", "bi5.png", "bi6.png", "bi7.png", "bi8.png"],
        category: "Backend Services",
        details:
          "A business intelligence project that provides an interactive dashboard visualizing salaries of software engineers across various roles, including Data Analysts, BI Developers, Data Engineers, and Machine Learning Engineers. I collected and prepared a dataset, performed data analysis with machine learning techniques, and implemented the results into a BI dashboard to deliver actionable insights and salary comparisons by domain.",
        github: "https://github.com/Mariemsaffar",
        live: "",
        tech: [{ name: "Python", icon: "logos:python" }],
      },
      {
        id: 6,
        title: "Darija to Arabic",
        description:
          "An intelligent transliteration platform that converts Tunisian dialect into Standard Arabic with high accuracy. It combines rule-based methods, LSTM models, and GPT-3 fine-tuning to handle linguistic complexity, supported by advanced NLP techniques and error-correction mechanisms for improved reliability.",
        image: "sarra6.png",
        gallery: ["sarra6.png", "sarra2.png"],
        category: "Applications",
        details:
          "An intelligent transliteration platform that converts Tunisian dialect into Standard Arabic with high accuracy. It combines rule-based methods, LSTM models, and GPT-3 fine-tuning to handle linguistic complexity, supported by advanced NLP techniques and error-correction mechanisms for improved reliability.",
        github: "https://github.com/Mariemsaffar",
        live: "",
        tech: [{ name: "Python", icon: "logos:python" }],
      },
      {
        id: 7,
        title: "Quiz Application",
        description:
          "A web-based quiz platform built with React that consumes ready-made quiz APIs from the network. It offers quizzes across multiple domains, such as medicine, agriculture, and more, and displays the final score results at the end of each session, providing an interactive and engaging user experience.",
        image: "quiz1.png",
        gallery: ["quiz2.png", "quiz3.png", "quiz4.png"],
        category: "Applications",
        details:
          "A web-based quiz platform built with React that consumes ready-made quiz APIs from the network. It offers quizzes across multiple domains, such as medicine, agriculture, and more, and displays the final score results at the end of each session.",
        github: "https://github.com/Mariemsaffar",
        live: "",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
        ],
      },
    ],
  },
  contact: {
    heading:
      "Have an ERP or web project in mind? Get in touch and let's build it together.",
    location: {
      mapSrc: "https://www.google.com/maps?q=35.82450,10.63458&z=15&output=embed",
      address: "SAHLOUL-SOUSSE",
    },
  },
  morphingTexts: {
    about: ["About Me", "Odoo Consultant", "Full-Stack Engineer"] as const,
    projects: ["My Work", "Projects", "Case Studies"] as const,
    contact: ["Let's", "Work", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Mariem Saffar",
    description:
      "Odoo consultant & full-stack engineer based in Sousse, Tunisia. Open to new projects and collaborations.",
    contact: {
      email: "mariem.saffar@polytechnicien.tn",
      phone: "+216 40 904 323",
      location: "Sahloul - Sousse, Tunisia",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Mariemsaffar", icon: "mdi:github" },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/mariem-saffar/",
        icon: "mdi:linkedin",
      },
    ],
    services: [
      "Odoo implementation & customisation",
      "Odoo version migration",
      "Access rights & Microsoft 365 administration",
      "Full-stack web development",
    ],
  },
} as const;
