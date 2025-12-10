"use client";

import React, { useState, useEffect } from "react";


type Star = {
  id: number;
  top: number;
  left: number;
  size: number;        
  color: string;
  blinkSpeed: string;
  delay: string;
};

export default function Stars() {
  const stars: Star[] = [
    { id: 1, top: 1, left: 2, size: 2, color: "#ffffff", blinkSpeed: "1.5s", delay: "0.3s" },
    { id: 2, top: 2, left: 6, size: 2, color: "#cbe8ff", blinkSpeed: "2.2s", delay: "1.1s" },
    { id: 3, top: 2, left: 25, size: 3, color: "#a7d4ff", blinkSpeed: "1.8s", delay: "0.6s" },
    { id: 4, top: 1, left: 50, size: 1.5, color: "#ffffff", blinkSpeed: "1.3s", delay: "0.9s" },
    { id: 5, top: 21, left: 35, size: 2, color: "#b0e0ff", blinkSpeed: "2.0s", delay: "0.5s" },
    { id: 6, top: 22, left: 95, size: 2, color: "#ffffff", blinkSpeed: "1.7s", delay: "0.8s" },
    { id: 7, top: 25, left: 60, size: 3, color: "#cceeff", blinkSpeed: "2.5s", delay: "1.2s" },
    { id: 8, top: 38, left: 20, size: 2, color: "#ffffff", blinkSpeed: "1.6s", delay: "0.4s" },
    { id: 9, top: 42, left: 82, size: 2.5, color: "#aee0ff", blinkSpeed: "1.9s", delay: "0.7s" },
    { id: 10, top: 46, left: 50, size: 3.2, color: "#ffffff", blinkSpeed: "2.3s", delay: "1.0s" },
    { id: 11, top: 42, left: 25, size: 1.8, color: "#d0f0ff", blinkSpeed: "1.4s", delay: "0.2s" },
    { id: 12, top: 26, left: 70, size: 3, color: "#ffffff", blinkSpeed: "2.1s", delay: "0.6s" },
    { id: 13, top: 20, left: 15, size: 2, color: "#b8e4ff", blinkSpeed: "1.9s", delay: "0.9s" },
    { id: 14, top: 36, left: 30, size: 1.9, color: "#ffffff", blinkSpeed: "1.7s", delay: "0.8s" },
    { id: 15, top: 22, left: 18, size: 2.5, color: "#bdefff", blinkSpeed: "2.0s", delay: "0.4s" },
  ];
  const [shootingStars, setShootingStars] = useState<{ id: number; top: string; left: string }[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const interval = setInterval(() => {
      idCounter++;
      const top = `${Math.random() * 50 + 10}%`;   // random vertical start
      const left = `${Math.random() * 50 + 10}%`;  // random horizontal start

      // Add a new shooting star
      setShootingStars((prev) => [...prev, { id: idCounter, top, left }]);

      // Remove the star after animation duration (1.5s)
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((star) => star.id !== idCounter));
      }, 1500);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="rounded-full blink-star star-glow"
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`, // width = height
            backgroundColor: star.color,
            animationDuration: star.blinkSpeed,
            animationDelay: star.delay,
          }}
        />
      ))}
        {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{ top: star.top, left: star.left }}
        />
      ))}
    </div>
  );
}
