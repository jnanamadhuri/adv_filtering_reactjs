/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav({ handleInputChange }) {
  return (
    <nav>
      <div className="input-container">
        <input
          type="text"
          className="Search-input"
          placeholder="Enter Your Search"
          onChange={(e) => {
            console.log("Search input:", e.target.value);  // Log input value
            handleInputChange(e);
          }}
        />
      </div>
      <div className="Profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
