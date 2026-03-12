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
      className="illuminated-card-wrapper bg-white/50 border border-black/5 shadow-sm p-1 transition-transform hover:-translate-y-1 duration-300"
      style={{
        "--mouse-x": `${position.x}px`,
        "--mouse-y": `${position.y}px`,
      }}
    >
      <div className="illuminated-content h-full w-full p-6 flex flex-col justify-center items-center group cursor-default">
        <span className="text-gray-500 text-sm mb-2 font-medium tracking-wide uppercase transition-colors duration-300 group-hover:text-[#14110F]">
          {skill.category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-[#14110F]">
          {skill.name}
        </h3>
      </div>
    </div>
  );
}
