import React, { useMemo } from 'react';
import './css/FondoCorazon.css';
import { SiRoblox, SiCraftsman } from 'react-icons/si';
import { MdSignalWifi4BarLock } from 'react-icons/md';
import { BiStar } from 'react-icons/bi';
import { GiSwordInStone } from 'react-icons/gi';


export type DataTipoFondo =
  | "heart" 
  | "star" 
  | "roblox" 
  | "final" 
  | "llamadas" 
  | "minecraft" 
  | "otros" 
  | "series" 
  | "soulKnight";

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
  tipo: DataTipoFondo;
}


//version 2

export const FondoCorazon: React.FC<HeartsBackgroundProps> = ({ count = 60, tipo}) => {
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
  
    //
  function verificarSimbolo() {

      switch(tipo) {
        case "star": return("⛧");
        case "heart": return("♥");
        case "roblox": return(<SiRoblox/>);
        case "series": return("ඩ");
        case "final": return("?");
        case "llamadas": return(<MdSignalWifi4BarLock/>);
        case "minecraft": return(<SiCraftsman/>);
        case "otros": return(<BiStar/>);
        case "soulKnight": return(<GiSwordInStone/>);
        default: return("♥");
    }
  }
    


  return (
    <div className={`${tipo} fondo`}>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={`${tipo} simbolo`}
          style={{
            top: heart.top,
            left: heart.left,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            '--max-opacity': heart.opacity,
          } as React.CSSProperties}
        >
          {verificarSimbolo()}
        </span>
      ))}
    </div>
  );
  
};


export default FondoCorazon

