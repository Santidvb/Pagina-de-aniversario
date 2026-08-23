import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";

export default function Final() {



    return(
        <>
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="Final"
            tipoFondo="final"
            texto="El último paso..."
            pista="Pista: Tal vez buscar en todos los recorridos te ayude a encender el foco dentro de tu asombrosa mente"
            /> 
        </>
    );
}