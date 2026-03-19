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
      className="illuminated-card-wrapper bg-white border border-gray-200 shadow-sm p-1 transition-transform hover:-translate-y-1 duration-300"
      style={{
        "--mouse-x": `${position.x}px`,
        "--mouse-y": `${position.y}px`,
      }}
    >
      <div className="illuminated-content bg-white h-full w-full p-4 md:p-6 flex flex-col justify-center items-center group cursor-default">

        <span className="text-gray-500 text-xs md:text-sm mb-1 md:mb-2 font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-gray-700">
          {skill.category}
        </span>

        <h3 className="text-lg md:text-xl font-bold text-black text-center transition-colors duration-300 group-hover:text-gray-800">
          {skill.name}
        </h3>

      </div>
    </div>
  );
}