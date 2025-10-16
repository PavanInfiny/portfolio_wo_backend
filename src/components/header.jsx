import css from "../styles/header.module.css";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function Header() {
  return (
    <>
      <div className={`${css.nav}`}>
        <nav className="navbar navbar-expand-lg bg-body-primary" style={{borderRadius:"10px"}}>
          <div className="container-fluid">
            
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
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active"
                  aria-current="page" href="#" style={{color:"white"}} id="hoverColorChange">
                  Home
                </a>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#skills"
                  style={{color:"white"}}
                  id="hoverColorChange"
                >
                  Skills
                </a>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/admin"
                  style={{color:"white"}}
                  id="hoverColorChange"
                >
                  admin
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <div className={css.header} id="header">
        <div className={css.sticky}>
          <div className={css.logo}></div>
          <div className={css.nav}>
            <ul className={css.headeritems}>
              <li className={css.headeritem}>
                <Link className={css.item} to={"/"}>
                  Home
                </Link>
              </li>
              <li className={css.headeritem}>
                <a className={css.item} href="#skills">
                  Skills
                </a>
              </li>
              <li className={css.headeritem}>
                <a className={css.item} href="/admin">
                  Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Header;
