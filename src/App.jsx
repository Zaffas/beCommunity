import "./App.css";
import NavBar from "./components/NavBar/index";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import Cart from "./containers/Cart";
import ShopProvider from "./context/ShopContext";
import BuyForm from "./components/BuyForm";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buy" element={<BuyForm />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
