import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import "./css/soul-knight.css"

import Soul1 from "../assets/images/soul-knight-amor.jpg"
import Soul2 from "../assets/images/soul-knight-juntos.jpg"

export default function SoulKnight() {



    return(
        <div className="base-paginas-internas">
            <FondoCorazon tipo={"heart"} />
            <Contraseña 
            contraseña="ash lynx"
            tipoFondo="soulKnight"
            texto="¿Sabes su nombre? ¿Su apellido también?"
            pista="Pista: en el texto ilegible para algunos, hay información valiosa para otros. La paciencia es tu única amiga en este momento..."
            /> 
            <h1 className="titulo-soul">Soul Knight</h1>
            <hr className="hr-soul" />
            <p>
                <Secret>Aunque esta sección no vaya a ser tan extensa como las demás</Secret> quiero que sepas que para mí <Secret>esta etapa de mi vida también me parece una de las más importantes</Secret>, esto ya que Soul Knight<br/>
                <Image imagen={Soul1} width={185} height={140} foto="550" margin="10" espaciado="1" minWidth={true}>
                    es uno de mis juegos actuales favoritos <Secret>y representa un sentimiento especial en mi corazón</Secret>, no solo por ser mi juego favorito, sino también por lo que es: <Secret>una experiencia única e inolvidable.</Secret>
                </Image>
            <hr className="hr-soul" />
                <Secret>Contigo siento que todas las experiencias se vuelven inolvidables,</Secret> sin importar qué. <Secret>Haces que cuando estás</Secret> en un recuerdo mío <Secret>me estremezca de amor</Secret> y explote en forma de %#"&$/&#"&#.<br/>
                Aunque no siempre lo juguemos o lo hayamos jugado muy poco, <Secret>para mí siguen siendo momentos</Secret> divertidos y <Secret>especiales</Secret>, aunque te ande acarreando y reviviendo para poder jugar juntos.<br/>
            <hr className="hr-soul" />
                <Image imagen={Soul2} width={185} height={140} foto="300" margin="10" espaciado="2" minWidth={true}>
                    <Secret>Siempre</Secret> tendré en cuenta y <Secret>recordaré todos estos momentos contigo, siempre serán bonitos y los amaré con todo mi ser, porque te amo con todo mi corazón y me gusta amarte y recibir de tu amor.</Secret>
                </Image>
            <hr className="hr-soul" />
                <Secret>Te amo mucho mi vidita, eres la que siempre me hace feliz, me saca muchas sonrisas y me hace sentir muy amado, escuchado y cuidado en momentos los cuales lo necesito mucho, te amo {"<3"}</Secret>
            </p>
        </div>
    );
    }