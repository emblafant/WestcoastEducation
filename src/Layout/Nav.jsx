import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="nav" className="navbar">
      <h1 className="logo">Westcoast Education</h1>
      <ul>
        <li>
          <Link to="/">Public</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/teachers">Teachers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
