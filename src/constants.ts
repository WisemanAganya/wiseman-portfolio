import { 
  Shield, 
  Code, 
  Terminal, 
  Search, 
  Globe, 
  Cpu, 
  Lock, 
  Smartphone, 
  FileCheck,
  GraduationCap,
  Award,
  Trophy,
  Mail,
  Linkedin,
  Phone,
  Monitor,
  Briefcase,
  Activity,
  Sparkles,
  Dumbbell,
  ShoppingBag,
  Star,
  Database,
  BrainCircuit,
  ChefHat,
  Music,
  Cake,
  Utensils
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Wiseman Aganya",
  email: "aganyawiseman@gmail.com",
  phone: "+254 742 044 032",
  linkedin: "https://www.linkedin.com/in/wiseman-aganya-39aaa926a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BcrTVUyVmQhaYQjPq%2BUA5OA%3D%3D",
  resume: "https://example.com/wiseman_aganya_resume.pdf", // Link to your actual resume PDF
  location: "Nairobi, KE",
  title: "Cybersecurity Analyst & Full-Stack Developer",
  summary: "Cybersecurity professional and full-stack web developer with over 4+ years of experience in cybersecurity—specializing in penetration testing and 3+ years of hands-on experience building secure, scalable web applications. Skilled in identifying, analyzing, and mitigating vulnerabilities while applying best practices in security compliance and risk management. Proficient in modern technologies including TypeScript, Node.js, SQL, HTML, Supabase, and Firebase, with strong capabilities in database design, management, and optimization. Experienced in leveraging AI tools to streamline development workflows, enhance productivity, and deliver intelligent solutions. Currently expanding expertise in mobile application development, with a focus on building efficient, user-centered applications that integrate seamlessly with secure backend systems."
};

export const SKILLS = [
  { name: "SOC Analysis", icon: Shield, category: "Cybersecurity" },
  { name: "Incident Response", icon: Terminal, category: "Cybersecurity" },
  { name: "Penetration Testing", icon: Lock, category: "Cybersecurity" },
  { name: "Vulnerability Assessment", icon: Search, category: "Cybersecurity" },
  { name: "Threat Hunting", icon: Search, category: "Cybersecurity" },
  { name: "Kali Linux", icon: Terminal, category: "Cybersecurity" },
  { name: "Metasploit", icon: Lock, category: "Cybersecurity" },
  { name: "OpenVAS", icon: Search, category: "Cybersecurity" },
  { name: "Suricata", icon: Shield, category: "Cybersecurity" },
  { name: "Wazuh", icon: Shield, category: "Cybersecurity" },
  { name: "SQL", icon: Database, category: "Development" },
  { name: "Defender XDR / Sentinel", icon: Cpu, category: "Tools" },
  { name: "AI Productivity Tools", icon: BrainCircuit, category: "Tools" },
  { name: "Splunk SIEM", icon: Monitor, category: "Tools" },
  { name: "Wireshark", icon: Search, category: "Tools" },
  { name: "Kotlin / Android", icon: Smartphone, category: "Development" },
  { name: "Jetpack Compose", icon: Code, category: "Development" },
  { name: "React / Vite", icon: Globe, category: "Development" },
  { name: "Supabase / Firebase", icon: Database, category: "Development" },
  { name: "Network Security", icon: Globe, category: "Infrastructure" },
  { name: "Cloud Security (Azure)", icon: Cpu, category: "Infrastructure" },
  { name: "Risk Assessment", icon: FileCheck, category: "Process" },
  { name: "Security Compliance", icon: FileCheck, category: "Process" }
];

