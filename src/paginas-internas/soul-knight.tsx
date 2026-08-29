import Contraseña from "../componentes/contraseña";
import FondoCorazon from "../componentes/FondoCorazon";
import Image from "../componentes/image"
import {O, Secret} from "../componentes/secret"
import Barcode from "react-barcode";
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
            texto="Sabes su nombre ¿Su apellido también?"
            pista="Pista: en el texto ilegible para algunos, hay información valiosa para otros. La paciencia es tu unica amiga en este momento..."
            /> 
            <h1 className="titulo-soul">Soul Knight</h1>
            <hr className="hr-soul" />
            <p>
                Aunque esta sección no vaya a ser tan extensa como las demás quiero que sepas que para mi esta etapa de mi vida también me parece una de las más importantes, esto ya que Soul Knight
                <Image imagen={Soul1} width={185} height={140} foto="550" margin="10" espaciado="1" minWidth={true}>
                    es uno de mis juegos actuales favoritos y representa un sentimiento especial en mi corazón, no solo por ser mi juego favorito, si no también por lo que es: una experiencia unica e inolvidable.
                </Image>
            <hr className="hr-soul" />
                Contigo siento que todas las experiencias se vuelven inolvidables, sin importar que. Haces que cuando estas en un recuerdo mio me estremezca de amor y explote en forma de %#"&$/&#"&#.
                Aunque no siempre lo juguemos o lo hayamos jugado muy poco, para mi sigue siendo moemntos divertidos, aunque te ande acarreando y reviviendo para pdoer jugar juntos.
            <hr className="hr-soul" />
                <Image imagen={Soul2} width={185} height={140} foto="300" margin="10" espaciado="2" minWidth={true}>
                    Siempre tendré en cuenta y recordaré todos estos momentos contigo, siempre serán bonitos y los amaré con todo mi ser, porque te amo con todo mi corazón y me gusta amarte y recibir de tu amor.
                </Image>
            <hr className="hr-soul" />
                Te amo mucho mi vidita, eres la que siempre me hace feliz, me saca muchas sonrisas y me hace sentir muy amado, escuchadoy cuidado en momentos los cuales lo necesito mucho, te amo {"<3"}
            </p>
        </div>
    );
    }