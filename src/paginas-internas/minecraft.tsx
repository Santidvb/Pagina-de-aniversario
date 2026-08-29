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
import MinecraftCasa1 from "../assets/images/minecraft-casa1.jpeg"
import MinecraftCasa2 from "../assets/images/minecraft-casa1-2.jpg"
import MinecraftCueva1 from "../assets/images/minecraft-cueva1.jpeg"
import MinecraftCueva2 from "../assets/images/minecraft-cueva2.jpeg"
import Minecraftmudanza1 from "../assets/images/minecraft-mudanza1.jpeg"


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
                Esto es de las cosas<O ff="mesa-minecraft">Tal vez haya algo</O> que más me gusta <O ff="mesa-minecraft">oculto en esta pagina</O>compartir contigo, aqui hemos hecho muchas<O ff="mesa-minecraft">que debas descifrar</O> cosas, desde crear bases juntos, hasta explorar mundos enteros, derrotando enemigos, muriendo, reapareciendo y viviendo momentos que quedarán en mi alma.<br/>
                <Image imagen={Minecraft1} width={185} height={140} foto="200" margin="10" espaciado="1" minWidth={true}>
                        Podría comenzar de atrás para adelante, yendo<O ff="mesa-minecraft">seguro tardes</O> de a poco y comenzando por el primer mundo que considero muy importante, el cual fue el server con Lucía y sus amigos, Nicolas, Gonzalo y Axel.
                </Image>
                <Image imagen={MinecraftVarios} width={147} height={320} foto="200" margin="10" espaciado="2" minWidth={true}>
                   Recuerdo que allí tenia mi increíble base,<O ff="mesa-minecraft">Te amo mucho</O> estaba la base de Lucía y también la base de Gonzalo.
                    Cuando tu te uniste decidí hacerte <O ff="mesa-minecraft">Eres mi vida</O>una base propia justo en el lugar donde estaban los arboles, allí comencé <O ff="mesa-minecraft">Anhelo estar a tu lado</O>a ayudarte con la casa la cual, de hecho, nunca terminamos. También recuerdo<O ff="mesa-minecraft">Siempre estare para ti</O> que habia música y yo te la hacía escuchar ya que eran discos personalizados. Te mostré mi base, te regalé arte personalizado y te demostré parte de mi amor estando contigo y protegiendote como podia dandote el equipamiento necesario y varias cosas más. <br/>
                </Image>
                <hr className="hr-minecraft" />
                Otro mundo que también recuerdo mucho es el nuestro donde <O ff="mesa-minecraft">Tal vez la pista</O>teníamos nuestra isla privada ya que eramos mega millonarios <O ff="mesa-minecraft">al codigo este muy abajo</O>y viviamos apartados de la sociedad. Recuerdo que mi<O ff="mesa-minecraft">no se</O> proyecto en ese mundo era hacer todo un mapa que tenga zonas como lugares de tradeo, nuestra base<O ff="mesa-minecraft">no puedo saberlo</O>, zonas de exploración, regiones, etc. Yo en ese momento hasta mapa<O ff="mesa-minecraft">tal vez si</O> le hice y todo. Era un mundo que no avanzamos<O ff="mesa-minecraft">lo unico a lo que estoy seguro</O> mucho y me gustaria volver a retomar en algún momento de ser posible, si quieres hasta podríamos hacerlo realm para unirnos en cualquier<O ff="mesa-minecraft">es a que te amo mucho</O> momento. me gustaría mucho volver a jugarlo y hacer nuestra casa y cosas allí :3
                <hr className="hr-minecraft" />
                Siguiendo la<O ff="mesa-minecraft">Piensa en la pregunta</O> cronología también está el mundo donde habia un lugar de picnic, tenias un gato, una granja y una casa preciosa.
                <Image imagen={MinecraftPicnic1} width={160} height={160} foto="260" margin="10" espaciado="2" minWidth={true}>
                    Ese<O ff="mesa-minecraft">la de la contraseña</O> mundo era uno en el cual no me querías dejar entrar ya que no querías que viera lo que había, aunque <O ff="mesa-minecraft">y tambien en la pista</O>lo unico que habia era todo lo increible que habia contruido allí.
                    Estaba tu mega casota la cual era de 2 pisos y tenía varias cosas como un comedor, sala, cocina,
                </Image>
                 cofres y también había varias cosas como cuadros decorativos, flores y todo estaba con temática rosa super astetik. 
                <hr className="hr-minecraft" />
                Aquí alguna de las imagenes que muestran el picnic:
                <div className="row">
                    <Image imagen={MinecraftPicnic5} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={false}></Image>
                    <Image imagen={MinecraftPicnic3} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={false}></Image>
                </div>    
                <div className="row">
                    <Image imagen={MinecraftPicnic4} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={false}></Image>
                    <Image imagen={MinecraftPicnic6} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={false}></Image>
                </div> 
                Fue un momento muy lindo que compartí contigo donde haciamos recontrucción de zonas, mejoras de la casa, base y de la zona de picnic. Fue un hermoso mundo {`<3`}
                <hr className="hr-minecraft" />
                Otro momento importante que la pasé bien contigo e hicimos más cosas desde un principio fue el servidor que tenia con amigos y
                <div className="column" style={{marginLeft: "10px", marginRight: "10px"}}>
                    <Image imagen={MinecraftCasa1} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={true}>contigo, un mundo donde nosotros dos tuvimos nuestra propia casa por primera vez, donde ibamos a explorar juntos lugares muy variados, donde construimos una vida hermosa, donde tu me ayudaste a recolectar materiales como hierro, carbón, madera, etc. Esta experiencia para mi fue una de </Image>
                    <Image imagen={MinecraftCasa2} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={true}>
                        las más importantes ya que aquí<O ff="mesa-minecraft">sera dificil o obvio</O> pudimos jugar un mundo ambos empezando de cero, conviviendo juntos y<O ff="mesa-minecraft">quien sabe</O> teniendo mucha libertad. <br/>
                        A diferencia de otros mundos, en este al empezar de cero teniamos muchisimas cosas las cuales hacer juntos, y al ser un realm podiamos unirnos en cualquier momento.
                    </Image>
                <hr className="hr-minecraft" />
                </div>
                <Image imagen={Minecraftmudanza1} width={160} height={160} foto="290" margin="10" espaciado="1" minWidth={true}>
                    Luego de hacer nuestra casa y vivir un tiempo<O ff="mesa-minecraft">una pista mas</O> allí decicimos mudarnos a otro lugar más apartado de la sociedad (spawn), en busca de nuevas oportunidades, ideas, lugares y sorpresas<O ff="mesa-minecraft">es de banana fish</O> muy variadas que nos harían rebozar de alegría o llorar desconsoladamente.
                </Image>
                <hr className="hr-minecraft" />
                    Después de un rato muy corto caminando, ambos encontramos la cueva donde posteriormente haríamos otra base provisoria. Recuerdo que al principio de casi llegar a esa cueva tu te moriste por los mobs que había y luego te tardaste como 56324875634853 decadas en venir, aunque eso no importó mucho ya que al fin teniamos un lugar bonito donde vivir (aunque fuera temporal como el anterior, este era más lindo) 
                <Image imagen={MinecraftCueva2} width={160} height={160} foto="290" margin="10" espaciado="1" minWidth={true}>
                    Luego estuvimos un gran rato explorando la cueva en busca de más minerales y recursos ya que nos estabamos quedando sin material disponible para la creación de cosas como picos, hachas, armaduras, espadas, etc.
                    Después de un tiempo decidimos
                </Image>
                volver a mudarnos ya que las condiciones en las que viviamos no me parecían favorables ya que aún seguiamos muy cerca de spawn, lo cual en ese momento no era bueno.
                <hr className="hr-minecraft" />
                Finalmente llegamos a una aldea lejana, donde encontramos muchas cosas raras, yo a esa aldea la llamé "La villa de la suerte" ya que literalmente tuve de todo ahí (pequeño recuento: encontré oveja rosa natural, jinetes del apocalipsis, un ahogado soltó su tridente encantado, un zombi dejó  casi toda su armadura y habia una c<O ff="roto">¿Será qué lo descifras?</O>asa de aldeano casi sin generar), lo cual me pareció un hecho muy fascinante ya que todo tiene poca probabilidad de ocurrir y eso es muy raro.<br/>
                Al final nos quedamos allí, yo tenía el proyecto de hacer una base hermosa, eno<O ff="roto">El alfabeto galáctico es</O>rme y astetik contigo, p<O ff="roto">el estándar de hoy en dia...</O>ero por inconvenientes con los miembros (uso de bugs rotos) tuve que cerrar el realm.
                <hr className="hr-minecraft" />
                <Secret>La verdad estoy  super feliz de poder compartir todas estas experiencias contigo y poder estar a tu lado, es fascinante poder ver cosas tan maravillosas a tu lado, crear, imaginas y explorar contigo es lo mejor que hay amorcito, te amo muchote y siempre te amare, gracias por todo mi amor {"<3"}</Secret>
            </p>
        </div>
    );
}