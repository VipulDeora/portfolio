export const systemsData = {
  "portfolio-growth-engine": {
    name: "Portfolio Growth Engine",
    subtitle: "Turning transaction behavior into portfolio-level growth decisions.",
    context: "The business operated a large-scale consumer portfolio where growth decisions—like offers, incentives, and lifecycle nudges—were driven by static demographics. A 'high-value' customer was defined by their past 12-month spend, not their current behavioral trajectory. This meant incentives were often misallocated: rewarding those who would have transacted anyway, and missing those whose behavior was actively shifting.",
    failure: "Static segmentation failed because it fundamentally misunderstood how people operate. Customers do not live inside rigid buckets. Their behavior shifts based on context, timing, intent, and incentives. Relying on historical demographics created systemic inefficiency, where the business was optimizing for the past rather than the present.",
    reframe: "We needed to shift from static segmentation to behavioral economies. Instead of asking 'who is this person?', the system needed to ask 'what is the current momentum of their behavior, and what intervention changes that momentum?'. The problem shifted from a data query to an operational decision loop.",
    design: "The system was designed as an intelligent feedback loop. Raw financial data (signals) flowed into a behavioral clustering engine that dynamically modeled customer trajectories. This engine didn't output segments; it output propensity scores and intervention recommendations. The orchestration layer then mapped these recommendations to available actions (offers, nudges) and deployed them. Critically, every action generated new signal, feeding back into the behavioral model.",
    intelligence: "The operational intelligence wasn't in complex deep learning; it was in the structural pairing of dynamic clustering with automated orchestration. The AI became an operational capability that continuously adjusted the 'offer mix' based on real-time shifts in transaction velocity, effectively automating micro-decisions at scale.",
    tradeoffs: "The primary trade-off was accepting a degree of explainability loss at the individual level to gain aggregate portfolio efficiency. We had to convince stakeholders that we couldn't always explain why a specific customer received a specific offer, but we could prove the overall system yielded higher returns.",
    outcomes: [
      "5x increase in transaction frequency among targeted clusters.",
      "40–60% higher average spend per customer compared to static control groups.",
      "Significant reduction in manual campaign configuration time."
    ],
    learnings: "The most important learning was that behavioral momentum is highly sensitive. The system initially over-optimized, sending too many interventions to highly responsive clusters, causing fatigue. We had to build 'cool-down' logic into the orchestration layer, proving that a system must understand constraint as well as opportunity.",
    relatedLinks: [
      {
        type: "Thinking",
        title: "Static Segmentation Is Broken.",
        description: "Why behavioral economies are more useful than demographic clusters when systems need to act.",
        path: "/thinking/static-segmentation-is-broken"
      },
      {
        type: "Thinking",
        title: "Dashboards Are Not Decision Systems.",
        description: "A dashboard shows what happened. A decision system changes what happens next.",
        path: "/thinking/dashboards-are-not-decision-systems"
      }
    ]
  },
  "rewards-decision-engine": {
    name: "Rewards Decision Engine",
    subtitle: "Making value issuance deterministic, explainable, and controllable.",
    context: "The enterprise operated a massive loyalty and rewards program where the logic for 'who gets what' was fragmented across dozens of hardcoded rules in legacy systems. When a user performed an action, the calculation of their reward was a black box. This created compliance risks, unpredictable economic liabilities, and an inability to rapidly launch new incentive structures.",
    failure: "The existing approach treated rewards as an outcome of fragmented logic rather than a centralized economic policy. Because rules were embedded in code rather than treated as configuration, testing new incentives took months. Worse, there was no centralized system to enforce global caps, meaning a bug could result in unbounded liability.",
    reframe: "We reframed the problem from 'how do we code better reward rules?' to 'how do we build a central bank for contextual economic trust?'. The engine needed to separate the policy (the rules of issuance) from the execution (the transaction).",
    design: "We architected a centralized Decision Engine. Incoming events (signals) were routed to the engine, which evaluated them against a strict, version-controlled set of economic policies. The engine operated with atomic precision: it either approved the issuance with a clear cryptographic audit trail, or it rejected it with a specific failure code. It included global velocity controls (caps) built directly into the core execution path.",
    intelligence: "The intelligence here was structural. By centralizing the decision logic, we created a single operational chokepoint where we could apply predictive modeling to forecast liability before deploying a new policy. The system didn't just execute rules; it simulated the economic impact of those rules.",
    tradeoffs: "Centralizing decisions created a single point of failure. We had to over-engineer the engine for high availability and extremely low latency (under 50ms), trading off development speed for absolute reliability. A slow decision engine would degrade the entire customer experience.",
    outcomes: [
      "Absolute policy clarity and auditable trust for every point issued.",
      "Hard cap control, eliminating unbounded liability risks.",
      "Reduced time-to-market for new incentive structures from months to days."
    ],
    learnings: "We learned that operational stakeholders fear black boxes when money is involved. The UI for the engine had to focus entirely on explainability—allowing operators to simulate an event and see exactly which rules passed or failed. Trust in the system required transparency in its decisions.",
    relatedLinks: [
      {
        type: "Thinking",
        title: "AI Is Not The Product. Decision Quality Is.",
        description: "Enterprise AI fails when it optimizes outputs instead of operational decisions.",
        path: "/thinking/ai-is-not-the-product"
      },
      {
        type: "System",
        title: "Portfolio Growth Engine",
        description: "Turning transaction behavior into portfolio-level growth decisions.",
        path: "/systems/portfolio-growth-engine"
      }
    ]
  },
  "brand-cleaner": {
    name: "Brand Cleaner",
    subtitle: "Extracting merchant meaning from noisy financial data.",
    context: "Financial transaction data is notoriously messy. A coffee purchase might appear as 'SQ *STARBUCKS STORE #1234'. For downstream systems—like categorization, rewards engines, and spending insights—this raw string is useless. The business needed a way to reliably map millions of messy raw strings to clean, canonical merchant identities in real-time.",
    failure: "Previous attempts relied on massive regex libraries and manual mapping tables. This approach was brittle, required constant human maintenance, and scaled poorly as new merchants appeared. The system was fundamentally reactive, breaking every time a payment processor changed its string format.",
    reframe: "The problem was not a string-matching problem; it was a probabilistic entity resolution problem. We needed to stop trying to parse the exact string and start using contextual signals (location, amount, MCC code) to probabilistically identify the most likely merchant.",
    design: "The Brand Cleaner was architected as a multi-stage pipeline. A raw transaction enters the system. First, a fast heuristic layer attempts a high-confidence match. If that fails, it passes to a machine-learning model that uses embeddings to compare the raw string and context to a known universe of merchant entities. Finally, low-confidence matches are routed to a human-in-the-loop review queue, the results of which feed back into the training data.",
    intelligence: "The operational intelligence was the feedback loop. The AI didn't have to be perfect; it just had to know when it was uncertain. By routing low-confidence decisions to humans and learning from their resolutions, the system continuously improved its own accuracy without requiring engineers to write new rules.",
    tradeoffs: "We sacrificed absolute determinism for scale and adaptability. Sometimes the model made an incorrect probabilistic guess. We had to build robust correction mechanisms downstream, accepting that a 99% accurate system that learns is better than a 100% accurate system that breaks every week.",
    outcomes: [
      "Created a significantly cleaner intelligence layer for all downstream products.",
      "Automated 95%+ of merchant resolution with high confidence.",
      "Drastically reduced the operational burden of maintaining regex rules."
    ],
    learnings: "The human-in-the-loop component was harder to design than the ML model. If the tool used by reviewers was slow, the feedback loop broke down. We learned that the UX of the internal tooling is just as critical as the algorithm itself.",
    relatedLinks: [
      {
        type: "Experiment",
        title: "Problem → Product Engine",
        description: "Can a system take a raw problem statement, identify root causes, and design reusable products?",
        path: "/#experiments"
      }
    ]
  },
  "connect-ai-copilot": {
    name: "Connect AI Copilot",
    subtitle: "Compressing implementation cycles by turning intent into workflows.",
    context: "Implementing complex B2B software integrations typically requires weeks of manual workflow design, API mapping, and custom scripting. Clients struggled to translate their business logic into the specific technical requirements of the platform. This created a massive bottleneck in onboarding and realization of value.",
    failure: "We initially tried to solve this with better documentation and more intuitive UI builders. But the fundamental friction remained: users knew what they wanted to achieve (intent), but lacked the expertise to configure the specific system components (execution). Forcing them to learn the UI was optimizing the wrong layer.",
    reframe: "We reframed the onboarding process from 'manual workflow design' to 'AI-assisted execution systems'. What if the user could simply state their intent in natural language, and the system could dynamically generate the required workflow architecture?",
    design: "We built an AI Copilot deeply integrated into the platform's orchestration engine. The user inputs their goal (e.g., 'When a high-value customer churns, alert the success team and issue a retention offer'). The Copilot uses an LLM to parse this intent, maps it against the platform's available API primitives, and generates a fully configured workflow graph. The user then reviews, tweaks, and deploys.",
    intelligence: "The intelligence here is translation. The AI acts as a compiler between human business intent and machine-executable workflows. Crucially, the AI doesn't execute the workflow; it configures it. The execution remains deterministic and reliable.",
    tradeoffs: "We had to severely constrain the LLM. An unconstrained model would hallucinate invalid API calls. We traded conversational flexibility for structural rigidity, forcing the model to only output configurations that conformed to a strict JSON schema validated by the orchestration engine.",
    outcomes: [
      "Massive operational leverage for implementation teams.",
      "Compressed complex workflow design from days to minutes.",
      "Lowered the technical barrier to entry for platform adoption."
    ],
    learnings: "Users still need to feel in control. We learned that auto-deploying AI-generated workflows caused anxiety. The critical UX decision was making the AI output a 'draft' that the user visually inspected and explicitly approved, maintaining human agency over the final operational system.",
    relatedLinks: [
      {
        type: "Experiment",
        title: "Intent-Led UI Generation",
        description: "If APIs can be composed from intent, interfaces should be composed from intent too.",
        path: "/#experiments"
      },
      {
        type: "Experiment",
        title: "AI Product Teams",
        description: "What if product teams became systems of specialized agents instead of static role structures?",
        path: "/#experiments"
      }
    ]
  }
};
