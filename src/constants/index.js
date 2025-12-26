import project0 from "../assets/projects/aiformBuilder.png";
import project1 from "../assets/projects/chatDashboard.png";
import project2 from "../assets/projects/notesAppDashboard.png";
import project3 from "../assets/projects/AuthApp.jpg";
import slideGenImage from '../assets/projects/slide-gen.png'
import arbitrageBotImage from '../assets/projects/arbitrage_image.png';
import chimpxImage from '../assets/projects/chimpx.png';
import journalingAppImage from '../assets/projects/aijournal.png';

export const HERO_CONTENT = `I am a passionate full stack developer specializing in building robust, scalable, and AI-powered web applications. With 3 years of hands-on experience, I excel in modern front-end development using React.js and TypeScript, and back-end engineering with Node.js and Express. I have deep expertise in PostgreSQL for data management, and I'm proficient in building AI-driven solutions using LangChain and LangGraph. My cloud infrastructure skills include AWS services like S3, EC2, and Lambda, and I'm well-versed in DevOps practices including CI/CD pipelines, Docker containerization, and Kubernetes orchestration. My goal is to leverage this comprehensive skill set to create innovative, production-ready solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient, scalable, and AI-powered web applications. With 3 years of professional experience, I have mastered a comprehensive technology stack including React.js and TypeScript for front-end development, Node.js and Express for robust back-end systems, and PostgreSQL for reliable data management. I specialize in building intelligent applications using AI frameworks like LangChain and LangGraph, and I'm proficient in deploying and managing cloud infrastructure on AWS using S3, EC2, and Lambda services. My expertise extends to modern DevOps practices, including CI/CD pipeline automation, Docker containerization, and Kubernetes orchestration for scalable deployments. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality, production-ready solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Senior Software Developer",
    company: "Cryption Digital Services LLP",
    description: `Architected Web3 frontend applications for token launches (Levrex Bushido) with blockchain and smart contract integration.
• Built AI-powered DEX trading agents with natural language commands, reducing trading execution time by 60%.
• Engineered high-frequency arbitrage bots using Node.js, generating $1,000+ USDT in profitable trades.
• Developed AI-powered journaling mobile app with React Native and ML, achieving 85% user retention.
• Created MCP server with blockchain tools for token swaps via LLM clients, reducing transaction complexity by 70%.`,
    technologies: ["React.js", "React Native", "Node.js", "TypeScript", "Web3", "Blockchain", "Smart Contracts", "AI", "LangChain", "LangGraph", "LLM", "MCP", "DeFi", "Machine Learning"],
  },
  {
    year: "December 2024 - July 2025",
    role: "Software Developer",
    company: "Right Byte Technology",
    description: `Engineered enterprise CRM system automating 80% of workflows, increasing client retention by 30%.
• Developed AI-powered interview platform using Python and FastAPI with voice-to-text processing and candidate evaluation.
• Deployed AWS infrastructure (EC2, S3, Lambda, RDS) achieving 99.9% uptime for 10,000+ concurrent users.`,
    technologies: ["React.js", "TypeScript", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MySQL", "MongoDB", "AWS", "EC2", "S3", "Lambda", "RDS", "AI", "Machine Learning"],
  },
  {
    year: "July 2023 - December 2024",
    role: "Associate Software Developer",
    company: "Open Sense Labs",
    description: `Integrated LLMs (GPT-4, Claude) into production apps, improving user engagement by 35%.
• Optimized backend and database queries, reducing API response times by 25%.
• Built RESTful APIs with Node.js, Express.js, and TypeScript across 10+ microservices.
• Implemented data pipelines improving processing speed by 30%.`,
    technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "LLM", "GPT-4", "Claude"],
  },
  {
    year: "September 2022 - February 2023",
    role: "Frontend Developer Intern",
    company: "Learn Tech Plus",
    description: `Revamped company website using React.js and Vue.js, increasing user engagement by 40%.
• Delivered performance-optimized solutions reducing page load times.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Vue.js"],
  },
];

export const EDUCATION = [
  {
    year: "July 2019 - 2023",
    role: " Computer Science and Engineering",
    company: "Jabalpur Engineering College, Jabalpur",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "Node.js", "mongoDB"],
  },
  {
    year: "Jan 2022 ",
    role: "CS50x Introduction to Computer Science",
    company: "Harvard University",
    description: `An intensive introduction to the intellectual enterprises of computer science and the art of programming. Topics included abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. The course included problem sets inspired by real-world domains of cryptography, biology, finance, forensics, and gaming.`,
    technologies: ["C++", "Python", "JavaScript", "CyberSecurity", "SQL", "Web Development"],
  },
];

