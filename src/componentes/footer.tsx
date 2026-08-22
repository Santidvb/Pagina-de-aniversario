import { useState } from "react"

import "./css/footer.css"
import {Secret, Oculto} from "./secret"

interface FooterProps {
  pistaInicial?: React.ReactNode;
}

export default function Footer() {
  const [pista, setPista] = useState<React.ReactNode>(
      <>
        Mirando las series llevamos tiempo, tiempo que no tenemos
        ¿Acaso se lo llevó el viento? nunca lo sabremos...
        <br />
        Mirame a los ojos y tal vez veas la respuesta a este momento.
      </>
  );

  const cambiarPista = (nuevaPista: React.ReactNode) => {
    setPista(nuevaPista);
  };

  return (
    <footer className="footer">
      <div className="footer-box">
        <p>Pista: {pista}</p>
      </div>
    </footer>
  );
}