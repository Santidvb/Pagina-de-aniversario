import {useState, useEffect} from "react"
import "./css/contraseña.css"
import FondoCorazon from "./FondoCorazon";
import { useMiContexto } from "./data";


interface ContraseñaProps {
    contraseña: string;
    texto?: string;
    pista?: string;
    tipoFondo: "heart" | "star" ;
}

export default function Contraseña({contraseña, texto, pista, tipoFondo}: ContraseñaProps){
    const [contraseñaActual, setContraseñaActual] = useState<string>(contraseña);
    const [valorInput, setValorInput] = useState<string>("");
    const [estadoActualContraseña, setEstadoActualContraseña] = useState<boolean>(true);

    const {seccion, cambiarSeccion} = useMiContexto();

    function verificarContraseñaSeccion() {
        switch(seccion){
            case "inicio": return("inicio-contraseña");
            case "final": return("final-contraseña");
            case "llamadas": return("llamadas-contraseña");
            case "minecraft": return("minecraft-contraseña");
            case "otros": return("otros-contraseña");
            case "roblox": return("roblox-contraseña");
            case "series": return("series-contraseña");
            case "soul knight": return("soul-knight-contraseña");
            default: return("inicio-contraseña");
        }
    }

    useEffect(() => {
        if (estadoActualContraseña) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [estadoActualContraseña]);

    const verificarContraseña = () => {
        if (valorInput === contraseña) {
            setEstadoActualContraseña(false);
        } else {
            alert("Contraseña Incorrecta, intenta nuevamente");
            setValorInput("");
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        verificarContraseña();
    };

    return(
        <>
            {estadoActualContraseña && (
                <div className={ `default-fondo ${verificarContraseñaSeccion()}`}>
                    <div className={estadoActualContraseña ? ("fondo-contraseña") : ("hidden")}>
                        <FondoCorazon tipo={tipoFondo} />
                        <form onSubmit={handleSubmit} className="form-base">
                            {seccion !== "inicio" && (
                                <button type="button" onClick={() => cambiarSeccion("inicio")} className="boton-volver-inicio">Volver<span className="material-symbols-outlined">undo</span></button>
                            )}
                            <p className="texto-formulario">{texto}</p>
                            <input type="text" className="formulario" placeholder="Introduce la Contraseña/Código aquí" onChange={(e) => setValorInput(e.target.value)} value={valorInput}></input>
                            <p className="pista-input">{pista}</p>
                        </form>
                    </div>
                </div>
                
            )}
        </>
    );
}