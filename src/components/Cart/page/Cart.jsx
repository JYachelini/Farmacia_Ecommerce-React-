import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/cart/CartContext";
import Firststep from "./Firststep";
import Secondstep from "./Secondstep.js";
import Thirdstep from "./Thirdstep"
import { StepsFunctions } from "../functions/StepsFunctions";

function Cart() {
  const { cart } = useContext(CartContext);

  const [order, setOrder] = useState(null);

  const [nextStep, step, selectStep, confirmation] = StepsFunctions();

  // Se saca el total de los items sumando los quantity
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <>
      <h1 className="cart-header">Tu carrito</h1>
      <div className="payment-instructions">
        <ul>
          <li onClick={selectStep}>
            <div className={`${step === 1 && "active"}`}>
              {/* Detecta en que step de la compra estas */}
              <span>1</span>
            </div>
            <h3>Carrito</h3>
          </li>
          <li onClick={confirmation > 2 ? selectStep : null}>
            {/* Unicamente ejecutará la función selectStep si el confirmation es igual a 2. Esto se hace para que no puedas saltearte los pasos. */}
            <div className={`${step === 2 && "active"}`}>
              <span>2</span>
            </div>
            <h3>Información</h3>
          </li>
          <li>
            {/* Unicamente ejecutará la función selectStep si el confirmation es igual a 3. Esto se hace para que no puedas saltearte los pasos. */}
            <div className={`${step === 3 && "active"}`}>
              <span>3</span>
            </div>
            <h3>Confirmación</h3>
          </li>
        </ul>
      </div>
      {step === 1 ? <Firststep nextStep={nextStep} totalPrice={totalPrice} confirmation={confirmation} /> : null}
      {step === 2 ? <Secondstep nextStep={nextStep} totalPrice={totalPrice} setOrder={setOrder} confirmation={confirmation}/> : null}
      {step === 3 ? <Thirdstep order={order}/> : null}
    </>
  );
}

export default Cart;
