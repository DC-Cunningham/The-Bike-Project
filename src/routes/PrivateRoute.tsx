import React from "react";
import { Route, useNavigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

function PrivateRoute({ path, component: Component }: PrivateRouteProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // if the user isnt logged in, send them to the log in screen
  if (!false) {
    navigate("/login", { state: { pathname: location.pathname } });
    return null;
  }

  return (
    <Route
      {...{ path }}
      element={<Component {...{ location, navigate, path }} />}
    />
  );
}

export { PrivateRoute };
