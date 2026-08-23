import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";

export default function Minecraft() {



    return(
        <>
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Creeper"
            tipoFondo="minecraft"
            texto="¿Será qué habrá alguna referencia a algo aquí?"
            pista="Pista: si es que sabes la historia del nombre de alguien importante en mi vida entonces podras responder en seguida esto..."
            /> 
        </>
    );
}