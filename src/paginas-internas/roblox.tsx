import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import Barcode from "react-barcode";
import "./css/roblox.css"
import Roblox1 from "../assets/images/roblox-pizzeria.jpg"
import Roblox2 from "../assets/images/roblox-regretevator.jpg"



export default function Roblox() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="jossnunio"
            tipoFondo="roblox"
            texto="¿Sabes quién eres?"
            pista="Pista: Tal vez oculto en un mensaje encriptado encuentres las palabras correctas"
            /> 
            <h1 className="titulo-roblox">ROBLOX</h1>
            <hr className="hr-roblox"></hr>
            <p className="texto-general">
                <Secret>Una de las etapas</Secret> más divertidas <Secret>y los momentos que más me hacen feliz son </Secret>cuando jugamos Roblox juntos, resolviendo puzzles, jugando juegos de terror, <Secret>estando contigo, es de las cosas que más me gusta en todo el mundo,</Secret> y, muy pronto, <Secret>nos casaremos</Secret> aquí <Secret>y seremos espositos</Secret> en Roblox, <Secret>con</Secret> fotos astetik y <Secret>mucha felicidad.</Secret><br/>
               <hr className="hr-roblox" />
               <div className="row">
                <Image minWidth={false} width={150} height={160} imagen={Roblox1} foto="290" fontSize="16" margin="0"></Image>
                <Image minWidth={false} width={150} height={160} imagen={Roblox2} foto="290" fontSize="16" margin="0"></Image>
                </div> 
                <hr className="hr-roblox" />
                <Secret>Siempre me gustó mucho</Secret> poder jugar muchos juegos variados contigo, recuerdo <Secret>los momentos lindos donde jugamos juegos</Secret> como Trabaja en una Pizzería siendo yo el gerente y tú la trabajadora, donde tú eras la mejor trabajadora y te bonificaba. <br/>
                También los juegos de terror, como el que querías completar pero que al final no pudimos porque te moriste y me salí. También otros juegos como juegos liminales en plan Backrooms.<br/>
                
                <hr className="hr-roblox" />
                Me encanta poder compartir estos momentos contigo, llevándolos en mi corazón con todo el amor que te tengo, me encantaría poder casarme en Roblox contigo muy pronto, para sentirme más como tu esposito wapo y tú como mi bella esposa, ya me siento así, pero casarnos me haría sentir mucho más así y más feliz. <br/>
                La verdad <O ff="mensaje-secreto">Tal vez la respuesta no sea</O>no tengo muchas fotos so<O ff="mensaje-secreto">tan fácil de encontrar...</O>bre Roblox de nosotros jugando juntos, pero sí tengo muchos recuerdos, recuerdos de momentos inolvidables, de momentos felices, divertidos, terroríficos pero juntos, estar jugando contigo a Roblox me hace sentir más conectado a ti y sentir que estoy acompañado por ti. <br/>
                <hr className="hr-roblox" />
                Otros recuerdos que me gustan mucho son jugando Regretevator, aunq<O ff="mensaje-secreto">Dejaré esto aquí:</O>ue tú no pudieras pasar algunos de lo<O ff="barcode"color="var(--blanco)"><Barcode value="conejo" format="CODE128" displayValue={false} fontSize={10} height={14}
                width={0.7} margin={0} ></Barcode></O>s niveles y te murieras o se te desconectara igual me gustaba mucho jugarlo, me divertía y hacía muy feliz. <br/>
                <hr className="hr-roblox" />
                Esta sección te la dedico especialmente para recordarte que siempre estaré ahí, para recordarte los momentos donde nos divertimos, donde nos seguiremos divirtiendo y acompañando uno al otro, sin importar qué.<O ff="mensaje-secreto">¿Crees tener lo necesario para encontrar la</O> Es un lugar especial, donde<O ff="mensaje-secreto">respuesta?...</O> podemos compartir y hacer nuevas experiencias, explorando nuevos mundos, historias, aventuras y retos, donde debemos trabajar en pareja (aunque a veces te acarree :v) y donde podemos unir nuestras mentes para resolver misterios o encontrar cosas y reírnos muchote en todo momento.<br/>
                <hr className="hr-roblox" />
                Amo jugar contigo Roblox, <Secret>me encantaría poder explorar más </Secret>mundos <Secret>contigo y tener más experiencias hermosas a tu lado.</Secret> <br/>
                <Secret>Gracias</Secret> por jugar conmigo,<Secret> por estar ahí y darme momentos de felicidad que aprecio con todo mi ser, te amo muchote {`<3`}</Secret>
            </p>
        </div>
    );
}