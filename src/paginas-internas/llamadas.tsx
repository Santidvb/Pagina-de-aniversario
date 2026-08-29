import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import Barcode from "react-barcode";
import "./css/llamadas.css"

export default function Llamadas() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="04012007"
            tipoFondo="llamadas"
            texto="¿Te imaginas como responder?"
            pista="Pista: no creo poder ayudarte aqui, pero buena suerte <3"
            /> 
        </div>
    );
}