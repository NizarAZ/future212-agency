import { useState } from "react";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import {
  CONSULTATION_WEBHOOK_URL,
  CONTACT_EMAIL,
  isConsultationEndpointConfigured,
  type ConsultationPayload,
} from "@/config/integrations";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { cn } from "@/lib/utils";

/** Strip formatting so we validate/store just the dialable characters. */
const stripPhone = (value: string) => value.replace(/[\s()\-.]/g, "");
/** E.164-style: optional leading +, 8–15 digits, no leading zero. */
const phonePattern = /^\+?[1-9]\d{7,14}$/;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  company: z.string().trim().min(2, "Please enter your business name."),
  email: z.string().trim().email("Please enter a valid email address."),
  website: z
    .string()
    .trim()
    .max(120, "That URL looks too long.")
    .optional()
    .or(z.literal("")),
  automationGoal: z
    .string()
    .trim()
    .min(20, "A sentence or two helps us prepare properly."),
  // Optional, but if given it must be dialable — we may reply here or on WhatsApp.
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || phonePattern.test(stripPhone(value)), {
      message: "Enter a valid number with country code, e.g. +1 555 123 4567.",
    }),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = {
  name: "",
  company: "",
  email: "",
  website: "",
  automationGoal: "",
  phone: "",
};

const fieldClass =
  "w-full rounded-sm border border-input bg-navy-deep/70 px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/35 transition-colors focus:border-gold focus:outline-none";

export function Consultation() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unconfigured" | "error">(
    "idle",
  );

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    if (!isConsultationEndpointConfigured) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");
    // Phone is optional; when given, normalize to E.164 (`+` + digits).
    const phone = parsed.data.phone
      ? `+${stripPhone(parsed.data.phone).replace(/^\+/, "")}`
      : undefined;
    const payload: ConsultationPayload = {
      ...parsed.data,
      website: parsed.data.website || undefined,
      phone,
      submittedAt: new Date().toISOString(),
      source: "future212.pro",
    };

    try {
      const response = await fetch(CONSULTATION_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="consultation" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 size-[34rem] rounded-full bg-gold/8 blur-[150px]"
      />
      <div className="relative grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Free consultation"
            title={
              <>
                Let&rsquo;s identify what should be <span className="text-gold-gradient">automated next</span>.
              </>
            }
            intro="A focused, no-obligation review of your current processes. We map where time is being lost, outline what an automated system would look like, and tell you honestly whether it is worth building."
          />

          <Reveal delay={120} className="mt-10 space-y-4 text-sm text-foreground/60">
            <p className="flex gap-3">
              <span aria-hidden="true" className="mt-2 size-1.5 rotate-45 bg-gold" />
              30–45 minutes, remote, no preparation required.
            </p>
            <p className="flex gap-3">
              <span aria-hidden="true" className="mt-2 size-1.5 rotate-45 bg-gold" />
              You leave with a clear view of your automation opportunities.
            </p>
            <p className="flex gap-3">
              <span aria-hidden="true" className="mt-2 size-1.5 rotate-45 bg-gold" />
              Prefer email? Write to{" "}
              <a className="text-gold underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="panel p-7 lg:p-10">
          <form onSubmit={onSubmit} noValidate className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Your full name"
                  value={values.name}
                  aria-invalid={!!errors.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </Field>
              <Field id="company" label="Business / Company" error={errors.company}>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  className={fieldClass}
                  placeholder="Company name"
                  value={values.company}
                  aria-invalid={!!errors.company}
                  onChange={(e) => set("company", e.target.value)}
                />
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="you@company.com"
                  value={values.email}
                  aria-invalid={!!errors.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </Field>
              <Field id="phone" label="Phone / WhatsApp" optional error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="+1 555 123 4567"
                  value={values.phone ?? ""}
                  aria-invalid={!!errors.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
              </Field>
            </div>

            <Field id="website" label="Website" optional error={errors.website}>
              <input
                id="website"
                name="website"
                autoComplete="url"
                className={fieldClass}
                placeholder="company.com"
                value={values.website ?? ""}
                onChange={(e) => set("website", e.target.value)}
              />
            </Field>

            <Field
              id="automationGoal"
              label="What would you like to automate?"
              error={errors.automationGoal}
            >
              <textarea
                id="automationGoal"
                name="automationGoal"
                rows={4}
                className={cn(fieldClass, "resize-y")}
                placeholder="Describe the process, where it slows down, and the tools involved."
                value={values.automationGoal}
                aria-invalid={!!errors.automationGoal}
                onChange={(e) => set("automationGoal", e.target.value)}
              />
            </Field>

            <p className="text-xs text-foreground/45">
              Include your country code on the number — we&rsquo;ll reply by email, and on WhatsApp
              too if you left one.
            </p>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {status === "sending" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              )}
              Request my free consultation
            </button>

            <p aria-live="polite" className="text-sm leading-relaxed">
              {status === "sent" && (
                <span className="flex items-center gap-2 text-gold">
                  <CheckCircle2 className="size-4" /> Request received. We&rsquo;ll reply within one
                  business day.
                </span>
              )}
              {status === "error" && (
                <span className="text-destructive">
                  The request could not be sent. Please email {CONTACT_EMAIL}.
                </span>
              )}
              {status === "unconfigured" && (
                <span className="text-foreground/70">
                  Your details are valid, but the intake endpoint is not connected yet. Please email{" "}
                  <a className="text-gold underline" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>{" "}
                  in the meantime.{" "}
                  <span className="text-foreground/40">
                    (Set VITE_CONSULTATION_WEBHOOK_URL to enable delivery.)
                  </span>
                </span>
              )}
              {status === "idle" && (
                <span className="text-foreground/40">
                  We use your details only to prepare and arrange the consultation.
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  optional?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 flex items-baseline gap-2 text-xs tracking-[0.18em] text-foreground/55 uppercase"
      >
        {label}
        {optional && <span className="tracking-normal text-foreground/30 normal-case">optional</span>}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
