export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "What we automate", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Why Future212", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

/* ------------------------------------------------------------------ *
 * Live Automation Console — the interactive centerpiece.
 * Each scenario is a real piece of drudgery the visitor can "run":
 * a messy input goes through a visible pipeline into a clean result.
 * ------------------------------------------------------------------ */

export type ConsoleStep = { label: string; tool: string; ms: number };
export type ConsoleField = { k: string; v: string };

export type Scenario = {
  id: string;
  /** Short chip label */
  label: string;
  /** lucide-react icon name */
  icon: "UserPlus" | "Headset" | "ReceiptText" | "Megaphone";
  /** Where the raw work arrives from */
  channel: string;
  input: { from: string; subject?: string; body: string };
  steps: ConsoleStep[];
  output: { title: string; fields: ConsoleField[]; note: string };
  timeSaved: string;
};

export const scenarios: Scenario[] = [
  {
    id: "lead",
    label: "Messy lead",
    icon: "UserPlus",
    channel: "WhatsApp",
    input: {
      from: "WhatsApp · +1 (415) 555-0132",
      body: "hi saw ur ad — we're a dental clinic in austin, ~12 staff. need help sorting patient msgs + appointment reminders. whats pricing? can talk thurs",
    },
    steps: [
      { label: "Capture message", tool: "Webhook", ms: 200 },
      { label: "Extract details", tool: "AI", ms: 900 },
      { label: "Enrich company", tool: "Clearbit", ms: 700 },
      { label: "Score & qualify", tool: "Rules", ms: 400 },
      { label: "Create CRM record", tool: "HubSpot", ms: 600 },
      { label: "Draft + send reply", tool: "Gmail", ms: 800 },
    ],
    output: {
      title: "Qualified lead → HubSpot",
      fields: [
        { k: "Contact", v: "Dental clinic · Austin, TX" },
        { k: "Size", v: "~12 staff" },
        { k: "Intent", v: "Patient messaging + reminders" },
        { k: "Score", v: "82 / 100 — Hot" },
        { k: "Meeting", v: "Proposed Thu · booking link sent" },
      ],
      note: "Reply drafted in your brand voice; follow-up task created for the team.",
    },
    timeSaved: "~15 min of manual triage → 4.6s",
  },
  {
    id: "support",
    label: "Support email",
    icon: "Headset",
    channel: "Email",
    input: {
      from: "Email · maria@northwind.co",
      subject: "Where is my order #40928?",
      body: "Hi, I ordered 3 weeks ago and tracking hasn't updated in 6 days. Order #40928. Getting a little worried — can you check? Thanks, Maria",
    },
    steps: [
      { label: "Read & parse", tool: "IMAP", ms: 300 },
      { label: "Classify intent", tool: "AI", ms: 700 },
      { label: "Look up order", tool: "Shopify", ms: 600 },
      { label: "Check policy", tool: "Knowledge base", ms: 500 },
      { label: "Draft reply", tool: "AI", ms: 800 },
      { label: "Route decision", tool: "Rules", ms: 300 },
    ],
    output: {
      title: "Resolved · no human needed",
      fields: [
        { k: "Category", v: "Order status" },
        { k: "Sentiment", v: "Anxious — prioritized" },
        { k: "Order #40928", v: "Stuck at carrier → reshipped" },
        { k: "Reply", v: "Drafted with new tracking + apology" },
        { k: "Escalation", v: "Not required" },
      ],
      note: "Answered in 5.1s, tagged and logged to your helpdesk automatically.",
    },
    timeSaved: "~8 min per ticket → 5.1s",
  },
  {
    id: "invoice",
    label: "Unpaid invoice",
    icon: "ReceiptText",
    channel: "Accounting",
    input: {
      from: "Accounting · QuickBooks sync",
      subject: "Invoice INV-2043 overdue",
      body: "INV-2043 · Acme Studio · $4,200 · due 12 days ago · no payment received · 2 prior invoices paid on time",
    },
    steps: [
      { label: "Detect overdue", tool: "Scheduler", ms: 200 },
      { label: "Match customer", tool: "QuickBooks", ms: 500 },
      { label: "Assess history", tool: "Rules", ms: 400 },
      { label: "Draft reminder", tool: "AI", ms: 700 },
      { label: "Schedule follow-ups", tool: "n8n", ms: 400 },
      { label: "Log activity", tool: "CRM", ms: 300 },
    ],
    output: {
      title: "Reminder sent · follow-ups queued",
      fields: [
        { k: "Invoice INV-2043", v: "$4,200 · 12 days overdue" },
        { k: "Client", v: "Acme Studio · reliable payer" },
        { k: "Tone", v: "Friendly (first nudge)" },
        { k: "Follow-ups", v: "Queued +3d · +7d · +14d" },
        { k: "Escalation", v: "Day 21 → founder" },
      ],
      note: "Payment link included; the sequence stops automatically the moment it's paid.",
    },
    timeSaved: "Chasing you'd forget → handled in 2.5s",
  },
  {
    id: "social",
    label: "Social post",
    icon: "Megaphone",
    channel: "Brief",
    input: {
      from: "Brief · one line from you",
      subject: "Announce our new online booking",
      body: "we just launched online booking — customers can self-schedule 24/7. want posts for LinkedIn + Instagram + X, friendly but professional",
    },
    steps: [
      { label: "Parse brief", tool: "AI", ms: 400 },
      { label: "Draft copy", tool: "AI", ms: 900 },
      { label: "Tailor per platform", tool: "AI", ms: 800 },
      { label: "Add hashtags + image", tool: "AI", ms: 700 },
      { label: "Schedule posts", tool: "Buffer", ms: 500 },
      { label: "Notify for approval", tool: "Slack", ms: 300 },
    ],
    output: {
      title: "3 posts drafted · scheduled",
      fields: [
        { k: "LinkedIn", v: "Professional · leads with the ‘why'" },
        { k: "Instagram", v: "Warm caption + 8 hashtags" },
        { k: "X", v: "Punchy · under 280 chars" },
        { k: "Media", v: "On-brand image generated" },
        { k: "Schedule", v: "Tue 9:00 · Wed 12:30 · Thu 17:00" },
      ],
      note: "Held for one-tap approval in Slack before anything goes public.",
    },
    timeSaved: "~40 min of writing → 3.6s",
  },
];

