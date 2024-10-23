import {useState} from "react";
import logo from "../../public/assets/logo.png";

const Header = () => {
  const [status, setStatus] = useState("login");
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-items">
        <ul className="items-list">
          <li>Home</li>
          <li>About</li>
          <li>Orders</li>
          <li>Cart</li>
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
