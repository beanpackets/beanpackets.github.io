/* Identity, links, third-party origins.
   No phone number, no street address, no ZIP, no personal email. Public
   identity is bean.packets@gmail.com only. */

export const SITE = {
  url: 'https://matthewgsbean.com',
  name: 'Matthew Bean',
  title: 'Matthew Bean | IT Support & Network Professional',
  role: 'IT Support & Network Professional',
  tagline: 'Help desk ops, hardware diagnostics, CCNA in progress',
  location: 'San Diego, CA',
  availability: 'Available full-time, on-site',
  description:
    'Help desk technician in San Diego with hands-on experience across the full user account lifecycle, ticket triage against SLA, and Windows desktop, printer, and hardware troubleshooting. Microsoft Learn trained in Active Directory, Intune, and Azure Virtual Desktop. CCNA in progress.',
  githubUser: 'beanpackets',
  /* Separate from githubUser. These used to be the same word, so labels were
     built from whichever was handy; they are not the same word any more. */
  linkedinUser: 'matthewgsbean',
  email: 'bean.packets@gmail.com',
  /* Bump ?v= whenever the PDF changes, so no browser or CDN cache serves the
     old copy under the same URL. */
  resumeFile: '/Matthew_Bean_Resume.pdf?v=2026-09-22b',
};

export const LINKS = {
  github: `https://github.com/${SITE.githubUser}`,
  linkedin: `https://www.linkedin.com/in/${SITE.linkedinUser}`,
  email: `mailto:${SITE.email}`,
};

/* GoatCounter: cookieless, no consent banner needed.
   To enable, set `code` to your site code from goatcounter.com. The CSP in
   BaseLayout widens automatically. null = zero third-party requests. */
export const ANALYTICS = {
  /** @type {string | null} */
  code: null,
};

/* Demo chat assistant. The endpoint is a separate Cloudflare Worker, not part
   of this site: GitHub Pages is static hosting and cannot run server code or
   hold an API key. Kept here because the origin has to appear in the CSP's
   connect-src, and third-party origins live in this file. */
export const CHAT = {
  origin: 'https://matthewgsbean-chat.bean-packets.workers.dev',
  endpoint: 'https://matthewgsbean-chat.bean-packets.workers.dev/api/chat',
  /* Turnstile SITE key. Public by design - it is rendered into the page for
     every visitor to read. Committed rather than kept in .env because the
     GitHub Actions build has no .env, and an undefined key breaks the widget
     in production while working perfectly on your machine. The SECRET key is
     the one that must never appear here; it lives in the Worker. */
  turnstileSiteKey: '0x4AAAAAAEdaDAIkcbcoSLdX',
};
