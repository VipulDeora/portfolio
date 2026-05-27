import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Mail, Waypoints } from "lucide-react";
import { ContentRouter, contentNavItems, navigateTo, useRoute } from "./contentPages";

const systems = ["Portfolio Growth Engine", "Rewards Decision Engine", "Brand Cleaner", "Connect AI Copilot"];
const essays = ["AI is not the product", "Dashboards are not decision systems", "Static segmentation is broken"];
const experiments = ["AI product teams", "Intent-led UI generation", "Behavioral offer systems"];
const principles = ["Systems over features", "Decision quality is the product", "Feedback loops compound"];

const assemblyLayers = [
  {
    id: "identity",
    section: "Identity",
    spine: "Signal",
    number: "01",
    thesis: "Identity begins as signal.",
    line: "The work starts where behavior, intent, and tension become visible.",
    cue: "messy inputs",
    chips: ["behavior", "intent", "tension"],
    visual: "signal",
    placement: "left-5 bottom-5 md:left-10 md:bottom-10",
  },
  {
    id: "systems",
    section: "Systems",
    spine: "Decision",
    number: "02",
    thesis: "Signals converge into decisions.",
    line: "Systems give weak evidence enough structure to choose, route, and act.",
    cue: "operational choice",
    chips: systems,
    visual: "decision",
    placement: "right-5 bottom-5 md:right-10 md:bottom-10",
  },
  {
    id: "thinking",
    section: "Thinking",
    spine: "Action",
    number: "03",
    thesis: "Thinking becomes action.",
    line: "Frameworks matter when they change what the system does next.",
    cue: "choice in motion",
    chips: essays,
    visual: "action",
    placement: "left-5 top-5 md:left-10 md:top-10",
  },
  {
    id: "experiments",
    section: "Experiments",
    spine: "Outcome",
    number: "04",
    thesis: "Experiments reveal outcomes.",
    line: "The unfinished edge tests which ideas survive contact with reality.",
    cue: "evidence field",
    chips: experiments,
    visual: "outcome",
    placement: "right-5 top-5 md:right-10 md:top-10",
  },
  {
    id: "philosophy",
    section: "Philosophy",
    spine: "Feedback",
    number: "05",
    thesis: "Feedback sharpens the next signal.",
    line: "The worldview is not decoration. It is the memory that improves the loop.",
    cue: "next signal",
    chips: principles,
    visual: "feedback",
    placement: "left-5 bottom-5 md:left-10 md:bottom-10",
  },
];

function getLayerRange(index) {
  const lastIndex = assemblyLayers.length - 1;

  if (index === 0) {
    return {
      input: [0, 0.18, 0.34],
      opacity: [1, 1, 0],
      y: [0, 0, -52],
      scale: [1, 1, 0.97],
      visual: [1, 1, 0.35],
    };
  }

  if (index === lastIndex) {
    return {
      input: [0.66, 0.82, 1],
      opacity: [0, 1, 1],
      y: [52, 0, 0],
      scale: [0.97, 1, 1],
      visual: [0.35, 1, 1],
    };
  }

  const center = index / lastIndex;

  return {
    input: [center - 0.19, center - 0.08, center + 0.08, center + 0.19],
    opacity: [0, 1, 1, 0],
    y: [52, 0, 0, -52],
    scale: [0.97, 1, 1, 0.97],
    visual: [0.35, 1, 1, 0.35],
  };
}

function scrollToLayer(id) {
  const loop = document.querySelector('[aria-label="Operating loop assembly"]');
  const layerIndex = assemblyLayers.findIndex((layer) => layer.id === id);

  if (id === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (id === "about") {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (loop && layerIndex >= 0) {
    window.scrollTo({ top: loop.offsetTop + window.innerHeight * layerIndex, behavior: "smooth" });
  }
}

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
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.24]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.62), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.26), rgba(26,26,24,0.03))",
        }}
      />
    </>
  );
}

function Texture({ strong = false }) {
  return (
    <div
      aria-hidden="true"
      className={strong ? "pointer-events-none absolute inset-0 opacity-[0.16]" : "pointer-events-none absolute inset-0 opacity-[0.08]"}
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
      className={embedded ? "pointer-events-none absolute inset-0 opacity-[0.2]" : "pointer-events-none absolute inset-0 opacity-[0.28]"}
      style={{
        background: embedded
          ? "linear-gradient(180deg, rgba(26,26,24,0.045), transparent 20%, transparent 72%, rgba(255,255,255,0.28))"
          : "linear-gradient(135deg, rgba(255,255,255,0.58), transparent 32%), linear-gradient(180deg, transparent, rgba(26,26,24,0.04))",
      }}
    />
  );
}

