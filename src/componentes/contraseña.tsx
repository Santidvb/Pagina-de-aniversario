import { useState, useEffect } from "react";
import "./css/contraseña.css";
import FondoCorazon, { type DataTipoFondo } from "./FondoCorazon";
import { useMiContexto } from "./data";
import BotonVolver from "./botonVolver";

interface ContraseñaProps {
    contraseña: string;
    texto?: string;
    pista?: string;
    tipoFondo: DataTipoFondo;
}

export default function Contraseña({ contraseña, texto, pista, tipoFondo }: ContraseñaProps) {
    // 1. Traemos pistaActiva del contexto para saber si esta sección ya fue desbloqueada
    const { seccion, actualizarNivel, cambiarPistaActiva, pistaActiva } = useMiContexto();
    
    // 2. Comprobamos si la sección actual requiere contraseña. 
    // (Asumiendo que pistaActiva[seccion] es true cuando está bloqueada/activa)
    const requiereContraseña = pistaActiva[seccion];

    const [valorInput, setValorInput] = useState<string>("");

    function verificarContraseñaSeccion() {
        switch(seccion) {
            case "inicio": return "inicio-contraseña";
            case "final": return "final-contraseña";
            case "llamadas": return "llamadas-contraseña";
            case "minecraft": return "minecraft-contraseña";
            case "otros": return "otros-contraseña";
            case "roblox": return "roblox-contraseña";
            case "series": return "series-contraseña";
            case "soulKnight": return "soul-knight-contraseña";
            default: return "inicio-contraseña";
        }
    }

    useEffect(() => {
        // Bloqueamos el scroll solo si la contraseña está activa
        if (requiereContraseña) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [requiereContraseña]); // Dependemos de requiereContraseña

    const verificarContraseña = () => {
        if (valorInput === contraseña) {
            // 3. Al acertar, actualizamos el contexto directamente.
            // Esto cambiará 'requiereContraseña' a false automáticamente en el próximo render.
            actualizarNivel(seccion);
            cambiarPistaActiva(seccion); 
        } else {
            alert("Contraseña Incorrecta, intenta nuevamente");
            setValorInput("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        verificarContraseña();
    };

    // 4. Si ya no requiere contraseña, no renderizamos nada (se oculta por completo)
    if (!requiereContraseña) {
        return null; 
    }

    return (
        <div className={`default-fondo ${verificarContraseñaSeccion()}`}>
            {/* Eliminé la validación redundante de estadoActualContraseña ? "fondo" : "hidden" */}
            <div className="fondo-contraseña">
                <FondoCorazon tipo={tipoFondo} />
                <form onSubmit={handleSubmit} className="form-base">
                    <BotonVolver />
                    <p className="texto-formulario">{texto}</p>
                    <input 
                        type="text" 
                        className="formulario" 
                        placeholder="Introduce la Contraseña/Código aquí" 
                        onChange={(e) => setValorInput(e.target.value)} 
                        value={valorInput}
                    />
                    <p className="pista-input">{pista}</p>
                </form>
            </div>
        </div>
    );
}