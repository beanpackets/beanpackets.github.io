/* Résumé content. Everything here traces to Matthew_Bean_Resume.pdf.
   No phone number, no ZIP. See site.js. */

export const ABOUT = [
  `I run help desk operations for a SaaS company. First contact for tickets, emails, chats, calls. Most days that means triaging by urgency and impact against SLA, untangling login and permissions problems, reproducing bugs properly, and knowing when something is mine to fix at Tier 1 and when it needs Tier 2.`,
  `Before that, six years as a technical support specialist and executive administrator on a Salesforce CRM, covering the full user account lifecycle: provisioning, permission sets, onboarding and offboarding, deactivation. Custom fields, automated actions, and agent records too, with the whole licensing and credentialing lifecycle running on top of it.`,
  `I've completed Microsoft Learn training in Active Directory Domain Services, Intune, and Azure Virtual Desktop, and I'm studying for the CCNA. At home I run a lab: a Raspberry Pi 4 on Linux with a static IP, serving Docker containers. Pi-hole filters DNS, Tailscale handles remote access, Uptime Kuma watches availability, and when something looks wrong I capture the traffic with tshark and read it. Enough PC builds and component-level repairs that boot/POST troubleshooting is muscle memory. Dependable, detail-oriented, comfortable working independently. San Diego, available full-time, on-site.`,
];

export const SKILLS = [
  {
    title: 'Systems & Infrastructure',
    icon: 'server',
    tone: 'blue',
    items: [
      'Windows 10/11 desktop administration and troubleshooting',
      'Active Directory fundamentals',
      'Azure Virtual Desktop & Windows 365',
      'Linux server administration (Raspberry Pi OS)',
      'Docker container deployment',
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
      'Pi-hole DNS filtering, Tailscale VPN',
      'Packet capture and analysis (tshark, Wireshark)',
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
      'GitHub Issues ticketing (adaptable to Zendesk, ServiceNow)',
      'Salesforce CRM config and automation',
      'Git version control',
      'Docker, Uptime Kuma, Homarr',
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
      'Onboarding and offboarding support',
      'Troubleshooting and escalation',
      'SLA management',
      'Printer and peripheral setup',
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
      'A Raspberry Pi 4 on Linux with a static IP, running services in Docker: Pi-hole filtering DNS through Cloudflare upstream resolvers, Tailscale for encrypted remote access, Uptime Kuma on availability, and Homarr tying it together. Where I break things on purpose and then fix them.',
    tags: ['Linux', 'Docker', 'Pi-hole', 'Tailscale', 'Monitoring'],
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
      'Built and maintained GPU mining rigs: component selection, assembly, overclock and thermal tuning, uptime monitoring. Self-custody wallets with hardware wallet setup, seed phrase practices, and transaction verification. Operated blockchain nodes and worked with on-chain and DeFi applications.',
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
      'Triage, log, and prioritize incoming tickets by urgency and impact, and track them against SLA to keep response and resolution times on target.',
      'Troubleshoot login, account, permissions, and connectivity issues across web and SaaS platforms, including SSO and password resets.',
      'Resolve access issues remotely by walking non-technical users through browser, cache, cookie, and network steps, closing them at Tier 1 rather than escalating.',
      'Diagnose website issues (broken links, page errors, form failures, slow load times) and support SaaS functionality, configuration, and integration problems.',
      'Reproduce reported bugs and write detailed steps-to-reproduce; escalate anything beyond Tier 1 to Tier 2/3, engineering, or product with clear documentation.',
      'Monitor system status dashboards and proactively communicate known outages or incidents to users.',
      'Write and maintain knowledge base articles and troubleshooting guides, and flag recurring ticket patterns to the team so the root cause gets fixed.',
    ],
  },
  {
    company: 'Rainbow Financial Group',
    location: 'Remote',
    role: 'Technical Support Specialist & Executive Administrator',
    period: 'Jan 2019 to Oct 2025',
    tone: 'blue',
    bullets: [
      'Managed Salesforce user accounts: created and deactivated users, reset access, and assigned profiles and permission sets as agents onboarded and departed.',
      'Served as executive administrator for agent operations, owning agent paperwork from intake through validation, filing, and record retention.',
      'Administered the company Salesforce org: created and modified custom fields, built automated actions, and maintained data quality across agent records.',
      'Monitored and renewed agent licensing to keep producers eligible and contract-ready for new carrier appointments.',
      'Managed the full insurance agent licensing and credentialing lifecycle: collecting, validating, and tracking carrier-required documentation from submission through approval.',
      'Identified, diagnosed, and resolved platform issues; escalated complex technical matters to Salesforce support and coordinated resolution with internal stakeholders.',
      'Audited agent records against changing carrier requirements each cycle, correcting data errors before they could block a carrier appointment.',
      'Facilitated and led internal meetings via join.me to communicate platform updates, procedural changes, and carrier requirements to agents.',
      'Primary support contact for the agent network, resolving Salesforce access, record, and licensing issues by phone and email.',
    ],
  },
  {
    company: 'Uber / DoorDash',
    role: 'Independent Contractor',
    period: '2016 to now',
    tone: 'yellow',
    compact: true,
    bullets: [
      'Picked up and dropped off passengers, creating a safe and positive rider experience.',
      'Self-managed schedule and route planning via mobile dispatch and navigation apps.',
      'Communicated directly with customers and merchants to resolve delivery issues.',
    ],
  },
  {
    company: 'Earlier',
    role: 'Tops, Whole Foods Market, Guitar Center, Walker Electric, Mother’s Market, Ocean Blue Detailing, Bean Investments, IsoTis OrthoBiologics, Unique Finds, AppleOne placements, Target',
    period: '2005 to 2018',
    tone: 'yellow',
    compact: true,
    bullets: [
      'Client-facing service, retail, office, and warehouse roles: in-home consultation, order fulfillment against 15-minute ETA windows, accurate cash handling and end-of-shift reporting, eBay and web storefront support, conveyor machine wiring, clean room support, and assembly work across temp placements. Full history on the résumé.',
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
  {
    name: 'AI Fluency: Framework & Foundations',
    status: 'complete',
    tone: 'green',
    wide: true,
    detail: 'Anthropic',
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
