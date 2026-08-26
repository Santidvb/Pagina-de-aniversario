import "./css/top.css"
import BotonVolver from "./botonVolver";
import { useMiContexto } from "./data";


export default function Top(){
    const {cambiarLuz} = useMiContexto();
    return(
        <div className="base-fondo-top">
            <BotonVolver />
            <button type="button" onClick={() => cambiarLuz("ambas")} className="boton-luz">Luz</button>
        </div>
    );
}