function Nav({ route }) {
  return (
    <div className="sticky top-0 z-40 bg-[#FBF8F0]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <a href="/" onClick={(event) => { event.preventDefault(); navigateTo("/"); }} className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-full border border-[#AFA391]/80 bg-[#EFE9DD]/75 text-[11px] font-semibold text-[#2F4D72] shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
            V
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#171513]">Vipul Deora</div>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {contentNavItems.map((item) => {
            const active = route.path === item.path || route.path.startsWith(`${item.path}/`);

            return (
              <a key={item.path} href={item.path} onClick={(event) => { event.preventDefault(); navigateTo(item.path); }} className={`text-[11px] uppercase tracking-[0.24em] transition hover:text-[#2F4D72] ${active ? "text-[#2F4D72]" : "text-[#5E584F]"}`}>
              {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HeroSignalField({ reduceMotion }) {
  const traceTransition = reduceMotion ? { duration: 0 } : { duration: 4.8, repeat: Infinity, ease: "easeInOut" };
  const pulseTransition = reduceMotion ? { duration: 0 } : { duration: 2.8, repeat: Infinity, ease: "easeInOut" };

  return (
    <div aria-hidden="true" className="absolute inset-y-10 right-[-18%] w-[88%] md:right-[-5%] md:w-[72%]">
      <div className="absolute inset-0 rounded-[3rem] bg-[#F1EBDD]/42 shadow-[0_56px_180px_rgba(26,26,24,0.055),inset_0_1px_0_rgba(255,255,255,0.48)]" />
      <Texture />
      <MaterialLight />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 860 620" fill="none" preserveAspectRatio="xMidYMid slice">
        {[
          "M66 90 C210 120 240 306 430 306 C566 306 602 204 772 190",
          "M40 286 C188 250 278 384 430 306 C560 238 620 346 818 384",
          "M82 528 C198 410 306 420 430 306 C554 192 648 116 842 90",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke={index === 1 ? "#2F4D72" : "#171513"}
            strokeOpacity={index === 1 ? 0.52 : 0.18}
            strokeWidth={index === 1 ? 1.8 : 1.2}
            strokeLinecap="round"
            initial={false}
            animate={reduceMotion ? { pathLength: 1 } : { pathLength: [0.12, 1, 0.24] }}
            transition={{ ...traceTransition, delay: index * 0.35 }}
          />
        ))}
        <circle cx="430" cy="306" r="9" fill="#FBF8F0" stroke="#2F4D72" strokeOpacity="0.84" strokeWidth="1.6" />
        <motion.circle
          cx="430"
          cy="306"
          r="42"
          stroke="#2F4D72"
          strokeOpacity="0.18"
          animate={reduceMotion ? { scale: 1, opacity: 0.4 } : { scale: [0.78, 1.18, 0.78], opacity: [0.22, 0.55, 0.22] }}
          transition={pulseTransition}
          style={{ transformOrigin: "430px 306px" }}
        />
      </svg>
    </div>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative mx-auto min-h-[calc(100svh-4.5rem)] max-w-7xl overflow-hidden px-5 pb-12 pt-8 md:px-10 md:pb-16 md:pt-10">
      <HeroSignalField reduceMotion={reduceMotion} />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.8 }}
        className="relative z-10 flex min-h-[calc(100svh-10.5rem)] max-w-5xl flex-col justify-end pb-10 md:justify-center md:pb-0"
      >
        <div className="max-w-4xl">
          <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2F4D72]">
            <span className="h-px w-10 bg-[#2F4D72]" /> Operational AI / Decision Systems
          </div>
          <h1 className="max-w-3xl text-[4.2rem] font-semibold leading-[0.86] tracking-[-0.07em] text-[#171513] md:text-[7.4rem]">
            Systems for better decisions.
          </h1>
          <a href="#identity" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#2F4D72] underline decoration-[#2F4D72]/32 underline-offset-8 transition hover:text-[#171513]">
            <Waypoints size={16} strokeWidth={1.7} /> Enter the loop
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function SpineStage({ stage, index, progress }) {
  const range = getLayerRange(index);
  const active = useTransform(progress, range.input, range.opacity);
  const inactive = useTransform(active, [0, 1], [1, 0]);
  const scale = useTransform(active, [0.14, 1], [0.88, 1.08]);

  return (
    <div className="relative z-10 grid justify-items-center gap-3">
      <motion.div
        className="relative grid h-9 w-9 place-items-center rounded-full border border-[#171513]/20 bg-[#FBF8F0]/86 shadow-[0_10px_30px_rgba(26,26,24,0.05)]"
        style={{ scale }}
      >
        <motion.div className="absolute inset-1 rounded-full bg-[#2F4D72]" style={{ opacity: active }} />
        <span className="relative text-[10px] font-semibold text-[#171513] mix-blend-multiply">0{index + 1}</span>
      </motion.div>
      <div className="relative text-center">
        <div className="text-[9px] uppercase tracking-[0.22em] text-[#5E584F]">{stage.section}</div>
        <motion.div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#171513]/58" style={{ opacity: inactive }}>{stage.spine}</motion.div>
        <motion.div className="absolute inset-x-0 top-[17px] text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2F4D72]" style={{ opacity: active }}>
          {stage.spine}
        </motion.div>
      </div>
    </div>
  );
}

function AssemblySpine({ progress }) {
  const pathScale = useTransform(progress, [0, 1], [0, 1]);
  const pulseLeft = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-between text-[9px] uppercase tracking-[0.26em] text-[#4F4A43]">
        <span>operating loop</span>
        <span className="text-[#2F4D72]">01—05</span>
      </div>
      <div className="relative rounded-[1.4rem] border border-[#B9AD9B]/62 bg-[#FBF8F0]/66 px-4 py-5 shadow-[0_22px_80px_rgba(26,26,24,0.055),inset_0_1px_0_rgba(255,255,255,0.54)] md:px-7">
        <div className="absolute left-[10%] right-[10%] top-[2.42rem] h-px bg-[#171513]/15" />
        <motion.div className="absolute left-[10%] top-[2.42rem] h-px w-[80%] origin-left bg-[#2F4D72]" style={{ scaleX: pathScale }} />
        <motion.div className="absolute top-[2.13rem] h-2.5 w-2.5 rounded-full bg-[#2F4D72] shadow-[0_0_0_8px_rgba(47,77,114,0.12)]" style={{ left: pulseLeft, x: "-50%" }} />
        <div className="relative grid grid-cols-5 gap-2">
          {assemblyLayers.map((stage, index) => (
            <SpineStage key={stage.id} stage={stage} index={index} progress={progress} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SignalVisual({ progress }) {
  const pathLength = useTransform(progress, [0, 1], [0.18, 1]);
  const signalOpacity = useTransform(progress, [0, 1], [0.26, 0.72]);
  const points = [
    [16, 24],
    [28, 68],
    [42, 38],
    [54, 78],
    [66, 28],
    [78, 58],
    [84, 18],
  ];

  return (
    <>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {points.map(([x, y], index) => (
          <motion.path
            key={`${x}-${y}`}
            d={`M${x} ${y} C${x + 10} ${y - 16}, 42 54, 50 50`}
            stroke="#171513"
            strokeOpacity="0.16"
            strokeWidth="0.22"
            fill="none"
            style={{ pathLength }}
          />
        ))}
      </svg>
      {points.map(([x, y], index) => (
        <motion.div
          key={`${x}-${y}-dot`}
          className="absolute h-2 w-2 rounded-full bg-[#171513]/32"
          style={{ left: `${x}%`, top: `${y}%`, opacity: signalOpacity }}
        />
      ))}
      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2F4D72]/72 bg-[#FBF8F0]" />
    </>
  );
}

function DecisionVisual({ progress }) {
  const pathLength = useTransform(progress, [0, 1], [0.2, 1]);
  const nodeScale = useTransform(progress, [0, 1], [0.82, 1.14]);
  const nodeOpacity = useTransform(progress, [0, 1], [0.2, 0.54]);

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 460" fill="none" preserveAspectRatio="none">
      {[120, 190, 260, 330].map((y, index) => (
        <motion.path
          key={y}
          d={`M80 ${y} C260 ${y - 70}, 320 ${230 + index * 6}, 448 230`}
          stroke="#171513"
          strokeOpacity="0.18"
          strokeWidth="1.2"
          style={{ pathLength }}
        />
      ))}
      <motion.path
        d="M448 230 C568 220 650 170 802 132"
        stroke="#2F4D72"
        strokeOpacity="0.72"
        strokeWidth="2.4"
        strokeLinecap="round"
        style={{ pathLength }}
      />
      <circle cx="448" cy="230" r="12" fill="#FBF8F0" stroke="#2F4D72" strokeWidth="2" />
      <motion.circle cx="448" cy="230" r="54" stroke="#2F4D72" strokeOpacity="0.2" style={{ scale: nodeScale, opacity: nodeOpacity, transformOrigin: "448px 230px" }} />
    </svg>
  );
}

function ActionVisual({ progress }) {
  const spineScale = useTransform(progress, [0, 1], [0.24, 1]);

  return (
    <>
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className="absolute left-[18%] right-[18%] h-16 rounded-[1.1rem] border border-[#B9AD9B]/58 bg-[#FBF8F0]/64 shadow-[0_18px_60px_rgba(26,26,24,0.05)]"
          style={{ top: `${18 + index * 16}%` }}
        >
          <div className={index === 1 ? "mt-7 h-1.5 rounded-full bg-[#2F4D72]/64" : "mt-7 h-1.5 rounded-full bg-[#171513]/18"} style={{ width: `${42 + index * 11}%`, marginLeft: "8%" }} />
        </div>
      ))}
      <motion.div className="absolute left-1/2 top-[18%] h-[58%] w-px origin-top bg-[#2F4D72]/46" style={{ scaleY: spineScale }} />
    </>
  );
}

function OutcomeBar({ height, index, progress }) {
  const liveHeight = useTransform(progress, [0, 1], [`${height * 0.5}%`, `${height}%`]);

  return <motion.div className={index === 3 ? "w-[11%] rounded-t-full bg-[#2F4D72]/58" : "w-[11%] rounded-t-full bg-[#171513]/18"} style={{ height: liveHeight }} />;
}

function OutcomeVisual({ progress }) {
  const ringScale = useTransform(progress, [0, 1], [0.82, 1.12]);
  const ringOpacity = useTransform(progress, [0, 1], [0.16, 0.48]);

  return (
    <>
      <div className="absolute inset-x-[12%] bottom-[18%] flex items-end justify-between">
        {[34, 54, 42, 74, 62].map((height, index) => (
          <OutcomeBar key={height} height={height} index={index} progress={progress} />
        ))}
      </div>
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute left-1/2 top-1/2 rounded-full border border-[#2F4D72]/20"
          style={{ height: `${ring * 9}rem`, width: `${ring * 9}rem`, marginLeft: `${ring * -4.5}rem`, marginTop: `${ring * -4.5}rem`, scale: ringScale, opacity: ringOpacity }}
        />
      ))}
    </>
  );
}

function FeedbackVisual({ progress }) {
  const pathLength = useTransform(progress, [0, 1], [0.22, 1]);
  const ringScale = useTransform(progress, [0, 1], [0.78, 1.14]);
  const ringOpacity = useTransform(progress, [0, 1], [0.18, 0.48]);

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 460" fill="none" preserveAspectRatio="none">
      <motion.path
        d="M250 230 C250 106 650 106 650 230 C650 354 250 354 250 230"
        stroke="#171513"
        strokeOpacity="0.2"
        strokeWidth="1.4"
        style={{ pathLength }}
      />
      <motion.path
        d="M650 230 C650 354 250 354 250 230"
        stroke="#2F4D72"
        strokeOpacity="0.72"
        strokeWidth="2.2"
        strokeLinecap="round"
        style={{ pathLength }}
      />
      <circle cx="250" cy="230" r="10" fill="#FBF8F0" stroke="#171513" strokeOpacity="0.34" />
      <circle cx="650" cy="230" r="12" fill="#FBF8F0" stroke="#2F4D72" strokeWidth="2" />
      <motion.circle cx="650" cy="230" r="42" stroke="#2F4D72" strokeOpacity="0.18" style={{ scale: ringScale, opacity: ringOpacity, transformOrigin: "650px 230px" }} />
    </svg>
  );
}

