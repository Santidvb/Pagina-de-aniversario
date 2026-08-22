import BotonNivel from "./botonNivel.tsx";
import { type TamañosBoton} from "./botonNivel.tsx"
import { type OpcionesEstado } from "./data.tsx";
import "./css/nivelCard.css"

interface NivelCardProps{
    tipo: OpcionesEstado;
    clase: string;
    img?: string;
    imgClass?: string;
    imgDiv?: boolean;
    tamaño?: TamañosBoton;

}

export default function NivelCard({tamaño = "l", tipo, clase, img = "minecraft", imgClass = "nivel-card-base-img", imgDiv}:NivelCardProps) {

    return(
        <div className={clase}>
            <div className={imgDiv ? "img-div-inicio-final" : "img-div-inicio"}>
                {!imgDiv ? <img className={imgClass} src={img} alt={tipo} /> : <br/>} 
            </div>
            <BotonNivel tipo={tamaño} seccionBtn={tipo}/>
        </div>
    );
}