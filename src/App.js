import "./sb-admin-2.min.css";
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PortalLayouts from "./components/PortalLayout"
import CartItems from "./components/CartItems";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import Products from "./components/Products";


function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <div className="row">
           <Routes>
           <Route path="/" element={<Home/>}/>   
           <Route path="/" element={<PortalLayouts/>}>   
           <Route path="/Products" element={<Products/>}/>
           <Route path="/CartItems" element={<CartItems/>}/>   
           <Route path="/login" element={<Login/>}/>
           </Route>
           <Route path="/addproduct" element={<AddProduct/>}/>
           <Route path="/create-product" element={<CreateProduct/>}/>
           <Route path="/edit-product/:id" element={<EditProduct/>}/>
           </Routes>
           </div>
    </BrowserRouter>
     
     </div>
  );
}

export default App