function AssemblyVisual({ type, progress }) {
  return (
    <div className="absolute inset-0">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.44]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(159,146,126,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(159,146,126,0.13) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {type === "signal" && <SignalVisual progress={progress} />}
      {type === "decision" && <DecisionVisual progress={progress} />}
      {type === "action" && <ActionVisual progress={progress} />}
      {type === "outcome" && <OutcomeVisual progress={progress} />}
      {type === "feedback" && <FeedbackVisual progress={progress} />}
    </div>
  );
}

function AssemblyLayer({ layer, index, progress }) {
  const range = getLayerRange(index);
  const opacity = useTransform(progress, range.input, range.opacity);
  const y = useTransform(progress, range.input, range.y);
  const scale = useTransform(progress, range.input, range.scale);
  const visualProgress = useTransform(progress, range.input, range.visual);

  return (
    <motion.article className="absolute inset-0" style={{ opacity, y, scale }}>
      <div className="relative h-full overflow-hidden rounded-[2rem] border border-[#B9AD9B]/60 bg-[#F1EBDD]/72 shadow-[0_48px_150px_rgba(26,26,24,0.09),inset_0_1px_0_rgba(255,255,255,0.58)]">
        <Texture strong />
        <MaterialLight embedded />
        <AssemblyVisual type={layer.visual} progress={visualProgress} />
        <div className={`absolute max-w-[25rem] rounded-[1.3rem] border border-[#B9AD9B]/58 bg-[#FBF8F0]/82 p-5 shadow-[0_24px_80px_rgba(26,26,24,0.09)] backdrop-blur-sm md:p-6 ${layer.placement}`}>
          <div className="flex items-center justify-between gap-6 text-[9px] uppercase tracking-[0.24em] text-[#4F4A43]">
            <span>{layer.number} / {layer.section}</span>
            <span className="text-[#2F4D72]">{layer.spine}</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-[1] tracking-[-0.045em] text-[#171513] md:text-5xl">{layer.thesis}</h2>
          <p className="mt-5 text-sm leading-6 text-[#3B3731] md:text-base md:leading-7">{layer.line}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {layer.chips.map((chip) => (
              <span key={chip} className="rounded-full bg-[#EFE7D8]/78 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#4F4A43]">
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-5 right-5 hidden text-[9px] uppercase tracking-[0.26em] text-[#4F4A43]/70 md:block">{layer.cue}</div>
      </div>
    </motion.article>
  );
}

function OperatingLoop() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const springProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.2 });
  const progress = reduceMotion ? scrollYProgress : springProgress;

  return (
    <section ref={sectionRef} className="relative z-10 h-[520svh]" aria-label="Operating loop assembly">
      {assemblyLayers.map((layer, index) => (
        <span key={layer.id} id={layer.id} className="absolute left-0 h-px w-px" style={{ top: `${index * 100}svh` }} />
      ))}
      <div className="sticky top-0 h-svh px-5 pb-6 pt-24 md:px-10">
        <div className="mx-auto flex h-full max-w-7xl flex-col">
          <AssemblySpine progress={progress} />
          <div className="relative mt-6 min-h-0 flex-1">
            {assemblyLayers.map((layer, index) => (
              <AssemblyLayer key={layer.id} layer={layer} index={index} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingLayer() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-10 md:pb-16 md:pt-32">
      <div className="relative overflow-hidden rounded-[2.4rem] bg-[#F1EBDD]/70 p-8 shadow-[0_52px_170px_rgba(26,26,24,0.07),inset_0_1px_0_rgba(255,255,255,0.46)] md:p-12">
        <Texture />
        <MaterialLight />
        <div className="relative grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#4F4A43]">
              <Mail size={13} className="text-[#2F4D72]" /> next loop
            </div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#171513] md:text-6xl">
              If the system is worth exploring, the next loop is conversation.
            </h2>
          </div>
          <div className="rounded-[1.5rem] bg-[#FBF8F0]/62 p-6 shadow-[0_18px_60px_rgba(26,26,24,0.035)]">
            <div className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">continue</div>
            <p className="max-w-md text-lg leading-8 text-[#3B3731]">
              Systems, decisions, and operational AI are easier to reason about when the loop is visible.
            </p>
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
  const route = useRoute();
  const isHome = route.path === "/";

  React.useEffect(() => {
    window.requestAnimationFrame(() => {
      if (route.hash) {
        document.getElementById(route.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      window.scrollTo({ top: 0 });
    });
  }, [route.key, route.hash]);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#F7F4ED] font-sans text-[#171513]">
      <PaperBackground />
      <div className="relative z-10">
        <Nav route={route} />
        {isHome ? (
          <>
            <Hero />
            <OperatingLoop />
            <ClosingLayer />
          </>
        ) : (
          <ContentRouter route={route} />
        )}
      </div>
    </main>
  );
}
