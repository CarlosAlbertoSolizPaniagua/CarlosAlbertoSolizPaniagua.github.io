import { skillsData } from "../../models/skillsData";
import { SkillCard } from "../components/SkillCard";

export function Skills() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto py-20 px-6">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-[#14110F] mb-4">
          Technologies & Tools
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A showcase of languages, frameworks, and databases I work with, built to scale.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
