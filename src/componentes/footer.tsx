import { useState } from "react"

import "./css/footer.css"
import {Secret, Oculto} from "./secret"
import { useMiContexto } from "./data";

interface FooterProps {
  pistaInicial?: React.ReactNode;
}

export default function Footer() {
  const {pista} = useMiContexto();

  return (
    <footer className="footer">
      <div className="footer-box">
        <p>Pista: {pista}</p>
      </div>
    </footer>
  );
}