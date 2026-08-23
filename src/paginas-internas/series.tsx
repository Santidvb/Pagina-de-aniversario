import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Series1 from "../assets/images/hda.jpeg"
import Series2 from "../assets/images/hda1.jpg"
import Series3 from "../assets/images/hda2.jpg"
import "./css/series.css"

export default function Series() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Among us"
            tipoFondo="series"
            texto="¿Cual podrá ser la contraseña esta vez?"
            pista="Pista: si ves en el fondo de tu corazón encontrarás la contraseña. ¿Podrás ver bien al fondo?"
            /> 
            <h1 className="titulo">Series</h1>
            <p className="texto-general">
                
            </p>
        </div>
    );
}