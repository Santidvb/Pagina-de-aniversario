import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";

export default function SoulKnight() {



    return(
        <>
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Soul knight"
            tipoFondo="soulKnight"
            texto="¿Qué opinas del café?"
            pista="Pista: en los colores hay una respuesta, el arcoiris espera..."
            /> 
        </>
    );
}