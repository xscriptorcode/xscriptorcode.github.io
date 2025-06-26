
"use client";
import Image from "next/image";

const skills = [
  { name: "React", top: "10%", left: "20%" },
  { name: "TypeScript", top: "30%", left: "70%" },
  { name: "Node.js", top: "60%", left: "30%" },
  { name: "Tailwind", top: "50%", left: "60%" },
  { name: "Javascript", top: "10%", left: "50%" },
  { name: "php", top: "22%", left: "30%" },
  { name: "bash", top: "10%", left: "30%" },
];

export default function SkillNetwork() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
      <Image
        src="/images/mapa.png"
        alt="Mapa estilizado"
        fill
        className="object-cover grayscale-500 contrast-125 opacity-80 rounded-2xl"
      />
      
      {skills.map((skill, index) => (
        <div
          key={index}
          className="absolute flex items-center gap-1 text-white rounded-xl bg-white/1 backdrop-blur-sm border border-white/20 shadow-sm text-sm"
          style={{ top: skill.top, left: skill.left }}
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>{skill.name}</span>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white text-center px-4 py-2 rounded-xl bg-white/1 backdrop-blur-sm border border-white/20 shadow-sm">
  Collaborating globally through <strong>remote work</strong>
</div>

    </div>
  );
}