/* ------------------------------------------------------------------ *
 * Services — concrete "drudgery" names, framed as before → after.
 * ------------------------------------------------------------------ */

export type Service = {
  id: string;
  /** lucide-react icon name */
  icon: "Headset" | "UserPlus" | "ReceiptText" | "Megaphone" | "DatabaseZap" | "Workflow";
  title: string;
  tag: string;
  before: string;
  after: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "support",
    icon: "Headset",
    title: "Customer support",
    tag: "Triage · Reply · Escalate",
    before: "The same questions answered by hand, all day, while harder cases wait.",
    after:
      "Routine questions answered instantly in your tone; only the cases that need judgement reach your team — with full context attached.",
    bullets: ["Understands and categorises every message", "Drafts accurate, on-brand replies", "Escalates edge cases, never guesses"],
  },
  {
    id: "lead",
    icon: "UserPlus",
    title: "Lead generation",
    tag: "Capture · Qualify · Route",
    before: "Enquiries arrive across channels and cool off before anyone follows up.",
    after:
      "Every lead is captured the second it lands, enriched, scored, and routed to the right person with a reply already drafted.",
    bullets: ["Captures from web, DMs, email, ads", "Enriches and scores automatically", "Books the meeting while it's hot"],
  },
  {
    id: "invoice",
    icon: "ReceiptText",
    title: "Invoicing",
    tag: "Issue · Chase · Reconcile",
    before: "Invoices sent late, reminders forgotten, cash collected slower than it should be.",
    after:
      "Invoices go out on time and chase themselves with polite, escalating reminders that stop the instant payment lands.",
    bullets: ["Generates and sends on schedule", "Follows up until paid", "Reconciles against your accounting tool"],
  },
  {
    id: "social",
    icon: "Megaphone",
    title: "Social media",
    tag: "Draft · Tailor · Schedule",
    before: "Posting is sporadic because writing and scheduling always loses to real work.",
    after:
      "From one line of intent, on-brand posts are drafted for each platform, scheduled, and held for your one-tap approval.",
    bullets: ["Tailors copy per platform", "Generates on-brand visuals", "Schedules and waits for approval"],
  },
  {
    id: "data",
    icon: "DatabaseZap",
    title: "Data entry",
    tag: "Extract · Validate · Sync",
    before: "The same details re-typed into several tools, with small errors compounding over time.",
    after:
      "Information is read from documents and messages, validated once, and written everywhere it belongs — no copy-paste.",
    bullets: ["Reads PDFs, forms, emails", "Validates before it writes", "Keeps every system in sync"],
  },
  {
    id: "workflows",
    icon: "Workflow",
    title: "Complex workflows",
    tag: "Connect · Decide · Run",
    before: "Multi-step processes held together by people remembering to do the next thing.",
    after:
      "Approvals, handovers and multi-tool sequences run on their own, with clear visibility and a human step only where it matters.",
    bullets: ["Connects the tools you already pay for", "Branches on real business logic", "Runs reliably, with full audit trail"],
  },
];

