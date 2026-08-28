import React, { useMemo } from 'react';
import './css/FondoCorazon.css';
import { SiRoblox } from 'react-icons/si';
import { MdSignalWifi4BarLock } from 'react-icons/md';
import { BiStar } from 'react-icons/bi';
import { GiSwordInStone } from 'react-icons/gi';
import { useMiContexto } from './data';

import Pasto from "../assets/images/pasto.webp"
import among1 from "../assets/images/among1.webp"
import among2 from "../assets/images/among2.webp"
import among3 from "../assets/images/among3.webp"
import among4 from "../assets/images/among4.webp"
import among5 from "../assets/images/among5.webp"
import among6 from "../assets/images/among6.webp"
import among7 from "../assets/images/among7.webp"
import among8 from "../assets/images/among8.webp"
import among9 from "../assets/images/among9.webp"
import among10 from "../assets/images/among10.webp"
import among11 from "../assets/images/among11.webp"
import among12 from "../assets/images/among12.webp"
import among13 from "../assets/images/among13.webp"
import among14 from "../assets/images/among14.webp"

import soul1 from "../assets/images/soul1.webp"
import soul2 from "../assets/images/soul2.webp"
import soul3 from "../assets/images/soul3.webp"
import soul4 from "../assets/images/soul4.webp"
import soul5 from "../assets/images/soul5.webp"
import soul6 from "../assets/images/soul6.webp"
import soul7 from "../assets/images/soul7.webp"
import soul8 from "../assets/images/soul8.webp"
import soul9 from "../assets/images/soul9.webp"
import soul10 from "../assets/images/soul10.webp"
import soul11 from "../assets/images/soul11.webp"
import soul12 from "../assets/images/soul12.webp"
import soul13 from "../assets/images/soul13.webp"
import soul14 from "../assets/images/soul14.webp"
import soul15 from "../assets/images/soul15.webp"
import soul16 from "../assets/images/soul16.webp"
import soul17 from "../assets/images/soul17.webp"
import soul18 from "../assets/images/soul18.webp"
import soul19 from "../assets/images/soul19.webp"
import soul20 from "../assets/images/soul20.webp"
import soul21 from "../assets/images/soul21.webp"
import soul22 from "../assets/images/soul22.webp"
import soul23 from "../assets/images/soul23.webp"
import soul24 from "../assets/images/soul24.webp"
import soul25 from "../assets/images/soul25.webp"
import soul26 from "../assets/images/soul26.webp"
import soul27 from "../assets/images/soul27.webp"
import soul28 from "../assets/images/soul28.webp"
import soul29 from "../assets/images/soul29.webp"
import soul30 from "../assets/images/soul30.webp"
import soul31 from "../assets/images/soul31.webp"
import soul32 from "../assets/images/soul32.webp"
import soul33 from "../assets/images/soul33.webp"
import soul34 from "../assets/images/soul34.webp"
import soul35 from "../assets/images/soul35.webp"
import soul36 from "../assets/images/soul36.webp"
import soul37 from "../assets/images/soul37.webp"
import soul38 from "../assets/images/soul38.webp"
import soul39 from "../assets/images/soul39.webp"
import soul40 from "../assets/images/soul40.webp"
import soul41 from "../assets/images/soul41.webp"

export const soulArray = [
  soul1, soul2, soul3, soul4, soul5, soul6, soul7, soul8, soul9, soul10,
  soul11, soul12, soul13, soul14, soul15, soul16, soul17, soul18, soul19,
  soul20, soul21, soul22, soul23, soul24, soul25, soul26, soul27, soul28,
  soul29, soul30, soul31, soul32, soul33, soul34, soul35, soul36, soul37,
  soul38, soul39, soul40, soul41,
]
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

const amongImages = [
  among1, among2, among3, among4, among5, among6, among7,
  among8, among9, among10, among11, among12, among13, among14
];
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
  const {luz} = useMiContexto();

  function randomSimbol(number: number){
    if(number === 1){
      const random = Math.floor(Math.random() * 14);
      return amongImages[random];
    } else if (number === 2){
      const random = Math.floor(Math.random() * 41);
      return soulArray[random];
    }
    
  }
    //
  function verificarSimbolo() {
    if(luz) {
        switch(tipo) {
          case "star": return("⛧");
          case "heart": return("♥");
          case "roblox": return(<SiRoblox/>);
          case "series": return(<img src={randomSimbol(1)} width={30} />);
          case "final": return("?");
          case "llamadas": return(<MdSignalWifi4BarLock/>);
          case "minecraft": return(<img src={Pasto} width={30} />);
          case "otros": return(<BiStar/>);
          case "soulKnight": return(<img src={randomSimbol(2)} width={30} />);
          default: return("♥");
      }
    } else if(!luz){
      return("⛧")
    }
      
  }
  function luzEncendidaFondo() {
      if (luz){
        return(tipo);
      } else if(!luz) {
        return(`star`);
      }
    }



  return (
    <div className={`${luzEncendidaFondo()} fondo`}>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={`${luzEncendidaFondo()} simbolo`}
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

