import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import "./css/minecraft.css"

import MinecraftLogo from "../assets/images/minecraftLogo.svg"
import Minecraft1 from "../assets/images/minecraft-ghast.jpg"
import MinecraftVarios from "../assets/images/minecraft-varios.jpg"
import MinecraftPicnic1 from "../assets/images/minecraft-gato-picnic.jpg"
import MinecraftPicnic2 from "../assets/images/minecraft-picnic1.jpeg"
import MinecraftPicnic3 from "../assets/images/minecraft-picnic2.jpeg"
import MinecraftPicnic4 from "../assets/images/minecraft-picnic3.jpeg"
import MinecraftPicnic5 from "../assets/images/minecraft-picnic4.jpeg"
import MinecraftPicnic6 from "../assets/images/minecraft-picnic5.jpeg"

export default function Minecraft() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="toast"
            tipoFondo="minecraft"
            texto="¿Será qué habrá alguna referencia a algo aqui?"
            pista="Pista: si es que sabes la historia del nombre de alguien importante en mi vida entonces podras responder en seguida esto..."
            /> 
            <img src={MinecraftLogo} width="200"/>
            <br/>
            <hr className="hr-minecraft" />
            <p>
                Esto es de las cosas que más me gusta compartir contigo, aqui hemos hecho muchas cosas, desde crear bases juntos, hasta explorar mundos enteros, derrotando enemigos, muriendo, reapareciendo y viviendo momentos que quedarán en mi alma.<br/>
                <Image imagen={Minecraft1} width={185} height={140} foto="200" margin="10" espaciado="1" minWidth={true}>
                        Podría comenzar de atrás para adelante, yendo de a poco y comenzando por el primer mundo que considero muy importante, el cual fue el server con Lucía y sus amigos, Nicolas, Gonzalo y Axel.
                </Image>
                <Image imagen={MinecraftVarios} width={147} height={320} foto="200" margin="10" espaciado="2" minWidth={true}>
                   Recuerdo que allí tenia mi increíble base, estaba la base de Lucía y también la base de Gonzalo.
                    Cuando tu te uniste decidí hacerte una base propia justo en el lugar donde estaban los arboles, allí comencé a ayudarte con la casa la cual, de hecho, nunca terminamos. También recuerdo que habia música y yo te la hacía escuchar ya que eran discos personalizados. Te mostré mi base, te regalé arte personalizado y te demostré parte de mi amor estando contigo y protegiendote como podia dandote el equipamiento necesario y varias cosas más. <br/>
                </Image>
                <hr className="hr-minecraft" />
                Otro mundo que también recuerdo mucho es el nuestro donde teníamos nuestra isla privada ya que eramos mega millonarios y viviamos apartados de la sociedad. Recuerdo que mi proyecto en ese mundo era hacer todo un mapa que tenga zonas como lugares de tradeo, nuestra base, zonas de exploración, regiones, etc. Yo en ese momento hasta mapa le hice y todo. Era un mundo que no avanzamos mucho y me gustaria volver a retomar en algún momento de ser posible, si quieres hasta podríamos hacerlo realm para unirnos en cualquier momento. me gustaría mucho volver a jugarlo y hacer nuestra casa y cosas allí :3
                <hr className="hr-minecraft" />
                Siguiendo la cronología también está el mundo donde habia un lugar de picnic, tenias un gato, una granja y una casa preciosa.
                <Image imagen={MinecraftPicnic1} width={160} height={160} foto="260" margin="10" espaciado="2" minWidth={true}>
                    Ese mundo era uno en el cual no me querías dejar entrar ya que no querías que viera lo que había, aunque lo unico que habia era todo lo increible que habia contruido allí.
                    Estaba tu mega casota la cual era de 2 pisos y tenía varias cosas como un comedor, sala, cocina,
                </Image>
                 cofres y también había varias cosas como cuadros decorativos, flores y todo estaba con temática rosa super astetik. 
                <hr className="hr-minecraft" />
                Aquí alguna de las imagenes que muestran el picnic:
                <div className="row">
                    <Image imagen={MinecraftPicnic2} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={false}></Image>
                    <Image imagen={MinecraftPicnic3} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={false}></Image>
                </div>    
                <div className="row">
                    <Image imagen={MinecraftPicnic4} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={false}></Image>
                    <Image imagen={MinecraftPicnic5} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={false}></Image>
                </div> 
                Fue un momento muy lindo que compartí contigo donde haciamos recontrucción de zonas, mejoras de la casa, base y de la zona de picnic. Fue un hermoso mundo {`<3`}
                <hr className="hr-minecraft" />
                
            </p>
        </div>
    );
}