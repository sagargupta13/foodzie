import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="navbar">
      <div className="logo-container">
        {/* <img src={LOGO_URL} /> */}
        <h1 className="name-logo">FOODZIE</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Conatct Us</li>
          <li>About</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn==="Login" ? setLoginBtn("Logout") :
              setLoginBtn("Login") ;
            }}
          >{loginBtn}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