export const PROJECTS = [
  {
    title: "AI-Powered DeFi Trading Agent - Chimpx",
    image: chimpxImage,
    link: "https://github.com/Atmalviya",
    hostLink: "#",
    description:
      "Developed intelligent trading agents for decentralized exchanges enabling natural language interaction for position management and market analysis. Integrated real-time blockchain data feeds and implemented automated trading strategies based on user-defined parameters. Built secure wallet connection system supporting multiple Web3 wallets with transaction signing capabilities.",
    technologies: ["React.js", "TypeScript", "Node.js", "Web3", "Blockchain", "LangChain", "LangGraph", "DeFi", "Smart Contracts"],
  },
  {
    title: "Cryptocurrency Arbitrage Trading Bot",
    image: arbitrageBotImage,
    link: "https://github.com/Atmalviya",
    hostLink: "#",
    description:
      "Engineered high-frequency trading bot executing cross-platform arbitrage between centralized exchanges and banking systems. Implemented real-time price monitoring, automated order execution, and risk management protocols. Achieved $1,000+ USDT in profitable trades through optimized trading algorithms and latency reduction.",
    technologies: ["Node.js", "TypeScript", "Express", "PostgreSQL", "WebSockets", "REST APIs"],
  },
  {
    title: "AI Journaling Mobile Application",
    image: journalingAppImage,
    link: "https://github.com/Atmalviya",
    hostLink: "#",
    description:
      "Built a cross-platform mobile application featuring AI-powered life coaching and personalized insights. Integrated sentiment analysis and pattern recognition to provide actionable feedback on daily journal entries. Implemented secure user authentication, encrypted data storage, and cloud synchronization features.",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "AI", "Machine Learning", "LangChain"],
  },
  {
    title: "Slide Gen",
    image: slideGenImage, 
    link: "https://github.com/Atmalviya/slidegen",
    hostLink: "https://slide-gen.atmalviya.cloud/",
    description:
      "Created automated tool generating PowerPoint presentations from YouTube video URLs using AI-driven content extraction. Implemented subtitle extraction, NLP-based summarization, and formatted slide generation pipeline. Reduced presentation creation time by 75% through intelligent content structuring.",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Gemini AI",
      "TypeScript",
      "UploadThing",
      "Shadcn UI",
      "NLP",
    ],
  },
  {
    title: "Ai Form Builder",
    image: project0,
    link:"https://aiform-builder.atmalviya.cloud",
    hostLink:"https://aiform-builder.atmalviya.cloud/",
    description:
      "Developed an intelligent platform for dynamic form generation using AI-driven automation and natural language processing. Enables users to create complex, customized forms through conversational interface without coding knowledge.",
    technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "Drizzel", "AI", "LangChain"],
  },
  {
    title: "Real Time Chat Application",
    image: project1,
    link:"https://github.com/Atmalviya/chat-App2.0",
    hostLink:"https://notes-app-fe.up.railway.app/",
    description:
      "Built scalable real-time messaging platform with WebSocket technology ensuring low-latency communication. Implemented secure authentication, authorization, message encryption, and user presence detection. Designed responsive UI supporting group chats, file sharing, and message history synchronization.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT", "Encryption"],
  },
  {
    title: "Notes Application",
    image: project2,
    link:"https://github.com/Atmalviya/Notes-App-Fullstack",
    hostLink:"https://notes-app-fe.up.railway.app/",
    description:
      "This is a full-stack notes application built using the MERN stack. The application allows users to login to their account and create, read, update, and delete notes.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Authentication App",
    image: project3,
    link:"https://github.com/Atmalviya/Authentication-App",
    hostLink:"https://notes-app-fe.up.railway.app/",
    description:
      "This is an authentication application where users can register themselves, log in, view and update their profiles, and reset their passwords using an OTP sent to their email.",
    technologies: ["React", "Tailwin CSS", "Node.js", "Express", "MongoDB", "JWT"],
  }
];

export const CONTACT = {
  address: "Bhopal Madhya Pradesh, India",
  phoneNo: "+91 7987579681",
  email: "atulmalviyawork@gmail.com",
};
