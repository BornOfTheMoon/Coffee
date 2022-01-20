import {Navigate} from "react-router";


function Logout({setAuthorised}) {
    setAuthorised(false);
    localStorage.removeItem('token');
    return <Navigate to='/home'/>
}

export default Logout