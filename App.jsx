 import React, { useState } from "react";
import Registration from "./Components/Registration";
import { LoginForm } from "./Components/Loginform";
import FarmerLanding from "./Components/FarmerLanding";
import "./App.css";

const App = () => {
  const [currentView, setCurrentView] = useState("login");  // Start with login page

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="app-container">
      {currentView === "landing" && <FarmerLanding />}

      {currentView === "login" && (
        <div className="form-container">
          <LoginForm />
          <p className="toggle-text">
            Don't have an account?{" "}
            <button
              className="toggle-button"
              onClick={() => handleNavigation("register")}
            >
              Sign Up
            </button>
          </p>
          <button
            className="toggle-button"
            onClick={() => handleNavigation("landing")}
          >
            Go to Farmer Landing
          </button>
        </div>
      )}

      {currentView === "register" && (
        <div className="form-container">
          <Registration />
          <p className="toggle-text">
            Already have an account?{" "}
            <button
              className="toggle-button"
              onClick={() => handleNavigation("login")}
            >
              Log In
            </button>
          </p>
        </div>
      )}

      {currentView !== "login" && (
        <button
          className="back-button"
          onClick={() => handleNavigation("login")}
        >
          Back to Login
        </button>
      )}
    </div>
  );
};

export default App;