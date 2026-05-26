import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Texture, MaterialLight, EngravedPanel, RelationalNavigation } from "../../components/Shared";
import { systemsData } from "../../data/systems";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudy() {
  const { slug } = useParams();
  const system = systemsData[slug];

  if (!system) {
    return <Navigate to="/#systems" replace />;
  }

  return (
    <article className="relative mx-auto max-w-4xl px-5 py-24 md:px-10 md:py-32">
      <Link to="/#systems" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#4F4A43] hover:text-[#2F4D72] transition-colors mb-16">
        <ArrowLeft size={14} /> Back to Systems
      </Link>
      
      <header className="mb-20">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">System Case Study</div>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513] md:text-6xl">
          {system.name}
        </h1>
        <p className="mt-8 text-xl leading-9 text-[#3B3731] md:text-2xl">
          {system.subtitle}
        </p>
      </header>

      <div className="space-y-20">
        <section>
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] mb-5">01 — Context</div>
          <p className="text-lg leading-8 text-[#171513]">{system.context}</p>
        </section>

        <section>
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] mb-5">02 — Existing Failure</div>
          <div className="rounded-[1.4rem] bg-[#F1EBDD]/60 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
            <p className="text-lg leading-8 text-[#171513]">{system.failure}</p>
          </div>
        </section>

        <section>
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72] mb-5 font-semibold">03 — Reframe</div>
          <EngravedPanel label="conceptual shift">
            <p className="text-2xl leading-10 text-[#171513] font-medium tracking-[-0.02em]">{system.reframe}</p>
          </EngravedPanel>
        </section>

        <section>
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] mb-5">04 — System Design</div>
          <p className="text-lg leading-8 text-[#171513]">{system.design}</p>
        </section>

        <section>
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] mb-5">05 — Operational Intelligence</div>
          <div className="relative overflow-hidden rounded-[1.4rem] border border-[#3D5A80]/10 bg-[#FBF8F0]/80 p-8">
            <Texture />
            <p className="relative text-lg leading-8 text-[#171513]">{system.intelligence}</p>
          </div>
        </section>

        <section>
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] mb-5">06 — Trade-offs</div>
          <p className="text-lg leading-8 text-[#171513]">{system.tradeoffs}</p>
        </section>

        <section>
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] mb-5">07 — Outcomes</div>
          <ul className="grid gap-4">
            {system.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-4 text-lg leading-8 text-[#171513]">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F4D72]" />
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] mb-5">08 — Learnings</div>
          <p className="text-lg leading-8 text-[#171513]">{system.learnings}</p>
        </section>
      </div>

      <RelationalNavigation links={system.relatedLinks} />
    </article>
  );
}
