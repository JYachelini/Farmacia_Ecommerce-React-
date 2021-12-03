import { Link } from "react-router-dom";
import Paymentmethods from "../Paymentmethods/Paymentmethods";

const Footer = () => {
  return (
    <footer>
      <div className="footer-support">
        <div className="footer-map">
          <span>Como llegar</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13114.99690327929!2d-58.3738378!3d-34.736715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72f20b74302cf074!2sFarmacia%20Yachelini!5e0!3m2!1ses-419!2sar!4v1630017098828!5m2!1ses-419!2sar"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="Location"
          ></iframe>
        </div>
        <div className="footer-time-pay">
          <div className="footer-time">
            <span>Horarios de atención</span>
            <div className="footer-support-timescontainer">
              <div className="footer-support-times">
                <p>Lunes-Viernes</p>
                <span>8 AM - 13 PM</span>
                <span>16 PM - 20 PM</span>
              </div>
              <div className="footer-support-times">
                <p>Sabádo</p>
                <span>10 AM - 12 PM</span>
                <span>16 PM - 20 PM</span>
              </div>
            </div>
          </div>
          <div className="footer-pay-methods">
            <Paymentmethods />
          </div>
        </div>
      </div>
      <div className="footer-info">
        <div>
          <p>Productos</p>
          <ul>
            <li>
              <Link to="/category/cabello" className="underline-center">
                Cabello
              </Link>
            </li>
            <li>
              <Link to="/category/corporal" className="underline-center">
                Corporal
              </Link>
            </li>
            <li>
              <Link to="/category/solar" className="underline-center">
                Solar
              </Link>
            </li>
            <li>
              <Link to="/category/higiene" className="underline-center">
                Higiene
              </Link>
            </li>
            <li>
              <Link to="/category/alimentacion-infantil" className="underline-center">
                Alimentación infantil
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Información</p>
          <ul>
            <li>
              <Link to="/category/about" className="underline-center">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/category/sucursales" className="underline-center">
                Sucursales
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Contacto</p>
          <ul>
            <li>
              <Link to="/" className="underline-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style={{ fill: "white" }}>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                  ></path>
                </svg>
                +54 9 12345678
              </Link>
            </li>
            <li>
              <Link className="underline-center" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style={{ fill: "white" }}>
                  <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                </svg>
                4246-7656
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <span>Copyright 2021, Designed by Julián Yachelini</span>
      </div>
    </footer>
  );
};

export default Footer;
