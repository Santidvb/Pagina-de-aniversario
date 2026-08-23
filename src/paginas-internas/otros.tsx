import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";

export default function Otros() {



    return(
        <>
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Otros"
            tipoFondo="otros"
            texto="¿Habrá otra forma de encontrar la respuesta?"
            pista="Pista: donde hay mucha luz, en la oscuridad encontrarás la respuesta a la salida de este laberinto..."
            /> 
        </>
    );
}