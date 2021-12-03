import { useState } from "react";
import Loader from "../../Loader/Loader";

export default function Thirdstep({ order }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);
  return (
    <div className="cart-thirdStep">
      {!loading && <span>Procesando orden...</span>}
      {!loading && <Loader />}
      {/* {!loading && (
        <div className="confirmation-order">
          <div className="success-animation">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <span>Orden completada!</span>
          <span>
            Su número de orden es: <strong>{order}</strong>
          </span>
        </div>
      )} */}
    </div>
  );
}
