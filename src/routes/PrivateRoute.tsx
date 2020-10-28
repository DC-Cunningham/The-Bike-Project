import React from "react";
import { Route, useNavigate, useLocation, Navigate } from "react-router-dom";

import { useSession } from "../context/UserProvider";

interface PrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

function PrivateRoute({ path, component: Component }: PrivateRouteProps) {
  const {user} = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  // if the user isnt logged in, send them to the log in screen
  if (!user) {
   return <Navigate to="/login" state={{ pathname: location.pathname }} />
  }

  return (
    <Route
      {...{ path }}
      element={<Component {...{ location, navigate, path }} />}
    />
  );
}

export { PrivateRoute };
