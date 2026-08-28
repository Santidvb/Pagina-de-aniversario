import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import Series2 from "../assets/images/hda1.jpg"
import Series3 from "../assets/images/hda2.jpg"
import "./css/series.css"
import { Secret , O} from "../componentes/secret.tsx";

export default function Series() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="among us"
            tipoFondo="series"
            texto="¿Cual podrá ser la contraseña esta vez?"
            pista="Pista: si ves en el fondo de tu corazón encontrarás la contraseña. ¿Podrás ver bien al fondo?"
            /> 
            <h1 className="titulo-series">Series</h1>
        <hr className="hr-series"/>
            <p>
                <Secret>Quería comenzar</Secret> por donde todo empezó, creo yo. Por <Secret>donde compartimos varios gustos, momentos, tiempo y</Secret> vivimos diversas experiencias de amor mutuo. En esta sección no solo mencionaré series, sino también peliculas. Considero que este fue parte del pilar de nuestra relación durante bastante ya que nos unió mucho 
             <Image minWidth={true} width={200} height={160} imagen={Series2} foto="300" espaciado="1" fontSize="16" margin="4">
        más como parejita hermosa que somos, <Secret>reforzando el amor entre nosotros.</Secret> <br/>
        <Secret>Todo comenzó con series,</Secret> al principio recuerdo que no veiamos en llamada, sino que yo te  <Secret>solia compartir algunas series</Secret> como hazbin
            </Image>
        <hr className="hr-series"/>
        hotel y helluva boss, o también peliculas, animes, etc.
        Tu siempre me hablabas de grace anatomy, <Secret>te recomendé</Secret> breaking bad, hablamos sobre south park algunas veces, también series de televisión como clarence, he llegado a mencionar un show más, steven universe y más, pero la más importante yo creo que fue HDA (Hora De Aventura), ya que fue la siento que principalmente impulsó y que comenzó una de las etapas más hermosas, fantásticas que hemos compartimos y seguimos compartiendo siempre que es posible: Hacer llamadas y ver series. <br/>
        <hr className="hr-series"/>
        Al comenzar a <Secret>ver HDA</Secret> de forma muy seguida comenzamos a hacer muchas más llamadas de manera mucho más frecuente lo cual <Secret>me empezó a hacer mucho más feliz</Secret>, fue algo que me hizo <Secret>poder pasar tiempos bonitos contigo.</Secret> De ese momento también comenzamos a ver otras peliculas y llegar hasta donde estamos 
            <Image minWidth={true} imagen={Series3} width={200} height={160} foto="300" espaciado="2" fontSize="16" margin="3">
        hoy. Algunas series/peliculas que recuerdo que hemos visto son más alla del jardin, saw, saw 2, saw 3, parte de Saiki, Among us, varias peliculas de guillermo francella, esperando la  carroza, la pelicula de queen y más.
            </Image>
        <hr className="hr-series"/>
         <Secret>Contigo me encantaria poder</Secret> terminar HDA, ver breaking bad juntos, <Secret>ver</Secret> saiki, y ver la siguiente lista de cosas (mínimo): Breaking Bad, Saiki, Better Call Saul, <Secret>El Camino:</Secret> breaking bad, <Secret>HDA</Secret>, Spider-man: Brand New Day, Inside Job, Un Show Más, My Hero Academia, Atrapame si puedes, Everybody hates chris, A Life in a year, División Palermo, Casados con hijos, BOOM BOOM KAPOW, Minecraft 2, Todas las de FNAF, Steven universe, The Mentalist y Varias peliculas animadas de disney y pixar, ya que no solia ver mucho de esas, menos de disney antiguas, como blancanieves, la sirenita, aladdin, etc. (aunque más de disney que no veia)
        <hr className="hr-series"/>
        <Secret>Yo quiero poder</Secret> compartir todos estos momentos contigo, poder ver todas estas series, poder <Secret>crear más</Secret> de estos <Secret>recuerdos</Secret> y transmitirte parte de mis gustos. También quiero que tu me recomiendes/elijas muchas series para ver juntos, asi podemos aprender más los gustos del otro y pasarla bien juntitos. <br/>
        <Secret>Me encanta todo esto, te amo mucho y espero poder seguir</Secret> viendo series contigo mucho más seguido, <Secret>para</Secret> divertirnos juntos, pasarla bien y <Secret>acompañarnos mutuamente {`<3`}</Secret>.
        
            </p>
            <br/>
            <br/>
            <h3><O ff="otros">Sd spjuphnah cvqtydslqa lv: jvvsuxnpr</O></h3>
        </div>
    );
}