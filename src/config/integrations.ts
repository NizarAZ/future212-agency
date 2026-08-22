/**
 * INTEGRATION POINT — consultation requests.
 *
 * The consultation form posts a JSON payload to this endpoint.
 * Set VITE_CONSULTATION_WEBHOOK_URL to your n8n Production Webhook URL
 * (Webhook node → POST → "Respond immediately") to activate submissions.
 *
 * Until it is configured the form validates input and tells the visitor to
 * email instead — it never fakes a successful submission.
 */
export const CONSULTATION_WEBHOOK_URL: string =
  (import.meta.env["VITE_CONSULTATION_WEBHOOK_URL"] as string | undefined) ?? "";

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
