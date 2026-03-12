import { Skills } from "./views/sections/Skills";
import { Contact } from "./views/sections/Contact";
import { CursorAnimation } from "./views/components/CursorAnimation";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#F3F3F4] text-[#14110F] font-sans antialiased overflow-x-hidden">
      <CursorAnimation />

      <main>
        <Skills />
        <Contact />
      </main>

      <footer className="w-full py-8 bg-[#14110F] border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Carlos Alberto Soliz Paniagua. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
