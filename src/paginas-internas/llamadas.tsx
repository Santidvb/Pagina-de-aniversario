import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import "./css/llamadas.css"


import Llamada1 from "../assets/images/llamada1.jpg"
import Llamada2 from "../assets/images/llamada2.jpg"
import Llamada3 from "../assets/images/llamada3.jpg"
import Llamada6 from "../assets/images/llamada6.jpg"
import Llamada7 from "../assets/images/llamada7.jpg"
import Llamada8 from "../assets/images/llamada8.jpg"
import Llamada10 from "../assets/images/llamada10.jpg"
import Llamada11 from "../assets/images/llamada11.jpg"
import Llamada12 from "../assets/images/llamada12.jpg"
import Llamada15 from "../assets/images/llamada15.jpg"
import Llamada16 from "../assets/images/llamada16.jpg"
import Llamada18 from "../assets/images/llamada18.jpg"

export default function Llamadas() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="04/01/2007"
            tipoFondo="llamadas"
            texto="¿Te imaginas cuál es la respuesta?"
            pista="No creo tener una pista de la respuesta, pero sí una ayuda de cómo escribirla: XX/XX/XXXX"
            /> 
            <h1 className="titulo-llamadas"><Secret>LLAMADAS</Secret></h1>
            <hr className="hr-llamadas"/>
            <p>
            Aquí llega una de mis secciones favoritas. ¿Y qué decir? <Secret>Hemos compartido tantos momentos en llamada juntos,</Secret> tantos que <Secret>podrían ser innumerables, tantas historias, tantos recuerdos.</Secret><br/>
            Las primeras llamadas que hicimos fueron inicialmente para jugar juntos juegos de Roblox o hablar un poco, aunque tú no eras de hacer muchas llamadas o siquiera hablar en ellas, pero poco a poco te fui invitando a más llamaditas y comenzamos a ir 
            <div className="column">
                <Image imagen={Llamada8} width={160} height={320} foto="160" margin="10" espaciado="2" minWidth={true}>
                    haciendo cada vez más y más.<br/>
                    <Secret>Comenzamos a pasar mucho más tiempo en llamada y compartir más cosas, pasando más el rato y viviendo momentos divertidos.</Secret> <br/>
                    Una de las primeras llamadas que realizábamos eran jugando juegos, más específicamente de Roblox; allí nos divertíamos jugando y pasábamos el tiempo juntos.<br/>
                    <Secret>Cuando comenzamos</Secret> a formalizar <Secret>nuestra relación</Secret> hicimos esta llamada el día que <Secret>puse tus ojitos astetik en mi fondo de celular</Secret>, te mostraba lo bonito que había quedado desde la computadora.<br/>
                    <Secret>Luego más a futuro nosotros</Secret>
                </Image>
                <Image imagen={Llamada7} width={160} height={150} foto="160" margin="10" espaciado="2" minWidth={true}>
                    <Secret>tuvimos otro tipo de llamadas</Secret>, como una en la que yo estaba utilizando mi nueva computadora nubie para acceder a los datos de una página (literal de eso trataba el puzzle) y así ir aprendiendo cómo usar los comandos para futuras actividades del estilo.
                </Image>
                <hr className="hr-llamadas"/>
            </div>
            Considero que <Secret>las llamadas para mí siempre fueron algo especial, la base</Secret> de casi toda <Secret>nuestra relación.</Secret> Creo que sin las llamadas nunca hubiéramos jugado, visto series, hablado, pasado tiempo juntos, mostrado cosas y creado recuerdos muy bonitos. <br/>
            Te <Secret>agradezco por todo eso y más, agradezco poder hablar contigo en llamadita y compartir tiempo así juntos {"<3"}</Secret>
            <hr className="hr-llamadas"/>
            Aparte de las diversas llamadas viendo series o jugando juegos, también <Secret>tuvimos varias llamadas muy especiales para mí</Secret> ya que eran videollamadas, donde hacíamos cosas con los filtros, te mostraba cosas que tenía o simplemente pasábamos el tiempo.
            <div className="row">
                <Image imagen={Llamada1} width={160} height={300} foto="160" margin="10" espaciado="2" minWidth={false}></Image>
                <Image imagen={Llamada2} width={160} height={300} foto="160" margin="10" espaciado="2" minWidth={false}></Image>
            </div>
                <table className="table">
                    <Secret>
                    <tr>
                        <th>Yo armando un cubo y tú modo guauguau</th>
                        <th>Yo modo entrevista épica y tú muy sigma girl</th>
                    </tr>
                    <tr>
                        <th>Los dos modo perro pro astetiks 10k</th>
                        <th>Tú siendo una sigma y yo siendo una lámpara de lava</th>
                    </tr>
                    </Secret>
                </table>
            <div className="row">
                <Image imagen={Llamada10} width={160} height={300} foto="160" margin="10" espaciado="2" minWidth={false}></Image>
                <Image imagen={Llamada11} width={160} height={300} foto="160" margin="10" espaciado="2" minWidth={false}></Image>
            </div>
            <hr className="hr-llamadas"/>
            Fue de las llamadas que más <Secret>me gustó</Secret> ya que ese día fue de las primeras videollamadas en las que te veía mucho tiempo en vivo.
                <Image imagen={Llamada3} width={160} height={300} foto="160" margin="10" espaciado="2" minWidth={true}>
                    <Secret>Me encantaría seguir haciendo llamadas de este estilo, compartir momentos de esta manera me parece de lo más bonito y especial.</Secret> <br/>
                    <Secret>Aunque ahora no estemos juntos por la distancia quiero seguir haciendo llamadas contigo, para poder hacerte reír, para verte sonreír, ver tu belleza en todo momento y pasar un día hermoso contigo, porque te amo y siempre te amaré muchote mi vida, eres todo para mí y te aprecio con todo mi corazón y lo haré toda mi vida hasta que mi luz interior se apague.</Secret>
                </Image>
            <hr className="hr-llamadas"/>
            Aquí hay otros momentos de esa misma llamada que me dieron mucha felicidad y me la siguen dando al recordarlos, <Secret>amo mucho esos momentos contigo mi amor {"<3"}</Secret>
             <div className="row">
                <Image imagen={Llamada12} width={160} height={300} foto="160" margin="10" espaciado="2" minWidth={false}></Image>
                <Image imagen={Llamada15} width={160} height={300} foto="160" margin="10" espaciado="2" minWidth={false}></Image>
            </div>
                <table className="table">
                    <Secret>
                        <tr>
                        <th>Nosotros modo sigma yo mewing y tú risa</th>
                        <th>Yo mandándote muchos besitos y tú seria wapa therian</th>
                    </tr>
                    <tr>
                        <th>Tú modo fan y yo cantando con el alma</th>
                        <th>Los dos modos músicos cantando a la par</th>
                    </tr>
                    </Secret>
                </table>
            <div className="row">
                <Image imagen={Llamada18} width={160} height={300} foto="160" margin="10" espaciado="2" minWidth={false}></Image>
                <Image imagen={Llamada16} width={160} height={300} foto="160" margin="10" espaciado="2" minWidth={false}></Image>
            </div>
            Algunas de <Secret>estas fotos las tengo como mis favoritas,</Secret> entre ellas la de los besitos y la de yo cantando y tú modo fan prosita 10k.<br/>
            <Secret>Siempre las aprecio mucho</Secret> ya que siento que ahí estuvimos muy juntos y pudimos sacarnos una de las primeras fotos juntos en una misma imagen. <Secret>Te amo mucho amor {"<3"}</Secret>
            <hr className="hr-llamadas"/>
                <Image imagen={Llamada6} width={240} height={180} foto="440" margin="10" espaciado="2" minWidth={true}>
                    Aquí otra llamada que tampoco olvidaré, que fue la llamada en la casa de Lucía, <Secret>donde Berlín apareció</Secret> en vivo y en directo por primera vez, dando una actuación
                </Image>
            impresionante y de primer nivel (solo éramos yo y él jugando).<br/>
            Recuerdo que ese día te mostré cómo jugaba y <Secret>me peleaba con Berlín</Secret>, haciendo que corriese de un lado a otro, molestándolo, golpeándolo, empujándolo y haciéndole caras o ladrándole.
            <br/>
            Ese día creo que te pude mostrar<O ff="astetik">Berlín</O> más de mi personalidad <O ff="astetik">Berlín</O>y de mi forma de ser, ya que estuve jugando <O ff="astetik">Berlín</O>y haciendo cosas como lo haría normalmente, tal <O ff="astetik">Berlín</O>vez estando <O ff="astetik">Berlín</O>contigo sería <O ff="astetik">Berlín</O>así de energético, o a veces un poco más calmado. <br/>
            <hr className="hr-llamadas"/>
            <Secret>Me encantaría ya poder verte y estar contigo físicamente para poder darte todo mi amor y estar contigo en cada momento, haciéndote sentir muy feliz cada segundo del día, poder demostrarte muchísimo que te amo, poder verte a los ojos y decirte lo mucho que te amo, anhelo mucho eso y lo necesito :c </Secret><br/>
            <Secret>Te amo con todo mi ser mi amor, siempre estaré</Secret> ahí <Secret>cuando lo necesites,</Secret> siempre <Secret>buscaré hacerte feliz, hacerte reír,</Secret> que sonrías, <Secret>que</Secret> también <Secret>te sientas cuidada y acompañada, te amo y te aprecio mucho amor {"<3"}</Secret>
            </p>
        </div>
    );
}