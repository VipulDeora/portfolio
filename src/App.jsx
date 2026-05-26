import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PaperBackground, ContinuousSpine, Nav } from "./components/Shared";
import Homepage from "./pages/Homepage";
import CaseStudy from "./pages/systems/CaseStudy";
import Essay from "./pages/thinking/Essay";
import About from "./pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="relative min-h-screen overflow-hidden bg-[#F7F4ED] font-sans text-[#171513]">
        <PaperBackground />
        <ContinuousSpine />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Nav />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/systems/:slug" element={<CaseStudy />} />
              <Route path="/thinking/:slug" element={<Essay />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}
