// import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/products/:productId"></Route>
        <Route exact path="/category"></Route>
        <Route exact path="/category/:categoryId">
          <ItemDetailContainer />
        </Route>
        {/* <Route path="/cart"><Cart /></Route> */}
        <Route path="/*">
          <div className="conteiner-articles">Página de error</div>
        </Route>
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
