import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="header">Crypto Currencie </div>
      </Link>
      <Link to="/currencies">
        <div> Prices</div>
      </Link>
    </div>
  );
};

export default Nav;
