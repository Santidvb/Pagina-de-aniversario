import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";

export default function Series() {



    return(
        <>
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Among us"
            tipoFondo="series"
            texto="¿Cual podrá ser la contraseña esta vez?"
            pista="Pista: si ves en el fondo de tu corazón encontrarás la contraseña. ¿Podrás ver bien al fondo?"
            /> 
        </>
    );
}