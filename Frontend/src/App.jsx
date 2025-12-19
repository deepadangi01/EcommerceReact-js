import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product"
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";
import KidsCollection from "./pages/KidsCollection";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import CheckOut from "./pages/CheckOut";
import PaymentDone from "./pages/PaymentDone";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import CreateProduct from "./pages/CreatProduct";

const App=()=>{
  return(
    <>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="signup" element={<Signup/>}/>
              <Route path="shop" element={<Shop/>}/>
              <Route path="creatproduct" element={<CreateProduct/>}/>
              <Route path="cart" element={<Cart/>}/> 
              <Route path="product" element={<Product/>}/>
              <Route path="menwear" element={<MenCollection/>}/>
              <Route path="womenwear" element={<WomenCollection/>}/>
              <Route path="kidswear" element={<KidsCollection/>} />
              <Route path="contact" element={<ContactUs/>}/>
              <Route path="prodetail/:id" element={<ProductDetail/>}/>
              <Route path="checkout/:amt" element={<CheckOut/>}/>
              <Route path="paydone" element={<PaymentDone/>}/>
             </Route>
           </Routes>
         </BrowserRouter>
        
    </>
  )
}

export default App;