import React, { Component, Suspense } from "react"
import {
  HashRouter,
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("JWT") ? (
        <Component {...props} />
      ) : (
        <Navigate to={{ patname: "/login", state: { from: props.location } }} />
      )
    }
  />
)
export default PrivateRoute
