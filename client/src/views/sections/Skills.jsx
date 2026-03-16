import { skillsData } from "../../models/skillsData";
import { SkillCard } from "../components/SkillCard";

export function Skills() {
  return (
    // Ho rimosso bg-[#14110F] da qui perché è già gestito dal container principale in App.jsx
    <section id="skills" className="w-full max-w-6xl mx-auto py-20 px-6 relative z-10">
      
      <div className="mb-12 text-center">
        {/* TITOLO: 
            - Font Impact aggiunto per coerenza col resto del sito
            - Dimensioni fluide (3xl su mobile, 5xl su desktop)
            - Colore cambiato in bianco (text-white) per risaltare sul fondo scuro 
        */}
        <h2 className="text-3xl md:text-5xl font-['Impact',_sans-serif] tracking-wide font-normal text-white mb-4">
          Technologies & Tools
        </h2>
        
        {/* SOTTOTITOLO: 
            - Dimensioni fluide (base su mobile, lg su desktop)
            - Colore schiarito (text-gray-400) per essere leggibile sullo sfondo nero 
        */}
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          A showcase of languages, frameworks, and databases I work with, built to scale.
        </p>
      </div>

      {/* LA GRIGLIA: Questa era già perfetta! L'ho lasciata intatta. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
      
    </section>
  );
}