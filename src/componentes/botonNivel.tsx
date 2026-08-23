import { useMiContexto, type OpcionesEstado } from "./data.tsx";
import "./css/botonNivel.css";

export type TamañosBoton = "s" | "m" | "l" | "xl";

interface Props {
    seccionBtn: OpcionesEstado;
    tipo: TamañosBoton;
}

export default function BotonNivel ({ seccionBtn, tipo }: Props) {
    const { cambiarSeccion } = useMiContexto();

    const obtenerClaseTamaño = (tamaño: TamañosBoton): string => {
        switch (tamaño) {
            case "s":  return "btn-s";
            case "m":  return "btn-m";
            case "l":  return "btn-l";
            case "xl": return "btn-xl";
            default:   return "btn";
        }
    };

    const obtenerTipo = (seccionTipo: OpcionesEstado): string => {
        switch (seccionTipo) {
            case "minecraft": return "btn-minecraft";
            case "series":  return "btn-series";
            case "roblox":  return "btn-roblox";
            case "llamadas":  return "btn-llamadas";
            case "soulKnight": return "btn-soulknight";
            case "otros": return "btn-otros";
            case "final": return "btn-final";
            case "inicio": return "btn-inicio";
            default:   return "btn-inicio";
        }
    };

    return (
        <div>
            <button 
                className={`${obtenerTipo(seccionBtn)} ${obtenerClaseTamaño(tipo)}`} 
                onClick={() => cambiarSeccion(seccionBtn)}>
                {seccionBtn === "inicio" ? 
                <p className="texto-inicio">volver<span className="material-symbols-outlined simbolo-boton-inicio">replay</span></p>
                : <p>{seccionBtn}</p> }
            </button>
        </div>
    );
}