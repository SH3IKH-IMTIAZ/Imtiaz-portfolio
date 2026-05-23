import me from '../Images/me.png'
import crm from '../Images/crm.png'
import quickshop from '../Images/quickshop.png'

export const menuItems = [
  { section: '#aboutme', text: 'ABOUT' },
  { section: '#timeline', text: 'TIMELINE' },
  { section: '#skills', text: 'SKILLS' },
  { section: '#tools', text: 'TOOLS' },
  { section: '#education', text: 'EDUCATION' },
  { section: '#project', text: 'PROJECTS' },
  { section: '#contact', text: 'CONTACT' },
]

export const nameCapitals = "SHEIKH_IMTIAZ"
export const roleCapitales = "ARCHITECT_OF_THE_GATEWAY"

export const bioContent = [
  "A grounded network learner with a heart for support. I speak both human and machine — translating user frustration into technical solutions, one subnet, one ticket, and one honest conversation at a time."
]

export const bioImage = me

export const resumeLink = "https://drive.google.com/drive/folders/1b-9c2dp-TE3p4xgYKinMv6WVNHaid9kU?usp=sharing"



export const allSkills = [
  {
    name: 'JavaScript (ES6+)',
    percentage: 95,
    level: 'Expert'
  },
  {
    name: 'Node.js',
    percentage: 85,
    level: 'Advanced'
  },
  {
    name: 'HTML/CSS',
    percentage: 95,
    level: 'Expert'
  },
  {
    name: 'Python',
    percentage: 70,
    level: 'Intermediate'
  },
  
  {
    name: 'Firebase',
    percentage: 75,
    level: 'Advanced'
  },
  {
    name: 'WordPress',
    percentage: 60,
    level: 'Intermediate'
  },
  {
    name: 'Git',
    percentage: 70,
    level: 'Intermediate'
  },
  {
    name: 'Github',
    percentage: 85,
    level: 'Advanced'
  },
  {
    name: "Bash",
    level: "Scripting",
    percentage: 85
  },
  {
    name: "SQL",
    level: "Database",
    percentage: 80
  },
  {
    name: "EVE-NG",
    level: "Advanced",
    percentage: 85
  },
  {
    name: "GNS3",
    level: "Advanced",
    percentage: 85
  }
];

export const allProjects = [
  {
    name: "Hospital CRM System",
    role: "Fullstack Project",
    image: crm,
    desc: "A production-ready, highly modular Customer Relationship Management (CRM) system designed for modern hospital operations. Features comprehensive patient management, advanced diagnostic workflows, and a financial billing engine.",
    skillsArr: ["React 18", "Vite","Node.js", "Express.js", "MongoDB", "Tailwind CSS", "TanStack Query", "Firebase"],
    links: [
      { text: "Live Demo", href: "https://hoshpital-crm.web.app/" },
      { text: "Source Code", href: "https://github.com/3kramz/Hospital_CRM_client" }
    ]
  },
  {
    name: "Quick-Shop eCommerce",
    role: "Fullstack Project",
    image: quickshop,
    desc: "Engineered a full-stack web application with secure user authentication, product management, and order processing functionalities. Developed RESTful APIs to ensure seamless data communication.",
    skillsArr: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase"],
    links: [
      { text: "Live Site", href: "https://quick-shop-team.web.app/" },
      { text: "Source Code", href: "https://github.com/3kramz/Quick_Shop_ecomerce" }
    ]
  },
]

export const timelineData = [
    {
    title: "Network & IT Support Engineer",
    subtitle: "Textile Solution Bangladesh",
    date: "April 2026 – Present",
    desc: "Managed and maintained LAN/WAN network infrastructure, configured routers, switches, and access points, and monitored internet connectivity. Maintained firewall and VPN for secure remote access while handling IP addressing, DNS, DHCP management, and IT helpdesk support across departments."
  },
  {
    title: "Freelance Backend Developer",
    subtitle: "Webnest Solution, Rajshahi",
    date: "March 2025 – February 2026",
    desc: "Developed a secure role-based CRM backend system with JWT authentication and RBAC, designing RESTful APIs and managing MongoDB databases, while integrating Redis, Nodemailer, Socket.io, and Helmet.js for enhanced security and performance."
  },
  {
    title: "Web Development Intern",
    subtitle: "Lemmesay, Dhaka",
    date: "August 2024 – November 2024 ",
    desc: "Assisted in developing and maintaining web applications. Worked on backend development and basic frontend tasks. Gained practical experience in debugging, testing, and improving system performance. "
  },
  {
    title: "President",
    subtitle: "UoB Computer Club",
    date: "January 2024 – June 2024",
    desc: "Organized technical workshops, programming competitions, and career seminars. Fostered a collaborative environment and mentored club members."
  },
]

export const educationData = [
  {
    title: "Bachelor of Science in CSE",
    subtitle: "University of Brahmanbaria | Brahmanbaria, Bangladesh",
    date: "December 2024",
    desc: "CGPA: 3.12 / 4.00. ",
    r_course: "Programming(Techniques, Structured, OOP), Data Communication, Software Engineering, Artificial Intelligence, Machine Learning, Computer Networks, Cyber Crime & Security, System Analysis & Design, Data Structures & Algorithms."
  },
  {
    title: "Higher Secondary Certificate (Science)",
    subtitle: "Stamford College | Dhaka, Bangladesh",
    date: "2020",
    desc: "GPA: 4.58 / 5.00"
  },
  {
    title: "Secondary school Certificate (Science)",
    subtitle: "Wisdom School and College | Brahmanbaria, Bangladesh",
    date: "2018",
    desc: "GPA: 4.22 / 5.00"
  }
]



export const instaLink = "https://www.facebook.com/sk.imtiaz.3348"
export const linkedInLink = "https://www.linkedin.com/in/imtiaz--sheikh/"
export const gitHubLink = "https://github.com/SH3IKH-IMTIAZ"
export const emailAddress = "imtiaz.sheikh.stu@gmail.com "
export const emailAddress2 = "imtiaz.sheikh.stu@gmail.com "

export const toolsData = [
 
  { name: "Google Docs", category: "Productivity", icon: "faFileAlt" },
  { name: "Google Sheets", category: "AppScript / Data", icon: "faFileExcel" },
  { name: "VS Code", category: "Development", icon: "faCode" },
  { name: "Google Antigravity", category: "AI Assistant", icon: "faRobot" },
  { name: "OWASP Top 10", category: "Security", icon: "faShieldAlt" },
  { name: "Linux", category: "OS", icon: "faLinux" },
  { name: "Kali Linux", category: "OS", icon: "faTerminal" },
  { name: "Burp Suite", category: "Security", icon: "faBug" },
  { name: "Metasploit", category: "Exploitation", icon: "faBomb" },
  { name: "Wireshark", category: "Network Analysis", icon: "faWifi" },
  { name: "Nmap", category: "Network Scanning", icon: "faEye" },
  { name: "Postman", category: "API Testing", icon: "faPaperPlane" },
  { name: "OWASP ZAP", category: "DAST Scanner", icon: "faBolt" },
  { name: "PuTTY", category: "Terminal", icon: "faTerminal" },
  

];

export const phoneNumber = "+880 1719 298 816"
