export type ServiceFeature = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  timeframe: string;
  description: string;
};

export type ServiceConfig = {
  slug: string;
  name: string;
  shortDescription: string;
  pageTitle: string;
  metaDescription: string;
  heroSubheadline: string;
  problemHeadline: string;
  problemBody: string;
  whatWeDoBody: string;
  features: ServiceFeature[];
  processSteps: ProcessStep[];
  whoThisIsFor: string[];
  ctaHeadline: string;
};

export const services: ServiceConfig[] = [
  {
    slug: "commercial-transformation",
    name: "Commercial Transformation",
    shortDescription:
      "We find where the money is leaking and where it should be growing.",
    pageTitle: "Commercial Transformation - Northstone",
    metaDescription:
      "Revenue analysis, pricing strategy, unit economics, and go-to-market restructuring for scaleups. We find where the money is leaking and where it should be growing.",
    heroSubheadline:
      "We find where the money is leaking and where it should be growing.",
    problemHeadline:
      "Your commercial strategy got you here. It will not get you there.",
    problemBody:
      "Most companies between EUR 5M and EUR 30M are running a commercial strategy that was designed for a much smaller business. Pricing was set based on gut feel. Unit economics have never been properly modeled. Customer acquisition costs are rising but nobody knows why. Revenue is growing, but margins are shrinking. These are not finance problems. They are commercial strategy problems with financial consequences.",
    whatWeDoBody:
      "We conduct a full commercial diagnostic and then work alongside your team to execute the transformation. This is not a report that sits on a shelf. We stay embedded until the changes are delivering results.",
    features: [
      {
        title: "Revenue Analysis",
        description:
          "We decompose your revenue streams to identify concentration risk, margin erosion, and growth opportunities you are missing.",
      },
      {
        title: "Pricing Strategy",
        description:
          "We model your pricing against unit economics, competitive positioning, and willingness-to-pay data. Then we help you implement changes without losing customers.",
      },
      {
        title: "Unit Economics",
        description:
          "We build a unit economics model that actually reflects your business - not a template from a blog post. CAC, LTV, payback periods, and contribution margins by segment.",
      },
      {
        title: "Go-to-Market Restructuring",
        description:
          "We evaluate your sales channels, customer segmentation, and market approach. Sometimes the product is fine - the route to market is broken.",
      },
    ],
    processSteps: [
      {
        title: "Diagnostic",
        timeframe: "Week 1-2",
        description:
          "We review your financials, commercial data, pricing, and customer base. We interview key stakeholders and identify the highest-impact opportunities.",
      },
      {
        title: "Strategy",
        timeframe: "Week 3-4",
        description:
          "We build a commercial transformation plan with specific initiatives, expected impact, timelines, and resource requirements.",
      },
      {
        title: "Execution",
        timeframe: "Month 2-6",
        description:
          "We embed with your team to execute. We attend the meetings, build the models, have difficult pricing conversations, and track progress weekly.",
      },
      {
        title: "Handoff",
        timeframe: "Transition",
        description:
          "We document everything, train your team, and build the dashboards needed to sustain the transformation independently.",
      },
    ],
    whoThisIsFor: [
      "Scaleups with revenue between EUR 5-30M that know margins should be better but cannot pinpoint why.",
      "PE-backed companies where the investment thesis depends on commercial improvements post-acquisition.",
      "Founders who are about to raise and need their commercial narrative backed by real data.",
    ],
    ctaHeadline: "Let's find the growth you are leaving on the table.",
  },
  {
    slug: "financial-operations",
    name: "Financial Operations",
    shortDescription:
      "We build the financial backbone that actually supports the transformation.",
    pageTitle: "Financial Operations - Northstone",
    metaDescription:
      "Management reporting, controller functions, cash flow management, and KPI infrastructure for growing companies. We build the financial backbone that supports transformation.",
    heroSubheadline:
      "We build the financial backbone that actually supports the transformation.",
    problemHeadline:
      "Your reporting tells you what happened. It does not tell you what to do.",
    problemBody:
      "At EUR 2M in revenue, a bookkeeper and a spreadsheet were enough. At EUR 10M, you need management reporting that drives decisions, cash flow forecasting that is actually accurate, KPIs that your leadership team uses every week, and a controller function that catches problems before they become crises. Most companies at this stage are flying blind with a dashboard that nobody trusts.",
    whatWeDoBody:
      "We design and implement financial operations infrastructure that gives you real visibility into your business. Then we run it with you until your team is ready to take over.",
    features: [
      {
        title: "Management Reporting",
        description:
          "Monthly and weekly reporting packages designed for your leadership team and board. Reports built around the decisions you need to make.",
      },
      {
        title: "Controller Functions",
        description:
          "We implement financial controls, approval workflows, and reconciliation processes. The boring stuff that prevents expensive mistakes.",
      },
      {
        title: "Cash Flow Management",
        description:
          "Rolling 13-week cash flow forecasts, scenario planning, and liquidity management. You will not be surprised by a cash crunch.",
      },
      {
        title: "KPI Infrastructure",
        description:
          "We define the metrics that matter, build the tracking systems, and create dashboards your team will actually use.",
      },
    ],
    processSteps: [
      {
        title: "Assessment",
        timeframe: "Week 1",
        description:
          "We audit your current financial operations, systems, processes, team capabilities, reporting, and controls. Then we identify gaps and risks.",
      },
      {
        title: "Design",
        timeframe: "Week 2-3",
        description:
          "We design the target-state operating model: what reports, what frequency, what KPIs, what controls, and what systems.",
      },
      {
        title: "Build",
        timeframe: "Month 1-3",
        description:
          "We implement new reporting, build dashboards, set controls, and create the working processes alongside your team.",
      },
      {
        title: "Operate and Transfer",
        timeframe: "Month 3-6",
        description:
          "We operate the function while training your team. We hire or upskill where needed, then transition when you are self-sufficient.",
      },
    ],
    whoThisIsFor: [
      "Companies that have outgrown their bookkeeper but are not ready for a full-time CFO.",
      "PE-backed companies that need investor-grade reporting from day one post-acquisition.",
      "Scaleups preparing for a raise that need their financial house in order before due diligence.",
    ],
    ctaHeadline: "Let's build the financial infrastructure your growth demands.",
  },
  {
    slug: "capital-formation",
    name: "Capital Formation",
    shortDescription:
      "Debt and equity raises, structured and executed. EUR 200M+ raised.",
    pageTitle: "Capital Formation - Northstone",
    metaDescription:
      "Debt and equity capital raising for scaleups. Venture debt, asset-backed facilities, VC and PE rounds. EUR 200M+ raised.",
    heroSubheadline:
      "Debt and equity raises, structured and executed. EUR 200M+ raised across venture debt, asset-backed facilities, VC, and PE rounds.",
    problemHeadline: "Raising capital is a full-time job. You already have one.",
    problemBody:
      "Whether you are raising debt or equity, the process consumes your leadership team for months. Materials need to be built, data rooms prepared, investors managed through a structured process, and due diligence survived. Through all of this, you still need to run your business. We have done this over EUR 200M worth of times. We know what works.",
    whatWeDoBody:
      "We help companies raise the right capital at the right time. We structure the process, build materials, run investor outreach, and support negotiations through close.",
    features: [
      {
        title: "Debt Capital",
        description:
          "Venture debt and asset-backed facilities. We handle structuring, lender introductions, term sheet negotiations, and covenant design.",
      },
      {
        title: "Equity Capital",
        description:
          "VC and private equity rounds from positioning and narrative to close. We keep the process competitive and on timeline.",
      },
      {
        title: "Investor Materials and DD",
        description:
          "Pitch decks, financial models, and data rooms that are rigorous and persuasive. We prepare for due diligence before investors ask.",
      },
      {
        title: "Process Management",
        description:
          "We run outreach, scheduling, follow-ups, term sheet comparison, and negotiation support while your leadership team keeps operating.",
      },
    ],
    processSteps: [
      {
        title: "Assessment",
        timeframe: "Week 1-2",
        description:
          "We evaluate your capital need, readiness, and metrics. Then we recommend the right instrument: debt, equity, or both.",
      },
      {
        title: "Preparation",
        timeframe: "Week 2-6",
        description:
          "We build materials, prepare the data room, model financials, and rehearse the pitch so you go to market fully prepared.",
      },
      {
        title: "Execution",
        timeframe: "Month 2-5",
        description:
          "We run investor outreach, meeting management, term sheet negotiation, and due diligence coordination.",
      },
      {
        title: "Close",
        timeframe: "Final Stage",
        description:
          "We coordinate with counsel, manage final diligence requests, and ensure a clean close through first drawdown or funding receipt.",
      },
    ],
    whoThisIsFor: [
      "Scaleups preparing for debt or equity raises where leadership bandwidth is constrained.",
      "Companies seeking structured access to European venture debt or asset-backed facilities.",
      "Founder and PE-backed teams that need operator-led process management from preparation to close.",
    ],
    ctaHeadline: "Let's talk about your capital needs.",
  },
  {
    slug: "turnaround-advisory",
    name: "Turnaround Advisory",
    shortDescription:
      "We deploy as hands-on operators to stabilize, restructure, and relaunch.",
    pageTitle: "Turnaround Advisory - Northstone",
    metaDescription:
      "Hands-on turnaround advisory for companies in distress. We deploy as operators to stabilize finances, restructure commercial strategy, and raise capital.",
    heroSubheadline:
      "For companies that need commercial transformation, financial restructuring, and capital formation - all at once. We deploy as operators, not advisors.",
    problemHeadline:
      "When everything needs to change at once, you need operators, not consultants.",
    problemBody:
      "A turnaround is not a strategy project. It is an operational emergency. Revenue is declining or stagnant. Cash runway is shrinking. The board is losing patience. The team is overwhelmed. You do not have time for diagnostics and slide decks. You need a team that can assess quickly and execute immediately.",
    whatWeDoBody:
      "We deploy as embedded operators, typically at C-suite or VP level, to lead turnaround from inside the company. We integrate all four capabilities into one intensive engagement.",
    features: [
      {
        title: "Rapid Diagnostic",
        description:
          "In the first two weeks, we assess commercial performance, financial health, cash position, team capabilities, and strategic options.",
      },
      {
        title: "Cash Stabilization",
        description:
          "Immediate cash management with 13-week forecasting, payment prioritization, working capital optimization, and emergency financing if needed.",
      },
      {
        title: "Commercial Restructuring",
        description:
          "We identify which products, customers, and channels are value-creating versus value-destroying, then execute the hard changes.",
      },
      {
        title: "Stakeholder and Capital Management",
        description:
          "We manage boards, lenders, and investors with a clear cadence while executing bridge financing, debt restructuring, or equity raises in parallel.",
      },
    ],
    processSteps: [
      {
        title: "Triage",
        timeframe: "Week 1",
        description:
          "We assess cash, burn, revenue trajectory, key risks, and timeline for action. Then we establish severity and priorities.",
      },
      {
        title: "Stabilize",
        timeframe: "Week 2-4",
        description:
          "We implement immediate measures: cash controls, cost reduction, and revenue protection. We stop the bleeding.",
      },
      {
        title: "Restructure",
        timeframe: "Month 2-4",
        description:
          "We execute commercial and operational changes needed for sustainable performance, including pricing and customer focus shifts.",
      },
      {
        title: "Rebuild",
        timeframe: "Month 4-6+",
        description:
          "We set a new trajectory with a cleaner operating model, stronger financial operations, and fresh capital if required.",
      },
    ],
    whoThisIsFor: [
      "Companies with declining revenue and shrinking runway that need immediate operational intervention.",
      "PE portfolio companies that are underperforming and need hands-on operating support.",
      "Founder-led companies facing a crisis and seeking experienced operators to navigate it.",
    ],
    ctaHeadline: "If you are reading this page, time matters. Let's talk today.",
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, ServiceConfig>;
