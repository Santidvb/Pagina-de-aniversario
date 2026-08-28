import { type ReactNode } from "react";
import { useMiContexto } from "./data";

interface DataOculto{
    ff: "otros" | "pelis" | "astetik" | "astetik-bold" | "soul-knight" | "roblox" | "minecraft" | "mesa-minecraft" | "barcode" | "comic" | "comic-bold" | "laberinto" | "mensaje-secreto" | "roto" | "sucio" | "pro";
    children: ReactNode;
    color?: string;
    fontSize?: string;
    background?: string;
}


export function Secret({children} : {children: ReactNode}){
    const { luz } = useMiContexto();
    
    return(
            <span className={`${!luz ? "mensaje-secreto" : ""}`}>
                {children}
            </span>
        
    );
}


export function O({children, ff, background, color = "var(--rosaPastel)", fontSize} : DataOculto){
    const { luz } = useMiContexto();
    
    return(
            <span className={`${!luz ? "mensaje-oculto" : "hidden"}`} style={{fontFamily: `${ff}`, background: `${background}`, fontSize: `${fontSize}`, color: color}}>
                {children}
            </span>
        
    );
}
