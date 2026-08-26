import { type ReactNode } from "react";
import "./css/images.css"

interface DataImage{
    imagen: string;
    width: number;
    height: number;
    foto: string;
    margin?: string;
    espaciado?: "1" | "2" | "3";
    children?: ReactNode;
    fontSize?: string;
    minWidth: boolean;
}

export default function Image({imagen, width, height, foto, margin = "0", espaciado, children, fontSize, minWidth}: DataImage){
    const verificarMinWidth = () => {
        if(minWidth === true){
            return("minWidth");
        } else {
            return;
        }
    }
    return(
        <div className={`div-general-image ${verificarMinWidth()}`} style={{maxHeight: `${height}px`}}>
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
            margin: `0px ${margin}px 0px ${margin}px `,
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