import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Braces, Compass, FlaskConical, Mail, MapPin, Network, Waypoints } from "lucide-react";
import profileImage from "../img/1779871269910~2.png";

export const contentNavItems = [
  { label: "Systems", path: "/systems" },
  { label: "Thinking", path: "/thinking" },
  { label: "Experiments", path: "/experiments" },
  { label: "Philosophy", path: "/philosophy" },
  { label: "About", path: "/about" },
];

const ecosystemPath = [
  { label: "Identity", page: "About", path: "/about" },
  { label: "Beliefs", page: "Philosophy", path: "/philosophy" },
  { label: "Frameworks", page: "Thinking", path: "/thinking" },
  { label: "Proof", page: "Systems", path: "/systems" },
  { label: "Frontier", page: "Experiments", path: "/experiments" },
];

const loopStages = ["Signal", "Decision", "Action", "Outcome", "Feedback"];

const systemsDocs = [
  {
    family: "systems",
    type: "System",
    category: "Decision",
    slug: "portfolio-growth-engine",
    title: "Portfolio Growth Engine",
    subtitle: "Behavioral intelligence for portfolio-level growth decisions.",
    thesis: "A growth system that stopped asking who a customer was and started asking where their behavior was moving.",
    summary: "Static customer buckets were replaced with a behavioral economy: signals, momentum, interventions, outcomes, and cooling feedback.",
    path: "/systems/portfolio-growth-engine",
    accent: "5x",
    accentLabel: "transaction frequency",
    metrics: [
      { value: "5x", label: "transaction frequency in targeted clusters" },
      { value: "40–60%", label: "higher average spend vs. static controls" },
      { value: "cooldown", label: "fatigue controls added after early over-response" },
    ],
    loop: {
      Signal: "Transaction velocity, category shifts, offer response, recency.",
      Decision: "Which intervention changes momentum without creating fatigue?",
      Action: "Route offer, nudge, or silence through orchestration.",
      Outcome: "Spend, frequency, repeat behavior, incentive cost.",
      Feedback: "Response data changes cluster weight, eligibility, and cooldown logic.",
    },
    sections: [
      { id: "failure", label: "Existing Failure", title: "The system rewarded yesterday’s customer.", body: "High-value customers were defined by historical spend. That made the business confident, but late. The system kept rewarding people who would have transacted anyway and missed users whose momentum was actively changing." },
      { id: "reframe", label: "Reframe", title: "Static segmentation became a behavioral economy.", body: "The useful question was not “who is this person?” It was “what is the current behavioral trajectory, and what intervention changes that trajectory?” The problem moved from reporting to decisioning." },
      { id: "architecture", label: "System Design", title: "Signals moved through a decision loop, not a campaign list.", body: "Raw portfolio behavior entered a clustering layer, became propensity and elasticity signals, moved through offer orchestration, and returned as new behavioral evidence." },
      { id: "tradeoff", label: "Trade-off", title: "Aggregate intelligence reduced individual explainability.", body: "The system could prove portfolio lift, but not always explain every single recommendation in human language. That trade-off was accepted only because controls, tests, and cooldown logic made the system governable." },
    ],
    framework: [
      { label: "Behavioral Momentum", text: "Detect acceleration, decay, category migration, and offer sensitivity." },
      { label: "Decision Policy", text: "Map momentum to intervention, constraint, silence, or review." },
      { label: "Economic Control", text: "Prevent overspending, fatigue, and incentive leakage." },
      { label: "Learning Loop", text: "Feed response back into cluster and policy weights." },
    ],
    connected: ["/thinking/static-segmentation-is-broken", "/thinking/dashboards-are-not-decision-systems", "/experiments/behavioral-economy-simulator", "/philosophy/feedback-loops-compound"],
  },
  {
    family: "systems",
    type: "System",
    category: "Decision",
    slug: "rewards-decision-engine",
    title: "Rewards Decision Engine",
    subtitle: "Policy-governed issuance for economic trust.",
    thesis: "A rewards engine that made value issuance deterministic, explainable, and economically bounded.",
    summary: "Fragmented reward rules became a central policy engine with auditability, caps, simulation, and operational trust.",
    path: "/systems/rewards-decision-engine",
    accent: "days",
    accentLabel: "instead of months for policy changes",
    metrics: [
      { value: "single", label: "policy control point for reward issuance" },
      { value: "caps", label: "hard economic limits in the execution path" },
      { value: "audit", label: "explainable decision trail for every issuance" },
    ],
    loop: {
      Signal: "User action, eligibility, merchant, campaign, liability state.",
      Decision: "Approve, reject, simulate, or route under versioned policy.",
      Action: "Issue value with atomic rules and failure reason codes.",
      Outcome: "Trust, liability control, partner confidence, launch speed.",
      Feedback: "Policy simulations and issuance outcomes refine future rules.",
    },
    sections: [
      { id: "failure", label: "Existing Failure", title: "Reward logic lived everywhere and nowhere.", body: "Rules were scattered across legacy systems and code paths. Every new incentive required engineering effort, compliance checks, and fear that a bug could create unbounded liability." },
      { id: "reframe", label: "Reframe", title: "Rewards became an economic policy system.", body: "The central shift was separating policy from execution. The engine needed to behave less like a rule file and more like a central bank for contextual value issuance." },
      { id: "architecture", label: "System Design", title: "Every decision passed through one governed chokepoint.", body: "Incoming events were evaluated against versioned policies, global caps, eligibility rules, and simulation forecasts before issuance could happen." },
      { id: "tradeoff", label: "Trade-off", title: "Centralization increased reliability pressure.", body: "A central decision engine becomes critical infrastructure. Speed and availability had to be designed as part of the product, not as later engineering optimization." },
    ],
    framework: [
      { label: "Policy Layer", text: "Versioned rules, constraints, and economic intent." },
      { label: "Decision Core", text: "Atomic approve, reject, simulate, and explain paths." },
      { label: "Liability Guard", text: "Caps, throttles, budget limits, and blast-radius controls." },
      { label: "Trust Surface", text: "Operator simulation and human-readable reason trails." },
    ],
    connected: ["/thinking/ai-is-not-the-product", "/thinking/dashboards-are-not-decision-systems", "/philosophy/decision-speed-matters", "/experiments/decision-velocity-systems"],
  },
  {
    family: "systems",
    type: "System",
    category: "Signal",
    slug: "brand-cleaner",
    title: "Brand Cleaner",
    subtitle: "Entity intelligence for messy transaction data.",
    thesis: "A signal extraction system that turned noisy merchant strings into usable operational identity.",
    summary: "Regex maintenance gave way to probabilistic entity resolution, confidence routing, and human-in-loop learning.",
    path: "/systems/brand-cleaner",
    accent: "95%+",
    accentLabel: "high-confidence automation target",
    metrics: [
      { value: "95%+", label: "merchant resolution automated at high confidence" },
      { value: "HITL", label: "low-confidence cases routed into review loops" },
      { value: "clean", label: "merchant identity for downstream decisions" },
    ],
    loop: {
      Signal: "Raw merchant string, location, amount, MCC, processor patterns.",
      Decision: "Canonical merchant, confidence score, or review route.",
      Action: "Clean transaction, categorize, reward, or queue for human review.",
      Outcome: "Cleaner downstream intelligence and less manual rule maintenance.",
      Feedback: "Reviewer decisions enrich training data and matching confidence.",
    },
    sections: [
      { id: "failure", label: "Existing Failure", title: "Regex rules could not keep up with reality.", body: "Merchant strings changed constantly. Manual mappings and brittle regex libraries became a maintenance tax on every downstream product that depended on transaction meaning." },
      { id: "reframe", label: "Reframe", title: "String parsing became entity resolution.", body: "The system stopped treating transaction text as a formatting problem and started treating it as a probabilistic identity problem with contextual evidence." },
      { id: "architecture", label: "System Design", title: "Fast heuristics handled certainty; models handled ambiguity.", body: "High-confidence matches moved quickly. Uncertain cases entered an ML-assisted path, and unresolved cases became human review inputs that improved future matching." },
      { id: "tradeoff", label: "Trade-off", title: "A learning system replaced perfect determinism.", body: "The system could make mistakes, but it could also learn. Correction mechanisms and confidence thresholds became more valuable than pretending every match could be deterministic." },
    ],
    framework: [
      { label: "Raw String", text: "Processor noise, store IDs, payment prefixes, inconsistent names." },
      { label: "Context Match", text: "Location, MCC, amount, historical patterns, merchant universe." },
      { label: "Confidence Gate", text: "Auto-clean, hold, or send to review based on confidence." },
      { label: "Review Memory", text: "Human decisions feed back into entity intelligence." },
    ],
    connected: ["/thinking/static-segmentation-is-broken", "/experiments/behavioral-economy-simulator", "/philosophy/systems-over-features"],
  },
  {
    family: "systems",
    type: "System",
    category: "Action",
    slug: "connect-ai-copilot",
    title: "Connect AI Copilot",
    subtitle: "Intent-to-workflow acceleration for implementation teams.",
    thesis: "A copilot that translated business intent into deterministic workflow architecture.",
    summary: "The AI was not the product. Translation was. Human intent became reviewable workflow configuration without handing execution to a hallucinating model.",
    path: "/systems/connect-ai-copilot",
    accent: "minutes",
    accentLabel: "instead of days for workflow drafts",
    metrics: [
      { value: "75%", label: "implementation turnaround reduction target" },
      { value: "draft", label: "AI output stayed reviewable before deployment" },
      { value: "schema", label: "constrained generation prevented invalid execution" },
    ],
    loop: {
      Signal: "Client intent, business rule, integration context, API primitives.",
      Decision: "Which workflow graph satisfies intent within valid constraints?",
      Action: "Generate draft workflow, mappings, and configuration.",
      Outcome: "Implementation speed, lower technical barrier, faster value.",
      Feedback: "Human edits improve prompt, schema, and primitive design.",
    },
    sections: [
      { id: "failure", label: "Existing Failure", title: "Better documentation did not remove configuration burden.", body: "Users knew their business intent, but not the system primitives required to express it. Documentation improved understanding, not execution." },
      { id: "reframe", label: "Reframe", title: "The interface became a compiler.", body: "The product shifted from making users configure workflows manually to translating intent into a valid, reviewable operational graph." },
      { id: "architecture", label: "System Design", title: "The model generated configuration, not production behavior.", body: "The LLM mapped natural language to validated API primitives. Execution remained deterministic; the AI produced drafts that humans inspected and approved." },
      { id: "tradeoff", label: "Trade-off", title: "Flexibility was constrained on purpose.", body: "A freer conversation would have felt magical and failed operationally. The useful product was narrower: safe translation inside a strict schema." },
    ],
    framework: [
      { label: "Intent", text: "Human goal expressed in business language." },
      { label: "Primitive Match", text: "Available APIs, triggers, conditions, and actions." },
      { label: "Workflow Draft", text: "Schema-valid graph ready for review." },
      { label: "Human Control", text: "Review, edit, approve, deploy, and learn." },
    ],
    connected: ["/thinking/ai-is-not-the-product", "/experiments/ai-product-teams", "/experiments/dark-factory", "/philosophy/operational-leverage"],
  },
];

