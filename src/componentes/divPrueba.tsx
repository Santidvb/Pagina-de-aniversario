import "./css/divPrueba.css"

type PropsType = 
    | "BIG"
    | "MID"
    | "TINY";

interface PropsPrueba{
    T: PropsType 
}

export default function PruebaDiv({T}:PropsPrueba) {
    return(
    <div className={"prueba-" + T}>
    </div>
    );
}