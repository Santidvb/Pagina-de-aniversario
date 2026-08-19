import React, { useMemo } from 'react';
import './css/FondoCorazon.css';

interface HeartConfig {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface HeartsBackgroundProps {
  count?: number;
}

export const FondoCorazon: React.FC<HeartsBackgroundProps> = ({ count = 60 }) => {
  const hearts = useMemo<HeartConfig[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      // Distribuimos el origen en la pantalla para cubrir el espacio
      top: `${Math.random() * 140 - 20}%`,
      left: `${Math.random() * 140 - 20}%`,
      size: Math.random() * 26 + 20, // Tamaño entre 12px y 32px
      duration: Math.random() * 6 + 8, // Duración de 8s a 18s
      delay: Math.random() * -5, // Retraso negativo para que ya haya corazones en pantalla
      opacity: Math.random() * 0.7 + 0.4, // Opacidad variable
    }));
  }, [count]);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            top: heart.top,
            left: heart.left,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            '--max-opacity': heart.opacity,
          } as React.CSSProperties}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FondoCorazon;