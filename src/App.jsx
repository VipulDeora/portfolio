import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PaperBackground, Nav } from "./components/Shared";
import Homepage from "./pages/Homepage";
import { ContentRouter } from "./contentPages";

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
      <main className="relative min-h-screen overflow-x-clip bg-[#F7F4ED] font-sans text-[#171513]">
        <PaperBackground />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Nav />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/*" element={<ContentRouter />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}
