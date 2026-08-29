/**
 * Mode registry: presentation layer.
 *
 * CLIENT-SAFE BY CONSTRUCTION. This module imports nothing sensitive, so no
 * amount of careless importing in a component can pull a system prompt into the
 * browser bundle. Prompts live in `prompts.ts`, which imports this file rather
 * than the other way around. The dependency arrow makes the leak impossible
 * rather than merely discouraged.
 *
 * The browser sends a mode key, never a prompt. `isMode()` is the trust boundary
 * for that key.
 */

export const MODES = ['services', 'about'] as const;
export type Mode = (typeof MODES)[number];

/**
 * Services is the default because it is what a prospective client came to find
 * out. "About" is the follow-up question, not the opening one.
 */
export const DEFAULT_MODE: Mode = 'services';

export function isMode(value: unknown): value is Mode {
  return typeof value === 'string' && (MODES as readonly string[]).includes(value);
}

export interface ModePresentation {
  id: Mode;
  /** Shown on the toggle. */
  label: string;
  /** Shown under the panel title. */
  tagline: string;
  /** Rendered as the opening message. Client-side only, never sent to the model. */
  greeting: string;
  /** Opening questions rendered as chips. */
  suggestions: readonly string[];
}

/**
 * Suggestion chips do real work: they set the visitor's expectation of what this
 * bot is for. Generic prompts ("How can I help?") invite generic questions the
 * bot cannot answer well. These name the specific problems the practice solves,
 * so the first question is usually one there is a good answer to.
 */
export const MODE_PRESENTATION: Record<Mode, ModePresentation> = {
  services: {
    id: 'services',
    label: 'Services',
    tagline: 'Validation, lab systems, infrastructure and support',
    greeting:
      'Hello. I can answer questions about validation and software assurance, laboratory systems, instrument infrastructure, regulated cloud, and managed IT. What are you working on?',
    suggestions: [
      'How do you approach CSA versus traditional CSV?',
      'Can you help with instrument PCs on unsupported Windows?',
      'What does a LIMS implementation involve?',
    ],
  },
  about: {
    id: 'about',
    label: 'About us',
    tagline: 'How we work and how to reach us',
    greeting:
      'Hi. Ask me about how the practice works with biotech teams, how engagements usually start, or how to get in touch.',
    suggestions: [
      'How is this different from a regular IT provider?',
      'How does an engagement usually start?',
      // Offered deliberately. A compliance-literate visitor is going to wonder
      // anyway, and inviting the question demonstrates more confidence than
      // waiting to be asked it.
      'Is running an AI assistant appropriate here?',
      'How do I get in touch?',
    ],
  },
};

/** Ordered, serializable view for the client. */
export const PUBLIC_MODES: ModePresentation[] = MODES.map((mode) => MODE_PRESENTATION[mode]);
