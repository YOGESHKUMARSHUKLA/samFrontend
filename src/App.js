import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import AddTutorial from "./components/add-tutorial.component";
import AddTrainee from "./components/add-trainee.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import TraineePage from "./components/Trainee";
import TraineeDashboard from "./components/Dashboard"

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>

      <nav className="navbar navbar-expand navbar-dark " style={{ backgroundColor: '#4a0505' }}>
        <Link to={"/home"} className="navbar-brand" style={{ color: 'white' }}>
          SAMS
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link" style={{ color: 'white' }}>
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link" style={{ color: 'white' }}>
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link" style={{ color: 'white' }}>
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link" style={{ color: 'white' }}>
                User
              </Link>
            </li>
          )}
          <div className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <Link to={"/viewTrainee"} className="nav-link" style={{ color: 'white' }}>
                Trainee
              </Link>
            </li>
           
          </div>
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}  style={{ color: 'white' }}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link" style={{ color: 'white' }}>
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link" style={{ color: 'white' }}>
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
<div className="background"></div>
      <div className="container mt-3">
        <Routes>
          {/* <Route exact path={"/"} element={<Home />} /> */}
          <Route exact path={"/home"} element={<TraineeDashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/" element={<TraineePage />} />
          <Route path="/addTrainee" element={<AddTrainee />} />
          <Route path="/viewTrainee" element={<TraineePage />} />
        </Routes>
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
