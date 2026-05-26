import React from "react";
import { Link } from "react-router-dom";
import { Texture, MaterialLight, EngravedPanel, RelationalNavigation } from "../components/Shared";
import { ArrowRight } from "lucide-react";

export default function About() {
  const relatedLinks = [
    {
      type: "System",
      title: "Portfolio Growth Engine",
      description: "Turning transaction behavior into portfolio-level growth decisions.",
      path: "/systems/portfolio-growth-engine"
    },
    {
      type: "Thinking",
      title: "AI Is Not The Product.",
      description: "Enterprise AI fails when it optimizes outputs instead of operational decisions.",
      path: "/thinking/ai-is-not-the-product"
    }
  ];

  return (
    <div className="relative mx-auto max-w-4xl px-5 py-24 md:px-10 md:py-32">
      <header className="mb-20">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">The Human Layer</div>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513] md:text-6xl">
          Systems emerge from curiosity.
        </h1>
        <p className="mt-8 text-xl leading-9 text-[#3B3731] md:text-2xl max-w-2xl">
          I build decision systems powered by data, AI, and behavioral intelligence, but the drive to build them starts with an operational question.
        </p>
      </header>

      <div className="space-y-24">
        {/* Core Identity & Systems Worldview */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] pt-2 border-t border-[#B9AD9B]/30">Systems Worldview</div>
          <div className="space-y-8 text-lg leading-8 text-[#171513]">
            <p>
              Most products are built as a collection of features designed to solve isolated friction points. I don't see products this way. I see them as interconnected behavioral and operational systems.
            </p>
            <p>
              A feature asks: <em>"How do we make this button easier to click?"</em> A system asks: <em>"Why are they clicking this button, what decision does it trigger, and how does the feedback from that decision improve the next loop?"</em>
            </p>
            <p>
              I work where signals are messy, decisions are expensive, and systems need to move faster than the ambiguity surrounding them. This requires shifting from a mindset of surface-level automation to one of true operational leverage.
            </p>
          </div>
        </section>

        {/* Curiosity & Experimentation */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] pt-2 border-t border-[#B9AD9B]/30">Curiosity</div>
          <div className="space-y-8 text-lg leading-8 text-[#171513]">
            <EngravedPanel label="The experimental edge">
              <p className="text-xl leading-9 font-medium text-[#171513]">
                The systems I build don't start as grand architectures. They start as unresolved tensions and curiosity-driven experiments.
              </p>
            </EngravedPanel>
            <p className="pt-4">
              I am fundamentally driven by questioning defaults. What happens if we stop segmenting customers by past behavior and start modeling their real-time momentum? What happens if an API is generated entirely by human intent? 
            </p>
            <p>
              Experimentation is not just a phase; it is the mechanism through which the system learns what needs to become architecture. The unfinished edge is where the most interesting operational ideas are stress-tested.
            </p>
          </div>
        </section>

        {/* Operational Focus */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] pt-2 border-t border-[#B9AD9B]/30">Operational Focus</div>
          <div className="space-y-8 text-lg leading-8 text-[#171513]">
            <p>
              Curiosity without execution is just philosophy. The goal is always to ground the thinking in measurable, operational execution.
            </p>
            <p>
              I am focused on Operational AI and Behavioral Intelligence. AI is only interesting to me when it meaningfully improves decision quality and execution leverage. A model that generates a summary is a toy; a model that dynamically adjusts an economic incentive based on behavioral elasticity is a system.
            </p>
            <p>
              My work revolves around accelerating workflows, closing the loop between signal and action, and proving that these systems drive undeniable business outcomes.
            </p>
          </div>
        </section>
        
        {/* Long-term Direction & Contact */}
        <section className="relative overflow-hidden rounded-[2rem] bg-[#F1EBDD]/68 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] md:p-12">
          <Texture />
          <MaterialLight />
          <div className="relative">
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513] max-w-xl">
              We are moving toward AI-native operational architectures.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3B3731] max-w-2xl">
              I am deeply fascinated by the transition from passive software that waits for human instruction to active systems that orchestrate decisions. If you are exploring this frontier—building decision engines, behavioral economies, or autonomous workflows—we should talk.
            </p>
            
            <a href="mailto:hello@vipuldeora.com" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#2F4D72] hover:text-[#171513] transition-colors">
              Reach Out <ArrowRight size={14} />
            </a>
          </div>
        </section>
      </div>
      
      <div className="mt-12">
        <RelationalNavigation links={relatedLinks} />
      </div>
    </div>
  );
}