const thinkingDocs = [
  {
    family: "thinking",
    type: "Framework",
    category: "Action",
    slug: "ai-is-not-the-product",
    title: "AI Is Not The Product. Decision Quality Is.",
    subtitle: "A framework for separating model spectacle from operational leverage.",
    thesis: "Enterprise AI becomes valuable when it improves the velocity and quality of consequential decisions.",
    summary: "The model is a component. The product is the decision loop it improves.",
    path: "/thinking/ai-is-not-the-product",
    accent: "decision",
    accentLabel: "not output",
    metrics: [
      { value: "output", label: "summary, draft, classification, generation" },
      { value: "decision", label: "choice, routing, policy, intervention" },
      { value: "feedback", label: "evidence that the choice improved" },
    ],
    loop: {
      Signal: "What state changed?",
      Decision: "What should happen now?",
      Action: "What workflow should move?",
      Outcome: "Did the decision improve the metric?",
      Feedback: "What should the system learn before the next choice?",
    },
    sections: [
      { id: "observation", label: "Observation", title: "Most AI products stop at output.", body: "They summarize, draft, classify, or retrieve. That can be useful, but it often leaves the hardest step untouched: deciding what should happen next." },
      { id: "assumption", label: "Existing Assumption", title: "Better answers are mistaken for better systems.", body: "Teams assume that if a model creates better text, the product has become intelligent. In reality, the human is still carrying the decision burden." },
      { id: "reframe", label: "Reframe", title: "AI should be judged by decision quality.", body: "The system should be evaluated by whether it improves a consequential operational decision: whom to prioritize, what to approve, what to route, what to suppress, and what to learn." },
      { id: "implication", label: "Operational Implication", title: "The product architecture must close the loop.", body: "Useful AI needs signal capture, policy, orchestration, outcomes, and feedback. The model is embedded inside that loop rather than presented as the whole product." },
    ],
    framework: [
      { label: "Output Layer", text: "The model creates a candidate artifact." },
      { label: "Decision Layer", text: "The system turns evidence into a governed choice." },
      { label: "Action Layer", text: "The choice changes workflow, routing, or incentives." },
      { label: "Learning Layer", text: "Outcome evidence improves the next decision." },
    ],
    connected: ["/systems/connect-ai-copilot", "/systems/rewards-decision-engine", "/experiments/ai-product-teams", "/philosophy/operational-leverage"],
  },
  {
    family: "thinking",
    type: "Framework",
    category: "Signal",
    slug: "static-segmentation-is-broken",
    title: "Static Segmentation Is Broken.",
    subtitle: "A behavioral-economy model for customer systems.",
    thesis: "Customers do not live inside static buckets. Their behavior moves with context, friction, incentives, and timing.",
    summary: "A segment describes the past. A behavioral economy describes current momentum and possible intervention.",
    path: "/thinking/static-segmentation-is-broken",
    accent: "momentum",
    accentLabel: "over identity",
    metrics: [
      { value: "past", label: "static segmenting sees trailing history" },
      { value: "now", label: "behavioral systems see trajectory" },
      { value: "next", label: "decision systems choose intervention" },
    ],
    loop: {
      Signal: "Usage, spend, recency, category, elasticity, context.",
      Decision: "Is momentum accelerating, decaying, or shifting?",
      Action: "Intervene, wait, route, withhold, or test.",
      Outcome: "Did the trajectory change?",
      Feedback: "Update behavioral model and intervention policy.",
    },
    sections: [
      { id: "observation", label: "Observation", title: "Segments are often psychologically comforting and operationally late.", body: "A “high value” label can hide behavior that is already decaying. A “low value” label can hide momentum that deserves intervention." },
      { id: "assumption", label: "Existing Assumption", title: "Identity is treated as destiny.", body: "Most segmentation assumes a customer’s historical category is the most useful guide to future action. That collapses behavior into biography." },
      { id: "reframe", label: "Reframe", title: "A portfolio behaves like an economy.", body: "Actors respond to incentives, friction, timing, and social context. The system should model trajectories, not buckets." },
      { id: "implication", label: "Operational Implication", title: "Growth becomes a real-time decision problem.", body: "The architecture shifts from batch reporting to continuous signal evaluation, intervention policy, and feedback." },
    ],
    framework: [
      { label: "Trajectory", text: "Where is behavior moving now?" },
      { label: "Elasticity", text: "What kind of intervention is likely to change it?" },
      { label: "Constraint", text: "What should the system avoid because of cost or fatigue?" },
      { label: "Response", text: "Did the intervention change momentum?" },
    ],
    connected: ["/systems/portfolio-growth-engine", "/systems/brand-cleaner", "/experiments/behavioral-economy-simulator", "/philosophy/feedback-loops-compound"],
  },
  {
    family: "thinking",
    type: "Framework",
    category: "Decision",
    slug: "dashboards-are-not-decision-systems",
    title: "Dashboards Are Not Decision Systems.",
    subtitle: "A critique of visibility without operational movement.",
    thesis: "A dashboard shows what happened. A decision system changes what happens next.",
    summary: "Visibility is not control. Operational leverage begins when metrics connect directly to diagnosis, policy, and action.",
    path: "/thinking/dashboards-are-not-decision-systems",
    accent: "loop",
    accentLabel: "over chart",
    metrics: [
      { value: "see", label: "dashboard visibility" },
      { value: "decide", label: "policy and diagnosis" },
      { value: "move", label: "workflow execution" },
    ],
    loop: {
      Signal: "Anomaly, threshold, drift, bottleneck, behavior change.",
      Decision: "Root cause, priority, policy, intervention.",
      Action: "Route fix, trigger workflow, suppress noise, escalate.",
      Outcome: "Metric movement and operational resolution.",
      Feedback: "Improve detection and next response." ,
    },
    sections: [
      { id: "observation", label: "Observation", title: "Enterprise teams often admire problems in high resolution.", body: "A chart can reveal a metric has dropped, but it does not diagnose why, choose what to do, or execute the response." },
      { id: "assumption", label: "Existing Assumption", title: "Visibility is mistaken for control.", body: "Dashboards transfer cognitive load to humans. The operator becomes the integration layer between data, diagnosis, decision, and action." },
      { id: "reframe", label: "Reframe", title: "The useful unit is not the metric. It is the closed loop.", body: "Metrics should be connected to operational levers. If nothing can move from the data, the system is incomplete." },
      { id: "implication", label: "Operational Implication", title: "Analytics needs write-access to work.", body: "Decision systems detect, diagnose, recommend, route, execute, and learn. They do not stop at showing the red line." },
    ],
    framework: [
      { label: "Detection", text: "Find meaningful change, not just visible variance." },
      { label: "Diagnosis", text: "Locate cause, dependency, and operational owner." },
      { label: "Prescription", text: "Map the problem to a governed response." },
      { label: "Execution", text: "Move the workflow and measure if it worked." },
    ],
    connected: ["/systems/rewards-decision-engine", "/systems/portfolio-growth-engine", "/experiments/decision-velocity-systems", "/philosophy/systems-over-features"],
  },
];

