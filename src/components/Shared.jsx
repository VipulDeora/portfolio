import React from "react";
import { Link, useLocation } from "react-router-dom";

export function PaperBackground() {
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

export function Texture({ strong = false }) {
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

export function MaterialLight({ embedded = false }) {
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

export function GridLayer() {
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

const navItems = [
  { label: "Systems", path: "/#systems" },
  { label: "Thinking", path: "/#thinking" },
  { label: "Experiments", path: "/#experiments" },
  { label: "Philosophy", path: "/#philosophy" },
  { label: "About", path: "/about" }
];

export function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="sticky top-0 z-40 bg-[#FBF8F0]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="grid h-8 w-8 place-items-center rounded-full border border-[#AFA391]/80 bg-[#EFE9DD]/75 text-[11px] font-semibold text-[#2F4D72] shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
            V
          </div>
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#171513]">Vipul Deora</div>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isAnchor = item.path.startsWith("/#");
            const href = isAnchor && !isHome ? item.path : item.path.replace("/#", "#");
            
            return isAnchor && isHome ? (
              <a key={item.label} href={href} className="text-[11px] uppercase tracking-[0.24em] text-[#5E584F] transition hover:text-[#2F4D72]">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.path} className="text-[11px] uppercase tracking-[0.24em] text-[#5E584F] transition hover:text-[#2F4D72]">
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export function ContinuousSpine() {
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

export function SectionMark({ number, label, principle, next }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">{number}</div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#4F4A43]">{label}</div>
      <div className="mt-7 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513] md:text-5xl">{principle}</div>
      {next && <div className="mt-7 text-[10px] uppercase leading-5 tracking-[0.22em] text-[#2F4D72]">Next · {next}</div>}
    </div>
  );
}

export function EngravedPanel({ children, label }) {
  return (
    <div className="relative overflow-hidden rounded-[1.8rem] bg-[#EDE6D8]/72 shadow-[inset_0_2px_18px_rgba(26,26,24,0.075),inset_0_-1px_0_rgba(255,255,255,0.48)]">
      <Texture strong />
      <MaterialLight embedded />
      <div className="absolute left-7 top-6 text-[9px] uppercase tracking-[0.26em] text-[#4F4A43]">{label}</div>
      <div className="relative p-7 pt-16 md:p-10 md:pt-16">{children}</div>
    </div>
  );
}

export function RelationalNavigation({ links }) {
  return (
    <div className="mt-20 border-t border-[#B9AD9B]/30 pt-12">
      <div className="text-[10px] uppercase tracking-[0.3em] text-[#4F4A43] mb-8">Conceptual Links</div>
      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <Link key={link.path} to={link.path} className="group relative overflow-hidden rounded-[1rem] bg-[#F1EBDD]/64 p-6 shadow-[0_4px_20px_rgba(26,26,24,0.02)] transition hover:bg-[#EFE9DD]">
            <Texture />
            <div className="relative text-[10px] uppercase tracking-[0.22em] text-[#2F4D72] mb-3">{link.type}</div>
            <div className="relative text-lg font-semibold text-[#171513] group-hover:text-[#2F4D72] transition-colors">{link.title}</div>
            <div className="relative text-sm text-[#4F4A43] mt-2 line-clamp-2">{link.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