export const painPoints = [
  {
    title: "Repetitive administration",
    body: "Skilled people spend hours on tasks a system should handle — re-typing, re-checking, re-sending.",
  },
  {
    title: "Leads that quietly disappear",
    body: "Enquiries arrive across channels and lose momentum before anyone gets to them.",
  },
  {
    title: "Manual data entry",
    body: "The same information is entered into several tools, and small inconsistencies compound over time.",
  },
  {
    title: "Slow follow-up",
    body: "Response speed decides outcomes, yet follow-up depends on someone remembering.",
  },
  {
    title: "Disconnected tools",
    body: "Each platform works well alone. Between them, work is carried by hand.",
  },
  {
    title: "Repetitive customer questions",
    body: "The same enquiries occupy your team daily, at the expense of higher-value conversations.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We map how work actually flows today and pinpoint the bottleneck worth removing first.",
  },
  {
    step: "02",
    title: "Design",
    body: "We specify the system: logic, data, tools, decision points, and where AI genuinely adds value.",
  },
  {
    step: "03",
    title: "Build",
    body: "We implement and test the workflows, integrations and agents inside your existing stack.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "We monitor it in production, refine the edge cases, and extend the system as you grow.",
  },
] as const;

export const whyPoints = [
  {
    title: "Built around your actual process",
    body: "We start from how your business works, not from a template we're trying to resell.",
  },
  {
    title: "AI where it adds value",
    body: "Deterministic automation where reliability matters, AI where interpretation and language matter.",
  },
  {
    title: "Connected systems, not isolated tools",
    body: "We design one coherent operating layer across the platforms you already pay for.",
  },
  {
    title: "Designed to be measurable",
    body: "Each system has a clear operational objective, so improvement can be observed, not assumed.",
  },
  {
    title: "Ongoing optimization",
    body: "Automation is a living system. We maintain and refine it rather than handing over and disappearing.",
  },
] as const;

export const outcomes = [
  "Less manual work",
  "Faster response times",
  "Cleaner data flow",
  "More consistent follow-up",
  "Systems that scale with the business",
] as const;

export const faqs = [
  {
    q: "What exactly does Future212 automate?",
    a: "Anything repeatable and rule-based, and increasingly the parts that need interpretation. Typical work includes lead handling, customer support, invoicing, social media, data entry and the movement of information between tools.",
  },
  {
    q: "Do you work with the tools we already use?",
    a: "Yes. In most engagements we connect and extend your existing stack rather than replace it. If a platform exposes an API or webhook, it can usually be integrated.",
  },
  {
    q: "Do we need technical knowledge on our side?",
    a: "No. We handle the design, implementation and technical operation. What we need from you is an understanding of how your business works today.",
  },
  {
    q: "How does a project start?",
    a: "With a free consultation. We review your current processes, identify where automation would have the clearest impact, and outline a scoped plan before any commitment.",
  },
  {
    q: "Do you support the systems after launch?",
    a: "Yes. Automations touch live business processes, so we offer monitoring, maintenance and continuous refinement as part of an ongoing engagement.",
  },
  {
    q: "Are the systems custom-built?",
    a: "Every system is designed for the specific process it serves. We reuse proven engineering patterns, but the logic, integrations and behaviour are built for your business.",
  },
] as const;
