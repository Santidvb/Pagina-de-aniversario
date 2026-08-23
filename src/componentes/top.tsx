import { useMiContexto } from "./data"
import "./css/top.css"
import BotonVolver from "./botonVolver";


export default function Top(){
    const {seccion} = useMiContexto();
    return(
        <div className="base-fondo-top">
            <BotonVolver />
        </div>
    );
}