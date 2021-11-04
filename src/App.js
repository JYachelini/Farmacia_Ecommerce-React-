import { useEffect, useState } from "react";
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
          <ItemDetailContainer />
        </Route>
        {/* <Route path="/cart"><Cart /></Route> */}
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
