import { type ReactNode } from "react";
import { useMiContexto } from "./data";


export function Secret({children} : {children: ReactNode}){
    const { luz } = useMiContexto();
    
    return(
            <span className={`${!luz ? "mensaje-secreto" : ""}`}>
                {children}
            </span>
        
    );
}

export function Oculto({texto} : {texto: string}){
    const { luz } = useMiContexto();
    
    return(
            <span className={`${ !luz ? "mensaje-secreto" : ""}`}>
                {texto}
            </span>
        
    );
}


export function O({children} : {children: ReactNode}){
    const { luz } = useMiContexto();
    
    return(
            <span className={`${!luz ? "mensaje-oculto" : "hidden"}`}>
                {children}
            </span>
        
    );
}
