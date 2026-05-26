import React, { useRef, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Texture, MaterialLight } from "../components/Shared";

function Hero() {
  return (
    <section className="relative mx-auto min-h-[80vh] max-w-7xl px-5 pt-32 pb-10 md:px-10 flex flex-col justify-center">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
        <div className="mb-9 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2F4D72]">
          <span className="h-px w-12 bg-[#2F4D72]" /> operational ai / decision systems
        </div>
        <h1 className="text-6xl font-semibold leading-[0.94] tracking-[-0.045em] text-[#171513] md:text-7xl lg:text-[5.5rem]">
          I design systems for better decisions.
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-[#332F2A] md:text-2xl md:leading-10">
          Turning messy signals into clearer action across AI, data, and operational workflows.
        </p>
      </motion.div>
      <div className="absolute bottom-10 left-5 md:left-10 text-[10px] uppercase tracking-[0.3em] text-[#4F4A43] animate-pulse">
        Scroll to enter system ↓
      </div>
    </section>
  );
}

// --------------------------------------------------------
// ASSEMBLY LINE SPATIAL LOGIC
// --------------------------------------------------------

function AssemblySpine({ scrollYProgress }) {
  const steps = ["Signal", "Decision", "Action", "Outcome", "Feedback"];
  
  return (
    <div className="absolute top-12 left-0 right-0 z-20 px-5 md:px-10 max-w-7xl mx-auto">
      <div className="relative flex justify-between items-center">
        {/* Animated Background Line */}
        <div className="absolute left-0 right-0 h-px bg-[#3D5A80]/20 top-1/2 -translate-y-1/2 z-0" />
        
        {/* Progress Line */}
        <motion.div 
          className="absolute left-0 h-px bg-[#2F4D72] top-1/2 -translate-y-1/2 z-0"
          style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />

        {steps.map((step, index) => {
          const stepStart = index * 0.2;
          const stepEnd = (index + 1) * 0.2;
          
          const opacity = useTransform(
            scrollYProgress,
            [stepStart - 0.1, stepStart, stepEnd, stepEnd + 0.1],
            [0.3, 1, 1, 0.3]
          );

          const scale = useTransform(
            scrollYProgress,
            [stepStart - 0.1, stepStart, stepEnd, stepEnd + 0.1],
            [1, 1.1, 1.1, 1]
          );

          return (
            <motion.div 
              key={step} 
              className="relative z-10 bg-[#F7F4ED] px-4 py-2 border border-[#B9AD9B]/50 rounded-full shadow-[0_4px_20px_rgba(26,26,24,0.02)]"
              style={{ opacity, scale }}
            >
              <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#171513]">
                {step}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// --------------------------------------------------------
// THE LAYER COMPONENTS (VISUAL METAPHORS)
// --------------------------------------------------------

function LayerSignal({ progress }) {
  const opacity = useTransform(progress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y = useTransform(progress, [0, 0.05, 0.15, 0.2], [50, 0, 0, -50]);
  
  const signals = useMemo(() => Array.from({ length: 40 }).map(() => ({
    x: Math.random() * 400,
    y: Math.random() * 400,
    duration: 3 + Math.random() * 2
  })), []);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="grid md:grid-cols-2 gap-20 max-w-7xl px-10 items-center w-full">
        <div className="relative h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden">
          <Texture />
          {signals.map((sig, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#2F4D72] rounded-full"
              style={{ left: sig.x, top: sig.y }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: sig.duration, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
        <div className="max-w-md pointer-events-auto">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72] mb-4">Identity</div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513]">
            The world is messy. Signals are scattered.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4F4A43]">
            Before architecture, there is observation. Finding the behavioral signal in the noise.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function LayerDecision({ progress }) {
  const opacity = useTransform(progress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.15, 0.2, 0.35, 0.4], [50, 0, 0, -50]);

  const lines = useMemo(() => Array.from({ length: 12 }).map(() => ({
    x1: Math.random() > 0.5 ? 0 : 400,
    y1: Math.random() * 400
  })), []);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="grid md:grid-cols-2 gap-20 max-w-7xl px-10 items-center w-full">
        <div className="max-w-md pointer-events-auto">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72] mb-4">Systems</div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513]">
            Signals converge into decisions.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4F4A43]">
            Operational systems turn ambiguity into a decision model. Proof is architectural.
          </p>
          <Link to="/systems/portfolio-growth-engine" className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2F4D72] hover:text-[#171513]">
            Explore Architecture <ArrowRight size={14}/>
          </Link>
        </div>
        <div className="relative h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden flex items-center justify-center">
          <Texture />
          <div className="absolute inset-0">
             <svg className="w-full h-full" viewBox="0 0 400 400">
               {lines.map((l, i) => (
                 <motion.line
                   key={i}
                   x1={l.x1}
                   y1={l.y1}
                   x2="200"
                   y2="200"
                   stroke="#3D5A80"
                   strokeWidth="1.5"
                   strokeOpacity="0.3"
                   strokeDasharray="4 4"
                   initial={{ strokeDashoffset: 100 }}
                   animate={{ strokeDashoffset: 0 }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 />
               ))}
             </svg>
          </div>
          <div className="relative z-10 w-24 h-24 bg-[#EFE9DD] border-2 border-[#2F4D72] rounded-2xl shadow-[0_0_40px_rgba(47,77,114,0.2)] flex items-center justify-center">
             <motion.div 
                className="w-8 h-8 bg-[#2F4D72] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LayerAction({ progress }) {
  const opacity = useTransform(progress, [0.35, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.35, 0.4, 0.55, 0.6], [50, 0, 0, -50]);

  const paths = useMemo(() => Array.from({ length: 8 }).map(() => {
    return `M 200 200 Q ${Math.random() * 400} ${Math.random() * 400} ${Math.random() > 0.5 ? 0 : 400} ${Math.random() > 0.5 ? 0 : 400}`;
  }), []);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="grid md:grid-cols-2 gap-20 max-w-7xl px-10 items-center w-full">
        <div className="relative h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden flex items-center justify-center">
          <Texture />
          <div className="absolute inset-0">
             <svg className="w-full h-full" viewBox="0 0 400 400">
               {paths.map((d, i) => (
                 <motion.path
                   key={i}
                   d={d}
                   stroke="#2F4D72"
                   strokeWidth="2"
                   strokeOpacity="0.6"
                   fill="none"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.2 }}
                 />
               ))}
             </svg>
          </div>
          <div className="relative z-10 w-16 h-16 bg-[#2F4D72] rounded-full shadow-[0_0_30px_rgba(47,77,114,0.4)]" />
        </div>
        <div className="max-w-md pointer-events-auto">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72] mb-4">Thinking</div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513]">
            Decisions trigger action.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4F4A43]">
            Frameworks should not float above reality. They explain what operational systems execute.
          </p>
          <Link to="/thinking/ai-is-not-the-product" className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2F4D72] hover:text-[#171513]">
            Read Thinking <ArrowRight size={14}/>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function LayerOutcome({ progress }) {
  const opacity = useTransform(progress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.55, 0.6, 0.75, 0.8], [50, 0, 0, -50]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="grid md:grid-cols-2 gap-20 max-w-7xl px-10 items-center w-full">
        <div className="max-w-md pointer-events-auto">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72] mb-4">Experiments</div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513]">
            Action yields outcomes.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4F4A43]">
            The unfinished edge matters. Experiments are where ideas are stress-tested before becoming architecture.
          </p>
        </div>
        <div className="relative h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden flex items-center justify-center">
          <Texture />
          <div className="grid grid-cols-2 gap-8 z-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div 
                key={i}
                className="w-24 h-24 border-2 border-[#3D5A80]/40 rounded-xl bg-[#EFE9DD] flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className={`w-8 h-8 ${i % 2 === 0 ? 'rounded-full' : 'rounded-md'} bg-[#2F4D72]`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LayerFeedback({ progress }) {
  const opacity = useTransform(progress, [0.75, 0.8, 1], [0, 1, 1]); // Stays visible at end
  const y = useTransform(progress, [0.75, 0.8, 1], [50, 0, 0]);

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="grid md:grid-cols-2 gap-20 max-w-7xl px-10 items-center w-full">
        <div className="relative h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden flex items-center justify-center">
          <Texture />
          <svg className="w-full h-full" viewBox="0 0 400 400">
             <motion.path
               d="M 100 200 A 100 100 0 1 1 300 200 A 100 100 0 1 1 100 200"
               stroke="#2F4D72"
               strokeWidth="4"
               strokeOpacity="0.8"
               fill="none"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, ease: "easeInOut" }}
             />
             <motion.circle cx="300" cy="200" r="8" fill="#171513" 
                style={{ transformOrigin: "200px 200px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             />
          </svg>
        </div>
        <div className="max-w-md pointer-events-auto">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72] mb-4">Philosophy</div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513]">
            Outcomes feed the system.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4F4A43]">
            Feedback loops compound. The worldview underneath the work is that systems must learn from their own momentum.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2F4D72] hover:text-[#171513]">
            Read the Human Layer <ArrowRight size={14}/>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------------
// THE STICKY ASSEMBLY LINE
// --------------------------------------------------------

function AssemblyLine() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#F7F4ED]">
        <AssemblySpine scrollYProgress={scrollYProgress} />
        
        <div className="relative w-full h-full mt-10">
          <LayerSignal progress={scrollYProgress} />
          <LayerDecision progress={scrollYProgress} />
          <LayerAction progress={scrollYProgress} />
          <LayerOutcome progress={scrollYProgress} />
          <LayerFeedback progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// CLOSING SECTION
// --------------------------------------------------------

function ClosingLayer() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-32 md:px-10 md:pb-16 z-20 bg-[#F7F4ED]">
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
              <Link to="/systems/portfolio-growth-engine" className="text-center rounded-full bg-[#FBF8F0]/48 px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-[#4F4A43] hover:bg-[#FBF8F0]/80 transition">
                Deep Dive
              </Link>
              <Link to="/thinking/ai-is-not-the-product" className="text-center rounded-full bg-[#FBF8F0]/48 px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-[#4F4A43] hover:bg-[#FBF8F0]/80 transition">
                Read Essays
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
      <AssemblyLine />
      <ClosingLayer />
    </>
  );
}
