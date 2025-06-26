
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
  { name: "Next.js", top: "40%", left: "75%" },
  { name: "Framer Motion", top: "65%", left: "55%" },
  { name: "Linux", top: "70%", left: "15%" },
  { name: "Ubuntu Server", top: "80%", left: "35%" },
  { name: "React Native", top: "60%", left: "80%" },
  { name: "Gitea", top: "35%", left: "25%" },
  { name: "WireGuard", top: "25%", left: "80%" },
  { name: "Next.js Routing", top: "45%", left: "50%" },
  { name: "Glassmorphism", top: "40%", left: "10%" },
  { name: "Custom UI", top: "55%", left: "45%" },
  { name: "Distributed Teams", top: "90%", left: "50%" },
  { name: "Cybersecurity (learning)", top: "60%", left: "5%" },
  { name: "En-Es", top: "5%", left: "85%" }

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
          className="absolute flex items-center gap-1 px-2 py-1 text-white text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-sm"
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
