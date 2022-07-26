import logo from './components/logo/logo.png';
import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";


function App() {
  return (
    <div className="App">
     <NavBar/>
    <ItemListContainer section="Offers"/>
    </div>
  );
}

export default App;
