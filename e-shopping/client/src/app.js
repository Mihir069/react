import Header from "./component/header";
import ProductList from "./component/productList";
import Cart from "./component/cart";
import AboutPage from "./component/about";
import ContactPage from "./component/contact";
import { CartProvider } from "./component/cartContext";
import ProductDetails from "./component/productDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product-detail/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
