import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GitBranch, Mail, Waypoints } from "lucide-react";
import { 
  PaperBackground, Texture, MaterialLight, GridLayer, 
  Nav, ContinuousSpine, SectionMark, EngravedPanel 
} from "../components/Shared";

const systems = [
  {
    name: "Portfolio Growth Engine",
    slug: "portfolio-growth-engine",
    reframe: "Static customer segmentation → behavioral economies",
    insight: "Turn transaction behavior into portfolio-level growth decisions.",
    outcome: "5x transaction frequency · 40–60% higher spend",
    span: "md:col-span-5 md:row-span-2",
  },
  {
    name: "Rewards Decision Engine",
    slug: "rewards-decision-engine",
    reframe: "Reward rules → contextual economic trust",
    insight: "Make value issuance deterministic, explainable, and controllable.",
    outcome: "Policy clarity · cap control · accountable earning",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    name: "Brand Cleaner",
    slug: "brand-cleaner",
    reframe: "Messy transactions → usable behavioral signals",
    insight: "Extract merchant meaning from noisy financial data.",
    outcome: "Cleaner intelligence layer",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    name: "Connect AI Copilot",
    slug: "connect-ai-copilot",
    reframe: "Manual workflow design → AI-assisted execution systems",
    insight: "Compress implementation cycles by turning intent into workflows.",
    outcome: "Operational leverage",
    span: "md:col-span-4 md:row-span-1",
  },
];

const essays = [
  {
    title: "AI Is Not The Product. Decision Quality Is.",
    slug: "ai-is-not-the-product",
    thesis: "Enterprise AI fails when it optimizes outputs instead of operational decisions.",
    implication: "The product layer must convert intelligence into better choices, faster execution, and measurable feedback.",
  },
  {
    title: "Static Segmentation Is Broken.",
    slug: "static-segmentation-is-broken",
    thesis: "Customers do not live inside static buckets. Their behavior shifts with context, timing, intent, and incentives.",
    implication: "Behavioral economies are more useful than demographic clusters when systems need to act.",
  },
  {
    title: "Dashboards Are Not Decision Systems.",
    slug: "dashboards-are-not-decision-systems",
    thesis: "A dashboard shows what happened. A decision system changes what happens next.",
    implication: "The real interface is the operating loop between signal, action, and feedback.",
  },
];

const experiments = [
  {
    title: "AI Product Teams",
    tension: "What if product teams became systems of specialized agents instead of static role structures?",
    status: "exploring",
  },
  {
    title: "Problem → Product Engine",
    tension: "Can a system take a raw problem statement, identify root causes, and design reusable products?",
    status: "frontier",
  },
  {
    title: "Intent-Led UI Generation",
    tension: "If APIs can be composed from intent, interfaces should be composed from intent too.",
    status: "active idea",
  },
  {
    title: "Behavioral Offer Systems",
    tension: "What happens when offers respond to customer lifecycle signals instead of campaign calendars?",
    status: "system seed",
  },
];

const principles = [
  "Systems over features.",
  "Decision quality is the product.",
  "Feedback loops compound.",
  "Operational leverage beats surface automation.",
];