const experimentDocs = [
  {
    family: "experiments",
    type: "Experiment",
    category: "Outcome",
    slug: "dark-factory",
    title: "Dark Factory",
    subtitle: "Can intent move through architecture into implementation autonomously?",
    thesis: "An exploration of product systems where human intent becomes validated architecture, code, and deployment through specialized agents.",
    summary: "Not a fantasy of removing humans. A lab for compressing the path between intent, architecture, verification, and implementation.",
    path: "/experiments/dark-factory",
    accent: "intent",
    accentLabel: "to production",
    metrics: [
      { value: "intent", label: "input as product requirement and constraint" },
      { value: "agents", label: "specialized execution and critique layers" },
      { value: "gates", label: "verification before release" },
    ],
    loop: {
      Signal: "User intent, domain constraints, acceptance criteria.",
      Decision: "Which bounded system should be generated and verified?",
      Action: "Agents create architecture, code, tests, and review loops.",
      Outcome: "Working system with traceable decisions.",
      Feedback: "Failures revise prompts, schemas, and factory gates.",
    },
    sections: [
      { id: "tension", label: "Tension", title: "Software still loses too much meaning in translation.", body: "Intent moves from conversation to documents to tickets to code. Each handoff leaks context and creates avoidable ambiguity." },
      { id: "limitation", label: "Existing Limitation", title: "Most AI coding tools accelerate fragments.", body: "They help write code, but rarely preserve domain boundaries, architectural decisions, verification, and release judgement as a single system." },
      { id: "exploration", label: "Exploration", title: "Treat product development as an orchestrated factory.", body: "Specialized agents parse intent, design bounded contexts, generate systems, attack assumptions, verify behavior, and keep the human at decision gates." },
      { id: "open", label: "Open Question", title: "Where should human judgement interrupt autonomy?", body: "The most important design challenge is not making agents do more. It is deciding which choices require human taste, risk judgement, or business context." },
    ],
    framework: [
      { label: "Intent", text: "Goal, constraint, domain, success criteria." },
      { label: "Blueprint", text: "Bounded contexts, actors, systems, flows." },
      { label: "Forge", text: "Code, tests, infra, UI, observability." },
      { label: "Gate", text: "Critique, security, acceptance, release judgement." },
    ],
    connected: ["/systems/connect-ai-copilot", "/thinking/ai-is-not-the-product", "/experiments/ai-product-teams", "/philosophy/operational-leverage"],
  },
  {
    family: "experiments",
    type: "Experiment",
    category: "Outcome",
    slug: "behavioral-economy-simulator",
    title: "Behavioral Economy Simulator",
    subtitle: "Modeling portfolios as dynamic economies.",
    thesis: "A simulator for understanding how incentives, friction, timing, and fatigue change portfolio behavior.",
    summary: "The question: can teams test behavioral interventions before spending real incentive budgets?",
    path: "/experiments/behavioral-economy-simulator",
    accent: "simulate",
    accentLabel: "before spend",
    metrics: [
      { value: "actors", label: "customers as dynamic agents" },
      { value: "incentives", label: "policy levers with cost and fatigue" },
      { value: "counterfactual", label: "what would happen without intervention?" },
    ],
    loop: {
      Signal: "Historical behavior, intervention records, response curves.",
      Decision: "Which simulated policy improves momentum under constraints?",
      Action: "Run scenario, compare counterfactual, choose intervention.",
      Outcome: "Expected lift, risk, fatigue, and incentive cost.",
      Feedback: "Production outcomes recalibrate the simulator.",
    },
    sections: [
      { id: "tension", label: "Tension", title: "Growth teams spend before they understand behavioral physics.", body: "Incentive programs are often deployed with limited understanding of elasticity, fatigue, substitution, and long-term behavior." },
      { id: "limitation", label: "Existing Limitation", title: "A/B tests are useful but slow and expensive.", body: "They measure real outcomes, but only after budget has been spent and customer behavior has already been affected." },
      { id: "exploration", label: "Exploration", title: "Build a sandbox for portfolio behavior.", body: "The simulator models actors, incentives, constraints, and response curves so teams can compare likely outcomes before live execution." },
      { id: "open", label: "Open Question", title: "Can simulated behavior stay honest?", body: "The model must resist becoming a confident fiction. Production feedback has to continuously humble and recalibrate the simulation." },
    ],
    framework: [
      { label: "Actors", text: "Behavioral states, preferences, momentum, context." },
      { label: "Policies", text: "Offers, nudges, suppressions, thresholds." },
      { label: "Environment", text: "Seasonality, fatigue, budget, market context." },
      { label: "Outcomes", text: "Lift, cost, churn, substitution, learning." },
    ],
    connected: ["/systems/portfolio-growth-engine", "/thinking/static-segmentation-is-broken", "/philosophy/feedback-loops-compound"],
  },
  {
    family: "experiments",
    type: "Experiment",
    category: "Outcome",
    slug: "ai-product-teams",
    title: "AI Product Teams",
    subtitle: "What changes when product work becomes a system of agents?",
    thesis: "A model for product teams where specialized agents handle research, critique, design, build, test, and compliance under human direction.",
    summary: "The experiment is not replacing product judgement. It is testing how product judgement scales when execution layers become agentic.",
    path: "/experiments/ai-product-teams",
    accent: "team",
    accentLabel: "as system",
    metrics: [
      { value: "roles", label: "research, PM, design, code, test, audit" },
      { value: "memory", label: "shared context instead of repeated briefing" },
      { value: "review", label: "human judgement remains the release gate" },
    ],
    loop: {
      Signal: "Customer issue, market context, product objective.",
      Decision: "What should be explored, designed, built, or rejected?",
      Action: "Agents generate research, options, prototypes, tests.",
      Outcome: "Faster learning and execution with clearer traceability.",
      Feedback: "Human critique updates team memory and operating rules.",
    },
    sections: [
      { id: "tension", label: "Tension", title: "Modern product work is coordination-heavy.", body: "Good teams spend enormous time transferring context between roles. The cost is not only time; it is strategic dilution." },
      { id: "limitation", label: "Existing Limitation", title: "Tools accelerate roles but not the team system.", body: "Design tools, code assistants, and research copilots help individuals, but the product team still lacks shared memory and coordinated execution." },
      { id: "exploration", label: "Exploration", title: "Represent the team as an operating system.", body: "Each agent has a job, boundaries, artifacts, critique responsibilities, and handoff rules. The team’s intelligence comes from orchestration, not isolated generation." },
      { id: "open", label: "Open Question", title: "How does taste survive acceleration?", body: "Agentic execution can create volume. The unresolved challenge is preserving taste, judgement, and product courage inside the loop." },
    ],
    framework: [
      { label: "Brief", text: "Intent, problem, constraints, desired decision." },
      { label: "Specialists", text: "Researcher, strategist, designer, engineer, tester, auditor." },
      { label: "Shared Memory", text: "Principles, decisions, evidence, rejected paths." },
      { label: "Human Gate", text: "Taste, risk, priority, and final judgement." },
    ],
    connected: ["/systems/connect-ai-copilot", "/thinking/ai-is-not-the-product", "/experiments/dark-factory", "/about"],
  },
  {
    family: "experiments",
    type: "Experiment",
    category: "Outcome",
    slug: "decision-velocity-systems",
    title: "Decision Velocity Systems",
    subtitle: "Reducing the time between signal and responsible action.",
    thesis: "A frontier exploration of organizations that measure and improve decision latency as an operational metric.",
    summary: "If dashboards made visibility measurable, decision-velocity systems make organizational response measurable.",
    path: "/experiments/decision-velocity-systems",
    accent: "latency",
    accentLabel: "as org metric",
    metrics: [
      { value: "detect", label: "time to notice meaningful change" },
      { value: "decide", label: "time to choose responsible response" },
      { value: "act", label: "time to move the workflow" },
    ],
    loop: {
      Signal: "Operational anomaly, customer risk, process bottleneck.",
      Decision: "Who owns it and which response is justified?",
      Action: "Route, approve, trigger, escalate, or suppress.",
      Outcome: "Resolution time, quality, cost, and learning.",
      Feedback: "Decision latency becomes visible and improvable.",
    },
    sections: [
      { id: "tension", label: "Tension", title: "Organizations often know too late and move slower than their systems require.", body: "The bottleneck is not only data availability. It is the time between signal, ownership, judgement, and action." },
      { id: "limitation", label: "Existing Limitation", title: "Operating rhythms hide decision latency.", body: "Meetings, approvals, escalations, and dashboards create invisible delay. Teams optimize work throughput while ignoring decision throughput." },
      { id: "exploration", label: "Exploration", title: "Instrument the decision path itself.", body: "The system measures detection time, diagnosis time, approval time, action time, and feedback quality, then redesigns the workflow around responsible speed." },
      { id: "open", label: "Open Question", title: "Can speed improve without reducing judgement?", body: "The goal is not reflexive automation. It is faster responsible action with enough context, policy, and human control." },
    ],
    framework: [
      { label: "Detection", text: "How quickly did the system know?" },
      { label: "Ownership", text: "How quickly was responsibility clear?" },
      { label: "Judgement", text: "How quickly was a response justified?" },
      { label: "Movement", text: "How quickly did the workflow change?" },
    ],
    connected: ["/systems/rewards-decision-engine", "/thinking/dashboards-are-not-decision-systems", "/philosophy/decision-speed-matters"],
  },
];

