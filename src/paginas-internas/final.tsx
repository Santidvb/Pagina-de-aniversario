import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import "./css/final.css"

import Wapa1 from "../assets/images/wapa1.jpg"
import Wapa2 from "../assets/images/wapa2.jpg"
import Wapa3 from "../assets/images/wapa3.jpg"
import Wapa4 from "../assets/images/llamada4.jpg"
import Wapa5 from "../assets/images/llamada5.jpg"


export default function Final() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="sueños"
            tipoFondo="final"
            texto="El último paso..."
            pista="Pista: Tal vez buscar en todos los recorridos te ayude a encontrar la respuesta..."
            /> 
            <Secret>
                <h1 className="titulo-final">Final</h1>
                <hr className="hr-astetik"/>
                <p>
                    ¡Felicidades amor por llegar al final! <br/> 
                    Quisiera agradecerte por todo, por siempre estar ahí cuando lo necesité, por siempre darme alegrías en cada momento de mi vida, por darme esa energía que necesito para levantarme cada mañana, por todo tu amor, que rebalsa en mi corazón, que me llena de felicidad, que me dan ganas de seguir adelante, nunca rendirme y experimentar cosas nuevas, cosas que nunca haría si no tuviera tu apoyo y tu compañía a mi lado.
                <hr className="hr-astetik"/>
                    <Image imagen={Wapa1} width={160} height={160} foto="290" margin="10" espaciado="2" minWidth={true}>
                        Aquí, en el final, quiero recordarte lo mucho que te amo. <br/> 
                        Tal vez a veces puedas sentir que no te doy el amor que necesitas, tal vez a veces me preguntas si te amo o dices que te odio, pero puedo entender que lo haces porque necesitas que lo diga, perdón si no
                    </Image>
                    lo hago tan frecuentemente en algunos momentos o tal vez no demuestro el suficiente amor. Yo te amo con todo mi corazón.<br/>
                    Amo cada parte de ti, amo tus ojos, que cuando los veo me seducen, me derrito de amor, me muero de lo increíbles que son, porque sí, son bellísimos tus ojos, lo son mucho muchote {"<3"}
                    <Image imagen={Wapa2} width={160} height={160} foto="290" margin="10" espaciado="1" minWidth={true}>
                        De tí también admiro mucho lo bella que eres, con o sin maquillaje me pareces la mujer más hermosa que voy a ver en toda mi vida, la persona más perfecta, la más bella.<br/>
                        Amo tanto tu belleza que siempre que veo una foto tuya nueva o antigua me muero mucho de amor
                    </Image>
                    y quisiera comerte mucho a besos, poder mirarte a los ojos, poder tocar tu pelo, sentir tu rostro, ver tu sonrisa, ver tu belleza.<br/>
                    Si tan solo te tuviera enfrente mío creo que me quedaría perplejo viéndote por horas y horas hasta dormirme.<br/>
                    Creo que tu belleza es inmensa, inconmensurable, enorme, infinita e inmodificable. Yo creo que si tú no existieras entonces la belleza como tal tampoco, porque para mí, tú emanas belleza, eres la que la crea, la que comienza a dispersar belleza, porque tienes tanta belleza que desborda de ti y se esparce por todos lados.
                    <hr className="hr-astetik"/>
                    <Image imagen={Wapa3} width={160} height={160} foto="290" margin="10" espaciado="1" minWidth={true}>
                        Siempre me pareciste muy astetik y bonita, no solo en apariencia, sino también en personalidad.<br/>
                        Me pareces una persona muy buena, bondadosa y amable con los que quieres, siempre tratando bien a otros, siendo buena persona, ayudándolos y estando ahí para
                    </Image>
                    ellos, así como tú lo estás conmigo, así como me me ayudas a mí.<br/>
                    Siento que a lo largo de nuestra relación fuimos mejorando mucho como pareja, no solo en cómo nos amamos sino también en las actitudes, yo tratando de mejorar en aspectos que no tenía o no tenía pulidos del todo, obteniendo una base firme para nuestro amor, para poder estar juntos durante muchos años más.<br/>
                    <hr className="hr-astetik"/>
                    <Image imagen={Wapa4} width={160} height={160} foto="200" margin="10" espaciado="1" minWidth={true}>
                        A veces me pregunto por qué eres tan hermosa. A veces agradezco por poder tenerte a mi lado, por poder tener la oportunidad de tener una vida contigo, porque para mí eres la persona más importante que tengo en mi vida, eres la persona que más quiero en toda la vida.
                    </Image>
                    Si no fuera por ti habría muchas cosas que serían diferentes hoy en día, yo creo que no hubiera mejorado tanto como persona, nunca hubiera sido más abierto con las personas que conozco, nunca hubiera podido ser una persona que comprende qué es el amor, qué se siente amar a alguien de verdad, qué es sentir que alguien te ama con todo su corazón, qué es tener a alguien en mi vida que valga la pena tenerla siempre.<br/>
                    Sin ti nada de eso y muchas cosas más hubieran pasado en mi vida, sin ti no hubiera sentido que mejoré mucho.<br/>
                    Aunque tú puedas creer que un año es poco (y tal vez puede que lo sea), para mí un año es todo un logro, he conocido gente que no ha durado ni cinco días juntos, gente que no supo superar las adversidades, gente que no podía hablar de temas serios.<br/>
                    Contigo todo eso fue posible, pudimos superar varios problemas, afrontándolo juntos, hablándolo y mejorando ambos.<br/>
                    También creo que un año es mucho, no por decir que es demasiado o algo así, sino por apreciar todo el año que estuvimos juntos, todo lo que pasamos.<br/>
                    <hr className="hr-astetik"/>
                    <Image imagen={Wapa5} width={160} height={320} foto="200" margin="10" espaciado="2" minWidth={true}>
                        Por todo esto te digo gracias, por todos los momentos que puedo tener a tu lado, por todos los sentimientos que me generas, por todas las experiencias que me das, por todo lo que hay en nuestra relación, por todo lo bonito que hemos creado a lo largo de este año.<br/>
                        Mi mayor sueño ahora mismo es poder verte, es lo único que deseo.<br/>
                        Deseo poder abrazarte, besarte, estar a tu lado viendo las olas de la playa, un atardecer en una montaña o simplemente ver las estrellas en un campo, solo tú, yo y la luz de la noche y la luna.
                    </Image>
                    Gracias por ser el lugar donde yo pueda sentirme muy seguro, donde puedo contar todo lo que siento, todo lo que me ocurre, por hacerme sentir cómodo y muy bien conmigo mismo {"<3"}<br/>
                    <hr className="hr-astetik"/>
                    Espero poder estar en el futuro viviendo contigo, tener una vida feliz con muchas mascotas, una casa bonita o viajando a muchos lugares, me gustaría mucho poder hacerlo contigo, poder viajar todo el tiempo en algún momento.<br/>
                    Te amo mucho mi amor, prometo siempre estar para ti cuando lo necesites, estar para escucharte, para acompañarte, quererte, amarte y demostrarte todo el amor que te tengo a base de muchos besitos, abrazos y palabras bonitas cada día y cada momento de mi vida junto a ti. Te amo mucho y siempre te amaré con todo mi ser, te amaré hasta que me muera y luego reviviré como fantasma para seguirte a todos lados si es que me muero primero, e igual te seguiré amando.<br/>
                    Te amaré cada segundo, cada minuto, cada hora, cada día, cada mes y cada año de mi vida, te amo demasiado y siempre te amaré mucho mucho muchote amor {"<3"}<br/>
                    <h1>Gracias por todo {"<3"}</h1>
                    <O ff="mensaje-secreto">
                        <p className="chikito">
                        Por cierto, recuerda responderle a nuestra hija, está súper abandonada :c
                        </p>
                    </O>
                </p>
                
            </Secret>
        </div>
    );
}