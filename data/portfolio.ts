export type ProjectStatus = "BUILT" | "IN DEVELOPMENT" | "LAB" | "CONCEPT";

export type NetworkProject = {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  status: ProjectStatus;
  category: string;
  color: string;
  position: [number, number, number];
  statement: string;
  role: string;
  context: string;
  outcome: string;
  feedbackLabel: "MARKER FEEDBACK" | "EVIDENCE NOTE";
  feedback: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  visualLabel: "REPRESENTATIVE RECONSTRUCTION" | "SUBMITTED PROJECT FIGURE";
  evidence: string[];
  tools: string[];
};

export const projects: NetworkProject[] = [
  {
    id: "threat-intel",
    index: "01",
    title: "AI-Assisted Threat Intelligence Dashboard",
    shortTitle: "Threat Intelligence",
    status: "BUILT",
    category: "DATA + DEFENCE",
    color: "#ff4fd8",
    position: [-3.15, 1.45, 0.15],
    statement:
      "A law-enforcement-focused team project that turns open-source intelligence into searchable, analyst-ready data.",
    role: "Backend and data engineering: ingestion, normalisation and search pipeline work.",
    context: "ISYS20182 · Team project · Practical Project Management and Professional Development",
    outcome: "Individual reflection and contribution report: 1MID",
    feedbackLabel: "MARKER FEEDBACK",
    feedback: "The marker noted a good analysis of the work completed and a good individual contribution.",
    image: "/projects/threat-intelligence.webp",
    imageAlt: "Representative threat-intelligence workspace showing OSINT ingestion, structured search and analytics",
    visualLabel: "REPRESENTATIVE RECONSTRUCTION",
    evidence: [
      "Python OSINT ingestion pipeline",
      "Normalised JSON and CSV sources",
      "Elasticsearch and Kibana exploration",
    ],
    tools: ["Python", "Elasticsearch", "Kibana", "REST APIs"],
  },
  {
    id: "load-balancer",
    index: "02",
    title: "Fault-Tolerant UDP Load Balancer",
    shortTitle: "Distributed Systems",
    status: "BUILT",
    category: "NETWORKS + RESILIENCE",
    color: "#35d7ff",
    position: [3.15, 1.35, -0.1],
    statement:
      "A Java distributed system that routes UDP traffic while monitoring server health and recovering from failure.",
    role: "System design and implementation across routing, heartbeat checks and failure handling.",
    context: "Academic distributed-systems project · Original submission folder unavailable",
    outcome: "Project evidence is being reconstructed from the original design and technical account",
    feedbackLabel: "EVIDENCE NOTE",
    feedback: "No marker feedback has been recovered. Any recreated demonstrator will be labelled as a later reconstruction, not the original submission.",
    image: "/projects/load-balancer.webp",
    imageAlt: "Reconstructed UDP load-balancer topology with heartbeat monitoring and failure isolation",
    visualLabel: "REPRESENTATIVE RECONSTRUCTION",
    evidence: [
      "Round-robin request distribution",
      "Heartbeat-based health monitoring",
      "Fault-aware server selection",
    ],
    tools: ["Java", "UDP", "Concurrency", "Networking"],
  },
  {
    id: "pcap-lab",
    index: "03",
    title: "PCAP Parser & Anomaly Lab",
    shortTitle: "Packet Forensics",
    status: "BUILT",
    category: "PACKETS + ANALYSIS",
    color: "#8bff6a",
    position: [-3.3, -1.65, 0.3],
    statement:
      "A custom packet-analysis tool for breaking down captures and surfacing behaviour worth investigating.",
    role: "Parser design, packet-field extraction and anomaly-oriented analysis.",
    context: "SOFT10121 · Individual System Programming coursework",
    outcome: "Verified module outcome: 2HIGH",
    feedbackLabel: "MARKER FEEDBACK",
    feedback: "The marker highlighted excellent testing and complex code, while asking for deeper explanation of implementation choices.",
    image: "/projects/pcap-parser.webp",
    imageAlt: "Representative packet-forensics interface with protocol fields, TCP flow analysis and anomaly flags",
    visualLabel: "REPRESENTATIVE RECONSTRUCTION",
    evidence: [
      "Custom PCAP parsing workflow",
      "Protocol and packet-field inspection",
      "Anomaly-focused output",
    ],
    tools: ["Python", "PCAP", "TCP/IP", "Wireshark"],
  },
  {
    id: "voice-agent",
    index: "04",
    title: "Multi-Tenant Takeaway Voice Agent",
    shortTitle: "AI Voice Systems",
    status: "IN DEVELOPMENT",
    category: "AI + PRODUCT SYSTEMS",
    color: "#ffb84d",
    position: [3.35, -1.55, 0.1],
    statement:
      "A working multi-tenant prototype for handling telephone orders, exceptions and operational handoffs.",
    role: "Architecture across conversation flow, business rules, APIs, handoff and kitchen operations.",
    context: "Self-directed product prototype · Active development",
    outcome: "Not academically assessed",
    feedbackLabel: "EVIDENCE NOTE",
    feedback: "Evaluation is based on implemented product flows, technical validation and clearly separated planned capabilities.",
    image: "/projects/voice-agent.webp",
    imageAlt: "Representative multi-tenant voice-ordering system showing call flow, safety checks, human handoff and kitchen routing",
    visualLabel: "REPRESENTATIVE RECONSTRUCTION",
    evidence: [
      "Human-handoff and exception flow",
      "Role-based multi-tenant structure",
      "Kitchen dashboard and order lifecycle",
    ],
    tools: ["AI Voice", "APIs", "RBAC", "Product Architecture"],
  },
  {
    id: "home-lab",
    index: "05",
    title: "Infrastructure & Security Home Lab",
    shortTitle: "Home Lab",
    status: "LAB",
    category: "SYSTEMS + PRACTICE",
    color: "#8a6cff",
    position: [0, -2.75, -0.35],
    statement:
      "A hands-on environment for learning how networks, operating systems and access controls behave under real configuration.",
    role: "Built and administered the lab as an ongoing learning environment.",
    context: "Ongoing personal infrastructure and security lab",
    outcome: "Not academically assessed as a single project",
    feedbackLabel: "EVIDENCE NOTE",
    feedback: "Proof comes from repeatable configurations, screenshots and troubleshooting records rather than a module grade.",
    image: "/projects/home-lab.webp",
    imageAlt: "Representative home lab with Linux and Windows virtual machines, network equipment and administration terminals",
    visualLabel: "REPRESENTATIVE RECONSTRUCTION",
    evidence: [
      "Linux and Windows systems",
      "DNS, DHCP, users, groups and file sharing",
      "Kali VM and network-security practice",
    ],
    tools: ["Linux", "Windows", "DNS/DHCP", "Kali"],
  },
  {
    id: "smart-home",
    index: "06",
    title: "Offline Smart Home Automation System",
    shortTitle: "Embedded Systems",
    status: "BUILT",
    category: "EMBEDDED + SAFETY",
    color: "#4de6b5",
    position: [-1.55, -2.85, 0.15],
    statement:
      "An Arduino-based automation prototype combining environmental sensing, access control and local safety responses without cloud dependency.",
    role: "Designed the control logic, integrated the sensors and actuators, and documented the system architecture and testing approach.",
    context: "ITEC10281 · Individual Systems Technology coursework",
    outcome: "Original submitted report and circuit figure recovered",
    feedbackLabel: "EVIDENCE NOTE",
    feedback: "The recovered report documents the implementation, constraints and offline design rationale; separate marker feedback was not included in the available files.",
    image: "/projects/smart-home-circuit.webp",
    imageAlt: "Original submitted Arduino smart-home circuit connecting motion, light, gas and distance sensors to alarms, lighting and a servo",
    imageFit: "contain",
    visualLabel: "SUBMITTED PROJECT FIGURE",
    evidence: [
      "PIR, LDR, gas and ultrasonic sensing",
      "Servo access control, alarms and lighting",
      "Local operation without cloud dependency",
    ],
    tools: ["Arduino Uno", "Embedded C", "Sensors", "Tinkercad"],
  },
  {
    id: "ransomware-isms",
    index: "07",
    title: "Ransomware Incident & ISMS Analysis",
    shortTitle: "Security Governance",
    status: "BUILT",
    category: "RISK + RESILIENCE",
    color: "#ff746c",
    position: [1.55, 2.7, -0.2],
    statement:
      "A standards-led analysis of the 2025 Kido International ransomware incident, translating evidence into risk priorities and layered controls.",
    role: "Incident research, ISMS scoping, asset and risk analysis, control mapping, and implementation-roadmap design.",
    context: "ISYS20311 · Individual Information Security assignment",
    outcome: "Verified outcome: 71/100 · First-class mark",
    feedbackLabel: "MARKER FEEDBACK",
    feedback: "The marker praised the strong incident choice, structured risk work and relevant controls, while recommending tighter evidence boundaries and deeper implementation detail.",
    image: "/projects/ransomware-control-architecture.webp",
    imageAlt: "Original submitted layered security-control architecture covering perimeter, access, endpoint, data protection and monitoring",
    imageFit: "contain",
    visualLabel: "SUBMITTED PROJECT FIGURE",
    evidence: [
      "ISO 27001 and ISO 27005 alignment",
      "Asset register and qualitative risk matrix",
      "Layered technical and procedural controls",
    ],
    tools: ["ISO 27001", "NIST CSF", "Risk Analysis", "UK GDPR"],
  },
];

export const skillClusters = [
  {
    title: "Investigate",
    color: "#ff4fd8",
    skills: ["Wireshark", "Nmap", "Burp Suite", "Packet analysis"],
    proof: "PCAP Lab + Threat Intelligence",
  },
  {
    title: "Build",
    color: "#35d7ff",
    skills: ["Python", "Java", "C", "REST APIs"],
    proof: "Software, embedded and product systems",
  },
  {
    title: "Operate",
    color: "#8bff6a",
    skills: ["Linux", "Windows", "DNS/DHCP", "VLANs + OSPF"],
    proof: "Infrastructure Home Lab",
  },
  {
    title: "Detect",
    color: "#ffb84d",
    skills: ["Elasticsearch", "Kibana", "SIEM foundations", "OSINT"],
    proof: "Threat Intelligence Dashboard",
  },
];
