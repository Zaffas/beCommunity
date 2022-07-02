import "./App.css";
import NavBar from "./components/NavBar/index";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
