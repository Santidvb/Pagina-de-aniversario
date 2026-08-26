import "./css/inicio.css"
import NivelCard from '../componentes/nivelCard.tsx';
import minecraftImg from "../assets/images/minecraft.jpg"
import robloxImg from "../assets/images/roblox.png"
import llamadasImg from "../assets/images/llamadas.png"
import seriesImg from "../assets/images/hda.jpeg"
import soulKnightImg from "../assets/images/soul-knight.webp"
import otrosImg from "../assets/images/pandaemo.jpg"

export default function Inicio() {
    return (
        <div className="inicio">
            <div className="inicio-top-contenedor">
                <div className="inicio-top">
                    <h1>Hola Amorcito </h1>
                    <hr className="hr-astetik"></hr>
                    <p>Quería dedicarte esta página que estuve haciendo durante estos dias para poder demostrarte todo el amor que tengo por tí y lo mucho que siempre te amaré.
                        <br></br>
                        <br></br>
                    Aquí verás muchos recuerdos recopilados, contare todo lo que senti, siento y me gustó de esos momentos, poniendole toda la dedicación posible.
                        <hr className="hr-astetik"></hr>
                    La idea principal es completar cada nivel, poniendo contraseñas, frases clave, encontrado secretos, traduciendo texto y recordando cosas... ¿Serás capaz de lograrlo? 
                        <br></br>
                        <br></br>
                    En caso de que no puedas pasar alguna parte siempre habrá una pista en la parte de abajo de la página, si no llega a servirte la pista que te doy siempre puedes pedirme el código para el proximo nivel :3
                        <hr className="hr-astetik"/>
                    Orden de niveles: 
                        <br></br>
                    {"Series --> Roblox --> Minecraft --> Soul Knight -->"} 
                        <br></br>
                    {"Llamadas --> Otros --> Final"} 
                    </p>
                </div>
            </div>
            <div className="inicio-mid">
                <NivelCard clase="nivel-card-base" tipo="series" img={seriesImg}/>
                <NivelCard clase="nivel-card-base" tipo="roblox" img={robloxImg}/>
                <NivelCard clase="nivel-card-base" tipo="minecraft" img={minecraftImg}/>
                <NivelCard clase="nivel-card-base" tipo="soulKnight" img={soulKnightImg}/>
                <NivelCard clase="nivel-card-base" tipo="llamadas" img={llamadasImg}/>
                <NivelCard clase="nivel-card-base" tipo="otros" img={otrosImg}/>
            </div>
            <div className="inicio-bottom">
                <NivelCard clase="nivel-card-base-final" tipo="final"  imgDiv={true} />
            </div>
        </div>
    );
}