export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Why Future212", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export const services = [
  {
    title: "Lead & Sales Automation",
    outcome:
      "Every enquiry is captured, qualified and routed the moment it arrives, so your pipeline moves without anyone chasing it manually.",
    detail: "Capture · Enrich · Qualify · Route",
  },
  {
    title: "AI Customer Support & Agents",
    outcome:
      "Assistants that answer routine questions accurately in your tone of voice, and hand complex cases to your team with full context.",
    detail: "Triage · Reply · Escalate",
  },
  {
    title: "Workflow & Operations Automation",
    outcome:
      "Recurring internal processes run on their own — approvals, handovers, scheduling, reporting — with clear visibility at each step.",
    detail: "Approvals · Handovers · Reporting",
  },
  {
    title: "Data & Information Automation",
    outcome:
      "Information is extracted, validated and structured automatically, replacing copy-paste work and reducing avoidable errors.",
    detail: "Extract · Validate · Structure",
  },
  {
    title: "CRM & Tool Integrations",
    outcome:
      "Your existing platforms exchange data reliably, so records stay consistent and teams stop working from separate versions of the truth.",
    detail: "Sync · Map · Reconcile",
  },
  {
    title: "Custom AI Systems",
    outcome:
      "Purpose-built systems designed around one specific business problem, engineered for reliability rather than novelty.",
    detail: "Scoped · Engineered · Maintained",
  },
] as const;

export const painPoints = [
  {
    title: "Repetitive administration",
    body: "Skilled people spend hours on tasks a system should be handling — re-typing, re-checking, re-sending.",
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

export const useCases = [
  {
    title: "Lead to closed loop",
    summary: "New enquiries qualified and delivered to sales with the context they need.",
    steps: ["Lead captured", "Data enriched", "Qualified", "Sales notified", "CRM updated", "Follow-up sent"],
  },
  {
    title: "Intelligent inbox triage",
    summary: "Incoming messages understood, answered, and escalated only when judgement is required.",
    steps: ["Inquiry received", "AI classification", "Personalised reply", "Human escalation"],
  },
  {
    title: "Clean operational data",
    summary: "Form, order and customer data validated once, then distributed everywhere it belongs.",
    steps: ["Data submitted", "Validated", "Written to CRM / DB", "Team notified", "Reported"],
  },
  {
    title: "Content and research pipelines",
    summary: "Collected material processed into structured, publishable output on a schedule.",
    steps: ["Sources collected", "AI processing", "Structured output", "Published / notified"],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We map how work actually flows today and identify the bottlenecks worth removing first.",
  },
  {
    step: "02",
    title: "Design",
    body: "We specify the target system: logic, data, tools, decision points and where AI genuinely adds value.",
  },
  {
    step: "03",
    title: "Build",
    body: "We implement and test the workflows, integrations, APIs and agents inside your existing stack.",
  },
  {
    step: "04",
    title: "Optimize",
    body: "We monitor performance in production, refine the edge cases, and extend the system as you grow.",
  },
] as const;

export const whyPoints = [
  {
    title: "Built around your actual process",
    body: "We start from how your business works, not from a template we are trying to resell.",
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
    body: "Each system is defined with a clear operational objective so improvement can be observed, not assumed.",
  },
  {
    title: "Ongoing optimization",
    body: "Automation is a living system. We maintain and refine it rather than handing over and disappearing.",
  },
] as const;

export const techGroups = [
  { group: "Automation", items: ["n8n", "Webhooks", "Schedulers", "Queues"] },
  { group: "AI", items: ["OpenAI", "LLM agents", "Classification", "Extraction"] },
  { group: "Business tools", items: ["Google Workspace", "CRMs", "Helpdesks", "Spreadsheets"] },
  { group: "Messaging", items: ["Email", "WhatsApp", "Slack", "SMS"] },
  { group: "Data", items: ["Databases", "REST APIs", "Storage", "Reporting"] },
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
    a: "Anything repeatable and rule-based, and increasingly the parts that need interpretation. Typical work includes lead handling, customer responses, internal operations, reporting, data entry and the movement of information between tools.",
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
