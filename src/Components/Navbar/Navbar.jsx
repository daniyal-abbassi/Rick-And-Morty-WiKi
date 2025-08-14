import { Link,NavLink } from "react-router-dom";
import "./navbar.css"
import ChangeTheme from "../Change-theme/Change-theme";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
          <a className="navbar-brand" href="#">
            
          <h1 className="text-center mt-4 fw-bold">
            Rick & Morty <span className="text-primary">WiKi</span>
          </h1>
          </a>
          
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarNavAltMarkup">
            <div className="navbar-nav fs-5 fw-bold">
            <NavLink className="nav-link title" activeClassName="active" to="/">Characters</NavLink>
              <NavLink className="nav-link title" activeClassName to="/episodes">Episodes</NavLink>
              <NavLink className="nav-link title" activeClassName to="/locations">Locations</NavLink>
            </div>
            
          </div>
          <ChangeTheme />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
