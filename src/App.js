import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import UserOrdersPage from "./pages/UserOrdersPage/UserOrdersPage";

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/menu" element={<MenuPage/>}/>
                    <Route path="/product" element={<ProductDetailsPage/>}/>
                    <Route path="/orders" element={<UserOrdersPage/>}/>
                    <Route path="/" element={<RegisterPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
