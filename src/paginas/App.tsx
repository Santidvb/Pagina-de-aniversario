import './css/App.css'
import '../componentes/css/FondoCorazon.css'
import FondoCorazon from '../componentes/FondoCorazon'
import Contraseña from "../componentes/contraseña.tsx";
import Inicio from './inicio.tsx';
import Footer from '../componentes/footer.tsx';
import { useMiContexto } from '../componentes/data.tsx';
import Series from '../paginas-internas/series.tsx';
import Top from '../componentes/top.tsx';
import Final from '../paginas-internas/final.tsx';
import Llamadas from '../paginas-internas/llamadas.tsx';
import Minecraft from '../paginas-internas/minecraft.tsx';
import Otros from '../paginas-internas/otros.tsx';
import Roblox from '../paginas-internas/roblox.tsx';
import SoulKnight from '../paginas-internas/soul-knight.tsx';


export default function App() {

  const {seccion} = useMiContexto();
  function verificarSeccion() {
    switch(seccion){
      case "inicio": return(<Inicio />);
      case "final": return(<Final />);
      case "llamadas": return(<Llamadas />);
      case "minecraft": return(<Minecraft />);
      case "otros": return(<Otros />);
      case "roblox": return(<Roblox />);
      case "series": return(<Series />);
      case "soulKnight": return(<SoulKnight />);
      default: return(<Inicio />);
    }
  }

  return (
    <div className='app-body'>
      <FondoCorazon tipo={"heart"} />
      <Contraseña 
      tipoFondo={"star"} 
      contraseña='12345' 
      texto='¿Sabrás la primera contraseña que debes poner?' 
      pista='Pista: Es una fecha muy especial para nosotros...'></Contraseña>
      <Top />
      {verificarSeccion()}
      <Footer />
    </div>
  )
}
