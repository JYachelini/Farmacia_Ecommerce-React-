import { useContext } from "react";
import { CartContext } from "../../../contexts/cart/CartContext";
import { Form } from "../functions/Form";
import ItemModal from "../modal/ItemModal";
import { addDoc, getFirestore, collection, doc, updateDoc } from "@firebase/firestore";

const initialForm = {
  name: "",
  last: "",
  email: "",
  phone: "",
  postal: "",
  state: "",
  district: "",
  street: "",
  number: "",
  flat: "",
};
// Se setean los valores del formulario
const validationsForm = (form) => {
  let errors = {};
  /* Se setean los errores */
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhone = /[0-9\s]/;
  // Las expresiones regulares de cada casilla

  if (!form.name.trim()) {
    errors.name = "Por favor, completa el nombre.";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Solo puedes ingresar letras y espacios en blanco.";
  }
  if (!form.last.trim()) {
    errors.last = "Por favor, completa el apellido.";
  } else if (!regexName.test(form.last.trim())) {
    errors.last = "Solo puedes ingresar letras y espacios en blanco.";
  }
  if (!form.email.trim()) {
    errors.email = "Por favor, completa el email.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El Email es incorrecto";
  }
  if (!form.phone.trim()) {
    errors.phone = "Por favor, completa el telefono.";
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "Solo puedes ingresar numeros";
  }
  if (!form.postal.trim()) {
    errors.postal = "Por favor, completa el código postal.";
  } else if (!regexPhone.test(form.postal.trim())) {
    errors.postal = "Solo puedes ingresar numeros";
  }
  if (!form.state.trim()) {
    errors.state = "Por favor, completa la provincia.";
  } else if (!regexName.test(form.state.trim())) {
    errors.state = "Ingresa una provincia valida";
  }
  if (!form.district.trim()) {
    errors.district = "Por favor, completa la localidad.";
  } else if (!regexName.test(form.district.trim())) {
    errors.district = "Ingresa una localidad valida";
  }
  if (!form.street.trim()) {
    errors.street = "Por favor, completa la calle.";
  } else if (!regexName.test(form.street.trim())) {
    errors.street = "Ingresa una calle valida";
  }
  if (!form.number.trim()) {
    errors.number = "Por favor, completa el numero.";
  } else if (!regexPhone.test(form.number.trim())) {
    errors.number = "Ingresa un numero valido";
  }
  // Si las cassillas estan vacias, ejecutará el primer if. Si las casillas contienen contenido pero no matchea con las expresiones regulares ejecutará el segundo if.

  return errors;
};

export default function Secondstep({ nextStep, totalPrice, setOrder, confirmation }) {
  const { form, errors, handleChange, handleBlur } = Form(initialForm, validationsForm);
  const { cart, clearCart } = useContext(CartContext);

  const checkForm = () => {
    if (form.name && form.last && form.email && form.phone && form.postal && form.state && form.district && form.street && form.number) {
      return true;
    } else {
      return false;
    }
  };

  const checkError = () => {
    if (
      errors.name &&
      errors.last &&
      errors.email &&
      errors.phone &&
      errors.postal &&
      errors.state &&
      errors.district &&
      errors.street &&
      errors.number
    ) {
      return true;
    } else {
      return false;
    }
  };

  const sendOrder = (e) => {
    e.preventDefault();
    if (checkForm() === true && checkError() === false) {
      nextStep();

      const order = {
        buyer: { name: form.name, phone: form.phone, email: form.email },
        address: { zipcode: form.postal, state: form.state, city: form.district, street: form.street, number: form.number },
        items: { ...cart },
        total: totalPrice,
      };

      const db = getFirestore();
      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order).then(({ id }) => {
        setOrder(id);
      });
      cart.forEach((item) => {
        const itemRef = doc(db, "items", item.id);
        updateDoc(itemRef, { stock: item.stock });
      });
      clearCart();
    } else {
      console.log("Completa el formulario y volve a intentar");
      return;
    }
  };

  return (
    <div className="cart-secondStep">
      <div className="cart-information">
        <span>Información de contacto</span>
        <form>
          <section>
            <div>
              <input
                className={`${errors.name && "payment-error"}`}
                placeholder={`${errors.name ? `${errors.name}` : "Nombre*"}`}
                type="text"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                required
                maxLength="19"
              />
              {/* Si existe un error, le pondrá la clase payment-error y se pondrá el mensaje de error en el placeholder*/}
            </div>
            <div>
              <input
                className={`${errors.email && "payment-error"}`}
                placeholder={`${errors.email ? `${errors.email}` : "Email*"}`}
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                required
                maxLength="40"
              />
            </div>
            <div>
              <input
                className={`${errors.last && "payment-error"}`}
                placeholder={`${errors.last ? `${errors.last}` : "Apellido*"}`}
                type="text"
                name="last"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.last}
                required
                maxLength="19"
              />
            </div>
            <div>
              <div>
                <input
                  className={`${errors.phone && "payment-error"}`}
                  placeholder={`${errors.phone ? `${errors.phone}` : "Telefono*"}`}
                  type="text"
                  name="phone"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.phone}
                />
              </div>
            </div>
          </section>
          <div>
            <span>Domicilio</span>
            <section>
              <input
                className={`${errors.postal && "payment-error"}`}
                placeholder={`${errors.postal ? `${errors.postal}` : "Código postal*"}`}
                type="text"
                name="postal"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.postal}
              />
              <input
                className={`${errors.state && "payment-error"}`}
                placeholder={`${errors.state ? `${errors.state}` : "Provincia*"}`}
                type="text"
                name="state"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.state}
              />
              <input
                className={`${errors.district && "payment-error"}`}
                placeholder={`${errors.district ? `${errors.district}` : "Localidad*"}`}
                type="text"
                name="district"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.district}
              />
              <input
                className={`${errors.street && "payment-error"}`}
                placeholder={`${errors.street ? `${errors.street}` : "Calle*"}`}
                type="text"
                name="street"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.street}
              />
              <input
                className={`${errors.number && "payment-error"}`}
                placeholder={`${errors.number ? `${errors.number}` : "Número*"}`}
                type="text"
                name="number"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.number}
              />
              <input
                className={`${errors.flat && "payment-error"}`}
                placeholder={`${errors.flat ? `${errors.flat}` : "Piso / Departamento"}`}
                type="text"
                name="flat"
                required
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.flat}
              />
            </section>
          </div>
        </form>
      </div>
      <div className="aside-information">
        <div className="cart-content">
          {cart.map((producto) => (
            <ItemModal item={producto} key={producto.id} remove={false} description={false} counter={true}/>
          ))}
        </div>
        <div className="btn-complete-information">
          <span>
            Total <p>{totalPrice}$</p>
          </span>
          <button onClick={sendOrder}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}
