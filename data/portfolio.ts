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
  visualLabel:
    | "REPRESENTATIVE RECONSTRUCTION"
    | "SOURCE-VERIFIED RECONSTRUCTION"
    | "SUBMITTED PROJECT FIGURE";
  evidence: string[];
  tools: string[];
  flow: string[];
  engineering: Array<{ label: string; detail: string }>;
  boundary: string;
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
    flow: ["COLLECT", "NORMALISE", "INDEX", "INVESTIGATE"],
    engineering: [
      { label: "DATA PIPELINE", detail: "Python and REST workflows moved varied OSINT sources into consistent JSON and CSV structures." },
      { label: "SEARCH LAYER", detail: "Normalised records were prepared for Elasticsearch exploration and Kibana visualisation." },
      { label: "MY BUILD ROLE", detail: "Backend and data-engineering contribution within a wider team delivery." },
    ],
    boundary: "The individual assessment verifies a good contribution; implementation screenshots and source evidence are still being expanded.",
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
      "A three-part Java UDP system that registers workers, distributes jobs, queues overflow and removes silent nodes from future scheduling.",
    role: "Designed and implemented the client, load-balancer and worker-node applications, including their message protocol and shared-state handling.",
    context: "COMP20111 · Distributed Network Architecture & Operating Systems · Java coursework",
    outcome: "Original NetBeans projects and Java source recovered · Grade and marker feedback not supplied",
    feedbackLabel: "EVIDENCE NOTE",
    feedback: "The recovered source verifies the implementation. No performance figures, grade or marker comments are claimed because they were not included in the supplied folder.",
    image: "/projects/load-balancer.webp",
    imageAlt: "Reconstructed UDP load-balancer topology with heartbeat monitoring and failure isolation",
    visualLabel: "SOURCE-VERIFIED RECONSTRUCTION",
    evidence: [
      "Round-robin dispatch across active, available workers",
      "5-second heartbeats with 15-second liveness timeout",
      "Queued jobs, acknowledgements, retries and deregistration",
    ],
    tools: ["Java", "UDP Datagrams", "Threads", "Synchronized State"],
    flow: ["REGISTER", "QUEUE", "DISPATCH", "MONITOR"],
    engineering: [
      { label: "MESSAGE PROTOCOL", detail: "REGISTER, HEARTBEAT, JOB, ASSIGN, COMPLETE and DEREGISTER messages coordinate three independent Java applications." },
      { label: "SCHEDULER", detail: "Round-robin selection skips inactive or busy workers and queues jobs when none is available." },
      { label: "STATE SAFETY", detail: "A shared lock protects node, busy-state and queued-job collections while worker threads complete tasks." },
    ],
    boundary: "The recovered source proves failure-aware scheduling; it does not automatically replay a job lost on a failed worker.",
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
    flow: ["CAPTURE", "PARSE", "INSPECT", "SURFACE"],
    engineering: [
      { label: "PARSER", detail: "A custom workflow extracts packet and protocol fields from captures for structured inspection." },
      { label: "ANALYSIS", detail: "Output is organised around behaviour that deserves further investigation rather than raw packet volume." },
      { label: "TESTING", detail: "The marker described the testing as excellent and parts of the solution as complex code." },
    ],
    boundary: "The assessment verifies software quality and testing; original code and screenshots are still being recovered.",
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
      "AI-assisted conversation and order-capture flow",
      "Role-based multi-tenant structure",
      "Kitchen dashboard and order lifecycle",
    ],
    tools: ["Conversational AI", "APIs", "RBAC", "Product Architecture"],
    flow: ["SPEECH", "INTERPRET", "VALIDATE", "ROUTE"],
    engineering: [
      { label: "AI ROLE", detail: "Conversational AI interprets natural-language requests and helps convert context into a structured order." },
      { label: "SAFETY BOUNDARY", detail: "Deterministic allergen validation and human escalation remain outside unconstrained generative behaviour." },
      { label: "OPERATIONS", detail: "Multi-tenant roles, restaurant boundaries, kitchen state and exception handoff shape the product architecture." },
    ],
    boundary: "Active prototype: implemented flows, working prototype behaviour and planned provider integrations remain explicitly separated.",
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
    flow: ["PROVISION", "CONFIGURE", "RESTRICT", "TROUBLESHOOT"],
    engineering: [
      { label: "ENVIRONMENT", detail: "Windows, Linux and Kali virtual systems provide a repeatable place to practise administration and defence." },
      { label: "SERVICES", detail: "DNS, DHCP, users, groups, permissions and file sharing are configured as connected infrastructure." },
      { label: "METHOD", detail: "Changes are validated through repeatable configurations, screenshots and troubleshooting records." },
    ],
    boundary: "This is an ongoing personal lab, so it is presented as repeatable practice rather than production infrastructure ownership.",
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
    flow: ["SENSE", "EVALUATE", "ACTUATE", "ALERT"],
    engineering: [
      { label: "SENSOR LAYER", detail: "PIR, LDR, MQ-2 and ultrasonic inputs represent motion, light, gas and distance conditions." },
      { label: "LOCAL CONTROL", detail: "Embedded logic drives lighting, status LEDs, a buzzer and servo-operated access without cloud dependency." },
      { label: "DESIGN CHOICE", detail: "Keeping the response loop local makes the safety behaviour deterministic and explainable." },
    ],
    boundary: "The recovered evidence is a Tinkercad simulation and submitted design, not a physically deployed smart home.",
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
    flow: ["SCOPE", "ASSESS", "MAP", "PRIORITISE"],
    engineering: [
      { label: "INCIDENT MODEL", detail: "Evidence from the Kido ransomware incident establishes organisational impact and ISMS scope." },
      { label: "RISK SYSTEM", detail: "Assets, ownership, CIA impact and a qualitative likelihood-impact matrix create a prioritised risk register." },
      { label: "CONTROL DESIGN", detail: "Technical, procedural and physical controls are mapped to ISO/IEC 27001 and NIST guidance." },
    ],
    boundary: "This is an analytical ISMS and control architecture, not a claim that controls were deployed inside the affected organisation.",
  },
];

