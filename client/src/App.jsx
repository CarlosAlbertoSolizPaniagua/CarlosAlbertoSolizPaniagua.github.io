import { Routes, Route, useLocation } from "react-router-dom";
import { Skills } from "./views/sections/Skills";
import { Contact } from "./views/sections/Contact";
import { CursorAnimation } from "./views/components/CursorAnimation";
import { StarBackground } from "./views/components/StarBackground";
import { Navbar } from "./views/components/Navbar";
import { CVPage } from "./views/pages/CVPage";
import { AboutPage } from "./views/pages/AboutPage";

/**
 * Main App Component
 * 
 * Handles routing across the application and wraps all global components
 * like Navbar, StarBackground, and CursorAnimation.
 * 
 * @returns {JSX.Element}
 */
function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  return (
    <div className="w-full min-h-screen bg-[#14110F] text-[#F3F3F4] font-sans antialiased overflow-x-hidden relative">
      <Navbar />
      
      <StarBackground />
      {isHomePage && (
        <>
          <CursorAnimation />
        </>
      )}

      <main className="relative z-10 min-h-[calc(100vh-80px)]">
        <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Skills />
                  <Contact />
                </>
              } 
            />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <footer className="relative z-10 w-full py-8 bg-[#14110F] border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Carlos Alberto Soliz Paniagua. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;