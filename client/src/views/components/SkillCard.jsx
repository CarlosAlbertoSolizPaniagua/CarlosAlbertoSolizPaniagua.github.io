import { useMousePosition } from "../../controllers/useMousePosition";
import { useState, useRef, useEffect } from "react";

export function SkillCard({ skill }) {
  const { x, y } = useMousePosition();
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: x - rect.left,
        y: y - rect.top,
      });
    }
  }, [x, y]);

  return (
    <div 
      ref={cardRef}
      // 1. SFONDO NERO: Ho cambiato bg-white/5 in bg-black per il quadrato esterno
      className="illuminated-card-wrapper bg-black border border-white/10 shadow-sm p-1 transition-transform hover:-translate-y-1 duration-300"
      style={{
        "--mouse-x": `${position.x}px`,
        "--mouse-y": `${position.y}px`,
      }}
    >
      {/* 2. SFONDO NERO INTERNO: Aggiunto bg-black anche al contenitore interno */}
      <div className="illuminated-content bg-black h-full w-full p-4 md:p-6 flex flex-col justify-center items-center group cursor-default">
        
        {/* Categoria (es. Frontend, Backend) - Lasciata grigia per non rubare l'attenzione */}
        <span className="text-gray-500 text-xs md:text-sm mb-1 md:mb-2 font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-gray-300">
          {skill.category}
        </span>
        
        {/* 3. COLORE PLATINUM: Inserito text-[#E5E4E2] per il nome della lingua/tool */}
        <h3 className="text-lg md:text-xl font-bold text-[#E5E4E2] text-center transition-colors duration-300 group-hover:text-white">
          {skill.name}
        </h3>
        
      </div>
    </div>
  );
}