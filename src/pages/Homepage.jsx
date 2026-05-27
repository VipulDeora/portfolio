import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Texture, MaterialLight, MobileSpine, ContinuousSpine } from "../components/Shared";
import { systemsData } from "../data/systems";

function Hero() {
  return (
    <section className="relative mx-auto min-h-[90vh] max-w-7xl px-5 pt-32 pb-24 md:px-10 flex flex-col justify-center">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes pulse-flow {
          0%, 100% { opacity: 0.3; transform: scaleY(0.98); }
          50% { opacity: 0.8; transform: scaleY(1.02); }
        }
      `}</style>

      {/* The Spine Motif */}
      <div className="absolute top-[65vh] bottom-0 left-5 md:left-[10%] w-px bg-gradient-to-b from-[#2F4D72] via-[#2F4D72]/60 to-transparent flex flex-col items-center justify-between py-8 hidden md:flex" style={{ animation: 'pulse-flow 3s ease-in-out infinite', transformOrigin: 'top' }}>
        <div className="w-1.5 h-1.5 rounded-full bg-[#2F4D72] -translate-y-1" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#2F4D72]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#2F4D72] translate-y-1" />
      </div>

      <div className="max-w-4xl opacity-0 hero-animate relative z-10 md:ml-[15%]">
        <div className="mb-9 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2F4D72]">
          <span className="h-px w-12 bg-[#2F4D72]" /> operational ai / decision systems
        </div>
        <h1 className="text-5xl font-semibold leading-[1] tracking-[-0.045em] text-[#171513] md:text-7xl lg:text-[5.5rem] md:leading-[0.94]">
          I design systems for better decisions.
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-[#332F2A] md:text-2xl md:leading-10">
          Turning messy signals into clearer action across AI, data, and operational workflows.
        </p>
      </div>
      <div className="absolute bottom-10 left-5 md:left-[15%] text-[10px] uppercase tracking-[0.3em] text-[#4F4A43] animate-pulse">
        Follow the signal ↓
      </div>
    </section>
  );
}

// --------------------------------------------------------
// PROOF BRIDGE (IMPACT METRICS)
// --------------------------------------------------------

function ProofBridge() {
  const proofs = [
    {
      metric: "5x",
      description: "improvement in transaction frequency via behavioral recommendation models.",
      source: systemsData["portfolio-growth-engine"].name,
      link: "/systems/portfolio-growth-engine"
    },
    {
      metric: "₹1.2Cr",
      description: "saved in projected implementation costs via a primitives + tenets framework for AI-assisted product development.",
      source: "AI Product Frameworks",
      link: "/#experiments" 
    },
    {
      metric: "75%",
      description: "reduction in implementation turnaround time through AI-enabled workflow automation.",
      source: systemsData["connect-ai-copilot"].name,
      link: "/systems/connect-ai-copilot" // Placeholder for now
    }
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 z-20">
      <div className="md:ml-[15%] max-w-3xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-[#171513] md:text-4xl">
            Systems only matter if they change the outcome. 
            <span className="text-[#8F8778]"> Theory without execution is just noise.</span>
          </h2>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-1">
          {proofs.map((proof, i) => (
            <div key={i} className="relative group">
              {/* Connecting node to spine */}
              <div className="hidden md:block absolute -left-[5.88%] top-5 w-[5.88%] h-px bg-[#3D5A80]/30 transition-all duration-300 group-hover:bg-[#2F4D72]" />
              <div className="hidden md:block absolute -left-[5.88%] top-5 w-2 h-2 rounded-full border border-[#2F4D72] bg-[#F7F4ED] -translate-x-1 -translate-y-1/2 transition-transform duration-300 group-hover:scale-150" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="grid md:grid-cols-[120px_1fr] gap-6 items-start"
              >
                <div className="text-4xl font-semibold tracking-[-0.04em] text-[#2F4D72]">
                  {proof.metric}
                </div>
                <div>
                  <p className="text-lg leading-7 text-[#171513] mb-4">
                    {proof.description}
                  </p>
                  <Link to={proof.link} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8F8778] hover:text-[#171513] transition-colors">
                    Proof: {proof.source} <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// ASSEMBLY LINE SPATIAL LOGIC
// --------------------------------------------------------

function AssemblySpine({ activeStep, setActiveStep }) {
  const steps = ["Signal", "Decision", "Action", "Outcome", "Feedback"];
  
  return (
    <div className="relative z-20 px-5 md:px-10 max-w-7xl mx-auto w-full overflow-x-auto pb-6 -mb-6 snap-x">
      <div className="relative flex justify-between items-center w-full min-w-[600px] md:min-w-full px-2">
        {/* Static Background Line */}
        <div className="absolute left-0 right-0 h-px bg-[#3D5A80]/20 top-1/2 -translate-y-1/2 z-0" />
        
        {/* Active Progress Line */}
        <div 
          className="absolute left-0 h-px bg-[#2F4D72] top-1/2 -translate-y-1/2 z-0 transition-all duration-700 ease-in-out"
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isPast = index < activeStep;
          
          return (
            <button 
              key={step} 
              onClick={() => setActiveStep(index)}
              className={`relative z-10 px-4 py-2 border rounded-full transition-all duration-500 ease-out flex items-center justify-center cursor-pointer
                ${isActive 
                  ? 'bg-[#F7F4ED] border-[#2F4D72] shadow-[0_4px_20px_rgba(47,77,114,0.15)] scale-110' 
                  : isPast 
                    ? 'bg-[#EFE9DD] border-[#2F4D72]/40 scale-100 hover:border-[#2F4D72]/80' 
                    : 'bg-[#F7F4ED] border-[#B9AD9B]/50 scale-95 opacity-60 hover:opacity-100 hover:scale-100'
                }
              `}
            >
              <div className={`text-[10px] uppercase tracking-[0.25em] font-semibold transition-colors duration-500 ${isActive ? 'text-[#171513]' : 'text-[#4F4A43]'}`}>
                {step}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// --------------------------------------------------------
// THE LAYER COMPONENTS (VISUAL METAPHORS)
// --------------------------------------------------------

function LayerSignal() {
  const signalsRef = useRef(null);
  if (!signalsRef.current) {
    signalsRef.current = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 400,
      y: Math.random() * 400,
      dur: 2 + Math.random() * 3,
      del: Math.random() * 3
    }));
  }
  const signals = signalsRef.current;

  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <style>{`
        @keyframes signal-pulse {
          0%, 100% { transform: scale(0.9); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.8; box-shadow: 0 0 6px rgba(47,77,114,0.2); }
        }
      `}</style>
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 max-w-7xl px-5 md:px-10 items-center w-full">
        <div className="relative h-[300px] md:h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden">
          <Texture />
          {signals.map((sig, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#2F4D72] rounded-full"
              style={{ 
                left: sig.x, top: sig.y, 
                animation: `signal-pulse ${sig.dur}s ease-in-out infinite`,
                animationDelay: `${sig.del}s` 
              }}
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
    </div>
  );
}

function LayerDecision() {
  const linesRef = useRef(null);
  if (!linesRef.current) {
    linesRef.current = Array.from({ length: 16 }).map(() => ({
      x1: Math.random() > 0.5 ? (Math.random() > 0.5 ? -50 : 450) : Math.random() * 400,
      y1: Math.random() > 0.5 ? (Math.random() > 0.5 ? -50 : 450) : Math.random() * 400,
      delay: Math.random() * 2
    }));
  }
  const lines = linesRef.current;

  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <style>{`
        @keyframes converge {
          0% { stroke-dashoffset: 200; opacity: 0; }
          20% { opacity: 1; }
          80% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes pulse-core {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(47,77,114,0.2); }
          50% { transform: scale(1.15); box-shadow: 0 0 50px rgba(47,77,114,0.6); }
        }
      `}</style>
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 max-w-7xl px-5 md:px-10 items-center w-full">
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
        <div className="relative h-[300px] md:h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden flex items-center justify-center">
          <Texture />
          <div className="absolute inset-0">
             <svg className="w-full h-full" viewBox="0 0 400 400">
               {lines.map((l, i) => (
                 <line
                   key={i}
                   x1={l.x1}
                   y1={l.y1}
                   x2="200"
                   y2="200"
                   stroke="#3D5A80"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeDasharray="4 200"
                   strokeDashoffset="200"
                   style={{ 
                     animation: `converge 2.5s ease-in infinite`,
                     animationDelay: `${l.delay}s`
                   }}
                 />
               ))}
             </svg>
          </div>
          <div className="relative z-10 w-24 h-24 bg-[#EFE9DD] border-2 border-[#2F4D72] rounded-2xl flex items-center justify-center" style={{ animation: 'pulse-core 2.5s ease-in-out infinite' }}>
             <div className="w-8 h-8 bg-[#2F4D72] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LayerAction() {
  const pathsRef = useRef(null);
  if (!pathsRef.current) {
    pathsRef.current = Array.from({ length: 6 }).map((_, i) => {
      // Distribute evenly in a circle, with slight random jitter
      const angle = (i / 6) * Math.PI * 2 + (Math.random() * 0.4 - 0.2); 
      const distance = 350; // Extend well past the edges
      
      // End point
      const x2 = 200 + Math.cos(angle) * distance;
      const y2 = 200 + Math.sin(angle) * distance;
      
      // First control point (1/3rd out, pushed to one side)
      const r1 = distance * 0.33;
      const angle1 = angle + 0.6; // Bends left
      const cx1 = 200 + Math.cos(angle1) * r1;
      const cy1 = 200 + Math.sin(angle1) * r1;

      // Second control point (2/3rds out, pushed to the opposite side)
      const r2 = distance * 0.66;
      const angle2 = angle - 0.6; // Bends right
      const cx2 = 200 + Math.cos(angle2) * r2;
      const cy2 = 200 + Math.sin(angle2) * r2;

      return {
        d: `M 200 200 C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`,
        delay: Math.random() * 4,
        dur: 8 + Math.random() * 4 // Extremely slow, 8-12 seconds
      };
    });
  }
  const paths = pathsRef.current;

  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <style>{`
        @keyframes flow-fluid {
          0% { stroke-dashoffset: 400; opacity: 0; stroke-width: 3; }
          20% { opacity: 0.8; }
          50% { stroke-dashoffset: 0; stroke-width: 2; opacity: 0.6; }
          80% { opacity: 0.4; }
          100% { stroke-dashoffset: -400; opacity: 0; stroke-width: 1; }
        }
      `}</style>
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 max-w-7xl px-5 md:px-10 items-center w-full">
        <div className="relative h-[300px] md:h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden flex items-center justify-center">
          <Texture />
          <div className="absolute inset-0">
             <svg className="w-full h-full" viewBox="0 0 400 400">
               {paths.map((p, i) => (
                 <path
                   key={i}
                   d={p.d}
                   stroke="#2F4D72"
                   strokeOpacity="0.8"
                   fill="none"
                   strokeDasharray="400 400"
                   strokeDashoffset="400"
                   strokeLinecap="round"
                   style={{ 
                     animation: `flow-fluid ${p.dur}s ease-in-out infinite`,
                     animationDelay: `${p.delay}s`
                   }}
                 />
               ))}
             </svg>
          </div>
          <div className="relative z-10 w-16 h-16 bg-[#2F4D72] rounded-full shadow-[0_0_40px_rgba(47,77,114,0.6)] flex items-center justify-center">
            <div className="w-6 h-6 bg-[#F7F4ED]/50 rounded-full animate-pulse" />
          </div>
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
    </div>
  );
}

function LayerOutcome() {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 max-w-7xl px-5 md:px-10 items-center w-full">
        <div className="max-w-md pointer-events-auto">
          <div className="text-[10px] uppercase tracking-[0.26em] text-[#2F4D72] mb-4">Experiments</div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513]">
            Action yields outcomes.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4F4A43]">
            The unfinished edge matters. Experiments are where ideas are stress-tested before becoming architecture.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden flex items-center justify-center">
          <Texture />
          <div className="grid grid-cols-2 gap-8 z-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <div 
                key={i}
                className="w-24 h-24 border-2 border-[#3D5A80]/40 rounded-xl bg-[#EFE9DD] flex items-center justify-center animate-pulse"
                style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}
              >
                <div className={`w-8 h-8 ${i % 2 === 0 ? 'rounded-full' : 'rounded-md'} bg-[#2F4D72]`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LayerFeedback() {
  return (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 max-w-7xl px-5 md:px-10 items-center w-full">
        <div className="relative h-[300px] md:h-[400px] w-full border border-[#B9AD9B]/30 rounded-3xl bg-[#FBF8F0]/40 overflow-hidden flex items-center justify-center">
          <Texture />
          <svg className="w-full h-full" viewBox="0 0 400 400">
             <path
               d="M 100 200 A 100 100 0 1 1 300 200 A 100 100 0 1 1 100 200"
               stroke="#2F4D72"
               strokeWidth="4"
               strokeOpacity="0.8"
               fill="none"
             />
             <circle cx="300" cy="200" r="8" fill="#171513" 
                style={{ transformOrigin: "200px 200px", animation: "orbit 4s linear infinite" }}
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
    </div>
  );
}

// --------------------------------------------------------
// THE INTERACTIVE ASSEMBLY LINE
// --------------------------------------------------------

function AssemblyLine() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-20%" });

  useEffect(() => {
    if (!isInView) return;
    
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeStep, isInView]);

  const layers = [
    <LayerSignal key="signal" />,
    <LayerDecision key="decision" />,
    <LayerAction key="action" />,
    <LayerOutcome key="outcome" />,
    <LayerFeedback key="feedback" />
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-[#F7F4ED] z-10 flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto w-full px-5 md:px-10 mb-16 md:ml-[15%]"
      >
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#4F4A43] mb-4">The Assembly Line</h2>
        <p className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-[#171513] max-w-2xl">
          This is how the system operates. Click the nodes below to trace the loop from signal to feedback.
        </p>
      </motion.div>

      <AssemblySpine activeStep={activeStep} setActiveStep={setActiveStep} />
      
      <div className="relative w-full h-[750px] md:h-[600px] mt-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(4px)", y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {layers[activeStep]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// CLOSING SECTION
// --------------------------------------------------------

function ClosingLayer() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pt-24 md:px-10 z-20">
      
      <div className="relative overflow-hidden rounded-[2.4rem] bg-[#F1EBDD]/68 p-8 shadow-[0_52px_170px_rgba(26,26,24,0.055),inset_0_1px_0_rgba(255,255,255,0.42)] md:p-12 mt-10 md:ml-[15%] max-w-7xl mx-auto z-10">
        <Texture />
        <MaterialLight />
        <div className="relative grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#171513] md:text-6xl">
              If this kind of system is worth exploring, the next loop is conversation.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-5"
          >
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
              <a href="mailto:hello@vipuldeora.com" className="text-center rounded-full bg-[#2F4D72] px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-[#F7F4ED] font-semibold hover:bg-[#203650] shadow-[0_8px_20px_rgba(47,77,114,0.25)] transition-all hover:shadow-[0_8px_25px_rgba(47,77,114,0.4)] hover:-translate-y-0.5">
                Reach Out
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative w-full bg-[#2F4D72] py-12 px-5 md:px-10 z-30 overflow-hidden">
      <style>{`
        @keyframes footer-radial-ripple {
          0%, 87% { opacity: 0; transform: translate(-50%, -50%) scale(0.1); }
          89% { opacity: 0.8; transform: translate(-50%, -50%) scale(0.3); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(4); }
        }
      `}</style>
      
      {/* Container to match SVG boundaries for perfect alignment */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none">
        {/* The radial light pulse spreading from the point of impact (x=1050/1200 = 87.5%) */}
        <div 
          className="absolute top-0 left-[87.5%] w-[800px] h-[800px] mix-blend-screen" 
          style={{ 
            background: 'radial-gradient(circle, rgba(166,192,217,0.3) 0%, rgba(166,192,217,0) 65%)',
            animation: 'footer-radial-ripple 7s infinite cubic-bezier(0.2, 0.8, 0.2, 1)' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto md:ml-[15%] relative z-10">
        <div className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.26em] text-[#A6C0D9] md:flex-row md:items-center md:justify-between">
          <div className="text-[#F7F4ED] font-semibold opacity-90">Vipul Deora / Decision Systems</div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
            <a href="https://linkedin.com/in/vipul-deora-a80394145" target="_blank" rel="noreferrer" className="text-[#F7F4ED] font-bold border-b border-[#F7F4ED]/30 pb-0.5 hover:text-white hover:border-white transition-colors">
              LinkedIn
            </a>
            <a href="tel:+918447403937" className="hover:text-[#F7F4ED] transition-colors">+91 8447403937</a>
            <a href="mailto:vipuldeora95@gmail.com" className="hover:text-[#F7F4ED] transition-colors">vipuldeora95@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
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
      <ContinuousSpine />
      <MobileSpine />
      <Hero />
      <ProofBridge />
      <AssemblyLine />
      <ClosingLayer />
      <Footer />
    </>
  );
}
