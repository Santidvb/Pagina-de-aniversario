import { type ReactNode } from "react";
import { useMiContexto } from "./data";


export function Secret({children} : {children: ReactNode}){
    const { luzAzul, luz } = useMiContexto();
    
    return(
            <span className={`${luzAzul && !luz ? "mensaje-secreto" : ""}`}>
                {children}
            </span>
        
    );
}

export function Oculto({texto} : {texto: string}){
    const { luzAzul, luz } = useMiContexto();
    
    return(
            <span className={`${luzAzul && !luz ? "mensaje-secreto" : ""}`}>
                {texto}
            </span>
        
    );
}

