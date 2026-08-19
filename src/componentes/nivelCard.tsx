import BotonNivel from "./botonNivel";
import { type OpcionesEstado } from "./data.tsx";

import "./css/nivelCard.css"

interface NivelCardProps{
    tipo?: OpcionesEstado;

}

export default function NivelCard({tipo}:NivelCardProps) {
    


    return(
        <div className="nivel-card-base">
            
        </div>
    );
}