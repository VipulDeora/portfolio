import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { RelationalNavigation } from "../../components/Shared";
import { thinkingData } from "../../data/thinking";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

export default function Essay() {
  const { slug } = useParams();
  const essay = thinkingData[slug];

  if (!essay) {
    return <Navigate to="/#thinking" replace />;
  }

  return (
    <article className="relative mx-auto max-w-3xl px-5 py-24 md:px-10 md:py-32">
      <Link to="/#thinking" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#4F4A43] hover:text-[#2F4D72] transition-colors mb-16">
        <ArrowLeft size={14} /> Back to Thinking
      </Link>
      
      <header className="mb-16">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#2F4D72]">Framework</div>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#171513] md:text-6xl">
          {essay.title}
        </h1>
        <p className="mt-8 text-xl leading-9 text-[#3B3731] font-medium border-l-2 border-[#3D5A80]/30 pl-6">
          {essay.thesis}
        </p>
      </header>

      <div className="prose prose-lg prose-slate max-w-none text-[#171513] prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#171513] prose-p:leading-8 prose-a:text-[#2F4D72] prose-strong:text-[#171513] prose-li:leading-8">
        <ReactMarkdown>{essay.content}</ReactMarkdown>
      </div>

      <RelationalNavigation links={essay.relatedLinks} />
    </article>
  );
}
