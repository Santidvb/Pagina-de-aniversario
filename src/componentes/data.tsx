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
    setLuz: React.Dispatch<React.SetStateAction<boolean>>;
    nivelActual: OpcionesEstado;
    setNivelActual: React.Dispatch<React.SetStateAction<OpcionesEstado>>;
    cambiarNivel: (nuevoNivelActual: OpcionesEstado) => void;
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
    const [luz, setLuz] = useState<boolean>(true);
    const [nivelActual, setNivelActual] = useState<OpcionesEstado>("inicio");

    const cambiarSeccion = (nuevaSeccion: OpcionesEstado) => {
        setSeccion(nuevaSeccion);
    }
    const cambiarNivel = (nuevoNivelActual: OpcionesEstado) => {
        setNivelActual(nuevoNivelActual);
    }

    return (
        <Contexto.Provider value={{
            seccion, 
            cambiarSeccion,
            luz,
            setLuz,
            nivelActual,
            setNivelActual,
            cambiarNivel
            }}>
            
            {children}
        </Contexto.Provider>
    );
}