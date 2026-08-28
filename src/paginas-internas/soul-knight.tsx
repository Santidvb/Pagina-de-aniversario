import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import Barcode from "react-barcode";
import "./css/soul-knight.css"



export default function SoulKnight() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Soul knight"
            tipoFondo="soulKnight"
            texto="¿Qué opinas del café?"
            pista="Pista: en los colores hay una respuesta, el arcoiris espera..."
            /> 
        </div>
    );
}