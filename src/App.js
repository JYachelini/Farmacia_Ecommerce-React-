import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Styles/App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

export default function App() {
  // const [pokemons, setPokemons] = useState(null);

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  //     .then((response) => response.json())
  //     .then((data) => setPokemons(data.results))
  //     .catch((err)=>console.log(err))
  //     // .then(data => console.log(data))
  // }, []);

  // console.log(pokemons)
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
          <ItemDetailContainer/>
        </Route>
        <Route path="/cart">{/* <Cart /> */}</Route>
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
