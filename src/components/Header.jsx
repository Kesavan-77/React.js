import {useState} from "react";
import logo from "../../public/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [status, setStatus] = useState("login");
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-items">
        <ul className="items-list">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          <li><Link to="/cart" >Cart</Link></li>
          <li>
            <button onClick = {()=>{
              status === "login" ? setStatus("logout") : setStatus("login");
            }} className={status}>{status}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
