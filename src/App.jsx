// import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./contexts/cart/CartContext";
import Cart from "./components/Cart/page/Cart";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <section className="global-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/*">
              <div className="container-articles">Página de error</div>
            </Route>
          </Switch>
        </section>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
