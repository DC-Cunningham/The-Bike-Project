import React from "react";
import { Route, useNavigate } from "react-router-dom";

interface PublicRouteProps {
  path: string;
  component: React.ComponentType<any>;
}

function PublicRoute({ path, component: Component }: PublicRouteProps) {
  const navigate = useNavigate();

  if (!true) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <Route {...{ path }} element={<Component {...{ path, navigate }} />} />
  );
}

export { PublicRoute };
