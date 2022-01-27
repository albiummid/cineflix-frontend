import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Context/useContext";

export default function PrivateRoute ( { children, ...rest } )
{
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={( { location } ) =>
                auth.user ? (
                    children
                ) : (
                    <Navigate
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}