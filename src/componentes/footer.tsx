import "./css/footer.css"
import { useMiContexto } from "./data";

export default function Footer() {
  const {pista} = useMiContexto();

  return (
    <footer className="footer">
      <div className="footer-box">
        <p className="texto-footer">Pista: {pista}</p>
      </div>
    </footer>
  );
}