const philosophyDocs = [
  {
    family: "philosophy",
    type: "Principle",
    category: "Feedback",
    slug: "systems-over-features",
    title: "Systems Over Features.",
    subtitle: "Features solve isolated friction. Systems change the loop.",
    thesis: "The most useful product work does not add surfaces; it changes how signals, decisions, actions, and feedback move.",
    summary: "A feature can improve a moment. A system improves the relationship between moments.",
    path: "/philosophy/systems-over-features",
    accent: "loop",
    accentLabel: "over surface",
    metrics: [
      { value: "surface", label: "visible interaction" },
      { value: "structure", label: "underlying decision path" },
      { value: "loop", label: "system that learns" },
    ],
    loop: {
      Signal: "Where is friction or ambiguity showing up?",
      Decision: "Is the problem a surface issue or a system issue?",
      Action: "Change the underlying flow, not just the interface.",
      Outcome: "The user experiences clarity because the system is clearer.",
      Feedback: "The product becomes easier to evolve." ,
    },
    sections: [
      { id: "principle", label: "Principle", title: "A product is not the sum of its features.", body: "The product is the behavior of the whole system: what it notices, what it decides, what it makes easier, and what it learns." },
      { id: "meaning", label: "Operational Meaning", title: "Feature thinking optimizes the visible symptom.", body: "System thinking asks why the symptom exists, which decisions create it, and how the feedback loop should change." },
      { id: "implication", label: "Implication", title: "Good design often removes the need for more UI.", body: "When the system understands context better, the user needs fewer explanations, fewer choices, and fewer manual steps." },
    ],
    framework: [
      { label: "Symptom", text: "What users visibly struggle with." },
      { label: "Cause", text: "The broken signal, policy, or workflow behind it." },
      { label: "Loop", text: "The system behavior that must change." },
      { label: "Surface", text: "The minimal interface needed after the loop improves." },
    ],
    connected: ["/thinking/dashboards-are-not-decision-systems", "/systems/brand-cleaner", "/about"],
  },
  {
    family: "philosophy",
    type: "Principle",
    category: "Feedback",
    slug: "decision-speed-matters",
    title: "Decision Speed Matters.",
    subtitle: "The cost of a slow decision is often invisible until the system has drifted.",
    thesis: "Speed is not recklessness. It is the system’s ability to move responsibly before ambiguity compounds.",
    summary: "Decision latency deserves to be designed, measured, and improved.",
    path: "/philosophy/decision-speed-matters",
    accent: "latency",
    accentLabel: "with judgement",
    metrics: [
      { value: "notice", label: "time to detect change" },
      { value: "own", label: "time to assign responsibility" },
      { value: "move", label: "time to act responsibly" },
    ],
    loop: {
      Signal: "A meaningful condition changes.",
      Decision: "The right owner chooses a response with enough context.",
      Action: "The workflow moves without unnecessary ceremony.",
      Outcome: "Risk, cost, or opportunity loss is reduced.",
      Feedback: "The system learns where delay entered the path.",
    },
    sections: [
      { id: "principle", label: "Principle", title: "Slow decisions create silent operational debt.", body: "Every delay gives friction more time to compound. The cost is often not visible in one metric, but it appears in missed windows, fatigue, churn, and coordination drag." },
      { id: "meaning", label: "Operational Meaning", title: "Responsible speed needs structure.", body: "Decision speed improves when ownership, policy, context, and action paths are already designed into the system." },
      { id: "implication", label: "Implication", title: "The fastest useful decision is the one the system prepared for.", body: "Good systems reduce the number of fresh judgements required during moments of ambiguity." },
    ],
    framework: [
      { label: "Detect", text: "Recognize meaningful change." },
      { label: "Frame", text: "Give the decision enough context." },
      { label: "Own", text: "Clarify who can decide." },
      { label: "Move", text: "Execute and learn." },
    ],
    connected: ["/systems/rewards-decision-engine", "/experiments/decision-velocity-systems", "/thinking/ai-is-not-the-product"],
  },
  {
    family: "philosophy",
    type: "Principle",
    category: "Feedback",
    slug: "feedback-loops-compound",
    title: "Feedback Loops Compound.",
    subtitle: "A system becomes intelligent when outcomes change the next decision.",
    thesis: "The difference between automation and intelligence is whether the system learns from what happened.",
    summary: "Feedback is the memory of a system. Without it, every action starts from zero.",
    path: "/philosophy/feedback-loops-compound",
    accent: "memory",
    accentLabel: "of the system",
    metrics: [
      { value: "act", label: "intervention happens" },
      { value: "measure", label: "outcome becomes evidence" },
      { value: "adjust", label: "next decision improves" },
    ],
    loop: {
      Signal: "The system receives current evidence.",
      Decision: "It chooses based on previous memory and policy.",
      Action: "The decision changes the environment.",
      Outcome: "Reality responds.",
      Feedback: "The response updates memory, constraint, and strategy.",
    },
    sections: [
      { id: "principle", label: "Principle", title: "Feedback is where systems become cumulative.", body: "A system that acts without learning is just a machine repeating instructions. A system that learns from outcomes compounds." },
      { id: "meaning", label: "Operational Meaning", title: "Every action should create useful evidence.", body: "If the result of an intervention does not improve future intervention, the loop is broken." },
      { id: "implication", label: "Implication", title: "Measurement is not reporting; it is memory design.", body: "The useful question is not only what happened, but what the system now knows that it did not know before." },
    ],
    framework: [
      { label: "Decision", text: "A choice is made under constraint." },
      { label: "Trace", text: "The system records why it chose." },
      { label: "Outcome", text: "The world responds with evidence." },
      { label: "Memory", text: "Future choices inherit the learning." },
    ],
    connected: ["/systems/portfolio-growth-engine", "/experiments/behavioral-economy-simulator", "/thinking/static-segmentation-is-broken"],
  },
  {
    family: "philosophy",
    type: "Principle",
    category: "Feedback",
    slug: "operational-leverage",
    title: "Operational Leverage Is Underrated.",
    subtitle: "The best systems make small teams capable of larger, clearer action.",
    thesis: "Leverage is not doing more work faster. It is changing the structure so better work moves with less coordination drag.",
    summary: "Automation is a tactic. Operational leverage is a system property.",
    path: "/philosophy/operational-leverage",
    accent: "leverage",
    accentLabel: "as structure",
    metrics: [
      { value: "less", label: "manual coordination" },
      { value: "more", label: "decision quality" },
      { value: "clearer", label: "system ownership" },
    ],
    loop: {
      Signal: "Where does repeated coordination hide decision friction?",
      Decision: "Which structure removes the need for repeated manual judgement?",
      Action: "Build primitives, policies, workflows, and review gates.",
      Outcome: "Teams move faster without becoming more chaotic.",
      Feedback: "The operating system absorbs learning and reduces future load.",
    },
    sections: [
      { id: "principle", label: "Principle", title: "Leverage comes from structure, not hustle.", body: "A team does not become meaningfully faster by typing faster. It becomes faster when decisions, primitives, and workflows are designed to remove repeated friction." },
      { id: "meaning", label: "Operational Meaning", title: "AI is useful when it increases leverage.", body: "The value of AI is not that it can generate more artifacts. It is that it can help teams translate intent into governed action with fewer brittle handoffs." },
      { id: "implication", label: "Implication", title: "The strongest products reshape operations.", body: "A product with operational leverage changes how work moves, how decisions get made, and how the organization learns." },
    ],
    framework: [
      { label: "Primitive", text: "Reusable unit of execution." },
      { label: "Policy", text: "Decision rule that reduces repeated judgement." },
      { label: "Workflow", text: "Movement path for action." },
      { label: "Gate", text: "Human review where judgement matters." },
    ],
    connected: ["/systems/connect-ai-copilot", "/experiments/dark-factory", "/experiments/ai-product-teams", "/thinking/ai-is-not-the-product"],
  },
];

