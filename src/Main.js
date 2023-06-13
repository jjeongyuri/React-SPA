import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import About from "./pages/About";
import Story from "./pages/Story";
import WishList from "./pages/WishList";

export default function Main(){
    return(
        <BrowserRouter>
          <App>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="list">
                  <Route index element={<ProductList/>}/>
                  <Route path="class01" element={<Product/>}/>
                </Route>
                <Route path="about" element={<About/>}/>
                <Route path="story" element={<Story/>}/>
                <Route path="wishlist" element={<WishList/>}/>
            </Routes>
          </App>
        </BrowserRouter>
    )
}