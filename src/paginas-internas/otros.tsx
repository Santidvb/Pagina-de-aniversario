import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import Barcode from "react-barcode";
import "./css/otros.css"

export default function Otros() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Otros"
            tipoFondo="otros"
            texto="¿Habrá otra forma de encontrar la respuesta?"
            pista="Pista: donde hay mucha luz, en la oscuridad encontrarás la respuesta a la salida de este laberinto..."
            /> 
        </div>
    );
}