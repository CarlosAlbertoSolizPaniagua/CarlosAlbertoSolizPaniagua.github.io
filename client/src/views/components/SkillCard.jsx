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
      className="illuminated-card-wrapper bg-white/5 border border-white/10 shadow-sm p-1 transition-transform hover:-translate-y-1 duration-300"
      style={{
        "--mouse-x": `${position.x}px`,
        "--mouse-y": `${position.y}px`,
      }}
    >
      <div className="illuminated-content h-full w-full p-4 md:p-6 flex flex-col justify-center items-center group cursor-default">
        
        {/* CATEGORIA: Più piccola su mobile (text-xs), normale su desktop (md:text-sm) */}
        <span className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2 font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-white">
          {skill.category}
        </span>
        
        {/* NOME SKILL: Più piccolo su mobile (text-lg), grande su desktop (md:text-xl) */}
        <h3 className="text-lg md:text-xl font-bold text-gray-200 text-center transition-colors duration-300 group-hover:text-white">
          {skill.name}
        </h3>
        
      </div>
    </div>
  );
}