import css from "../styles/header.module.css"
function Header(){
  return<>
  <div className={css.header}>
    <div className={css.logo}></div>
    <div className={css.nav}>
    <ul className={css.headeritems} >
      <li className={css.headeritem}><a className={css.item} href="">home</a></li>
      <li className={css.headeritem}><a className={css.item}href="">projects</a></li>
      <li className={css.headeritem}><a className={css.item}href="">notes</a></li>
      <li className={css.headeritem}><a className={css.item} href="">contact</a></li>
    </ul>
    </div>
    
  </div>
  </>
}
export default Header;