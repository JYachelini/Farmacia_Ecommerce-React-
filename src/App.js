import './Styles/App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer/>
      {/* No le paso el dato de greeting porque por el momento no se lo quiero pasar */}
    </>
  );
}
