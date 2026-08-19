import "./css/inicio.css"
import NivelCard from '../componentes/nivelCard.tsx';

export default function Inicio() {
    return (
        <div className="inicio">
            <div className="inicio-top">
               hola
            </div>
            <div className="inicio-mid">
                <NivelCard />
                <NivelCard />
                <NivelCard />
                <NivelCard />
                <NivelCard />
                <NivelCard />
            </div>
            <div className="inicio-bottom">
                <NivelCard />
                <footer>hola</footer>
            </div>
        </div>
    );
}