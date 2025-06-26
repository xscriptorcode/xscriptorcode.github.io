"use client";
import Image from "next/image";

const skills = [
  { name: "React", top: "10%", left: "20%", description: "JavaScript library for building user interfaces" },
  { name: "TypeScript", top: "30%", left: "70%", description: "Strongly typed superset of JavaScript" },
  { name: "Node.js", top: "60%", left: "30%", description: "JavaScript runtime for backend development" },
  { name: "Tailwind", top: "50%", left: "60%", description: "Utility-first CSS framework for modern UI" },
  { name: "JavaScript", top: "10%", left: "50%", description: "Core language of the web and interactive UIs" },
  { name: "PHP", top: "22%", left: "30%", description: "Server-side scripting language for web apps" },
  { name: "Bash", top: "10%", left: "30%", description: "Unix shell used for scripting and automation" },
  { name: "Next.js", top: "40%", left: "75%", description: "Full-stack React framework for fast apps" },
  { name: "Framer Motion", top: "65%", left: "55%", description: "React animation library for smooth UI transitions" },
  { name: "Linux", top: "70%", left: "15%", description: "Open-source OS for development and servers" },
  { name: "MySQL", top: "80%", left: "35%", description: "Relational database management system" },
  { name: "React Native", top: "60%", left: "80%", description: "React framework for building native mobile apps" },
  { name: "NoSQL", top: "35%", left: "25%", description: "Schema-less databases for flexible data storage" },
  { name: "WireGuard", top: "25%", left: "80%", description: "Fast, modern VPN protocol for secure networking" },
  { name: "Next.js Routing", top: "45%", left: "50%", description: "Dynamic and static routing in Next.js apps" },
  { name: "Glassmorphism", top: "40%", left: "10%", description: "UI design trend with blur and transparency" },
  { name: "Custom UI", top: "55%", left: "45%", description: "Tailored interfaces built from scratch" },
  { name: "Distributed Teams", top: "80%", left: "50%", description: "Collaboration across locations via remote work" },
  { name: "Cybersecurity (learning)", top: "60%", left: "5%", description: "Exploring security principles and ethical hacking" },
  { name: "En-Es", top: "5%", left: "85%", description: "Bilingual communication: English and Spanish" }
];

export default function SkillNetwork() {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] lg:w-[900px] mx-auto overflow-hidden rounded-2xl">

      <Image
        src="/images/mapa.png"
        alt="Mapa estilizado"
        fill
        className="object-cover grayscale-500 contrast-125 opacity-80 rounded-2xl z-0"
      />

      {/* Líneas entre nodos (solo desde sm hacia arriba) */}
      <svg className="absolute w-full h-full pointer-events-none z-10 hidden sm:block">
        {skills.map((from, i) =>
          skills.map((to, j) => {
            if (i >= j) return null;
            return (
              <line
                key={`${i}-${j}`}
                x1={from.left}
                y1={from.top}
                x2={to.left}
                y2={to.top}
                stroke="yellow"
                strokeOpacity="0.4"
                strokeWidth="1"
                className="animated-line"
              />
            );
          })
        )}
      </svg>

      {/* Nodos visuales (solo en pantallas medianas o más) */}
      <div className="hidden sm:block">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="absolute group flex items-center gap-1 px-2 py-1 text-white text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-sm"
            style={{ top: skill.top, left: skill.left }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>{skill.name}</span>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              {skill.description}
            </div>
          </div>
        ))}
      </div>

      {/* Lista responsiva en móviles */}
      <ul className="flex flex-col gap-2 sm:hidden absolute top-0 left-0 w-full h-full overflow-y-auto p-4 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-inner">
        <h3 className="text-white text-lg font-semibold mb-2">Skills</h3>
        {skills.map((skill, index) => (
          <li
            key={index}
            className="text-white text-sm px-3 py-2 bg-white/10 backdrop-blur rounded-lg border border-white/10"
          >
            <strong>{skill.name}</strong>
            <div className="text-xs text-gray-300">{skill.description}</div>
          </li>
        ))}
      </ul>

      {/* Mensaje final */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-white text-center px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm">
        Collaborating globally through <strong>remote work</strong>
      </div>
    </div>
  );
}
