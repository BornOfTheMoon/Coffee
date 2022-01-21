import styles from "./ProfilePage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../components/Profile/Profile";
import jwt_decode from 'jwt-decode';
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";
import {Navigate} from "react-router";


function ProfilePage({user}) {
    function Logout() {
        // setAuth(false);
        localStorage.removeItem('token');
        return <Navigate to={"/home"}/>
    }


    return (
        <div className={styles.profilePage}>
            <Sidebar item="profile"/>
            <Profile user={user}/>
            <p onClick={Logout}>Log Out</p>
        </div>
    )
}

export default ProfilePage