import { createContext, useState, type ReactNode } from "react";
import { useContext, useEffect } from "react";



export type OpcionesEstado = 
    | "inicio" 
    | "minecraft"
    | "roblox"
    | "series"
    | "llamadas"
    | "soulKnight"
    | "otros"
    | "final";

interface ContextoType {
    seccion: OpcionesEstado;
    cambiarSeccion: (nuevaSeccion: OpcionesEstado) => void;
    luz: boolean;
    setLuz: React.Dispatch<React.SetStateAction<boolean>>;
    luzAntiguo: boolean;
    setLuzAntiguo: React.Dispatch<React.SetStateAction<boolean>>;
    nivelActual: OpcionesEstado;
    setNivelActual: React.Dispatch<React.SetStateAction<OpcionesEstado>>;
    actualizarNivel: (nuevoNivelActual: OpcionesEstado) => void;
    cambiarPista: (nuevaPista: React.ReactNode) => void; 
    cambiarPistaActiva: (tipo: keyof dataPistaActiva) => void;
    cambiarLuz: (tipo: "luz" | "ambas" | "reset") => void;
    pista: React.ReactNode;
    pistaActiva: dataPistaActiva;
    setPistaActiva: React.Dispatch<React.SetStateAction<dataPistaActiva>>;
}

type dataPistaActiva = {
    "roblox": boolean; 
    "inicio": boolean; 
    "final": boolean; 
    "llamadas": boolean; 
    "series": boolean; 
    "soulKnight": boolean; 
    "minecraft": boolean; 
    "otros": boolean; 
};


export const Contexto = createContext<ContextoType | undefined>(undefined);

export const useMiContexto = () => {
    const context = useContext(Contexto);
    if (!context) {
        throw new Error("useMiContexto debe usarse dentro de un <Data />");
    }
    return context;
};



export default function Data({ children }: { children: ReactNode }) {
    const [seccion, setSeccion] = useState<OpcionesEstado>("series");
    const [luz, setLuz] = useState<boolean>(true);
    const [luzAntiguo, setLuzAntiguo] = useState<boolean>(true);
    const [nivelActual, setNivelActual] = useState<OpcionesEstado>("inicio");

    const [pista, setPista] = useState<React.ReactNode>(
        <>
        Mirando las series llevamos tiempo, tiempo que no tenemos
        ¿Acaso se lo llevó el viento? nunca lo sabremos...
        <br />
        Mirame a los ojos y tal vez veas la respuesta a este momento.
        </>
    );
    const cambiarPista = (nuevaPista: React.ReactNode) => {
    setPista(nuevaPista);
    };
    const cambiarLuz = (tipo: "luz" | "ambas" | "reset") => {
        if(tipo === "luz"){
            setLuz(!luz);
        } else if(tipo === "ambas"){
            setLuz(luzAntiguo);
            setLuzAntiguo(!luzAntiguo);
            setLuz(!luz);
        } else if(tipo === "reset"){
            setLuz(luzAntiguo);
        }
        
        
    };

    const [pistaActiva, setPistaActiva] = useState<dataPistaActiva>(
        {
            "roblox": true, 
            "inicio": true,
            "final": true,
            "llamadas": true, 
            "series": true,
            "soulKnight": true, 
            "minecraft": true, 
            "otros": true 
        }
    );
    
    function cambiarPistaActiva(tipo: keyof dataPistaActiva) {
    setPistaActiva((estadoAnterior) => ({
        ...estadoAnterior,            
        [tipo]: !estadoAnterior[tipo] 
    }));
}
  
    const cambiarSeccion = (nuevaSeccion: OpcionesEstado) => {
        setSeccion(nuevaSeccion);
    }
    const actualizarNivel = (nuevoNivelActual: OpcionesEstado) => {
        setNivelActual(nuevoNivelActual);
    }

    useEffect(() => {
        switch(nivelActual){
            case "series": setPista(
                <>
                    Yo creo que Vigenere sabría como descifrar este problema...
                    Que lástima que no lo conozcamos, no sabemos quien es, donde vive, a que se dedica o siquiera si existe...
                </>
            );
        }
    }, [nivelActual])


    return (
        <Contexto.Provider value={{
            seccion, 
            cambiarSeccion,
            luz,
            setLuz,
            nivelActual,
            setNivelActual,
            actualizarNivel,
            cambiarPista,
            pista,
            cambiarPistaActiva, 
            pistaActiva,
            setPistaActiva,
            cambiarLuz, 
            luzAntiguo,
            setLuzAntiguo,
            }}>
            
            {children}
        </Contexto.Provider>
    );
}