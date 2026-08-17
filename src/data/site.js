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
    'IT support professional in San Diego running help desk operations, administering cloud CRM platforms, and troubleshooting hardware, account, and connectivity issues. CCNA in progress.',
  githubUser: 'beanpackets',
  /* Separate from githubUser. These used to be the same word, so labels were
     built from whichever was handy; they are not the same word any more. */
  linkedinUser: 'matthewgsbean',
  email: 'bean.packets@gmail.com',
  resumeFile: '/Matthew_Bean_Resume.pdf',
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
