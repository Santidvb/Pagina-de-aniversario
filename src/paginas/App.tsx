import { useState } from 'react'
import './css/App.css'
import '../componentes/css/FondoCorazon.css'
import FondoCorazon from '../componentes/FondoCorazon'
import Contraseña from "../componentes/contraseña.tsx";
import PruebaDiv from '../componentes/divPrueba.tsx';
import Inicio from './inicio.tsx';
import Footer from '../componentes/footer.tsx';
import { useMiContexto } from '../componentes/data.tsx';


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
      case "soul knight": return(<SoulKnight />);
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
      {verificarSeccion()}
      <Footer />
    </div>
  )
}
