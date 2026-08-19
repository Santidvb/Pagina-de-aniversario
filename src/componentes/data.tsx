import { createContext, useState, type ReactNode } from "react";
import { useContext } from "react";



export type OpcionesEstado = 
    | "inicio" 
    | "minecraft"
    | "roblox"
    | "series"
    | "llamadas"
    | "soul knight"
    | "otros"
    | "final";

interface ContextoType {
    seccion: OpcionesEstado;
    cambiarSeccion: (nuevaSeccion: OpcionesEstado) => void;
    luz: boolean;
    luzAzul: boolean;
    setLuz: React.Dispatch<React.SetStateAction<boolean>>;
    setLuzAzul: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Contexto = createContext<ContextoType | undefined>(undefined);

export const useMiContexto = () => {
    const context = useContext(Contexto);
    if (!context) {
        throw new Error("useMiContexto debe usarse dentro de un <Data />");
    }
    return context;
};



export default function Data({ children }: { children: ReactNode }) {
    const [seccion, setSeccion] = useState<OpcionesEstado>("inicio");
    const [luzAzul, setLuzAzul] = useState<boolean>(false);
    const [luz, setLuz] = useState<boolean>(true);

    const cambiarSeccion = (nuevaSeccion: OpcionesEstado) => {
        setSeccion(nuevaSeccion);
    }
    
    return (
        <Contexto.Provider value={{
            seccion, 
            cambiarSeccion,
            luz,
            luzAzul,
            setLuz,
            setLuzAzul
            }}>
            
            {children}
        </Contexto.Provider>
    );
}