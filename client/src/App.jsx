import { Skills } from "./views/sections/Skills";
import { Contact } from "./views/sections/Contact";
import { CursorAnimation } from "./views/components/CursorAnimation";
import { StarBackground } from "./views/components/StarBackground"; // Assicurati che il percorso sia giusto
import { Navbar } from "./views/components/Navbar";

function App() {
  return (
    // Ho cambiato il background in scuro e il testo in chiaro
    <div className="w-full min-h-screen bg-[#14110F] text-[#F3F3F4] font-sans antialiased overflow-x-hidden relative">
      <Navbar />
      
      {/* Sfondo stellato fisso in background (z-0) */}
      <StarBackground />

      {/* Cursore interattivo */}
      <CursorAnimation />

      {/* Il contenuto del tuo sito, portato in primo piano rispetto alle stelle */}
      <main className="relative z-10">
        <Skills />
        <Contact />
      </main>

      <footer className="relative z-10 w-full py-8 bg-[#14110F] border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Carlos Alberto Soliz Paniagua. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;