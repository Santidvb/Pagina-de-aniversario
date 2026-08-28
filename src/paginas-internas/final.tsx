import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import Barcode from "react-barcode";
import "./css/final.css"

export default function Final() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Final"
            tipoFondo="final"
            texto="El último paso..."
            pista="Pista: Tal vez buscar en todos los recorridos te ayude a encender el foco dentro de tu asombrosa mente"
            /> 
        </div>
    );
}