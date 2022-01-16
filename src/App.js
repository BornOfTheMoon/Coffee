import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import HomePage from "./pages/HomePage/HomePage";
import UniversalContent from "./components/UniversalContent/UniversalContent";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserCard from "./components/UserCard/UserCard";
import Achievements from "./components/Achievements/Achievements";
import Profile from "./components/Profile/Profile";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProductCard from "./components/ProductCard/ProductCard";
import Menu from "./components/Menu/Menu";
import MenuPage from "./pages/MenuPage/MenuPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import UserOrders from "./components/UserOrders/UserOrders";
import UserOrdersPage from "./pages/UserOrdersPage/UserOrdersPage";

function App() {
    return (
        <div className="App">
            {/*<HomePage/>*/}
            {/*<LoginPage/>*/}
            {/*<RegisterPage/>*/}
            {/*<UserCard/>*/}
            {/*<Achievements/>*/}
            {/*<Profile/>*/}
            {/*<ProfilePage/>*/}
            {/*<ProductCard/>*/}
            {/*<Menu/>*/}
            {/*<MenuPage/>*/}
            {/*<ProductDetailsPage/>*/}
            {/*<UserOrders/>*/}
            <UserOrdersPage/>
        </div>
    );
}

export default App;
