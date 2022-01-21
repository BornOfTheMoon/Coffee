import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import UserOrdersPage from "./pages/UserOrdersPage/UserOrdersPage";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import RequireUnauth from "./components/RequireAuth/RequireUnauth";
import Logout from "./components/Logout/Logout";
import BasketPage from "./pages/BasketPage/BasketPage";
import verifyUser from "./verifyUser";
import ProductAddPage from "./pages/ProductAddPage/ProductAddPage.js";

import CurrentOrdersPage from "./pages/CurrentOrdersPage/CurrentOrdersPage";


const defaultUser = {
    username: "user",
    name: "name",
    type: "user",
    place: "D1",
    achievements: [],
    karma: -1,
}

function App() {
    const [auth, setAuth] = useState(false);
    const [path, setPath] = useState('/home')
    const [error, setError] = useState('');

    useEffect(() => {
        let cleanupFunc = false;

        const getAuth = async () => {
            try {
                const res = await verifyUser(localStorage.getItem('token'));
                if (!cleanupFunc) setAuth(res !== null && res !== undefined && res);
            } catch (e) {
                setError(e);
            }
        }

        getAuth();
        return () => cleanupFunc = true;
    }, [])


    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/profile" element={<RequireAuth auth={auth} setAuthorised={setAuth} path={path} setPath={setPath}>
                        <ProfilePage setAuth={setAuth}/>
                    </RequireAuth>}/>
                    <Route path="/login" element={<RequireUnauth auth={auth} setAuthorised={setAuth} path={path}>
                        <LoginPage/>
                    </RequireUnauth>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/menu" element={<MenuPage/>}/>
                    <Route path="/product" element={<ProductDetailsPage/>}/>
                    <Route path="/product/:id" element={<ProductDetailsPage/>}/>
                    <Route path="/orders" element={<RequireAuth auth={auth} setAuthorised={setAuth} path={path} setPath={setPath}>
                        <UserOrdersPage/>
                    </RequireAuth>}/>
                    <Route path="/" element={<RequireUnauth auth={auth} setAuthorised={setAuth} path={path}>
                        <RegisterPage/>
                    </RequireUnauth>}/>
                    <Route path="/basket" element={<BasketPage/>}/>
                    <Route path="/logout" element={<RequireUnauth auth={auth} setAuthorised={setAuth} path={path}>
                        <Logout/>
                    </RequireUnauth>}/>
                    <Route path="/add" element={<ProductAddPage/>}/>
                    <Route path="/current" element={<CurrentOrdersPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
