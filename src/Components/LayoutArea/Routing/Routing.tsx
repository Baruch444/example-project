import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import Products from "../../ProductsArea/Products/Products";
import About from "../../AboutArea/About/About";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";




function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>

                <Route path="/" element={<Navigate to="/home"/>} />
                <Route path="/home" element={<Home/>} />

                {/* Products */}
                <Route path="/products" element={<Products />} />
                <Route path="/products/add" element={<AddProduct />} />
                <Route path="/products/details/:prodID" element={<ProductDetails />} />
                <Route path="/products/edit/:prodID" element={<EditProduct /> } />

                {/* Auth */}
                <Route path="/register" element={<Register /> } />
                <Route path="/login" element={<Login /> } />

                {/* ContactUs */}
                <Route path="/contact-us" element={<ContactUs /> } />

                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>

        </div>
    );
}
export default Routing;