export const EXPERIENCE = [
  {
    role: "Founder & CEO",
    company: "AWT Group",
    period: "Jan 2026 – Present",
    description: [
      "Founded and leading an IT company focused on building transformative web and mobile application systems.",
      "Driving digital transformation by developing innovative software solutions that modernize business operations and enhance user experiences.",
      "Overseeing end-to-end project delivery, from system architecture design to deployment and performance optimization."
    ]
  },
  {
    role: "IT Expert Freelancer",
    company: "Self-Employed",
    period: "Jan 2024 – Present",
    description: [
      "Designed and developed 5+ web and mobile applications using modern frameworks, improving client operational efficiency by up to 60%.",
      "Conducted network assessments and vulnerability analyses for small to mid-sized environments, identifying and resolving security and performance issues.",
      "Leveraged AI-driven tools and automation to streamline development workflows, reducing project delivery time by 80%.",
      "Implemented scalable and secure system architectures, ensuring high availability and performance optimization across deployed solutions.",
      "Certified Microsoft Security Operations Analyst, strengthening expertise in threat detection, incident response, and cybersecurity best practices.",
      "Expanding mobile development skills using Kotlin and Jetpack Compose, building modern Android applications with improved UI/UX performance."
    ]
  },
  {
    role: "SOC Analyst",
    company: "@ilabAfrica",
    period: "Nov 2021 – Dec 2023",
    description: [
      "Led security audits and penetration testing across 3+ systems, remediating 20+ critical vulnerabilities.",
      "Collaborated with cross-functional teams to ensure 100% application and infrastructure security compliance.",
      "Recommended and implemented 20+ improvements in security systems, reducing response time by 30%.",
      "Monitored security events daily, performing threat analysis to protect organizational assets."
    ]
  },
  {
    role: "IT Technician",
    company: "Fusion Technologies Ltd",
    period: "Feb 2022 – Jun 2022",
    description: [
      "Configured and supported 100+ IT hardware and software systems ensuring 99% uptime.",
      "Resolved 20+ technical issues related to network infrastructure, reducing system downtime by 35%.",
      "Maintained 50+ endpoints, ensuring 99.5% availability and system reliability."
    ]
  },
  {
    role: "Teaching Assistant (Volunteer)",
    company: "Kibera Blessed Academy",
    period: "Apr 2021 – May 2021",
    description: [
      "Tutored 30+ students individually, improving comprehension by 25%.",
      "Managed learning materials and supportive classroom environment for 5 teachers."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Business Information Technology",
    school: "Strathmore University, Nairobi",
  },
  {
    degree: "Diploma in Business Information Technology",
    school: "Strathmore University, Nairobi",
  }
];

export const CERTIFICATIONS = [
  "Microsoft Certified: Security Operations Analyst Associate",
  "Microsoft Africa Development Centre & Cyber Shujaa Cybersecurity Program"
];

export const PROJECTS = [
  {
    title: "Apex Sports Gear",
    client: "E-commerce & Fitness",
    description: "A premium e-commerce platform for high-performance sports equipment and athletic wear.",
    icon: Dumbbell,
    github: "https://github.com/WisemanAganya/Apex-Sports-Gear",
    demo: "https://apex-sports-gear.vercel.app/"
  },
  {
    title: "MindFiti GameFiti",
    client: "Health & Wellness",
    description: "Interactive health and wellness platform designed to gamify fitness and mental well-being.",
    icon: Activity,
    github: "https://github.com/WisemanAganya/MindFiti_GameFiti",
    demo: "https://mind-fiti-game-fiti.vercel.app/"
  },
  {
    title: "NJO-Bar",
    client: "Hospitality",
    description: "Digital management and presence for a modern hospitality venue, streamlining guest interaction.",
    icon: Star,
    github: "https://github.com/WisemanAganya/NJO-Bar",
    demo: "https://njo-bar.vercel.app/"
  },
/*
  {
    title: "AWT Group",
    client: "Corporate Operations",
    description: "Centralized corporate governance and operational platform for multi-sector business management.",
    icon: Briefcase,
    github: "https://github.com/WisemanAganya/Awt_Group",
    demo: "https://awt-group.vercel.app/"
  },
*/
  {
    title: "Tweletu Band",
    client: "Entertainment",
    description: "Digital hub for a professional music band, featuring performance bookings and media showcase.",
    icon: Music,
    github: "https://github.com/WisemanAganya/Tweletu-band",
    demo: "https://tweletu-band.vercel.app/"
  },
  {
    title: "Fan Times Kitchen",
    client: "Culinary Services",
    description: "A digital experience for a modern kitchen, focusing on food service management and culinary arts.",
    icon: Utensils,
    github: "https://github.com/WisemanAganya/fan-times-kitchen",
    demo: "https://fan-times-kitchen.vercel.app/"
  },
  {
    title: "Mama J Cakes",
    client: "Boutique Bakery",
    description: "Customized bakery platform showcase for artisanal cakes and confectionery delights.",
    icon: Cake,
    github: "https://github.com/WisemanAganya/Mama-J-Cakes",
    demo: "https://mama-j-cakes.vercel.app/"
  },
  {
    title: "3rd Way Fitness",
    client: "Performance Center",
    description: "Holistic fitness and performance tracking platform for elite athletes and enthusiasts.",
    icon: Activity,
    github: "https://github.com/WisemanAganya/3rd-Way-Fitness",
    demo: "https://3rd-way-fitness.vercel.app/"
  },
  {
    title: "Kenya Harlequins",
    client: "Sports & Athletics",
    description: "Official digital platform for the Kenya Harlequins Rugby Club, featuring match updates and team news.",
    icon: Trophy,
    github: "https://github.com/WisemanAganya/Kenya-Harlequins",
    demo: "https://kenya-harlequins.vercel.app/"
  },
  {
    title: "Security Assessment & Pentesting",
    client: "Stima Sacco & WBA",
    description: "Performed in-depth penetration testing on Stima Sacco's mobile systems and WBA's I-apply and I-profit applications, delivering strategic cybersecurity recommendations.",
    icon: Shield,
    github: "https://github.com/WisemanAganya",
    demo: "#"
  },
  {
    title: "IP Telephony & ETR Systems",
    client: "Fusion Technologies / City Eye Hospital",
    description: "Integrated a hospital-wide IP telephony system (75+ endpoints) at City Eye Hospital, covering the entire facility, and deployed KRA ETR Type A-D integrations with various client accounting softwares.",
    icon: Phone,
    github: "https://github.com/WisemanAganya",
    demo: "#"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "National Sevens Circuit Victory (2024)",
    role: "Captain, Kenya Harlequins Rugby Football Club"
  },
  {
    title: "East African Games Victory (2016)",
    role: "Captain, Kakamega High School Rugby Team"
  }
];
