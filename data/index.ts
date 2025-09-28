export const DATA = {
  home: {
    hero: {
      name: "Mariem SAFFAR",
      subtitle:
        "Frontend Developer with one year of hands-on experience. My expertise lies in React.js , where I build dynamic user experiences. For backend development, I specialize in Symfony PHP and Nest.js, delivering robust and efficient server-side solutions.",
    },
    skills: {
      sectionTitle: "technologies & Expertise",

      overview: [

        {
          name: "Frontend Development",
          level: 87,
          icon: "lucide:code",
          color: "secondary",
        },
        {
          name: "Backend Development",
          level: 95,
          icon: "lucide:smartphone",
          color: "success",
        },

      ],
    },
    testimonials: {
      sectionTitle: "Professional Experience & Internship Companies",
      items: [
        {
          id: 1,
          name: "Euro Tech Conseil Kairouan",
          role: "Professional Experience",
          content:
            "Euro Tech Conseil is a development agency , specializing in creating innovative web and mobile solutions.",
          avatar: "etc.jpg",
        },
        {
          id: 2,
          name: "Anypli Sousse",
          role: "Internship Experience",
          content:
            "A software development agency providing custom web & mobile applications, digital communication, and marketing solutions.",
          avatar: "anypli.jpg",
        },
        {
          id: 3,
          name: "Adn Expertise Sousse",
          role: "Internship Experience",
          content:
            "A digital consulting and development agency in Sousse offering web & mobile development, BI & Big Data, AI, and digital strategy.",
          avatar: "adn_exp.jpg",
        },
        {
          id: 4,
          name: "Envast Sousse",
          role: "Internship Experience",
          content: "A tech agency in Sousse specializing in web and mobile app development, video games, and AR/VR solutions.",
          avatar: "envast.png",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Mariem SAFFAR",
      title: "Full-Stack Developer",
      image:
        "pmariem.png",
      description: [
        "I am a results-driven full-stack developer specializing in scalable and maintainable web applications. My technical stack includes React with Redux for dynamic front-end interfaces , Nest.js and Symfony/PHP for robust back-end development. I have strong experience designing and consuming RESTful APIs, integrating secure authentication, and maintaining code quality through clean architecture.I am skilled in Docker for containerization and deploying applications on AWS, enabling smooth CI/CD pipelines and efficient scalability.",
      ],
    },
    education: [
      {
        title: "Pilot Primary School of Kairouan",
        date: "2012 - 2015",
        icon: "mdi:palette",
        description:
          "A prestigious school that selects high-achieving primary students through a competitive process. It provides a rigorous academic environment to develop their full potential.",
      },
      {
        title: "Pilot Secondary School of Kairouan",
        date: "2015 - 2019",
        icon: "mdi:school",
        description:
          "An elite secondary school for talented students identified through competitive selection. It offers an advanced curriculum to foster academic excellence and prepare for higher education",
      },
      {
        title: "Polytechnic School of Sousse Classical Preparatory MP",
        date: "2019 - 2021",
        icon: "mdi:school-outline",
        description:
          "The Classical Preparatory MP (Mathematics-Physics) is a rigorous preparatory cycle that prepares students for the National Engineering Entrance Exam (Concours National d’Ingénierie). It focuses on advanced training in mathematics, physics, and engineering fundamentals to equip students for top engineering programs.",
      },
      {
        title: "Polytechnic School of Sousse",
        date: "2021 - 2024",
        icon: "mdi:school-outline",
        description:
          "A higher education cycle leading to an Engineering degree with a specialization in Software Engineering, providing expertise in software development, system design, programming methodologies, deployment, application testing, and practical experience with various technologies through academic projects.",
      },
    ],
    experience: [
      {
        title: "Full-Stack Developer – Euro Tech Conseil",
        date: "Sept 2024 - Present",
        icon: "mdi:briefcase",
        description:
          "Currently contributing to professional projects as a full-stack developer, working on both front-end and back-end solutions with Angular and symfonyPHP.",
      },
      {
        title: "Web Development Intern – Anypli (Final-year Project)",
        date: "Feb 2024 - May 2024",
        icon: "mdi:monitor-dashboard",
        description:
          "Developed a web application using ReactTS, RTK Query, and NestJS, with MySQL, Firebase Storage, Redis, Docker, Leaflet maps, Google Cloud, and AI integrations. Focused on scalable architecture and advanced features.",
      },
      {
        title: "Full-Stack Developer – ADN Expertise Company",
        date: "July 2023 - August 2023",
        icon: "mdi:code-tags",
        description:
          "Worked on full-stack projects using ReactJS, Redux, NestJS, and MongoDB, contributing to feature development and application optimization.",
      },
      {
        title: "Front-end Developer – Envast Company",
        date: "July 2022 - Sept 2022",
        icon: "mdi:code-tags",
        description:
          "Built responsive web applications using ReactJS and RESTful APIs, ensuring high performance and clean code.",
      },
    ],

    technologies: {
      frontend: {
        description:
          "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
        ],
      },
      backend: {
        description:
          "I build fast APIs and scalable backends using Node.js, Bun, and Python.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Python", icon: "logos:python" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgresSQL", icon: "logos:postgresql" },
          { name: "OpenAI", icon: "simple-icons:openai" },
        ],
      },
      uiUx: {
        description:
          "I design smooth, user-centered interfaces and high-fidelity prototypes.",
        tools: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Framer", icon: "simple-icons:framer", color: "#0055FF" },
          { name: "Notion", icon: "logos:notion-icon" },
        ],
      },
      graphicDesign: {
        description:
          "My graphic work includes logos, branding, and posters using Adobe Suite.",
        tools: [
          { name: "Photoshop", icon: "logos:adobe-photoshop" },
          { name: "Illustrator", icon: "logos:adobe-illustrator" },
        ],
      },
      motionDesign: {
        description:
          "I animate UI flows and cinematic intros using After Effects and Blender.",
        tools: [
          { name: "After Effects", icon: "logos:adobe-after-effects" },
          { name: "Premiere Pro", icon: "logos:adobe-premiere" },
          { name: "Blender", icon: "logos:blender" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my recent projects showcasing UI/UX design and development expertise",
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
        gallery: [
          "apo3.png",
          "apo12.png",
          "apo11.png",
          "apo15.jpeg",
        ],
        category: "Web Development",
        details:
          "APO is a platform designed to centralize and provide access to laws, decrees, and regulations related to the petroleum sector, published by the relevant ministry. It enables users to easily consult current legislation and stay informed about regulatory updates.",
        github: "https://github.com/Mariemsaffar",
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
        gallery: [
          "mediconsult2.png",
          "mediConsult3.png",
          "mediConsult4.png",
        ],
        category: "Web Development",
        details:
          "MediConsult is a platform dedicated to medical practices, designed to manage patient records efficiently. It allows patients to book appointments with the medical office through an integrated messaging system and to ask questions online directly to their doctors.",
        github: "https://github.com/Mariemsaffar",
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
        gallery: [
          "dashboard-deeops.png",
          "pc1.png",
          "pc2.png",
        ],
        category: "Applications",
        details:
          "AI-powered chat assistant developed with React and TailwindCSS. Integrated with OpenAI’s GPT API for contextual conversations, deployed via Vercel with real-time response and adaptive UI.",
        github: "https://github.com/Mariemsaffar",
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
        gallery: [
          "bi2.png",
          "bi3.png",
          "bi4.png",
          "bi5.png",
          "bi6.png",
          "bi7.png",
          "bi8.png",
        ],
        category: "Backend Services",
        details:
          "A business intelligence project that provides an interactive dashboard visualizing salaries of software engineers across various roles, including Data Analysts, BI Developers, Data Engineers, and Machine Learning Engineers. I collected and prepared a dataset, performed data analysis with machine learning techniques, and implemented the results into a BI dashboard to deliver actionable insights and salary comparisons by domain.",
        github: "https://github.com/Mariemsaffar",
        tech: [
          { name: "Python", icon: "logos:python" },
        ],
      },
      {
        id: 6,
        title: "Darija to Arabic",
        description:
          "An intelligent transliteration platform that converts Tunisian dialect into Standard Arabic with high accuracy. It combines rule-based methods, LSTM models, and GPT-3 fine-tuning to handle linguistic complexity, supported by advanced NLP techniques and error-correction mechanisms for improved reliability.",
        image: "sarra6.png",
        gallery: [
          "sarra6.png",
          "sarra2.png",
        ],
        category: "Applications",
        details:
          "An intelligent transliteration platform that converts Tunisian dialect into Standard Arabic with high accuracy. It combines rule-based methods, LSTM models, and GPT-3 fine-tuning to handle linguistic complexity, supported by advanced NLP techniques and error-correction mechanisms for improved reliability.",
        github: "https://github.com/Mariemsaffar",
        tech: [
          { name: "Python", icon: "logos:python" },
        ],
      },
      {
        id: 7,
        title: "Quiz Application",
        description:
          "A web-based quiz platform built with React that consumes ready-made quiz APIs from the network. It offers quizzes across multiple domains, such as medicine, agriculture, and more, and displays the final score results at the end of each session, providing an interactive and engaging user experience.",
        image: "quiz1.png"
        ,
        gallery: [
          "quiz2.png",
          "quiz3.png",
          "quiz4.png",
        ],
        category: "Applications",
        details:
          "A productivity app designed for content creators featuring calendar syncing, automated post publishing, rich media previews, and cloud synchronization for seamless cross-device access.",
        github: "https://github.com/Mariemsaffar",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
        ],
      },
    ],
  },
  contact: {
    heading:
      "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc:
        "https://www.google.com/maps?q=35.82450,10.63458&z=15&output=embed",
      address: "SAHLOUL-SOUSSE",
    },
  },
  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Mariem SAFFRA",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "mariemsaffar442@gmail.com",
      phone: "+216 40 904 323",
      location: "SAHLOUL - SOUSSE",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Mariemsaffar", icon: "mdi:github" },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/mariem-saffar/",
        icon: "mdi:linkedin",
      },
    ],
    services: ["Full-Stack Web Developer"],
  },
} as const;
