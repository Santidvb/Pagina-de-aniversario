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
    cambiarPistaActiva: (number: number, tipo: keyof dataPistaActiva ) => void;
    cambiarLuz: (tipo: "luz" | "ambas" | "reset") => void;
    pista: React.ReactNode;
    pistaActiva: dataPistaActiva;
    setPistaActiva: React.Dispatch<React.SetStateAction<dataPistaActiva>>;
    desactivarTodasLasPistas: () => void;
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
    "inexistente": boolean;
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
    const [seccion, setSeccion] = useState<OpcionesEstado>("minecraft");
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
            "otros": true,
            "inexistente": true
        }
    );
    
    function cambiarPistaActiva( number: number, tipo: keyof dataPistaActiva = "inexistente") {
        if(number === 1){
            setPistaActiva((estadoAnterior) => ({
                ...estadoAnterior,            
                [tipo]: !estadoAnterior[tipo] 
            }));
        } 
        if(number === 2){
            setPistaActiva((estadoAnterior) => ({
                ...estadoAnterior,            
                [tipo]: false,
            }));
        }
    }
    function desactivarTodasLasPistas(){
        cambiarPistaActiva(2, "final");
        cambiarPistaActiva(2, "roblox");
        cambiarPistaActiva(2, "minecraft");
        cambiarPistaActiva(2, "series");
        cambiarPistaActiva(2, "otros");
        cambiarPistaActiva(2, "soulKnight");
        cambiarPistaActiva(2, "llamadas");
        cambiarPistaActiva(2, "inicio");
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
            break;
            case "roblox": setPista(
                <>
                    Ha aparecido en varias foto y videos, tengo muchisimas <br/>
                    fotos de el ¿Acaso sabrás quien es del que hablo yo? <br/>
                    Pudiste haberlo conocido...
                </>
            );
            break;
            case "minecraft": setPista(
                <>

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
            desactivarTodasLasPistas
            }}>
            
            {children}
        </Contexto.Provider>
    );
}