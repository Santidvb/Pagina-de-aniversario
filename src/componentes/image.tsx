import { type ReactNode } from "react";
import "./css/images.css"

type Espaciado = "1" | "2" | "3";

interface DataImage{
    imagen: string;
    width: number;
    height: number;
    foto: string;
    margin?: string;
    espaciado?: Espaciado;
    children?: ReactNode;
    fontSize?: string;
    minWidth: boolean;
    si?: boolean;
}

export default function Image({imagen, width, height, foto, margin = "0", espaciado, children, fontSize, minWidth, si}: DataImage){
    const verificarMinWidth = (n: number) => {
        if(minWidth === true && n === 1){
            return("minWidth");
        } else if(minWidth === false && n === 2) {
            return;
        } else {
            return;
        }
    }

    const verificarEspaciado = (number: typeof espaciado) => {
        if(number === "1"){
            return("end");
        } else if (number === "2"){
            return("start");
        } else {
            return("center");
        }
    }
    const verificarMargin = (number: typeof espaciado, lado: string) => {
        if(number === "1" && lado === "left"){
            return(`${margin}px`);
        } else if (number === "2" && lado === "right"){
            return(`${margin}px`);
        } else if (si === true && lado === "topbottom"){
            return(`${margin}px`);
        }
    }


    return(
        <div className={`div-general-image ${verificarMinWidth(1)}`} style={{maxHeight: `${height}px`, maxWidth: `${width}px`, textAlign: verificarEspaciado(espaciado)}}>
        {espaciado === "1" && (
            <div style={{
                fontSize: `${fontSize}px`,
            }}>
                {children}
            </div>
        )}
        <div className="div-imagen" style={{
            maxWidth: `${width}px`,
            maxHeight: `${height}px`,
            minWidth: `${width}px`,
            minHeight: `${height}px`,
            marginLeft: verificarMargin(espaciado, "left"),
            marginRight: verificarMargin(espaciado, "right"),
            marginTop: verificarMargin(espaciado, "topbottom"),
            marginBottom: verificarMargin(espaciado, "topbottom"),
            }}>
            <img src={imagen} alt={imagen} width={`${foto}px`}/>
        </div>
        {espaciado === "2" && (
            <div style={{
                fontSize: `${fontSize}px`,
            }}>
                {children}
            </div>
        )}
        </div>
    );
}  