
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Contact from "./Contact";
import Users from './Users'
import ProductDetail from "./ProductDetail";
import Update from './Update'


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />}></Route>
                <Route path="/d" element={<Dashboard />}></Route>
                <Route path="/pro" element={[<Dashboard/>,<Product/>]}></Route>
                <Route path="/pro/:id" element={[<Dashboard />, <ProductDetail />]} />
                <Route path="/Contact" element={[<Dashboard/>,<Contact/>]}></Route>
                <Route path="/Users" element={[<Dashboard/>,<Users/>]}></Route>
                <Route path="/Users/:id" element={[<Dashboard />, <Update />]} />
            </Routes>
        </BrowserRouter>
    );
}