const collections = {
  systems: systemsDocs,
  thinking: thinkingDocs,
  experiments: experimentDocs,
  philosophy: philosophyDocs,
};

const pages = {
  systems: {
    key: "systems",
    path: "/systems",
    eyebrow: "Systems / Proof Layer",
    spine: "Decision",
    title: "Where frameworks become operational proof.",
    summary: "Systems are the credibility layer: real decision loops with context, constraints, trade-offs, measurable outcomes, and learning.",
    density: "structured proof",
    visual: "systems",
    icon: Network,
    documents: systemsDocs,
    sections: [
      { id: "map", label: "Map", title: "A system is not a project.", body: "Each system is presented as a loop: signal, decision, action, outcome, and feedback. The emphasis is the operational architecture, not a feature showcase." },
      { id: "proof", label: "Proof", title: "Metrics support the story; they do not replace it.", body: "Data points appear where they explain why the system mattered: decision speed, cost control, behavioral lift, implementation compression, and learning." },
      { id: "navigation", label: "Navigation", title: "Every system opens outward.", body: "Case studies connect to frameworks, experiments, and principles so the reader sees both the built artifact and the worldview underneath it." },
    ],
    connected: ["/thinking/dashboards-are-not-decision-systems", "/experiments/decision-velocity-systems", "/philosophy/systems-over-features"],
  },
  thinking: {
    key: "thinking",
    path: "/thinking",
    eyebrow: "Thinking / Framework Archive",
    spine: "Action",
    title: "Frameworks that change what the system does next.",
    summary: "Thinking is not a blog feed. It is a curated archive of reframes that explain how operational systems should be understood and built.",
    density: "editorial frameworks",
    visual: "thinking",
    icon: BookOpen,
    documents: thinkingDocs,
    sections: [
      { id: "map", label: "Map", title: "Ideas move through a fixed rhythm.", body: "Each framework moves from observation to assumption, breakdown, reframe, implication, and future direction." },
      { id: "grounding", label: "Grounding", title: "The ideas stay attached to systems.", body: "Every framework connects to a real system or frontier experiment, keeping the thinking operational rather than abstract." },
      { id: "navigation", label: "Navigation", title: "The archive should feel accumulated, not published.", body: "The page behaves like an intellectual workbench: frameworks, margin notes, relationships, and reusable mental models." },
    ],
    connected: ["/systems/connect-ai-copilot", "/experiments/ai-product-teams", "/philosophy/operational-leverage"],
  },
  experiments: {
    key: "experiments",
    path: "/experiments",
    eyebrow: "Experiments / Frontier Lab",
    spine: "Outcome",
    title: "Where unresolved tensions become testable systems.",
    summary: "Experiments are serious explorations of operational futures: speculative enough to stretch the work, grounded enough to remain useful.",
    density: "fragmented lab",
    visual: "experiments",
    icon: FlaskConical,
    documents: experimentDocs,
    sections: [
      { id: "map", label: "Map", title: "The lab starts from tension.", body: "Every experiment begins with an operational or conceptual tension from real work, not novelty for its own sake." },
      { id: "openness", label: "Openness", title: "Unfinished is allowed, but not vague.", body: "The page preserves open questions while still presenting clear hypotheses, possible shifts, and constraints." },
      { id: "navigation", label: "Navigation", title: "Experiments point both backward and forward.", body: "Each one connects to systems that inspired it and frameworks that could emerge from it." },
    ],
    connected: ["/systems/portfolio-growth-engine", "/thinking/static-segmentation-is-broken", "/philosophy/feedback-loops-compound"],
  },
  philosophy: {
    key: "philosophy",
    path: "/philosophy",
    eyebrow: "Philosophy / Worldview",
    spine: "Feedback",
    title: "The beliefs that keep the system coherent.",
    summary: "Philosophy is the distilled layer: short, earned principles that explain why the systems are designed the way they are.",
    density: "sparse belief",
    visual: "philosophy",
    icon: Compass,
    documents: philosophyDocs,
    sections: [
      { id: "map", label: "Map", title: "Principles are operating beliefs.", body: "They are not quotes or motivational fragments. They are compact rules that influence product, AI, workflow, and decision-system design." },
      { id: "pace", label: "Pace", title: "This section should slow the reader down.", body: "The density is intentionally lower: fewer words, more space, more resonance, and stronger connections back to lived systems." },
      { id: "navigation", label: "Navigation", title: "Beliefs should prove themselves elsewhere.", body: "Every principle connects to systems, frameworks, or experiments where the belief becomes operational." },
    ],
    connected: ["/systems/rewards-decision-engine", "/thinking/ai-is-not-the-product", "/about"],
  },
};



function useRoute() {
  const location = useLocation();
  const [path, hash = ""] = `${location.pathname}${location.hash}`.split("#");
  return { key: `${location.pathname}${location.hash}`, path: path || "/", hash: hash ? `#${hash}` : "" };
}

function Texture({ strong = false }) {
  return (
    <div
      aria-hidden="true"
      className={strong ? "pointer-events-none absolute inset-0 opacity-[0.15]" : "pointer-events-none absolute inset-0 opacity-[0.08]"}
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(26,26,24,0.20) 0.7px, transparent 0)",
        backgroundSize: "16px 16px",
      }}
    />
  );
}

function MaterialLight({ embedded = false }) {
  return (
    <div
      aria-hidden="true"
      className={embedded ? "pointer-events-none absolute inset-0 opacity-[0.18]" : "pointer-events-none absolute inset-0 opacity-[0.24]"}
      style={{
        background: embedded
          ? "linear-gradient(180deg, rgba(26,26,24,0.035), transparent 18%, transparent 74%, rgba(255,255,255,0.24))"
          : "linear-gradient(135deg, rgba(255,255,255,0.56), transparent 32%), linear-gradient(180deg, transparent, rgba(26,26,24,0.035))",
      }}
    />
  );
}

function Surface({ children, className = "", strong = false }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.8rem] border border-[#B9AD9B]/48 bg-[#F1EBDD]/68 shadow-[0_28px_100px_rgba(26,26,24,0.055),inset_0_1px_0_rgba(255,255,255,0.52)] ${className}`}>
      <Texture strong={strong} />
      <MaterialLight embedded />
      <div className="relative">{children}</div>
    </div>
  );
}

function getLinkTitle(path) {
  if (path === "/about") return "About";
  const item = Object.values(collections).flat().find((document) => document.path === path);
  if (item) return item.title;
  const page = Object.values(pages).find((candidate) => candidate.path === path);
  return page?.title || path;
}

function EcosystemStrip({ active }) {
  return (
    <div className="relative grid gap-2 rounded-[1.4rem] border border-[#B9AD9B]/52 bg-[#FBF8F0]/64 p-3 shadow-[0_18px_70px_rgba(26,26,24,0.04)] md:grid-cols-5">
      {ecosystemPath.map((item, index) => {
        const isActive = item.page.toLowerCase() === active;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`group relative overflow-hidden rounded-[1rem] px-4 py-4 transition ${isActive ? "bg-[#2F4D72] text-[#F7F4ED] shadow-[0_14px_38px_rgba(47,77,114,0.2)]" : "bg-[#F1EBDD]/46 text-[#4F4A43] hover:bg-[#EFE9DD]/90 hover:text-[#171513]"}`}
          >
            <div className="text-[9px] uppercase tracking-[0.24em] opacity-75">{String(index + 1).padStart(2, "0")} / {item.label}</div>
            <div className="mt-2 text-sm font-semibold">{item.page}</div>
          </Link>
        );
      })}
    </div>
  );
}

