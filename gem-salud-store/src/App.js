import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
{/*import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";*/}


function App() {
  return (
    <div className="App">
     <NavBar/>
    {/*<ItemListContainer section="Offers"/>*/}
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
