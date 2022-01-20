import React, {useState} from "react";
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
import BasketPage from "./pages/BasketPage/BasketPage";
import jwt_decode from "jwt-decode";
import {GetRequest} from "./api/GetRequest";


const defaultUser = {
    username: "username",
    name: "name",
    type: "none",
    place: "D1",
    achievements: [],
    karma: 3,
}

function App() {
    const [user, setUser] = useState(defaultUser)
    const token = localStorage.getItem("token")
    if (token) {
        let decoded = jwt_decode(token);
        let username = decoded.username

        useState(async () => {
            await GetRequest(defaultUser, setUser, `http://localhost:8000/api/user/${username}`)
            console.log(user)
        })
    }
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/profile" element={<RequireAuth>
                        <ProfilePage user={user} setUser={setUser} defaultUser={defaultUser}/>
                    </RequireAuth>}/>
                    <Route path="/login" element={<RequireUnauth>
                        <LoginPage/>
                    </RequireUnauth>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/menu" element={<MenuPage/>}/>
                    <Route path="/product" element={<ProductDetailsPage/>}/>
                    <Route path="/product/:id" element={<ProductDetailsPage/>}/>
                    <Route path="/orders" element={<RequireAuth>
                        <UserOrdersPage user={user} setUser={setUser} defaultUser={defaultUser}/>
                    </RequireAuth>}/>
                    <Route path="/" element={<RequireUnauth>
                        <RegisterPage/>
                    </RequireUnauth>}/>
                    <Route path="/basket" element={<BasketPage user={user} setUser={setUser}
                                                               defaultUser={defaultUser}/>}/>
                    {/*<Route path="/" element={<RegisterPage/>}/>*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
