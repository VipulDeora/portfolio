export const thinkingData = {
  "ai-is-not-the-product": {
    title: "AI Is Not The Product. Decision Quality Is.",
    thesis: "Enterprise AI fails when it optimizes outputs instead of operational decisions.",
    content: `Most enterprise AI projects fail structurally, not technically. They fail because they treat the AI model as the end product. 

When a company builds a generative AI chatbot for their internal data, they are optimizing for *output generation*. They want the model to summarize a document, write an email, or generate code. But businesses do not run on outputs. They run on decisions.

### The Illusion of Output

Outputs are intermediate steps. A summary of a customer's usage history is an output. The decision is: *Do we offer them a 20% discount to prevent churn?* 

When you optimize for outputs, you push the cognitive burden of the final decision back onto the human operator. You have made the operator faster at reading, but not structurally better at deciding. You haven't created operational leverage; you've just accelerated the friction.

### Designing for Decisions

To build intelligent systems, the architecture must shift from 'prompt and response' to 'signal, decision, action, and feedback.' 

1. **Signal**: What raw data indicates a state change? (e.g., A customer's API usage drops by 40%).
2. **Decision**: What is the optimal response to this state change based on business policy? (e.g., The behavioral model indicates high churn risk. The policy dictates a retention offer).
3. **Action**: The system executes the workflow to deliver the offer.
4. **Feedback**: Did the customer accept? Did their API usage recover? This feeds back into the model.

In this architecture, the AI is not a chat interface. It is the intelligence layer embedded within the *Decision* and *Feedback* nodes. It is calculating propensities, classifying intent, and matching contexts.

### The Operational Reframe

If you are building an AI product, stop asking: *How good is the model's output?*

Start asking: *Does this system meaningfully increase the velocity and quality of a critical business decision?*

If it doesn't, you haven't built a product. You've built a very expensive parlor trick.`,
    relatedLinks: [
      {
        type: "System",
        title: "Connect AI Copilot",
        description: "Compressing implementation cycles by turning intent into workflows.",
        path: "/systems/connect-ai-copilot"
      },
      {
        type: "Philosophy",
        title: "Operational leverage beats surface automation.",
        description: "True leverage comes from automating decisions, not just tasks.",
        path: "/#philosophy"
      }
    ]
  },
  "static-segmentation-is-broken": {
    title: "Static Segmentation Is Broken.",
    thesis: "Customers do not live inside static buckets. Their behavior shifts with context, timing, intent, and incentives.",
    content: `For decades, marketing and product growth have relied on demographic and static segmentation. We put users into buckets: "High Value," "Churn Risk," "Millennial Urbanite." 

This is structurally flawed because it assumes identity dictates action. It doesn't. Behavior dictates action.

### The Problem with Buckets

Static segments are retroactive. They tell you who a person *was* over the last 12 months. They tell you almost nothing about what a person is *doing right now*. 

If a "High Value" customer suddenly stops transacting because they had a bad support experience, their static segment won't update until the next quarterly refresh. By then, they are gone. 

Conversely, if a "Low Value" user is currently exhibiting the early behavioral markers of rapid adoption, a static system will ignore them, starving them of the precise onboarding incentives that would lock in their new habit.

### Behavioral Economies

We must shift to thinking about user bases as *behavioral economies*. In an economy, actors respond dynamically to incentives, friction, and context.

Instead of assigning a user to a bucket, an intelligent system assigns a user a real-time behavioral trajectory. 

1. **Momentum**: Is their usage accelerating or decelerating?
2. **Elasticity**: How sensitive are they to a specific type of incentive right now?
3. **Context**: What was the sequence of events immediately preceding their current session?

### The Architectural Shift

Moving from static segmentation to behavioral economies requires an architectural shift. You can no longer run batch queries in a data warehouse and push CSVs to an email tool. 

You need a streaming architecture where raw events (signals) are continuously evaluated against behavioral models, triggering orchestration logic in real-time. 

When you build systems this way, you stop marketing to demographics. You start intervening in behaviors.`,
    relatedLinks: [
      {
        type: "System",
        title: "Portfolio Growth Engine",
        description: "Turning transaction behavior into portfolio-level growth decisions.",
        path: "/systems/portfolio-growth-engine"
      }
    ]
  },
  "dashboards-are-not-decision-systems": {
    title: "Dashboards Are Not Decision Systems.",
    thesis: "A dashboard shows what happened. A decision system changes what happens next.",
    content: `There is a pervasive disease in enterprise software: the belief that visibility equals control.

When an operational problem arises, the default corporate reflex is to 'build a dashboard'. We extract the data, pipe it into a BI tool, build beautiful charts, and expect the problem to solve itself. 

It rarely does.

### The Visibility Trap

Dashboards are passive. They are rear-view mirrors. They tell you that a metric has dropped 15% week-over-week. 

But a dashboard cannot tell you *why* it dropped (causation), *what* to do about it (prescription), or *execute* the fix (action). 

By stopping at visibility, we force humans to be the integration layer between the data and the action. A human has to look at the red line, investigate the root cause across three different tools, decide on a course of action, and manually execute it in a fourth tool. This is the opposite of operational leverage.

### The Decision Loop

A true decision system closes the loop. It integrates visibility, logic, and execution.

1. **Detection**: Not just plotting the line, but algorithmically detecting the anomaly.
2. **Diagnosis**: Traversing the dependency graph to isolate the root cause.
3. **Prescription**: Suggesting the optimal operational response.
4. **Execution**: Providing a one-click mechanism (or automated mechanism) to deploy the fix.

### Moving Up the Stack

Building decision systems requires moving up the stack from passive analytics to active orchestration. 

It means your 'analytics' tool needs write-access to your operational systems. It means your metrics must be tied to programmatic levers. 

If your data doesn't lead directly to an automated or heavily assisted decision, you are just admiring the problem.`,
    relatedLinks: [
      {
        type: "System",
        title: "Rewards Decision Engine",
        description: "Making value issuance deterministic, explainable, and controllable.",
        path: "/systems/rewards-decision-engine"
      },
      {
        type: "Philosophy",
        title: "Systems over features.",
        description: "Features solve narrow problems. Systems close the loop.",
        path: "/#philosophy"
      }
    ]
  }
};
