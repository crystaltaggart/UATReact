import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../services/authService";

/*use array destructuring to pass in all properties available to the component*/
const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.getCurrentUser())
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        //calls either the component or the render function if passed in
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
