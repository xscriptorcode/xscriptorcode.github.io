"use client";

import { useEffect, useState } from "react";

type Bubble = {
  id: number;
  top: string;
  left: string;
  size: string;
  color: string;
  blur: string;
  opacity: string;
  animationDuration: string;
};

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateBubble = (id: number): Bubble => ({
  id,
  top: `${getRandom(0, 90)}%`,
  left: `${getRandom(0, 90)}%`,
  size: `${getRandom(50, 150)}px`,
  color: ["bg-yellow-300", "bg-purple-400", "bg-green-300", "bg-pink-400", "bg-blue-400"][getRandom(0, 4)],
  blur: ["blur-xl", "blur-lg"][getRandom(0, 1)],
  opacity: ["opacity-10", "opacity-20"][getRandom(0, 1)],
  animationDuration: `${getRandom(6, 10)}s`,
});

export default function Burbujas({ count = 6 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const initial = Array.from({ length: count }).map((_, i) => generateBubble(i));
    setBubbles(initial);
  }, [count]);

  const handleAnimationEnd = (id: number) => {
    setBubbles((prev) =>
      prev.map((b) => (b.id === id ? generateBubble(id) : b))
    );
  };

  return (
    <>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          onAnimationEnd={() => handleAnimationEnd(bubble.id)}
          className={`absolute rounded-full ${bubble.color} ${bubble.blur} ${bubble.opacity} z-0 pointer-events-none`}
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animation: `fadeInOut ${bubble.animationDuration} ease-in-out`,
          }}
        />
      ))}
    </>
  );
}
