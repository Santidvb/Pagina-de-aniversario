import "./css/botonNivel.css"
import { useMiContexto } from "./data"

export default function BotonVolver() {
    const {seccion, cambiarSeccion} = useMiContexto();
    return(
        <>
            {seccion !== "inicio" && (
                <button type="button" onClick={() => cambiarSeccion("inicio")} className="boton-volver-inicio">Volver<span className="material-symbols-outlined">undo</span></button>
            )}
        </>
    );
}