function HeroArtifact() {
  const nodes = [
    { x: 80, y: 172, active: false },
    { x: 176, y: 116, active: false },
    { x: 292, y: 164, active: true },
    { x: 444, y: 126, active: false },
    { x: 132, y: 306, active: false },
    { x: 286, y: 282, active: true },
    { x: 468, y: 342, active: false },
    { x: 156, y: 452, active: false },
    { x: 336, y: 426, active: false },
    { x: 522, y: 470, active: true },
  ];

  return (
    <div className="relative hidden h-[430px] w-full self-end md:block">
      <div className="absolute inset-0 translate-y-8 rounded-[1.4rem] border border-[#B9AD9B]/70 bg-[#EDE5D6] shadow-[0_34px_80px_rgba(23,21,19,0.16),inset_0_1px_0_rgba(255,255,255,0.58),inset_0_-24px_60px_rgba(23,21,19,0.045)]" />
      <div className="absolute inset-5 translate-y-8 overflow-hidden rounded-[1rem] border border-[#CFC3B2]/80 bg-[#F6F1E7] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-18px_44px_rgba(23,21,19,0.04)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.72]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(159,146,126,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(159,146,126,0.16) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 560" fill="none">
          <path d="M80 172 C154 86 220 236 292 164 C370 88 416 104 444 126" stroke="#171513" strokeOpacity="0.34" strokeWidth="1.4" />
          <path d="M132 306 C202 232 236 350 286 282 C352 190 400 318 468 342" stroke="#171513" strokeOpacity="0.22" strokeWidth="1.1" strokeDasharray="5 9" />
          <path d="M156 452 C224 382 282 500 336 426 C400 340 462 428 522 470" stroke="#171513" strokeOpacity="0.26" strokeWidth="1.2" />
          <path d="M292 164 C334 220 260 244 286 282 C330 348 464 380 522 470" stroke="#2F4D72" strokeOpacity="0.64" strokeWidth="1.8" />
          <path d="M80 172 L286 282 L522 470" stroke="#171513" strokeOpacity="0.12" strokeWidth="1" />
          {nodes.map((node, index) => (
            <g key={index}>
              <circle cx={node.x} cy={node.y} r={node.active ? 6.5 : 4.5} fill="#F6F1E7" stroke={node.active ? "#2F4D72" : "#171513"} strokeOpacity={node.active ? 0.86 : 0.34} />
              {node.active && <circle cx={node.x} cy={node.y} r="28" stroke="#2F4D72" strokeOpacity="0.14" />}
            </g>
          ))}
        </svg>
        <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-[#B9AD9B]/56 pt-5">
          <div className="h-1.5 w-20 rounded-full bg-[#171513]/22" />
          <div className="h-1.5 w-28 rounded-full bg-[#2F4D72]/72" />
          <div className="h-1.5 w-16 rounded-full bg-[#171513]/18" />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto min-h-screen max-w-7xl overflow-hidden px-5 pb-20 pt-20 md:px-10 md:pb-24 md:pt-16">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 grid min-h-[calc(100vh-5rem)] items-start gap-12 md:grid-cols-[minmax(0,760px)_minmax(320px,1fr)] md:items-center">
        <div>
          <div className="mb-9 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2F4D72]">
            <span className="h-px w-12 bg-[#2F4D72]" /> operational ai / decision systems
          </div>
          <h1 className="max-w-[700px] text-6xl font-semibold leading-[0.94] tracking-[-0.045em] text-[#171513] md:text-7xl lg:text-[5.25rem]">
            I design systems for better decisions.
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-9 text-[#332F2A] md:text-2xl md:leading-10">
            Turning messy signals into clearer action across AI, data, and operational workflows.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#systems" className="text-sm font-semibold text-[#2F4D72] underline decoration-[#2F4D72]/32 underline-offset-8 transition hover:text-[#171513]">
              Explore systems
            </a>
            <a href="#thinking" className="text-sm font-semibold text-[#4F4A43] underline decoration-[#4F4A43]/24 underline-offset-8 transition hover:text-[#2F4D72]">
              Read thinking
            </a>
          </div>
        </div>
        <HeroArtifact />
      </motion.div>
    </section>
  );
}

function IdentityLayer() {
  return (
    <section id="identity" className="relative z-10 mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-44">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <SectionMark number="01" label="Identity" principle="Not a portfolio. A thinking system." next="What kind of systems?" />
        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#FBF8F0]/70 p-8 shadow-[0_38px_130px_rgba(26,26,24,0.05),inset_0_1px_0_rgba(255,255,255,0.42)] md:p-12">
          <Texture />
          <MaterialLight />
          <div className="relative max-w-3xl">
            <p className="text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#171513] md:text-6xl">
              I work where signals are messy, decisions are expensive, and systems need to move faster than ambiguity.
            </p>
          </div>
          <div className="absolute bottom-8 left-8 right-8 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Observe", "Find the behavioral signal."],
              ["02", "Reframe", "Turn ambiguity into a decision model."],
              ["03", "Operate", "Make the system act and learn."],
            ].map(([num, title, text], i) => (
              <div key={title} className="rounded-[1.2rem] bg-[#F1EBDD]/64 p-5">
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#2F4D72]">{num}</div>
                <div className="mt-4 text-sm font-semibold text-[#171513]">{title}</div>
                <div className="mt-3 text-sm leading-6 text-[#4F4A43]">{text}</div>
                <div className={i === 1 ? "mt-5 h-1.5 rounded-full bg-[#3D5A80]/42" : "mt-5 h-1.5 rounded-full bg-[#9D9180]/34"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemsLayer() {
  return (
    <section id="systems" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <div className="mb-14 grid gap-8 md:grid-cols-[0.62fr_1.38fr] md:items-end">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">02</div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Systems</div>
        </div>
        <div>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#171513] md:text-6xl">
            Proof should feel architectural, not like a project gallery.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#3B3731]">
            These are operational systems built to convert behavioral signals into better decisions, faster execution, and measurable outcomes.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-[#F1EBDD]/72 p-6 shadow-[0_46px_150px_rgba(26,26,24,0.06),inset_0_1px_0_rgba(255,255,255,0.44)] md:p-8">
        <GridLayer />
        <MaterialLight />
        <div className="relative mb-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">
          <GitBranch size={12} className="text-[#2F4D72]" /> operational architecture
        </div>
        <div className="relative grid auto-rows-[minmax(150px,auto)] gap-5 md:grid-cols-12">
          {systems.map((system, index) => (
            <Link to={`/systems/${system.slug}`} key={system.name} className={`group block relative overflow-hidden rounded-[1.4rem] bg-[#FBF8F0]/66 p-6 shadow-[0_16px_50px_rgba(26,26,24,0.035)] transition hover:bg-[#EFE9DD] ${system.span}`}>
              <Texture />
              <div className="relative text-[10px] uppercase tracking-[0.25em] text-[#2F4D72]">0{index + 1}</div>
              <div className="relative mt-5 text-xl font-semibold tracking-[-0.02em] text-[#171513] group-hover:text-[#2F4D72] transition-colors">{system.name}</div>
              <div className="relative mt-4 text-sm leading-6 text-[#3B3731]">{system.reframe}</div>
              <div className="relative mt-5 max-w-md text-sm leading-6 text-[#4F4A43]">{system.insight}</div>
              <div className="relative mt-6 inline-flex rounded-full bg-[#3D5A80]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#2F4D72]">{system.outcome}</div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-[0.2em] text-[#2F4D72]">View Architecture →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThinkingLayer() {
  return (
    <section id="thinking" className="relative z-10 mx-auto max-w-7xl px-5 py-32 md:px-10 md:py-44">
      <div className="grid gap-12 md:grid-cols-[0.38fr_1.62fr]">
        <div className="md:pt-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">03</div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Thinking</div>
          <div className="mt-8 max-w-xs text-sm leading-7 text-[#4F4A43]">
            Frameworks should not float above reality. They should explain what operational systems make visible.
          </div>
        </div>
        <EngravedPanel label="engraved reading plane">
          <div className="grid gap-12">
            {essays.map((essay, index) => (
              <Link to={`/thinking/${essay.slug}`} key={essay.title} className="group grid gap-6 md:grid-cols-[0.18fr_0.82fr]">
                <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72]">0{index + 1}</div>
                <div>
                  <h3 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513] md:text-5xl group-hover:text-[#2F4D72] transition-colors">{essay.title}</h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3B3731]">{essay.thesis}</p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4F4A43]">{essay.implication}</p>
                  <div className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#2F4D72] opacity-0 group-hover:opacity-100 transition-opacity">Read Thinking →</div>
                </div>
              </Link>
            ))}
          </div>
        </EngravedPanel>
      </div>
    </section>
  );
}

function ExperimentsLayer() {
  return (
    <section id="experiments" className="relative z-10 mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
      <div className="mb-14 max-w-4xl">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">04</div>
        <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Experiments</div>
        <h2 className="mt-8 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#171513] md:text-6xl">
          The unfinished edge matters.
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#3B3731]">
          Experiments prevent the system from becoming rigid. They are where operational ideas are stress-tested before they become architecture.
        </p>
      </div>
      <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#F1EBDD]/62 p-6 shadow-[0_46px_150px_rgba(26,26,24,0.055)] md:p-8">
        <Texture />
        <MaterialLight />
        <div className="relative grid gap-6 md:grid-cols-6 md:grid-rows-5">
          {experiments.map((experiment, index) => {
            const placement = [
              "md:col-span-3 md:row-span-2",
              "md:col-span-2 md:col-start-5 md:row-span-3",
              "md:col-span-2 md:row-span-2 md:row-start-4",
              "md:col-span-2 md:col-start-5 md:row-span-2 md:row-start-4",
            ][index];
            return (
              <div key={experiment.title} className={`rounded-[1.4rem] ${index === 2 ? "bg-[#3D5A80]/[0.11]" : "bg-[#FBF8F0]/58"} p-6 shadow-[0_14px_44px_rgba(26,26,24,0.025)] ${placement}`}>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#2F4D72]">{experiment.status}</div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#171513]">{experiment.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#3B3731]">{experiment.tension}</p>
              </div>
            );
          })}
          <div className="hidden rounded-full border border-[#3D5A80]/42 bg-[#FBF8F0]/58 md:col-span-1 md:col-start-4 md:row-start-3 md:block" />
        </div>
      </div>
    </section>
  );
}

function PhilosophyLayer() {
  return (
    <section id="philosophy" className="relative z-10 mx-auto max-w-7xl px-5 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">05</div>
        <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">Philosophy</div>
        <h2 className="mt-10 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#171513] md:text-6xl">
          The worldview underneath the work.
        </h2>
      </div>
      <div className="mx-auto mt-16 max-w-5xl">
        <EngravedPanel label="engraved belief plane">
          <div className="grid gap-8 md:grid-cols-2">
            {principles.map((principle, index) => (
              <div key={principle} className="min-h-[150px] rounded-[1.2rem] bg-[#FBF8F0]/34 p-7">
                <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72]">0{index + 1}</div>
                <div className="mt-7 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513]">{principle}</div>
              </div>
            ))}
          </div>
        </EngravedPanel>
      </div>
    </section>
  );
}

function ClosingLayer() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-6 md:px-10 md:pb-16">
      <div className="relative overflow-hidden rounded-[2.4rem] bg-[#F1EBDD]/68 p-8 shadow-[0_52px_170px_rgba(26,26,24,0.055),inset_0_1px_0_rgba(255,255,255,0.42)] md:p-12">
        <Texture />
        <MaterialLight />
        <div className="relative grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#4F4A43]">
              <Mail size={13} className="text-[#2F4D72]" /> conversation layer
            </div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#171513] md:text-6xl">
              If this kind of system is worth exploring, the next loop is conversation.
            </h2>
          </div>
          <div className="grid gap-5">
            <div className="rounded-[1.5rem] bg-[#FBF8F0]/58 p-6 shadow-[0_18px_60px_rgba(26,26,24,0.028)]">
              <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">continue</div>
              <p className="max-w-md text-lg leading-8 text-[#3B3731]">
                Explore the systems, read the thinking, or reach out if you are building around operational AI, behavioral intelligence, or decision systems.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Link to="/#systems" className="text-center rounded-full bg-[#FBF8F0]/48 px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-[#4F4A43] hover:bg-[#FBF8F0]/80 transition">
                Explore Systems
              </Link>
              <Link to="/#thinking" className="text-center rounded-full bg-[#FBF8F0]/48 px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-[#4F4A43] hover:bg-[#FBF8F0]/80 transition">
                Read Thinking
              </Link>
              <a href="mailto:hello@vipuldeora.com" className="text-center rounded-full bg-[#FBF8F0]/48 px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-[#2F4D72] font-semibold hover:bg-[#FBF8F0]/80 transition">
                Reach Out
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative mx-auto mt-16 max-w-7xl py-8">
        <div className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.26em] text-[#4F4A43] md:flex-row md:items-center md:justify-between">
          <div>Vipul Deora / decision systems</div>
          <div className="flex gap-6">
            <span>signals</span>
            <span className="text-[#2F4D72]">feedback</span>
            <span>next loop</span>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default function Homepage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <IdentityLayer />
      <SystemsLayer />
      <ThinkingLayer />
      <ExperimentsLayer />
      <PhilosophyLayer />
      <ClosingLayer />
    </>
  );
}
