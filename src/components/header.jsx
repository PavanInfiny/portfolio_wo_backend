import css from "../styles/header.module.css"
function Header(){
  return<>
  
  <div className={css.header} id="header">
    <div className={css.sticky}>
    <div className={css.logo}></div>
    <div className={css.nav}>
    <ul className={css.headeritems} >
      <li className={css.headeritem}><a className={css.item} href="#header">home</a></li>
      <li className={css.headeritem}><a className={css.item}href="#projects">projects</a></li>
      <li className={css.headeritem}><a className={css.item}href="#skills">Skills</a></li>
      <li className={css.headeritem}><a className={css.item} href="">contact</a></li>
    </ul>
    </div>
    </div>
  </div>
  </>
}
export default Header;