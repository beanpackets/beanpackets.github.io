/* Résumé content. Everything here traces to Matthew_Bean_Resume.pdf.
   No phone number, no ZIP. See site.js. */

export const ABOUT = [
  `I run help desk operations for a SaaS company. First contact for tickets, emails, chats, calls. Most days that means triaging in GitHub Issues, untangling login and permissions problems, reproducing bugs properly, and knowing when something is mine to fix and when it needs Tier 2.`,
  `Before that, six years as a technical support specialist on a Salesforce CRM: custom fields, automated actions, agent records, plus the whole licensing and credentialing lifecycle running on top of it.`,
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
    title: 'This site',
    tone: 'accent',
    icon: 'code',
    repo: true,
    summary:
      'Astro and Tailwind, deployed to GitHub Pages by a hardened Actions pipeline: SHA-pinned actions, least-privilege permissions, strict CSP, no backend.',
    tags: ['Astro', 'Tailwind', 'CI/CD'],
  },
];

export const EXPERIENCE = [
  {
    company: 'JoyPunk LLC',
    location: 'Long Beach, CA',
    role: 'HelpDesk Support Technician',
    period: 'Oct 2025 to now',
    tone: 'green',
    current: true,
    bullets: [
      'First point of contact for support tickets, emails, chats, and calls covering the company website and SaaS applications.',
      'Triage, log, and prioritize tickets in GitHub Issues, keeping response and resolution times within SLA.',
      'Troubleshoot login, account, permissions, and connectivity issues across web and SaaS platforms, including SSO and password resets.',
      'Reproduce reported bugs with detailed steps, then escalate past Tier 1 to engineering with clear documentation.',
      'Monitor status dashboards, communicate outages proactively, and maintain the internal knowledge base.',
    ],
  },
  {
    company: 'Rainbow Financial Group',
    role: 'Technical Support Specialist',
    period: 'Jan 2019 to Oct 2025',
    tone: 'blue',
    bullets: [
      'Administered the Salesforce CRM platform: custom fields, automated actions, and agent data records.',
      'Managed the full insurance agent licensing and credentialing lifecycle from submission through carrier approval.',
      'Diagnosed and resolved platform issues, escalating complex matters to Salesforce support and coordinating resolution.',
      'Audited agent records for compliance with carrier requirements, and led internal meetings over join.me on platform and procedural changes.',
    ],
  },
  {
    company: 'Earlier',
    role: 'Tops (full service delivery), Whole Foods Market (cashier)',
    period: '2015 to 2019',
    tone: 'yellow',
    compact: true,
    bullets: [
      'Client-facing service roles: in-home consultation and product recommendations, inventory and order fulfillment against 15-minute ETA windows, high-accuracy cash handling with end-of-shift reporting.',
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
  { school: 'Saddleback College', detail: 'Mission Viejo, CA. Photography.', period: '2006 to 2007' },
  { school: 'Browning Academy', detail: 'La Verkin, UT. High school diploma.', period: '2006' },
];

/* Every entry has to be something countable. "100% on-site availability" was
   here and read as padding — it's a preference, not a measurement, and it's
   already stated in the hero. */
export const STATS = [
  { value: '7+', unit: 'yrs', label: 'Technical support', tone: 'blue' },
  { value: '3', unit: '', label: 'MS Learn tracks', tone: 'accent' },
  { value: 'CCNA', unit: '', label: 'In progress', tone: 'accent' },
];
