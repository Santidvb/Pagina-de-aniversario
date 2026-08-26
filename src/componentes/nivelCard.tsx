import BotonNivel from "./botonNivel.tsx";
import { type TamañosBoton} from "./botonNivel.tsx"
import { type OpcionesEstado } from "./data.tsx";
import "./css/nivelCard.css"
import Image from "./image.tsx"

interface NivelCardProps{
    tipo: OpcionesEstado;
    clase: string;
    img?: string;
    imgDiv?: boolean;
    tamaño?: TamañosBoton;

}

export default function NivelCard({tamaño = "l", tipo, clase, img = "minecraft", imgDiv}:NivelCardProps) {
    return(
        <div className={clase}>
            {!imgDiv ? <Image minWidth={false} foto="90" width={80} height={80} imagen={img}></Image> : 
            <div className="img-div-inicio-final">
                <br/>
            </div>}
            <BotonNivel tipo={tamaño} seccionBtn={tipo}/>
        </div>
    );
}