export type CapabilityState =
  | "BUILT"
  | "ADMINISTERED"
  | "ANALYSED"
  | "PRACTISED"
  | "SIMULATED"
  | "IN DEVELOPMENT";

export type CapabilityModule = {
  id: string;
  code: string;
  title: string;
  color: string;
  state: CapabilityState;
  summary: string;
  signals: string[];
  operations: string[];
  stack: string[];
  route: string[];
  proofProjectId: string;
  proof: string;
  verification: string;
  boundary: string;
};

export const capabilityModules: CapabilityModule[] = [
  {
    id: "packet-forensics",
    code: "PKT/01",
    title: "Packet Forensics",
    color: "#8bff6a",
    state: "ANALYSED",
    summary: "Turn packet captures into structured evidence for investigation.",
    signals: ["PCAP workflow", "Protocol fields", "Test-led analysis"],
    operations: [
      "Parse packet captures and extract protocol and packet fields",
      "Organise output around behaviour that warrants investigation",
      "Use Wireshark and TCP/IP knowledge to validate parser output",
      "Design and document repeatable software tests",
    ],
    stack: ["Python", "PCAP", "TCP/IP", "Wireshark"],
    route: ["CAPTURE", "PARSE", "INSPECT", "SURFACE"],
    proofProjectId: "pcap-lab",
    proof: "PCAP Parser & Anomaly Lab",
    verification: "SOFT10121 · 2HIGH · excellent testing and complex code noted",
    boundary: "The supplied assessment verifies the software quality and testing; the original source is still being recovered.",
  },
  {
    id: "network-engineering",
    code: "NET/02",
    title: "Network Engineering",
    color: "#35d7ff",
    state: "PRACTISED",
    summary: "Design addressing, segmentation and packet paths that can be reasoned about.",
    signals: ["IPv4 + CIDR", "VLAN routing", "Path diagnosis"],
    operations: [
      "Plan IPv4 addressing and subnet boundaries",
      "Configure and reason about VLANs, trunks and inter-VLAN routing",
      "Practise OSPF, ACL and NAT/PAT configuration in academic labs",
      "Troubleshoot DNS, DHCP and end-to-end packet paths",
    ],
    stack: ["Cisco IOS", "Packet Tracer", "IPv4/CIDR", "VLANs", "OSPF", "ACLs"],
    route: ["ADDRESS", "SEGMENT", "ROUTE", "VERIFY"],
    proofProjectId: "home-lab",
    proof: "Academic Networking Labs + Infrastructure Home Lab",
    verification: "Practical lab evidence · no invented throughput or availability figures",
    boundary: "Presented as configured academic and home-lab practice, not production network ownership.",
  },
  {
    id: "server-administration",
    code: "SYS/03",
    title: "Identity & Server Administration",
    color: "#8a6cff",
    state: "ADMINISTERED",
    summary: "Build identity, policy and storage controls into a Windows domain lab.",
    signals: ["AD DS + DNS", "GPO controls", "NTFS permissions"],
    operations: [
      "Create a Windows Server forest, domain, OUs, users and security groups",
      "Apply Group Policy restrictions and time-based access controls",
      "Configure NTFS permissions, department folders and storage quotas",
      "Use static addressing, DNS roles and structured server naming",
    ],
    stack: ["Windows Server", "AD DS", "DNS", "Group Policy", "NTFS", "PowerShell"],
    route: ["IDENTITY", "POLICY", "ACCESS", "AUDIT"],
    proofProjectId: "home-lab",
    proof: "Astra Link Windows Server Infrastructure + Home Lab",
    verification: "COMP20231 · 1LOW · most tasks attempted",
    boundary: "Task 7 was incomplete; the portfolio does not claim every brief requirement was completed.",
  },
  {
    id: "distributed-systems",
    code: "DIST/04",
    title: "Software & Distributed Systems",
    color: "#35d7ff",
    state: "BUILT",
    summary: "Coordinate independent Java processes through an explicit UDP protocol.",
    signals: ["UDP datagrams", "Round-robin dispatch", "Heartbeat liveness"],
    operations: [
      "Register worker nodes through REGISTER and REGISTER_ACK messages",
      "Distribute jobs round-robin across active, non-busy workers",
      "Queue work when no eligible node is available",
      "Track liveness using 5-second heartbeats and a 15-second timeout",
      "Acknowledge client jobs, retry timed-out sends and process completion messages",
      "Protect shared node, queue and busy-state collections with synchronisation",
    ],
    stack: ["Java", "DatagramSocket", "UDP", "Threads", "Collections", "NetBeans"],
    route: ["REGISTER", "DISPATCH", "HEARTBEAT", "COMPLETE"],
    proofProjectId: "load-balancer",
    proof: "Fault-Tolerant UDP Load Balancer",
    verification: "Original client, load-balancer and worker-node source recovered",
    boundary: "The source proves failure-aware scheduling; it does not claim automatic replay of a job lost on a failed worker.",
  },
  {
    id: "security-analytics",
    code: "DATA/05",
    title: "Threat Intelligence & Security Analytics",
    color: "#ff4fd8",
    state: "BUILT",
    summary: "Move open-source intelligence from ingestion into analyst-ready search.",
    signals: ["OSINT ingestion", "Schema normalisation", "Search + visualise"],
    operations: [
      "Ingest open-source intelligence through Python and REST workflows",
      "Normalise JSON and CSV sources into consistent structures",
      "Prepare searchable data for Elasticsearch exploration",
      "Use Kibana to support analyst-facing investigation and visualisation",
    ],
    stack: ["Python", "REST APIs", "JSON", "CSV", "Elasticsearch", "Kibana"],
    route: ["INGEST", "NORMALISE", "INDEX", "EXPLORE"],
    proofProjectId: "threat-intel",
    proof: "AI-Assisted Threat Intelligence Dashboard",
    verification: "ISYS20182 team project · individual report 1MID · good contribution noted",
    boundary: "Backend and data-engineering contribution is separated from the work of the wider team.",
  },
  {
    id: "security-governance",
    code: "ASSURE/06",
    title: "Security Governance",
    color: "#ff746c",
    state: "ANALYSED",
    summary: "Translate incident evidence into prioritised risks, controls and governance.",
    signals: ["ISMS scope", "5×5 risk matrix", "Control mapping"],
    operations: [
      "Define ISMS scope and categorise information assets",
      "Build an asset register and qualitative likelihood-impact risk matrix",
      "Map layered controls to ISO/IEC 27001 and NIST CSF",
      "Consider residual risk, ownership, compliance and implementation maturity",
    ],
    stack: ["ISO 27001", "ISO 27005", "NIST CSF", "NIST SP 800-30", "UK GDPR"],
    route: ["SCOPE", "ASSESS", "CONTROL", "REVIEW"],
    proofProjectId: "ransomware-isms",
    proof: "Ransomware Incident & ISMS Analysis",
    verification: "ISYS20311 · 71/100 · First-class mark",
    boundary: "This is an analytical ISMS design, not a claim that the controls were deployed in the affected organisation.",
  },
  {
    id: "embedded-systems",
    code: "EMBED/07",
    title: "Embedded Systems",
    color: "#4de6b5",
    state: "SIMULATED",
    summary: "Connect environmental sensing to local, deterministic safety responses.",
    signals: ["Multi-sensor input", "Embedded control", "Offline response"],
    operations: [
      "Read PIR, LDR, MQ-2 and ultrasonic sensor inputs",
      "Drive relay lighting, status LEDs, a buzzer and servo access control",
      "Implement threshold-based control logic on an Arduino Uno",
      "Document pin mapping, constraints and an offline operating model",
    ],
    stack: ["Arduino Uno", "Embedded C/C++", "PIR", "LDR", "MQ-2", "Ultrasonic", "Tinkercad"],
    route: ["SENSE", "EVALUATE", "ACTUATE", "ALERT"],
    proofProjectId: "smart-home",
    proof: "Offline Smart Home Automation System",
    verification: "Original 15-page report, circuit figure and embedded code recovered",
    boundary: "Presented as a Tinkercad simulation and prototype design, not a physically deployed smart home.",
  },
  {
    id: "conversational-ai",
    code: "AI/08",
    title: "Conversational AI & Product Architecture",
    color: "#ffb84d",
    state: "IN DEVELOPMENT",
    summary: "Use AI to turn a spoken request into a safe, structured operational workflow.",
    signals: ["AI conversation flow", "Structured orders", "Human handoff"],
    operations: [
      "Design AI-assisted natural-language ordering and intent-handling flows",
      "Convert conversation context into a structured order lifecycle",
      "Separate deterministic allergen checks from generative conversation",
      "Route uncertainty and exceptions to a human operator",
      "Model multi-tenant roles, restaurant boundaries and kitchen operations",
      "Define telephony, speech and external API integration boundaries",
    ],
    stack: ["Conversational AI", "Prompt Design", "REST APIs", "RBAC", "Multi-Tenant SaaS", "Voice Systems"],
    route: ["SPEECH", "INTERPRET", "VALIDATE", "ROUTE"],
    proofProjectId: "voice-agent",
    proof: "Multi-Tenant Takeaway Voice Agent",
    verification: "Self-directed product prototype · active development",
    boundary: "Implemented, prototype and planned integrations remain explicitly separated as development evidence grows.",
  },
];
