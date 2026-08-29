/**
 * Request limits.
 *
 * Kept in their own module because both sides need them: the Worker enforces
 * them, and the browser trims to them so a long session degrades gracefully
 * rather than getting rejected. One source of truth, no drift.
 *
 * Contains no secrets and imports nothing, so it is safe to pull into client code.
 */

export const LIMITS = {
  /** Turns retained. Older turns are dropped client-side and re-checked server-side. */
  MAX_MESSAGES: 20,
  /** Characters per message. */
  MAX_MESSAGE_CHARS: 2_000,
  /** Characters across the whole transcript. */
  MAX_TOTAL_CHARS: 12_000,
  /** Ceiling on generated tokens. Bounds the per-request cost. */
  MAX_OUTPUT_TOKENS: 700,
  /** Bytes accepted on the wire, checked before parsing. */
  MAX_BODY_BYTES: 32_000,
} as const;
