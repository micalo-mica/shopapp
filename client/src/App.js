import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {useSelector} from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const user = useSelector((state)=>state.user.currentUser);
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="products" >
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="product" >
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success />} />
        <Route path="login" element={user ? <Home/> : <Login/>} />
        <Route path="register" element={user ? <Home/> : <Register/>} />
      </Route>
    </Routes>
  </BrowserRouter>





















    // <div>
    //   {/* <Home/> */}
    //   <ProductList/>
    // </div>
  );
}

export default App;
