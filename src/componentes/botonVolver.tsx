import "./css/botonNivel.css"
import { useMiContexto } from "./data"

export default function BotonVolver() {
    const {seccion, cambiarSeccion, cambiarLuz} = useMiContexto();
    const cambiarTodo = () => {
        cambiarSeccion("inicio");
        cambiarLuz("reset");
    };
    return(
        <>
            {seccion !== "inicio" && (
                <button type="button" onClick={() => cambiarTodo()} className="boton-volver-inicio">Volver<span className="material-symbols-outlined">undo</span></button>
            )}
        </>
    );
}