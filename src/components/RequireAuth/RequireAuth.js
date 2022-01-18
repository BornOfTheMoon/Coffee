import getToken from "../../getToken";
import {useLocation, Navigate} from "react-router";

function RequireAuth({ children }) {
    let auth = getToken !== null;
    let location = useLocation();

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}

export default RequireAuth