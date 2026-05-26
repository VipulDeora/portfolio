import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Mail, Waypoints } from "lucide-react";

const navItems = ["Systems", "Thinking", "Experiments", "Philosophy", "About"];
const spine = ["Signal", "Decision", "Action", "Outcome", "Feedback"];

const systems = [
  {
    name: "Portfolio Growth Engine",
    reframe: "Static customer segmentation → behavioral economies",
    insight: "Turn transaction behavior into portfolio-level growth decisions.",
    outcome: "5x transaction frequency · 40–60% higher spend",
    span: "md:col-span-5 md:row-span-2",
  },
  {
    name: "Rewards Decision Engine",
    reframe: "Reward rules → contextual economic trust",
    insight: "Make value issuance deterministic, explainable, and controllable.",
    outcome: "Policy clarity · cap control · accountable earning",
    span: "md:col-span-3 md:row-span-2",
  },
  {
    name: "Brand Cleaner",
    reframe: "Messy transactions → usable behavioral signals",
    insight: "Extract merchant meaning from noisy financial data.",
    outcome: "Cleaner intelligence layer",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    name: "Connect AI Copilot",
    reframe: "Manual workflow design → AI-assisted execution systems",
    insight: "Compress implementation cycles by turning intent into workflows.",
    outcome: "Operational leverage",
    span: "md:col-span-4 md:row-span-1",
  },
];

const essays = [
  {
    title: "AI Is Not The Product. Decision Quality Is.",
    thesis: "Enterprise AI fails when it optimizes outputs instead of operational decisions.",
    implication: "The product layer must convert intelligence into better choices, faster execution, and measurable feedback.",
  },
  {
    title: "Static Segmentation Is Broken.",
    thesis: "Customers do not live inside static buckets. Their behavior shifts with context, timing, intent, and incentives.",
    implication: "Behavioral economies are more useful than demographic clusters when systems need to act.",
  },
  {
    title: "Dashboards Are Not Decision Systems.",
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

function PaperBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "linear-gradient(180deg, #FBF8F0 0%, #F7F4ED 42%, #EFE9DD 100%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.14] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(26,26,24,0.20) 0.55px, transparent 0), linear-gradient(90deg, rgba(26,26,24,0.035) 1px, transparent 1px)",
          backgroundSize: "18px 18px, 96px 96px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.22]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.62), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.26), rgba(26,26,24,0.025))",
        }}
      />
    </>
  );
}

