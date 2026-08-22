/**
 * INTEGRATION POINT — consultation requests.
 *
 * The consultation form posts a JSON payload to this endpoint: the n8n
 * "Future212 — Consultation Intake" workflow, which acknowledges immediately,
 * then triages, qualifies, logs to Sheets, alerts Telegram, and emails the
 * visitor a confirmation.
 *
 * This URL is deliberately committed rather than kept in an env var. Vite
 * inlines every VITE_* value into the public client bundle at build time, so
 * an env var would be equally readable by anyone viewing source — it would buy
 * no secrecy, only the risk of the form silently going dead if the variable is
 * ever missing from an environment. Set VITE_CONSULTATION_WEBHOOK_URL to
 * override (e.g. to point a preview build at a test workflow).
 */
const DEFAULT_CONSULTATION_WEBHOOK_URL =
  "https://n8n.nizarai.xyz/webhook/future212-consultation";

const envWebhookUrl = (
  import.meta.env["VITE_CONSULTATION_WEBHOOK_URL"] as string | undefined
)?.trim();

export const CONSULTATION_WEBHOOK_URL: string =
  envWebhookUrl || DEFAULT_CONSULTATION_WEBHOOK_URL;

export const isConsultationEndpointConfigured = CONSULTATION_WEBHOOK_URL.length > 0;

export const CONTACT_EMAIL = "support@future212.pro";

/** Shape posted to the webhook. */
export type ConsultationPayload = {
  name: string;
  company: string;
  email: string;
  website?: string | undefined;
  automationGoal: string;
  /** E.164 (`+` + digits). Optional — present only when the visitor supplied a number. */
  phone?: string | undefined;
  submittedAt: string;
  source: "future212.pro";
};
