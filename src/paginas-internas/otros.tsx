import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import "./css/otros.css"
import Otros1 from "../assets/images/personaje-wapa-planta.png"
import Otros2 from "../assets/images/personaje-wapa.png"
import Otros3 from "../assets/images/personaje-yo-patito.png"
import Otros4 from "../assets/images/personaje-yo-prime.png"
import Otros6 from "../assets/images/yoyaestuveenestosjuegos.png"


export default function Otros() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="berlin"
            tipoFondo="otros"
            texto="¿Conoces al sujeto en cuestión?"
            pista="Pista: donde hay mucha luz, en la oscuridad encontrarás la respuesta a la salida de este laberinto..."
            /> 
            <h1 className="titulo-otros">Otros</h1>
            <hr className="hr-otros"></hr>
            <p>
                Yo creo que <Secret>antes de llegar al final hay que recordar esos momentos donde nosotros hicimos otras cosas</Secret> aparte de hacer llamadas, hablar y jugar o ver series, sino que también <Secret>hay que recordar esos momentos que fueron diferente<O ff="astetik">s,</O></Secret> a lo usual, <Secret>momentos donde compartimos experiencias nuevas y diferentes.</Secret> <br/>
            <hr className="hr-otros"></hr>
                
                <div className="column">
                    <Image imagen={Otros1} width={150} height={150} foto="200" margin="10" espaciado="2" minWidth={true}>
                        Unos de estos dias fue por ejemplo <Secret>cuando nos pusimos a hacer al otro en una página para hacer personajes,</Secret> ahí <Secret>yo te trate de hacer de la manera en la que te veia <O ff="astetik">(De la forma más astetik posible)</O></Secret>, como te recordaba y lo más parecido a ti.
                        Luego de que tu lo vieras creiste que no te parecias tanto, que eras algo
                    </Image>
                    <Image imagen={Otros2} width={150} height={150} foto="200" margin="10" espaciado="2" minWidth={true}>
                        diferente a como te veias en ese personaje que yo habia hecho. <br/>
                        Luego <Secret>te hice con una ropa distinta,</Secret> inspirado en ropas que vi que solias usar en algunas fotos que eran más como de "pijama" por asi decirlo, <Secret>eran ropas que vi que usaste antes de dormir y en momentos similares.</Secret>
                    </Image>
                    <hr className="hr-otros"></hr>
                    <Image imagen={Otros3} width={150} height={150} foto="200" margin="10" espaciado="1" minWidth={true}>
                        Luego <Secret>me toco hacerme a mi, según como me veia.</Secret> Yo en ese momento <Secret>decidí hacerme de la forma que más me gustaba</Secret> pero también con la cual más me identificaba, estuve viendo peinados y ese es el que más me había gustado. También <Secret>me terminé poniendo un patito en la cabeza</Secret>
                    </Image>
                    <Image imagen={Otros4} width={150} height={150} foto="200" margin="10" espaciado="1" minWidth={true}>
                        ya que <Secret>creía que se veía muy astetik allí</Secret>. Me veía como todo un chico sigma todo pro fabuloso y genial.<br/>
                        Luego de eso <Secret>decidí hacerme una segunda versión, donde me pondría más decoraciones</Secret>, un bigote y me pondría modo therian por los bigotes y las orejas de gato que tenia.
                    </Image>
                    <hr className="hr-otros"></hr>
                </div>
                <Secret>Luego de eso tuvimos otros momentos interesantes</Secret> u especiales. 
                Algunos de estos momentos se realizaron antes de ser noviecitos lindos, <Secret>como la vez en la que nosotros dos nos habiamos vuelto pandas emos</Secret> y ibamos por la vida siendo unos pandas emos.
                Recuerdo que <Secret>tu me habías invitado en principio a formar parte de tu manada,</Secret> recuerdo que me decias que busque ropa emo y podría formar parte de tu manada, entonces yo te dije que la buscaría y que me la pondría después de bañarme ya que debia ir a bañarme y luego a comer comida pro. <br/>
                Luego si te envie la foto y <Secret>me terminaste por aceptar en tu manada de pandas emos, siendo los dos unicos pandas emos en todo el multiverso existente habido y por haber :3</Secret>
                <hr className="hr-otros"></hr>
                <div className="column">
                    <Image imagen={Otros6} width={150} height={150} foto="150" margin="10" espaciado="2" minWidth={true}>
                        También <Secret>otro momento un tanto divertido fue cuando te mostré que me parecia mucho al del juego del calamar</Secret>, poniendo una foto de yo de hace como cuatro años, mucho antes de que se hiciera famoso el juego del calamar y una abajo comparando como me veia en ese momento.
                    </Image>
                    <hr className="hr-otros"></hr>
                </div>
                <Secret>Estos momentos en su conjunto también fueron y son muy especiales para mi. Varios de estos momentos respresentan inclusive hoy en dia referencias que solo nosotros dos entendemos, que nosotros podemos disfrutar, tu y yo, nadie más.<br/>
                Por eso para mi estos momentos también son relevantes, aunque algunos hayan ocurrido contadas veces o hayan quedado como algo que ocurrió una vez, siento que son muy especiales y supongo que para ti también.<br/>
                Amo poder tener estas cosas contigo, poder tener estas cosas que nos unen aún más, nos hacen tener una identidad unica como pareja y nos hacen ser nosotros, ser autenticos, ser unicos. <br/>
                Te amo con todo mi corazon mi amorcito y te prometo que siempre te amaré sin importar que {"<3"}</Secret>
            </p>
        </div>
    );
}