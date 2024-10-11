import React, { useState } from "react";
import "./Navbar.css";
import { Link , useLocation} from "react-router-dom";


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);


  const location = useLocation();

  const isSignupOrLogin = location.pathname === "/signin" || location.pathname === "/signup";
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <nav className={`navbar ${isSignupOrLogin ? 'signup-login-navbar' : ''}`}>
      <div className="navbar-brand">
        <Link to="/">LOGO HERE</Link>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={showMenu ? "menu active" : "menu"}>
        <li>
          <Link to='/'>Home</Link> 
        </li>
        <li>
          <Link to='/courses'>Courses</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>

        <li>
          <Link to='/call'>Call to this number</Link>
          
        </li>
        <li>
          <Link to='/signin'>
          <button className="btn" onClick={toggleSignIn} >
            Login
          </button>
          {/* {showSignIn && <SignInForm />} */}
          </Link>
        </li>
        <li>
          <Link to="/signup">
          <button className="btn-signup" onClick={toggleSignUp}>
            Signup
          </button>
          </Link>
          {/* {showSignUp && <SignUpForm />} */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
