import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";

export default function Roblox() {



    return(
        <>
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Roblox"
            tipoFondo="roblox"
            texto="¿De donde crees que venimos?"
            pista="Pista: Tal vez oculto en un mensaje encriptado encuentres las palabras correctas"
            /> 
        </>
    );
}