function PageVisual({ variant, title }) {
  const isSystems = variant === "systems";
  const isThinking = variant === "thinking";
  const isExperiments = variant === "experiments";
  const isPhilosophy = variant === "philosophy";

  return (
    <Surface className="min-h-[26rem] p-0" strong>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(159,146,126,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(159,146,126,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative h-[26rem] overflow-hidden">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 430" fill="none">
          {isSystems && (
            <>
              {[64, 128, 192, 256, 320].map((y, index) => (
                <path key={y} d={`M70 ${y} C230 ${y - 40}, 300 216, 350 216`} stroke="#171513" strokeOpacity="0.18" strokeWidth="1.2" />
              ))}
              <path d="M350 216 C450 210 520 150 626 108" stroke="#2F4D72" strokeOpacity="0.72" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="350" cy="216" r="15" fill="#FBF8F0" stroke="#2F4D72" strokeWidth="2" />
              <circle cx="350" cy="216" r="62" stroke="#2F4D72" strokeOpacity="0.18" />
            </>
          )}
          {isThinking && (
            <>
              {[0, 1, 2].map((index) => (
                <rect key={index} x={120 + index * 56} y={92 + index * 42} width="330" height="82" rx="18" fill="#FBF8F0" stroke="#B9AD9B" strokeOpacity="0.58" />
              ))}
              <path d="M188 128 H404" stroke="#171513" strokeOpacity="0.2" strokeWidth="4" strokeLinecap="round" />
              <path d="M244 184 H468" stroke="#2F4D72" strokeOpacity="0.58" strokeWidth="4" strokeLinecap="round" />
              <path d="M298 240 H512" stroke="#171513" strokeOpacity="0.2" strokeWidth="4" strokeLinecap="round" />
              <path d="M478 126 C550 150 570 210 540 278" stroke="#2F4D72" strokeOpacity="0.38" strokeDasharray="5 8" />
            </>
          )}
          {isExperiments && (
            <>
              {[80, 230, 430, 560].map((x, index) => (
                <rect key={x} x={x} y={80 + (index % 2) * 86} width="96" height="96" rx="20" fill="#FBF8F0" stroke={index === 2 ? "#2F4D72" : "#B9AD9B"} strokeOpacity={index === 2 ? "0.72" : "0.58"} strokeWidth={index === 2 ? "2" : "1"} />
              ))}
              <path d="M176 128 C240 100 300 236 430 128 S566 250 608 174" stroke="#2F4D72" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="7 9" />
              <circle cx="430" cy="128" r="7" fill="#2F4D72" />
              <circle cx="608" cy="174" r="5" fill="#171513" fillOpacity="0.48" />
            </>
          )}
          {isPhilosophy && (
            <>
              <path d="M210 214 A140 116 0 1 1 490 214 A140 116 0 1 1 210 214" stroke="#171513" strokeOpacity="0.18" strokeWidth="1.4" />
              <path d="M490 214 A140 116 0 0 1 210 214" stroke="#2F4D72" strokeOpacity="0.7" strokeWidth="2.4" strokeLinecap="round" />
              {[230, 276, 322, 368, 414].map((x, index) => (
                <path key={x} d={`M${x} ${130 + index * 32} H${470 - index * 18}`} stroke={index === 2 ? "#2F4D72" : "#171513"} strokeOpacity={index === 2 ? "0.58" : "0.18"} strokeWidth="3" strokeLinecap="round" />
              ))}
            </>
          )}
        </svg>
        <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-6">
          <div>
            <div className="text-[9px] uppercase tracking-[0.26em] text-[#4F4A43]">visual field</div>
            <div className="mt-3 max-w-[20rem] text-2xl font-semibold leading-none tracking-[-0.04em] text-[#171513]">{title}</div>
          </div>
          <div className="hidden rounded-full border border-[#2F4D72]/30 bg-[#FBF8F0]/70 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#2F4D72] md:block">
            {variant}
          </div>
        </div>
      </div>
    </Surface>
  );
}

function MetricsRow({ metrics }) {
  if (!metrics?.length) return null;

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`} className="rounded-[1.2rem] border border-[#B9AD9B]/42 bg-[#FBF8F0]/58 p-5 shadow-[0_12px_38px_rgba(26,26,24,0.035)]">
          <div className="text-3xl font-semibold tracking-[-0.05em] text-[#2F4D72]">{metric.value}</div>
          <div className="mt-3 text-xs leading-5 text-[#4F4A43]">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}

function LoopRail({ loop }) {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {loopStages.map((stage, index) => (
        <div key={stage} className="relative rounded-[1.2rem] border border-[#B9AD9B]/46 bg-[#FBF8F0]/60 p-4 shadow-[0_12px_40px_rgba(26,26,24,0.03)]">
          <div className="flex items-center justify-between gap-3">
            <div className={`grid h-7 w-7 place-items-center rounded-full border text-[9px] font-semibold ${stage === "Decision" ? "border-[#2F4D72] bg-[#2F4D72] text-[#F7F4ED]" : "border-[#B9AD9B]/70 bg-[#EFE9DD]/70 text-[#4F4A43]"}`}>
              {index + 1}
            </div>
            <div className="text-[9px] uppercase tracking-[0.22em] text-[#4F4A43]">{stage}</div>
          </div>
          <p className="mt-5 text-sm leading-6 text-[#332F2A]">{loop[stage]}</p>
        </div>
      ))}
    </div>
  );
}

function FrameworkCanvas({ items, title = "Framework" }) {
  return (
    <Surface className="p-6 md:p-8" strong>
      <div className="mb-7 flex items-center justify-between gap-6">
        <div className="text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">{title}</div>
        <Braces size={16} className="text-[#2F4D72]" strokeWidth={1.5} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={item.label} className={`rounded-[1.2rem] p-5 ${index === 1 ? "bg-[#2F4D72] text-[#F7F4ED] shadow-[0_18px_50px_rgba(47,77,114,0.18)]" : "bg-[#FBF8F0]/62 text-[#171513] shadow-[inset_0_1px_0_rgba(255,255,255,0.44)]"}`}>
            <div className={`text-[9px] uppercase tracking-[0.22em] ${index === 1 ? "text-[#DCE7F0]" : "text-[#2F4D72]"}`}>{String(index + 1).padStart(2, "0")}</div>
            <div className="mt-4 text-xl font-semibold tracking-[-0.03em]">{item.label}</div>
            <p className={`mt-3 text-sm leading-6 ${index === 1 ? "text-[#F7F4ED]/82" : "text-[#4F4A43]"}`}>{item.text}</p>
          </div>
        ))}
      </div>
    </Surface>
  );
}

function SectionStack({ sections }) {
  return (
    <div className="grid gap-5">
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <div className="grid gap-5 rounded-[1.4rem] border border-[#B9AD9B]/36 bg-[#FBF8F0]/50 p-6 shadow-[0_18px_58px_rgba(26,26,24,0.03)] md:grid-cols-[9rem_1fr] md:p-7">
            <div>
              <div className="text-[9px] uppercase tracking-[0.24em] text-[#2F4D72]">{String(index + 1).padStart(2, "0")}</div>
              <div className="mt-3 text-[10px] uppercase leading-5 tracking-[0.22em] text-[#4F4A43]">{section.label}</div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#171513]">{section.title}</h2>
              <p className="mt-5 text-base leading-8 text-[#332F2A] md:text-lg">{section.body}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function RelatedLinks({ paths }) {
  if (!paths?.length) return null;

  return (
    <div id="related" className="scroll-mt-28">
      <div className="mb-6 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Connected Reading</div>
      <div className="grid gap-3 md:grid-cols-2">
        {paths.map((path) => (
          <Link key={path} to={path} className="group rounded-[1.2rem] border border-[#B9AD9B]/38 bg-[#F1EBDD]/56 p-5 shadow-[0_14px_44px_rgba(26,26,24,0.028)] transition hover:bg-[#EFE9DD]/88">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="text-[9px] uppercase tracking-[0.22em] text-[#2F4D72]">related</div>
                <div className="mt-3 text-lg font-semibold leading-6 tracking-[-0.02em] text-[#171513] transition group-hover:text-[#2F4D72]">{getLinkTitle(path)}</div>
              </div>
              <ArrowUpRight size={15} className="mt-1 shrink-0 text-[#4F4A43] transition group-hover:text-[#2F4D72]" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function LocalNavigation({ sections, documents, connected, activePath }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-5">
        <Surface className="p-5">
          <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Within Page</div>
          <div className="grid gap-2">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="rounded-full px-3 py-2 text-xs text-[#4F4A43] transition hover:bg-[#FBF8F0]/72 hover:text-[#2F4D72]">
                {section.label}
              </a>
            ))}
          </div>
        </Surface>
        {documents?.length ? (
          <Surface className="p-5">
            <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Documents</div>
            <div className="grid gap-2">
              {documents.map((document) => (
                <Link key={document.path} to={document.path} className={`rounded-[0.9rem] px-3 py-3 text-xs leading-5 transition ${document.path === activePath ? "bg-[#2F4D72] text-[#F7F4ED]" : "text-[#4F4A43] hover:bg-[#FBF8F0]/72 hover:text-[#171513]"}`}>
                  {document.title || document.label}
                </Link>
              ))}
            </div>
          </Surface>
        ) : null}
        {connected?.length ? (
          <Surface className="p-5">
            <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Next Links</div>
            <div className="grid gap-2">
              {connected.slice(0, 4).map((path) => (
                <Link key={path} to={path} className="rounded-[0.9rem] px-3 py-3 text-xs leading-5 text-[#4F4A43] transition hover:bg-[#FBF8F0]/72 hover:text-[#2F4D72]">
                  {getLinkTitle(path)}
                </Link>
              ))}
            </div>
          </Surface>
        ) : null}
      </div>
    </aside>
  );
}

function DocumentCard({ document, index }) {
  return (
    <Link to={document.path} className={`group relative overflow-hidden rounded-[1.7rem] border border-[#B9AD9B]/44 bg-[#F1EBDD]/62 p-6 shadow-[0_24px_90px_rgba(26,26,24,0.045),inset_0_1px_0_rgba(255,255,255,0.48)] transition hover:-translate-y-1 hover:bg-[#EFE9DD]/86 hover:shadow-[0_34px_110px_rgba(26,26,24,0.07)] ${index % 3 === 0 ? "md:col-span-2" : ""}`}>
      <Texture />
      <div className="relative">
        <div className="mb-8 flex items-start justify-between gap-5">
          <div>
            <div className="text-[9px] uppercase tracking-[0.24em] text-[#2F4D72]">{document.type} / {document.category}</div>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1] tracking-[-0.045em] text-[#171513] md:text-4xl">{document.title}</h2>
          </div>
          <ArrowUpRight size={18} className="shrink-0 text-[#4F4A43] transition group-hover:text-[#2F4D72]" />
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#332F2A]">{document.summary}</p>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {document.metrics.slice(0, 3).map((metric) => (
            <div key={`${document.slug}-${metric.value}`} className="rounded-[1rem] bg-[#FBF8F0]/58 p-4">
              <div className="text-2xl font-semibold tracking-[-0.045em] text-[#2F4D72]">{metric.value}</div>
              <div className="mt-2 text-[11px] leading-4 text-[#4F4A43]">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

function EcosystemPage({ page }) {
  const Icon = page.icon;
  const pageSections = [
    ...page.sections,
    { id: "documents", label: "Documents", title: "Documents", body: "" },
    { id: "connections", label: "Connections", title: "Connections", body: "" },
  ];

  return (
    <div className="relative z-10">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <EcosystemStrip active={page.key} />
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2F4D72]">
              <span className="h-px w-10 bg-[#2F4D72]" /> {page.eyebrow}
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#171513] md:text-7xl">
              {page.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#332F2A]">
              {page.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2F4D72]/28 bg-[#FBF8F0]/68 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F4D72]">
                <Icon size={14} strokeWidth={1.7} /> {page.spine}
              </span>
              <span className="rounded-full bg-[#EFE9DD]/78 px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-[#4F4A43]">{page.density}</span>
            </div>
          </div>
          <PageVisual variant={page.visual} title={page.spine} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:px-10 lg:grid-cols-[15rem_1fr]">
        <LocalNavigation sections={pageSections} documents={page.documents} connected={page.connected} />
        <div className="min-w-0 space-y-20">
          <SectionStack sections={page.sections} />
          <section id="documents" className="scroll-mt-28">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Documents</div>
                <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.05em] text-[#171513]">Enter through any node.</h2>
              </div>
              <Waypoints className="hidden text-[#2F4D72] md:block" size={22} strokeWidth={1.5} />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {page.documents.map((document, index) => (
                <DocumentCard key={document.slug} document={document} index={index} />
              ))}
            </div>
          </section>
          <section id="connections" className="scroll-mt-28">
            <RelatedLinks paths={page.connected} />
          </section>
        </div>
      </section>
    </div>
  );
}

function DetailHeroVisual({ document }) {
  return (
    <Surface className="p-6 md:p-8" strong>
      <div className="mb-8 flex items-center justify-between gap-6">
        <div className="text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Operating Spine</div>
        <div className="rounded-full bg-[#2F4D72] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#F7F4ED]">{document.accent}</div>
      </div>
      <div className="relative min-h-[18rem] overflow-hidden rounded-[1.4rem] bg-[#FBF8F0]/50">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.44]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(159,146,126,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(159,146,126,0.12) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 780 330" fill="none">
          <path d="M70 168 C190 84 270 246 390 168 C512 88 590 246 710 168" stroke="#171513" strokeOpacity="0.14" strokeWidth="9" strokeLinecap="round" />
          <path d="M70 168 C190 84 270 246 390 168 C512 88 590 246 710 168" stroke="#2F4D72" strokeOpacity="0.62" strokeWidth="2" strokeDasharray="7 9" strokeLinecap="round" />
          {loopStages.map((stage, index) => {
            const x = 70 + index * 160;
            const y = index % 2 === 0 ? 168 : index === 1 ? 112 : 224;
            return (
              <g key={stage}>
                <circle cx={x} cy={y} r={stage === document.category ? 18 : 12} fill={stage === document.category ? "#2F4D72" : "#FBF8F0"} stroke={stage === document.category ? "#2F4D72" : "#B9AD9B"} strokeWidth="2" />
                <text x={x} y={y + 42} textAnchor="middle" fill={stage === document.category ? "#2F4D72" : "#4F4A43"} fontSize="10" letterSpacing="2">{stage.toUpperCase()}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-6 text-sm leading-6 text-[#4F4A43]">{document.accentLabel}</div>
    </Surface>
  );
}

function DocumentDetail({ document }) {
  const siblingDocs = collections[document.family];
  const sections = [
    { id: "spine", label: "Spine" },
    { id: "evidence", label: "Evidence" },
    { id: "framework", label: "Framework" },
    ...document.sections.map(({ id, label }) => ({ id, label })),
    { id: "related", label: "Related" },
  ];

  return (
    <article className="relative z-10">
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 md:px-10 md:pb-18 md:pt-24">
        <Link to={`/${document.family}`} className="mb-12 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#4F4A43] transition hover:text-[#2F4D72]">
          <ArrowRight className="rotate-180" size={14} /> {document.family}
        </Link>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2F4D72]">
              <span className="h-px w-10 bg-[#2F4D72]" /> {document.type} / {document.category}
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#171513] md:text-7xl">
              {document.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#332F2A]">{document.thesis}</p>
          </div>
          <DetailHeroVisual document={document} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-28 md:px-10 lg:grid-cols-[15rem_1fr]">
        <LocalNavigation sections={sections} documents={siblingDocs} connected={document.connected} activePath={document.path} />
        <div className="min-w-0 space-y-20">
          <section id="spine" className="scroll-mt-28 space-y-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Signal → Decision → Action → Outcome → Feedback</div>
              <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.05em] text-[#171513]">The document as a loop.</h2>
            </div>
            <LoopRail loop={document.loop} />
          </section>
          <section id="evidence" className="scroll-mt-28 space-y-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Evidence</div>
              <h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.05em] text-[#171513]">Data points with context.</h2>
            </div>
            <MetricsRow metrics={document.metrics} />
          </section>
          <section id="framework" className="scroll-mt-28">
            <FrameworkCanvas items={document.framework} title={`${document.type} framework`} />
          </section>
          <SectionStack sections={document.sections} />
          <RelatedLinks paths={document.connected} />
        </div>
      </section>
    </article>
  );
}

function AboutPage() {
  const [showThinking, setShowThinking] = React.useState(false);
  const impactMetrics = [
    { value: "6+", label: "years across product and engineering" },
    { value: "₹1.2Cr", label: "projected implementation cost savings" },
    { value: "5x", label: "transaction frequency improvement" },
    { value: "75%", label: "implementation turnaround reduction" },
  ];
  const experience = [
    {
      period: "2019 — Present",
      role: "Senior Product Manager",
      company: "Goals101, an M2P Group company",
      context: "Microsoft & Google Startup Accelerator alumni",
      focus: "AI/ML-driven systems, data products, behavioral growth, transaction intelligence, B2B analytics, and enterprise implementation copilots.",
      proof: [
        "Built a primitives + tenets framework for AI-assisted product development, reducing timelines from roughly 6 months to 2 weeks.",
        "Redesigned static segmentation into a behavioral growth system using clustering and recommendation models.",
        "Launched a 0→1 B2B analytics product that generated ₹6M+ in first-year revenue.",
      ],
    },
    {
      period: "2017 — 2019",
      role: "Software Developer",
      company: "Simplifii Labs and SoftechPedia",
      context: "Engineering foundation before product leadership",
      focus: "Scalable web applications, system design, delivery efficiency, and engineering collaboration.",
      proof: [
        "Built production web applications and improved delivery turnaround by roughly 30%.",
        "Developed the engineering fluency that now shapes product architecture, trade-offs, and implementation realism.",
      ],
    },
  ];
  const education = [
    "B.Tech, Computer Science — Maharaja Agrasen College, Delhi University",
    "Senior secondary — 91.2%",
    "Secondary school — 90.7%",
  ];
  const capabilities = [
    "AI/ML Product Management",
    "Decision Systems",
    "Human-in-the-Loop Workflows",
    "Data Modeling & ETL",
    "0→1 Product Strategy",
    "Platform Products",
    "B2B SaaS",
    "Explainability & Auditability",
  ];
  const thinkingSteps = [
    { label: "Observe", text: "Find the messy signal inside behavior, data, workflow friction, or organizational delay." },
    { label: "Reframe", text: "Convert the problem from surface symptom into a system-level operating question." },
    { label: "Architect", text: "Design the decision loop: signal, policy, action, outcome, and feedback." },
    { label: "Operationalize", text: "Turn the model into a product that teams can trust, govern, and actually use." },
    { label: "Learn", text: "Let outcomes sharpen the next decision instead of treating launch as the finish line." },
  ];

  const revealThinking = () => {
    setShowThinking(true);
    window.requestAnimationFrame(() => {
      document.getElementById("how-i-think")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="relative z-10">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-10 md:pt-12 lg:pb-28">
        <div className="grid gap-10 min-[920px]:grid-cols-[0.42fr_0.58fr] min-[920px]:items-start lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <div className="min-[920px]:sticky min-[920px]:top-24 min-[920px]:h-[calc(100svh-6.5rem)] min-[920px]:self-start">
            <div className="relative h-[34rem] overflow-hidden rounded-[2.2rem] border border-[#B9AD9B]/44 bg-[#171513] shadow-[0_38px_130px_rgba(26,26,24,0.16)] min-[920px]:h-full">
              <img src={profileImage} alt="Vipul Deora" className="h-full w-full object-cover object-[50%_36%] opacity-95" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,21,19,0)_42%,rgba(23,21,19,0.72)_100%)]" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#F7F4ED]/88 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#171513]">New Delhi</span>
                <span className="rounded-full bg-[#2F4D72] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F7F4ED]">Product + Systems</span>
              </div>
            </div>
          </div>

          <div className="space-y-14 lg:space-y-16 lg:pt-4">
            <div className="flex min-h-[34rem] flex-col justify-center min-[920px]:min-h-[calc(100svh-6.5rem)]">
              <h1 className="max-w-4xl text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#171513] md:text-5xl lg:text-6xl xl:text-[4.55rem]">
                Product manager for AI-driven decision systems and data products.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#332F2A] lg:text-xl lg:leading-9">
                I have spent 6+ years moving between engineering depth and product judgment: building AI/ML systems, behavioral growth engines, transaction intelligence layers, and enterprise workflows that turn ambiguity into operational movement.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="mailto:vipuldeora95@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-[#2F4D72] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F7F4ED] shadow-[0_14px_34px_rgba(47,77,114,0.18)] transition hover:bg-[#203650]">
                  <Mail size={14} strokeWidth={1.7} /> Email
                </a>
                <a href="https://linkedin.com/in/vipul-deora-a80394145" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#B9AD9B]/58 bg-[#FBF8F0]/62 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4F4A43] transition hover:border-[#2F4D72]/42 hover:text-[#2F4D72]">
                  LinkedIn <ArrowUpRight size={14} strokeWidth={1.7} />
                </a>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#EFE9DD]/72 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-[#4F4A43]">
                  <MapPin size={14} strokeWidth={1.7} /> New Delhi, India
                </span>
              </div>
            </div>

            <div id="experience" className="relative pb-4">
              <div className="absolute bottom-3 left-[0.45rem] top-3 hidden w-px bg-[#2F4D72]/22 md:block" />
              <div className="space-y-7">
                {experience.map((item, index) => (
                  <div key={`${item.role}-${item.period}`} className="relative md:pl-12">
                    <div className="absolute left-0 top-8 hidden h-3 w-3 rounded-full bg-[#2F4D72] shadow-[0_0_0_8px_rgba(47,77,114,0.08)] md:block" />
                    <Surface className="p-7 md:p-9">
                      <div className="grid gap-8 md:grid-cols-[0.3fr_1fr]">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.24em] text-[#2F4D72]">{item.period}</div>
                          <div className="mt-5 text-2xl font-semibold leading-none tracking-[-0.04em] text-[#171513]">{item.role}</div>
                          <div className="mt-3 text-sm leading-6 text-[#4F4A43]">{item.company}</div>
                          <div className="mt-4 rounded-full bg-[#EFE9DD]/70 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#4F4A43]">{item.context}</div>
                        </div>
                        <div>
                          <p className="text-lg leading-8 text-[#332F2A]">{item.focus}</p>
                          <div className="mt-7 grid gap-3">
                            {item.proof.map((proof) => (
                              <div key={proof} className="flex gap-4 rounded-[1rem] bg-[#FBF8F0]/55 p-4 text-sm leading-6 text-[#3B3731]">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F4D72]" />
                                <span>{proof}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Surface>
                  </div>
                ))}

                <div className="relative md:pl-12">
                  <div className="absolute left-0 top-8 hidden h-3 w-3 rounded-full border border-[#2F4D72] bg-[#F7F4ED] shadow-[0_0_0_8px_rgba(47,77,114,0.08)] md:block" />
                  <div className="rounded-[1.5rem] border border-[#B9AD9B]/36 bg-[#FBF8F0]/48 p-7 shadow-[0_16px_52px_rgba(26,26,24,0.025)] md:p-8">
                    <div className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#171513]">Education</div>
                    <div className="mt-6 grid gap-3">
                      {education.map((item) => (
                        <div key={item} className="text-sm leading-6 text-[#4F4A43]">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="background" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-5 md:grid-cols-4">
          {impactMetrics.map((metric) => (
            <div key={metric.value} className="rounded-[1.5rem] border border-[#B9AD9B]/38 bg-[#FBF8F0]/58 p-6 shadow-[0_16px_60px_rgba(26,26,24,0.035)]">
              <div className="text-5xl font-semibold tracking-[-0.06em] text-[#2F4D72]">{metric.value}</div>
              <div className="mt-4 max-w-[12rem] text-sm leading-6 text-[#4F4A43]">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="range" className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#171513] md:text-6xl">
              Comfortable across strategy, data, AI, systems, and execution.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <div key={capability} className={`rounded-[1.1rem] px-5 py-5 text-sm font-semibold leading-5 tracking-[-0.01em] ${index === 1 ? "bg-[#2F4D72] text-[#F7F4ED] shadow-[0_18px_42px_rgba(47,77,114,0.16)]" : "border border-[#B9AD9B]/36 bg-[#FBF8F0]/56 text-[#332F2A]"}`}>
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#B9AD9B]/42 bg-[#F1EBDD]/64 p-7 shadow-[0_30px_110px_rgba(26,26,24,0.05),inset_0_1px_0_rgba(255,255,255,0.46)] md:p-10">
          <Texture />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#171513] md:text-5xl">
                There is another layer beneath the résumé.
              </h2>
            </div>
            <button
              type="button"
              aria-expanded={showThinking}
              aria-controls="how-i-think"
              onClick={revealThinking}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2F4D72] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F7F4ED] shadow-[0_16px_38px_rgba(47,77,114,0.18)] transition hover:bg-[#203650]"
            >
              {showThinking ? "Logic revealed" : "Reveal how I think"} <ArrowRight size={14} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </section>

      {showThinking && (
        <section id="how-i-think" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-12 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_1fr]">
            <div>
              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#171513] md:text-5xl">
                I move from signal to system.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#4F4A43]">
                The spine appears here only as a guide: not a decoration, but a quiet map of how ambiguity becomes architecture.
              </p>
            </div>
            <Surface className="p-7 md:p-10" strong>
              <div className="relative">
                <div className="absolute bottom-8 left-[1.06rem] top-8 w-px bg-[#2F4D72]/26" />
                <div className="grid gap-7">
                  {thinkingSteps.map((step, index) => (
                    <div key={step.label} className="relative grid gap-4 pl-12 md:grid-cols-[11rem_1fr] md:gap-8">
                      <div className={`absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border text-[10px] font-semibold ${index === 1 ? "border-[#2F4D72] bg-[#2F4D72] text-[#F7F4ED]" : "border-[#B9AD9B]/70 bg-[#FBF8F0] text-[#4F4A43]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="text-xl font-semibold tracking-[-0.03em] text-[#171513]">{step.label}</div>
                      <p className="text-base leading-7 text-[#3B3731]">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Surface>
          </div>
        </section>
      )}

      <section id="connections" className="mx-auto max-w-7xl px-5 pb-28 pt-8 md:px-10">
        <RelatedLinks paths={["/systems/connect-ai-copilot", "/systems/portfolio-growth-engine", "/thinking/ai-is-not-the-product", "/philosophy/operational-leverage"]} />
      </section>
    </div>
  );
}

export function ContentRouter() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  if (segments[0] === "about") {
    return <AboutPage />;
  }

  const family = segments[0];
  const slug = segments[1];

  if (family && pages[family] && !slug) {
    return <EcosystemPage page={pages[family]} />;
  }

  const document = collections[family]?.find((candidate) => candidate.slug === slug);

  if (document) {
    return <DocumentDetail document={document} />;
  }

  return <EcosystemPage page={pages.systems} />;
}
