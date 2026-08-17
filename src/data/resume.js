/* Résumé content. Everything here traces to Matthew_Bean_Resume.pdf.
   No phone number, no ZIP. See site.js. */

export const ABOUT = [
  `I run help desk operations for a SaaS company. First contact for tickets, emails, chats, calls. Most days that means triaging in GitHub Issues, untangling login and permissions problems, reproducing bugs properly, and knowing when something is mine to fix and when it needs Tier 2.`,
  `Before that, six years as a technical support specialist and executive administrator on a Salesforce CRM: custom fields, automated actions, agent records, and user accounts end to end, from provisioning and permission sets through deactivation. The whole licensing and credentialing lifecycle ran on top of it.`,
  `I'm studying for the CCNA and I keep a home lab. DNS filtering, VPN, uptime monitoring. Enough PC builds and component-level repairs that boot/POST troubleshooting is muscle memory. San Diego, available full-time, on-site.`,
];

export const SKILLS = [
  {
    title: 'Systems & Infrastructure',
    icon: 'server',
    tone: 'blue',
    items: [
      'Windows 10/11 desktop administration',
      'Active Directory fundamentals',
      'Azure Virtual Desktop & Windows 365',
      'Microsoft Intune fundamentals',
      'Linux fundamentals (home server)',
      'Basic virtualization concepts',
    ],
  },
  {
    title: 'Networking',
    icon: 'network',
    tone: 'accent',
    badge: 'CCNA in progress',
    items: [
      'IP addressing & subnetting',
      'Routing & switching fundamentals',
      'VLANs, DNS/DHCP, VPN configuration',
      'Basic network security concepts',
      'Connectivity and DNS troubleshooting',
    ],
  },
  {
    title: 'Hardware',
    icon: 'chip',
    tone: 'yellow',
    items: [
      'PC builds and upgrades (RAM, storage, GPU)',
      'Component-level diagnostics and repair',
      'Boot/POST failure troubleshooting',
      'Printer, monitor, peripheral setup',
    ],
  },
  {
    title: 'Platforms & Tools',
    icon: 'tools',
    tone: 'accent',
    items: [
      'Salesforce CRM config and automation',
      'GitHub Issues, Git version control',
      'Google Workspace',
      'join.me',
      'Microsoft Office, Adobe Acrobat',
    ],
  },
  {
    title: 'Operations',
    icon: 'pulse',
    tone: 'green',
    items: [
      'Help desk and ticketing operations',
      'User provisioning, deactivation, permissions',
      'Troubleshooting and escalation',
      'SLA management',
      'Bug reproduction and documentation',
      'System and status monitoring',
      'Client communication',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Home server & network',
    tone: 'green',
    icon: 'server',
    featured: true,
    summary:
      'Self-managed home server running DNS filtering, VPN access, and uptime monitoring. Where I break things on purpose and then fix them.',
    tags: ['Linux', 'DNS', 'VPN', 'Monitoring'],
  },
  {
    title: 'Packet Tracer VLAN labs',
    tone: 'accent',
    icon: 'network',
    summary:
      'CCNA practice topologies. VLAN segmentation, inter-VLAN routing, trunking. Built, broken, and re-traced until the failure modes are obvious.',
    tags: ['VLANs', 'Routing', 'Switching'],
  },
  {
    title: 'PC builds & repair',
    tone: 'yellow',
    icon: 'chip',
    summary:
      'Multiple full builds, plus component installation and replacement. Including the unglamorous part: diagnosing boot and POST failures down to the part.',
    tags: ['Hardware', 'Diagnostics'],
  },
  {
    title: 'FPV drones & 2.4 GHz',
    tone: 'accent',
    icon: 'signal',
    summary:
      'Quadcopters built and repaired from the frame up: soldering ESCs, motors, video transmitters, and wiring harnesses, then configuring flight controllers in Betaflight through the CLI and GUI, including failsafe. Bound 2.4 GHz control links and chased down dropouts by diagnosing interference, planning channel assignments, and range-testing to isolate where the signal actually died. Same for the video side, picking bands and channels and tuning antennas for a clean feed.',
    tags: ['RF', '2.4 GHz', 'Soldering', 'Betaflight'],
  },
  {
    title: 'Crypto & blockchain',
    tone: 'blue',
    icon: 'pulse',
    summary:
      'Built and maintain GPU mining rigs: component selection, assembly, overclock and thermal tuning, uptime monitoring. Self-custody wallets with hardware wallet setup, seed phrase practices, and transaction verification. Run blockchain nodes and work with on-chain and DeFi applications, alongside active trading, portfolio tracking, and market research.',
    tags: ['GPU rigs', 'Self-custody', 'Nodes', 'DeFi'],
  },
  {
    title: 'This site',
    tone: 'accent',
    icon: 'code',
    repo: true,
    wide: true,
    summary:
      'Astro and Tailwind, deployed to GitHub Pages by a hardened Actions pipeline: SHA-pinned actions, least-privilege permissions, strict CSP, no backend.',
    tags: ['Astro', 'Tailwind', 'CI/CD'],
  },
];

export const EXPERIENCE = [
  {
    company: 'JoyPunk LLC',
    location: 'Remote',
    role: 'Help Desk Support Technician',
    period: 'Oct 2025 to now',
    tone: 'green',
    current: true,
    bullets: [
      'First point of contact for support tickets, emails, chats, and calls covering the company website and SaaS applications.',
      'Triage, log, and prioritize tickets in GitHub Issues, keeping response and resolution times within SLA.',
      'Troubleshoot login, account, permissions, and connectivity issues across web and SaaS platforms, including SSO and password resets.',
      'Reproduce reported bugs with detailed steps, then escalate past Tier 1 to engineering with clear documentation.',
      'Monitor status dashboards and communicate known outages proactively before the tickets arrive.',
      'Write and maintain knowledge base articles and troubleshooting guides, and flag recurring ticket patterns so repeat issues get a permanent fix instead of a repeat ticket.',
    ],
  },
  {
    company: 'Rainbow Financial Group',
    location: 'Remote',
    role: 'Technical Support Specialist & Executive Administrator',
    period: 'Jan 2019 to Oct 2025',
    tone: 'blue',
    bullets: [
      'Administered the Salesforce CRM platform: custom fields, automated actions, and agent data records.',
      'Managed Salesforce user accounts end to end: created and deactivated users, reset access, and assigned profiles and permission sets as agents onboarded and departed.',
      'Managed the full insurance agent licensing and credentialing lifecycle from submission through carrier approval, monitoring and renewing licensing to keep producers contract-ready.',
      'Diagnosed and resolved platform issues, escalating complex matters to Salesforce support and coordinating resolution.',
      'Audited agent records for compliance with evolving carrier requirements, and led internal meetings over join.me on platform and procedural changes.',
    ],
  },
  {
    company: 'Earlier',
    role: 'Tops, Whole Foods Market, Guitar Center, Mother’s Market, AppleOne placements',
    period: '2005 to 2019',
    tone: 'yellow',
    compact: true,
    bullets: [
      'Client-facing service, retail, and warehouse roles: in-home consultation and product recommendations, inventory and order fulfillment against 15-minute ETA windows, high-accuracy cash handling with end-of-shift reporting, plus assembly and light industrial work across temp placements. Full history on the résumé.',
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Cisco CCNA',
    status: 'in-progress',
    tone: 'accent',
    detail: 'Routing and switching, VLANs, subnetting, network security fundamentals.',
  },
  {
    name: 'Active Directory Domain Services',
    status: 'complete',
    tone: 'blue',
    detail: 'Microsoft Learn',
  },
  {
    name: 'Microsoft Intune Fundamentals',
    status: 'complete',
    tone: 'blue',
    detail: 'Microsoft Learn',
  },
  {
    name: 'Cloud-Hosted Desktops with Azure Virtual Desktop and Windows 365',
    status: 'complete',
    tone: 'blue',
    detail: 'Microsoft Learn',
  },
  {
    name: 'Monitor and Maintain an Azure Virtual Desktop Infrastructure',
    status: 'complete',
    tone: 'blue',
    detail: 'Microsoft Learn',
  },
];

export const EDUCATION = [
  {
    school: 'Saddleback College',
    detail: 'Mission Viejo, CA. Coursework toward an Associate’s in Photography, minor in Business.',
    period: '2006 to 2007',
  },
  { school: 'Browning Academy', detail: 'La Verkin, UT. High school diploma.', period: '2006' },
];

/* Every entry has to be something countable. "100% on-site availability" was
   here and read as padding — it's a preference, not a measurement, and it's
   already stated in the hero. */
export const STATS = [
  { value: '7+', unit: 'yrs', label: 'Technical support', tone: 'blue' },
  { value: '4', unit: '', label: 'MS Learn tracks', tone: 'accent' },
  { value: 'CCNA', unit: '', label: 'In progress', tone: 'accent' },
];
