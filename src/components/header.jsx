import css from "../styles/header.module.css";
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className={css.header} id="header">
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
      </div>
    </>
  );
}
export default Header;
