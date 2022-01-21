import {Navigate} from "react-router";
import React from "react";

function RequireUnauth({ auth, setAuthorised, path, setUser, children }) {
    if (auth) {
        return <Navigate to={path}/>;
    }

    return React.cloneElement(children, {auth: auth, setAuthorised: setAuthorised, setUser: setUser});
}

export default RequireUnauth