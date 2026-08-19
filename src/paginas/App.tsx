import { useState } from 'react'
import './css/App.css'
import '../componentes/css/FondoCorazon.css'
import FondoCorazon from '../componentes/FondoCorazon'
import PruebaDiv from '../componentes/divPrueba.tsx';
import Inicio from './inicio.tsx';

export default function App() {

  return (
    <div className='app-body'>
      <FondoCorazon />
      <Inicio />
    </div>
  )
}
