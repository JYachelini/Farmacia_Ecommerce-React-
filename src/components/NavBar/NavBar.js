import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function NavBar() {
  return (
    <nav>
      <div id="navbarLeft">
        <ul className="navbar-left">
          <li>
            {/* <a
              href="www.google.com"
              id="slide-products"
              className="underline-center"
            >
              Productos
            </a> */}
            <Link to={`/category/medicamentos`}>Medicamentos</Link>
          </li>
          <li>
            {/* <a
              href="www.google.com"
              id="slide-disc"
              className="underline-center"
            >
              Ofertas
            </a> */}
            <Link to={`/category/cuidado-bucal`}>Cuidado bucal</Link>
          </li>
        </ul>
      </div>
      <Logo />
      <div id="navbarRight">
        <ul className="navbar-right">
          <li className="navbar-search-box">
            <input
              className="navbar-search-txt"
              type="text"
              placeholder="Buscar..."
            />
            <a href="www.google.com" className="navbar-search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(0, 0, 0, 1)" }}
              >
                <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="www.google.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style={{ fill: "rgba(0, 0, 0, 1)" }}
              >
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
              </svg>
            </a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
}