function Texture({ strong = false }) {
  return (
    <div
      aria-hidden="true"
      className={strong ? "pointer-events-none absolute inset-0 opacity-[0.16]" : "pointer-events-none absolute inset-0 opacity-[0.09]"}
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

function GridLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(191,181,167,0.30) 1px, transparent 1px), linear-gradient(to bottom, rgba(191,181,167,0.22) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

function Nav() {
  return (
    <div className="sticky top-0 z-40 bg-[#FBF8F0]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full border border-[#AFA391]/80 bg-[#EFE9DD]/75 text-[11px] font-semibold text-[#2F4D72] shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
            V
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#171513]">Vipul Deora</div>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.24em] text-[#5E584F] transition hover:text-[#2F4D72]">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContinuousSpine() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[640px] z-[1] hidden h-[3400px] md:block">
      <svg className="mx-auto h-full w-full max-w-7xl" viewBox="0 0 1200 3400" fill="none" preserveAspectRatio="none">
        <path
          d="M990 0 C830 350 1040 640 735 940 C480 1190 730 1500 420 1780 C190 1990 360 2350 670 2580 C870 2730 760 3160 520 3400"
          stroke="#171513"
          strokeOpacity="0.055"
          strokeWidth="8"
        />
        <path
          d="M990 0 C830 350 1040 640 735 940 C480 1190 730 1500 420 1780 C190 1990 360 2350 670 2580 C870 2730 760 3160 520 3400"
          stroke="#3D5A80"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

function HeroArtifact() {
  const nodes = [
    { x: 72, y: 164, active: true },
    { x: 188, y: 96, active: false },
    { x: 312, y: 158, active: true },
    { x: 492, y: 126, active: false },
    { x: 126, y: 332, active: false },
    { x: 284, y: 288, active: true },
    { x: 458, y: 360, active: false },
    { x: 96, y: 492, active: false },
    { x: 338, y: 454, active: true },
    { x: 520, y: 506, active: true },
  ];

  return (
    <div className="pointer-events-none absolute bottom-[-2rem] right-0 hidden h-[580px] w-[52%] md:block">
      <div className="absolute inset-0 rounded-[2.4rem] bg-[#F1EBDD]/42 shadow-[0_44px_140px_rgba(26,26,24,0.045),inset_0_1px_0_rgba(255,255,255,0.38)]" />
      <Texture />
      <MaterialLight />
      <div className="absolute inset-8 overflow-hidden rounded-[1.8rem] bg-[#FBF8F0]/46 shadow-[inset_0_1px_0_rgba(255,255,255,0.38)]">
        <GridLayer />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 560" fill="none">
          <path d="M72 164 C160 72 232 218 312 158 C388 102 442 98 492 126" stroke="#3D5A80" strokeOpacity="0.42" strokeWidth="1.2" />
          <path d="M126 332 C196 256 236 368 284 288 C342 194 398 330 458 360" stroke="#171513" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="5 8" />
          <path d="M96 492 C190 406 258 532 338 454 C418 376 470 470 520 506" stroke="#3D5A80" strokeOpacity="0.22" strokeWidth="1" />
          <path d="M72 164 L284 288 L520 506" stroke="#3D5A80" strokeOpacity="0.13" strokeWidth="1" />
          {nodes.map((node, index) => (
            <g key={index}>
              <circle cx={node.x} cy={node.y} r={node.active ? 6.5 : 4.5} fill="#FBF8F0" stroke="#3D5A80" strokeOpacity={node.active ? 0.82 : 0.38} />
              {node.active && <circle cx={node.x} cy={node.y} r="28" stroke="#3D5A80" strokeOpacity="0.11" />}
            </g>
          ))}
        </svg>
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
          {[
            ["Signal", "observed"],
            ["Decision", "structured"],
            ["Feedback", "learned"],
          ].map(([title, sub], index) => (
            <div key={title} className="rounded-[1rem] bg-[#FBF8F0]/72 p-4 shadow-[0_14px_36px_rgba(26,26,24,0.035)]">
              <div className="text-[9px] uppercase tracking-[0.22em] text-[#2F4D72]">{title}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#5E584F]">{sub}</div>
              <div className={index === 1 ? "mt-4 h-1.5 rounded-full bg-[#3D5A80]/42" : "mt-4 h-1.5 rounded-full bg-[#9D9180]/38"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto min-h-screen max-w-7xl overflow-hidden px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
      <HeroArtifact />
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 flex min-h-[620px] flex-col justify-between">
        <div>
          <div className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#4F4A43]">
            <span className="h-px w-12 bg-[#3D5A80]/65" /> intelligent systems / product strategy / operational ai
          </div>
          <h1 className="max-w-[980px] text-6xl font-semibold leading-[0.88] tracking-[-0.065em] text-[#171513] md:text-8xl lg:text-9xl">
            I build intelligent decision systems.
          </h1>
          <p className="mt-10 max-w-2xl text-xl leading-9 text-[#332F2A] md:text-2xl md:leading-10">
            Products that turn messy signals into clearer decisions, faster action, and measurable business outcomes.
          </p>
        </div>

        <div className="grid gap-5 pt-16 md:grid-cols-[0.9fr_1.1fr] md:items-end md:pt-20">
          <div className="max-w-md text-sm leading-7 text-[#4F4A43]">
            I work at the intersection of AI, behavioral intelligence, operational workflows, and product systems.
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["01", "systems thinking"],
              ["02", "behavioral intelligence"],
              ["03", "measurable outcomes"],
            ].map(([num, label], index) => (
              <div key={label} className="rounded-[1.15rem] bg-[#F1EBDD]/62 p-5 shadow-[0_16px_44px_rgba(26,26,24,0.026)]">
                <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72]">{num}</div>
                <div className="mt-4 text-[11px] uppercase leading-5 tracking-[0.22em] text-[#4F4A43]">{label}</div>
                <div className={index === 1 ? "mt-5 h-1.5 rounded-full bg-[#3D5A80]/42" : "mt-5 h-1.5 rounded-full bg-[#9D9180]/34"} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function VisualSpine() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 md:px-10">
      <div className="relative py-20 md:py-28">
        <div className="absolute left-5 right-5 top-1/2 hidden h-px -translate-y-1/2 bg-[#3D5A80]/24 md:block" />
        <div className="relative grid gap-7 md:grid-cols-5">
          {spine.map((item, index) => (
            <div key={item} className="relative min-h-[104px] rounded-[1.25rem] bg-[#F1EBDD]/58 p-5 shadow-[0_14px_50px_rgba(26,26,24,0.026)]">
              <MaterialLight embedded />
              <div className="relative text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">0{index + 1}</div>
              <div className="relative mt-4 text-sm font-semibold text-[#171513]">{item}</div>
              <div className="relative mt-6 h-1.5 rounded-full bg-[#9D9180]/34" style={{ width: `${78 - index * 7}%` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionMark({ number, label, principle, next }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">{number}</div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">{label}</div>
      <div className="mt-7 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513] md:text-5xl">{principle}</div>
      <div className="mt-7 text-[10px] uppercase leading-5 tracking-[0.22em] text-[#2F4D72]">Next · {next}</div>
    </div>
  );
}

function EngravedPanel({ children, label }) {
  return (
    <div className="relative overflow-hidden rounded-[1.8rem] bg-[#EDE6D8]/72 shadow-[inset_0_2px_18px_rgba(26,26,24,0.075),inset_0_-1px_0_rgba(255,255,255,0.48)]">
      <Texture strong />
      <MaterialLight embedded />
      <div className="absolute left-7 top-6 text-[9px] uppercase tracking-[0.26em] text-[#4F4A43]">{label}</div>
      <div className="relative p-7 pt-16 md:p-10 md:pt-16">{children}</div>
    </div>
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
            <div key={system.name} className={`relative overflow-hidden rounded-[1.4rem] bg-[#FBF8F0]/66 p-6 shadow-[0_16px_50px_rgba(26,26,24,0.035)] ${system.span}`}>
              <Texture />
              <div className="relative text-[10px] uppercase tracking-[0.25em] text-[#2F4D72]">0{index + 1}</div>
              <div className="relative mt-5 text-xl font-semibold tracking-[-0.02em] text-[#171513]">{system.name}</div>
              <div className="relative mt-4 text-sm leading-6 text-[#3B3731]">{system.reframe}</div>
              <div className="relative mt-5 max-w-md text-sm leading-6 text-[#4F4A43]">{system.insight}</div>
              <div className="relative mt-6 inline-flex rounded-full bg-[#3D5A80]/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#2F4D72]">{system.outcome}</div>
            </div>
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
              <article key={essay.title} className="grid gap-6 md:grid-cols-[0.18fr_0.82fr]">
                <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72]">0{index + 1}</div>
                <div>
                  <h3 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513] md:text-5xl">{essay.title}</h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#3B3731]">{essay.thesis}</p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4F4A43]">{essay.implication}</p>
                </div>
              </article>
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
              {["Explore Systems", "Read Thinking", "Reach Out"].map((x, i) => (
                <div key={x} className="rounded-full bg-[#FBF8F0]/48 px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-[#4F4A43]">
                  <span className={i === 2 ? "text-[#2F4D72]" : ""}>{x}</span>
                </div>
              ))}
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

export default function PersonalWebsitePhaseOne() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7F4ED] font-sans text-[#171513]">
      <PaperBackground />
      <ContinuousSpine />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <IdentityLayer />
        <SystemsLayer />
        <ThinkingLayer />
        <ExperimentsLayer />
        <PhilosophyLayer />
        <ClosingLayer />
      </div>
    </main>
  );
}
