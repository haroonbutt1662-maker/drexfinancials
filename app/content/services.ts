export interface ServiceIncluded {
  title: string;
  desc: string;
}

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  included: ServiceIncluded[];
  howItWorks: string[];
  whatYouGet: string[];
  whoFor: string;
  proofPoint?: string;
  faq: ServiceFaqItem[];
  related: string[];
  packages?: ServiceIncluded[];
}

export const services: Record<string, ServiceData> = {
  "fractional-cfo": {
    slug: "fractional-cfo",
    title: "Fractional CFO",
    tagline: "Senior financial leadership, without the full-time salary.",
    intro:
      "DreX gives growing businesses a senior finance lead who owns reporting, planning and the numbers behind every big decision. You get board-ready reporting and a clear plan, at a fraction of the cost of a full-time CFO.",
    included: [
      {
        title: "Board and investor reporting",
        desc: "Monthly packs with commentary that explain what changed and why.",
      },
      {
        title: "Budgeting and forecasting",
        desc: "Annual budgets and rolling forecasts tied to how the business actually runs.",
      },
      {
        title: "Cash management",
        desc: "13-week cash forecasts and early warning on cash pressure.",
      },
      {
        title: "KPI design",
        desc: "A small set of metrics that tell you how the business is really doing.",
      },
      {
        title: "Fundraising and lender support",
        desc: "Models, data packs and answers for investors and banks.",
      },
      {
        title: "Finance function setup",
        desc: "Systems, processes and controls that scale with you.",
      },
    ],
    howItWorks: ["Assess", "Plan", "Report", "Advise"],
    whatYouGet: [
      "Monthly board pack",
      "Rolling forecast",
      "13-week cash model",
      "KPI dashboard",
      "Quarterly strategy review",
    ],
    whoFor:
      "Founder-led and private equity backed businesses that have outgrown a bookkeeper but are not ready for a full-time CFO.",
    faq: [
      {
        q: "How much time does a fractional CFO spend with us?",
        a: "Engagements are structured around your needs — typically a set number of hours per month plus availability for key calls and decisions. We scope the right level of involvement at the start.",
      },
      {
        q: "Can you work with our existing bookkeeper?",
        a: "Yes. We coordinate with whoever handles day-to-day bookkeeping and build on their work. If the books need cleaning up first, we can handle that too.",
      },
      {
        q: "Do you attend board meetings?",
        a: "Where that is part of the engagement, yes. We present the financials, answer questions and support the board in making decisions based on accurate numbers.",
      },
      {
        q: "How quickly can you start?",
        a: "For most engagements we can begin within two weeks of scoping. We run a short discovery process first so we understand your business before we produce anything.",
      },
    ],
    related: ["accounting", "financial-modeling", "financial-packages"],
  },

  accounting: {
    slug: "accounting",
    title: "Accounting and Monthly Close",
    tagline: "Books closed on time, every month, with every number traced to source.",
    intro:
      "We run bookkeeping and month-end close inside your accounting system, so you get accurate management accounts on a fixed date each month. Messy or behind books? We catch them up first.",
    included: [
      {
        title: "Bookkeeping",
        desc: "Transaction coding, bank and card feeds, and supporting documents.",
      },
      {
        title: "Reconciliations",
        desc: "Bank, card, loan and balance sheet accounts reconciled every month.",
      },
      {
        title: "Month-end close",
        desc: "Accruals, prepayments and adjustments on a written close calendar.",
      },
      {
        title: "Management accounts",
        desc: "P&L, balance sheet and cash flow with variance commentary.",
      },
      {
        title: "Cleanup and catch-up",
        desc: "Multi-year backlogs rebuilt and reconciled.",
      },
      {
        title: "System conversions",
        desc: "Moves into QuickBooks Online or other systems with clean opening balances.",
      },
    ],
    howItWorks: ["Connect", "Reconcile", "Validate", "Review and close"],
    whatYouGet: [
      "Monthly close pack",
      "Reconciliations",
      "Management accounts",
      "Exceptions log",
    ],
    whoFor:
      "Small and mid-sized businesses, professional practices, physician offices and portfolio companies.",
    proofPoint:
      "Three years of books rebuilt in one month for a $3M auto services company. [CONFIRM: OK to publish anonymized]",
    faq: [
      {
        q: "Which accounting systems do you work in?",
        a: "[CONFIRM list, e.g. QuickBooks Online, Xero]. We work in your existing system or help you migrate to a more suitable one.",
      },
      {
        q: "What day of the month will our books be closed?",
        a: "We agree a close date at the start of the engagement and hold to it. Most clients close between the 10th and 15th of the following month.",
      },
      {
        q: "Do you need access to our bank?",
        a: "We need read access to your bank feed — either through your accounting system or a read-only connection. We never need the ability to move money.",
      },
      {
        q: "Can you fix books that are years behind?",
        a: "Yes. We have rebuilt multi-year backlogs for businesses coming to us with years of uncategorized transactions. We scope the cleanup separately from the ongoing engagement.",
      },
    ],
    related: ["fractional-cfo", "payables-receivables", "audit-readiness"],
  },

  "payables-receivables": {
    slug: "payables-receivables",
    title: "Payables and Receivables",
    tagline: "Cash comes in faster and goes out on time.",
    intro:
      "We handle invoice intake, coding, approvals, collections and cash application, so your team stops chasing paper. You approve; you always release payments yourself.",
    included: [
      {
        title: "Invoice intake",
        desc: "Bills read, coded to the ledger and matched to orders and receipts.",
      },
      {
        title: "Approval routing",
        desc: "Each bill sent to the right approver, with a logged trail.",
      },
      {
        title: "Payment scheduling",
        desc: "Payment runs prepared for your release.",
      },
      {
        title: "Invoicing",
        desc: "Customer invoices issued on time and accurately.",
      },
      {
        title: "Collections",
        desc: "Aged receivables, reminders and dispute follow-up.",
      },
      {
        title: "Cash application",
        desc: "Payments matched to invoices so the ledger stays current.",
      },
    ],
    howItWorks: ["Intake", "Code and match", "Chase and apply", "Approve"],
    whatYouGet: [
      "Weekly AP and AR aging",
      "Payment run files for approval",
      "Collections report",
    ],
    whoFor:
      "Businesses with steady invoice volume and no dedicated AP or AR staff.",
    faq: [
      {
        q: "Do you ever move money?",
        a: "No. We prepare payment runs and submit them for your approval. You release every payment. We never have access to move funds.",
      },
      {
        q: "Which tools do you use?",
        a: "We work inside your existing accounting system and AP tools. If you do not have an AP workflow, we can help you set one up.",
      },
      {
        q: "How do you handle disputed invoices?",
        a: "We flag disputes in the aging report, document the issue and route it to the right person for resolution. We follow up on outstanding disputes and keep a log.",
      },
      {
        q: "How quickly can collections improve?",
        a: "Most clients see a meaningful reduction in their aged receivables within the first billing cycle once consistent follow-up is in place.",
      },
    ],
    related: ["accounting", "fractional-cfo", "financial-packages"],
  },

  "financial-modeling": {
    slug: "financial-modeling",
    title: "Financial Modeling and FP&A",
    tagline: "Models that hold up under investor and lender scrutiny.",
    intro:
      "We build three-statement models, forecasts and valuations that show how your business makes money and what happens under different scenarios.",
    included: [
      {
        title: "Three-statement models",
        desc: "Linked P&L, balance sheet and cash flow.",
      },
      {
        title: "Scenario and sensitivity analysis",
        desc: "Best, base and downside cases.",
      },
      {
        title: "Unit economics",
        desc: "Margin, customer and product-level profitability.",
      },
      {
        title: "Valuations",
        desc: "Business valuations for fundraising, transactions and planning.",
      },
      {
        title: "13-week cash flow models",
        desc: "Weekly cash visibility for tight periods.",
      },
      {
        title: "Dashboards",
        desc: "Automated reporting on the KPIs that matter.",
      },
    ],
    howItWorks: ["Model", "Forecast", "Report", "Advise"],
    whatYouGet: [
      "A working model you own",
      "Documented assumptions",
      "A summary deck",
    ],
    whoFor:
      "Founders raising capital, businesses seeking finance, and owners planning a sale or expansion.",
    faq: [
      {
        q: "Will we be able to update the model ourselves?",
        a: "Yes. We build models with clear assumption inputs so you can update them without our help. We also walk you through the model on delivery.",
      },
      {
        q: "How long does a model take?",
        a: "A three-statement model typically takes two to four weeks, depending on the complexity of the business and how complete your historical data is.",
      },
      {
        q: "Can you build a valuation for investors?",
        a: "Yes. We build valuations using DCF, comparable company and precedent transaction approaches, with documented assumptions and a sensitivity table.",
      },
      {
        q: "Can you update an existing model we already have?",
        a: "Yes. We can audit, fix and extend an existing model or rebuild it if the structure is not suited to your needs.",
      },
    ],
    related: ["fractional-cfo", "transaction-readiness", "financial-packages"],
  },

  "tax-compliance": {
    slug: "tax-compliance",
    title: "Tax and Compliance",
    tagline: "Prepared by our team, filed by licensed partner CPAs.",
    intro:
      "We prepare business and personal tax returns, estimated taxes and year-end compliance, tied directly to your books. Licensed partner CPAs review, sign and file.",
    included: [
      {
        title: "Business tax preparation",
        desc: "Returns built from reconciled books.",
      },
      {
        title: "Individual tax preparation",
        desc: "For owners and partners.",
      },
      {
        title: "Estimated taxes",
        desc: "Quarterly calculations and reminders.",
      },
      {
        title: "Year-end compliance",
        desc: "1099s and year-end adjustments.",
      },
      {
        title: "Multi-year catch-up",
        desc: "Unfiled prior years brought current.",
      },
      {
        title: "Tax planning support",
        desc: "Cost segregation and depreciation catch-up analysis.",
      },
    ],
    howItWorks: ["Collect", "Prepare", "Validate", "Review and file"],
    whatYouGet: [
      "Prepared return",
      "Workpapers tied to the ledger",
      "Filing confirmation",
    ],
    whoFor:
      "Small business owners, physician practices and professionals.",
    faq: [
      {
        q: "Who signs our return?",
        a: "A licensed partner CPA reviews, signs and files every return. Our team prepares the work; the CPA provides the sign-off.",
      },
      {
        q: "Can you file prior-year returns?",
        a: "Yes. We handle multi-year catch-up regularly. We rebuild the books for the relevant years, prepare the returns and file with the appropriate authorities.",
      },
      {
        q: "Do you handle state returns?",
        a: "Yes. We prepare federal and state returns as part of the same engagement.",
      },
      {
        q: "How does this connect to my bookkeeping?",
        a: "Where we also handle your monthly close, tax preparation is an extension of the same work. Where you use a different bookkeeper, we review and reconcile the books before preparing the return.",
      },
    ],
    related: ["accounting", "fractional-cfo", "financial-packages"],
  },

  "transaction-readiness": {
    slug: "transaction-readiness",
    title: "Transaction Readiness",
    tagline: "Clean books and an organized data room before buyers ask.",
    intro:
      "Before a sale, raise or refinancing, we get your numbers ready: clean books, proof of cash, normalized earnings and a data room buyers can work through quickly. We prepare; your advisor or a licensed CPA signs any Quality of Earnings report.",
    included: [
      {
        title: "Books cleanup",
        desc: "Historical periods corrected and reconciled.",
      },
      {
        title: "Proof of cash",
        desc: "Bank activity tied to reported revenue and expenses.",
      },
      {
        title: "Normalized earnings",
        desc: "Add-backs identified and supported.",
      },
      {
        title: "Working capital analysis",
        desc: "Trends and peg support.",
      },
      {
        title: "Data room build",
        desc: "Indexed, version-controlled and ready for diligence.",
      },
      {
        title: "Buyer Q&A support",
        desc: "Fast, documented answers to diligence requests.",
      },
    ],
    howItWorks: ["Gather", "Normalize", "Prove cash", "Draft workpapers"],
    whatYouGet: [
      "QoE-ready workpapers",
      "Add-back schedule",
      "Working capital analysis",
      "Data room",
    ],
    whoFor:
      "Owners preparing to sell, private equity sponsors, brokers and lenders, and roll-ups including physician practices and imaging centers.",
    faq: [
      {
        q: "Do you issue the Quality of Earnings report?",
        a: "No. We prepare the workpapers, add-back schedule and supporting documentation for your advisor's review and sign-off. The QoE report is issued by your advisor or a licensed CPA.",
      },
      {
        q: "How early should we start?",
        a: "Ideally three to six months before you expect to go to market. Starting early means we have time to clean up any issues before buyers see them.",
      },
      {
        q: "Can you support a roll-up of several companies?",
        a: "Yes. We have experience normalizing and combining financials across multiple entities for roll-up transactions, including healthcare and professional services practices.",
      },
      {
        q: "What if the books are in poor shape?",
        a: "We handle cleanup as part of the engagement. It adds time, but it is far better to find and fix issues before buyers do.",
      },
    ],
    related: ["financial-modeling", "audit-readiness", "fractional-cfo"],
  },

  "audit-readiness": {
    slug: "audit-readiness",
    title: "Audit Readiness",
    tagline: "Walk into your audit with documentation already in place.",
    intro:
      "We prepare the schedules, documentation and controls auditors ask for, so the audit runs faster and with fewer surprises.",
    included: [
      {
        title: "Audit schedules",
        desc: "Lead schedules and supporting reconciliations.",
      },
      {
        title: "Control documentation",
        desc: "Processes and controls written down.",
      },
      {
        title: "Document trail",
        desc: "Support for every material balance.",
      },
      {
        title: "Prior-year adjustments",
        desc: "Identified and cleaned up before fieldwork.",
      },
      {
        title: "Auditor request management",
        desc: "Tracking and answering the request list.",
      },
      {
        title: "Public company reporting support",
        desc: "Financial statements and disclosures.",
      },
    ],
    howItWorks: ["Assess", "Prepare", "Document", "Support fieldwork"],
    whatYouGet: [
      "Full audit binder",
      "Control summary",
      "Request tracker",
    ],
    whoFor:
      "Companies facing a first audit, lender audits, or investor-driven audits.",
    faq: [
      {
        q: "Are you our auditor?",
        a: "No. We prepare you for the audit; an independent firm performs it. We work alongside your auditors to make their process faster and less disruptive for your team.",
      },
      {
        q: "How long before the audit should we start?",
        a: "We recommend starting six to eight weeks before the audit begins. This gives us time to prepare schedules, identify any issues and work with you to resolve them before fieldwork starts.",
      },
      {
        q: "What if we have never had an audit before?",
        a: "First audits are where we add the most value. We walk you through what auditors look for, what documentation you need and how to organize it.",
      },
      {
        q: "Can you help with public company reporting?",
        a: "Yes. We support financial statement preparation, disclosure drafting and the documentation public company auditors require.",
      },
    ],
    related: ["accounting", "transaction-readiness", "financial-packages"],
  },

  "financial-packages": {
    slug: "financial-packages",
    title: "Financial Packages",
    tagline: "A fixed scope, a fixed price, a fixed timeframe.",
    intro:
      "A straightforward way to start working with DreX. Each package has a defined scope and delivery date, so you know exactly what you are getting.",
    included: [],
    packages: [
      {
        title: "Books Health Check",
        desc: "A review of up to 12 months of transactions. We identify errors, missing reconciliations and classification issues, and deliver a written findings report. [CONFIRM: scope and pricing]",
      },
      {
        title: "13-Week Cash Flow Build",
        desc: "A weekly cash flow model built from your actuals and assumptions, with documented inputs and a walkthrough session. [CONFIRM: scope and pricing]",
      },
      {
        title: "Investor Model Build",
        desc: "A three-statement financial model with scenario analysis, documented assumptions and a summary deck. Suited for fundraising or lender conversations. [CONFIRM: scope and pricing]",
      },
      {
        title: "Transaction Readiness Review",
        desc: "A focused review of your books and data room readiness, with a written findings report and priority action list before you go to market. [CONFIRM: scope and pricing]",
      },
    ],
    howItWorks: ["Choose a package", "Kickoff call", "Delivery", "Walkthrough"],
    whatYouGet: [
      "A defined deliverable on a fixed date",
      "A walkthrough on delivery",
      "Clear pricing before you start",
    ],
    whoFor:
      "Businesses that want a defined starting point before committing to an ongoing engagement.",
    faq: [
      {
        q: "Can a package turn into an ongoing engagement?",
        a: "Yes. Many clients start with a package and then move to an ongoing service. There is no obligation either way.",
      },
      {
        q: "What do you need from us to start?",
        a: "Access to your accounting system and any relevant documents. For the Books Health Check, read-only access is all we need. For the cash flow and model builds, we will ask for a short call to understand your business first.",
      },
      {
        q: "Are the prices fixed?",
        a: "[CONFIRM: pricing to be confirmed]. Scope is fixed; pricing will be agreed before work starts and will not change unless you ask for something outside the defined scope.",
      },
      {
        q: "How long does each package take?",
        a: "Timelines vary by package. The Books Health Check takes approximately one week; model builds typically take two to three weeks. We confirm the delivery date at kickoff.",
      },
    ],
    related: ["fractional-cfo", "accounting", "financial-modeling"],
  },
};

export const serviceOrder = [
  "fractional-cfo",
  "accounting",
  "payables-receivables",
  "financial-modeling",
  "tax-compliance",
  "transaction-readiness",
  "audit-readiness",
  "financial-packages",
] as const;

export type ServiceSlug = (typeof serviceOrder)[number];
