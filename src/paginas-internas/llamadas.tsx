import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";

export default function Llamadas() {



    return(
        <>
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Llamadas"
            tipoFondo="llamadas"
            texto="¿Te imaginas como responder?"
            pista="Pista: no creo poder ayudarte aqui, pero buena suerte <3"
            /> 
        </>
    );
}