import verifyUser from "../../verifyUser";
import {useLocation, Navigate} from "react-router";
import {useEffect, useRef, useState} from "react";

function RequireAuth({ children }) {
    const state = useLocation().state;
    const isMountedRef = useRef(null);
    const controller = new AbortController();
    const location = useLocation();
    const [auth, setAuth] = useState(false)
    let [error, setError] = useState('');
    async function getAuth() {
        try {
            const res = await verifyUser(localStorage.getItem('token'));
            setAuth(res !== null && res !== undefined && res);
        } catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        if (!state) {
            isMountedRef.current = true;
            getAuth().then(r => r);
            return () => {
                isMountedRef.current = false;
                controller.abort();
            };
        }
    }, [])

    if (state) {
        if (state.auth) {
            return children;
        } else {
            return <Navigate to="/login" state={{from: location.pathname, auth: false}}/>;
        }
    }

    if (!auth) {
        return <Navigate to="/login" state={{from: location.pathname, auth: false}}/>;
    }


    return children;
}

export default RequireAuth