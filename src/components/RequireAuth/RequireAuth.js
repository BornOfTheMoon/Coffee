import verifyUser from "../../verifyUser";
import {useLocation, Navigate} from "react-router";
import {useEffect, useState} from "react";
import {cleanup} from "@testing-library/react";

function RequireAuth({ children }) {
    console.log('auth')
    let [user, setUser] = useState('');
    let [error, setError] = useState('');
    async function getUser() {
        try {
            const res = await verifyUser(localStorage.getItem('token'));
            setUser(res);
            console.log(res);
        } catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        getUser();
        return cleanup();
    }, [])
    let location = useLocation();
    console.log(localStorage.getItem('token'));

    if (user === null || user === undefined || !user) {
        return <Navigate to="/login" state={{from: location.pathname}}/>;
    }

    return children;
}

export default RequireAuth