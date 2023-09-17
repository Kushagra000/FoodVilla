import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  return true;
};
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Logo"
      src="https://rukminim1.flixcart.com/image/850/1000/kyhlfgw0/tea/r/d/g/250-healthy-chai-fresh-assam-tea-250gm-1-pouch-regular-tea-original-imagapgc9ryyffzm.jpeg?q=90"
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to='/' className="links"><li >Home</li></Link>
          <Link to='/About' className="links"><li >About</li></Link>
          <Link to='/Contact' className="links" ><li >Contact</li></Link>
          <li className="links">Cart</li>
        </ul>
        <div className="login-panel">
          {isLoggedIn ? (
            <button onClick={()=>setIsLoggedIn(false)} className="login-button">
              Logout
            </button>
          ) : (
            <button onClick={()=>setIsLoggedIn(true)} className="login-button">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
