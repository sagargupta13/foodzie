import { LOGO_URL } from "../../utils/constants";

const Header = () => {
    return (
      <div className="navbar">
        <div className="logo-container">
          <img src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Conatct Us</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header