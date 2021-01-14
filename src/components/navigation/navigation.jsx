import { NavLink } from 'react-router-dom';
import navStyle from './navigation.module.css'


function Nav(){
    return(
        <nav className={navStyle.nav}>
        <div className={navStyle.nav__el}><NavLink to ="/profile" activeClassName = {navStyle.activeLink}>Профиль</NavLink></div>
        <div className={navStyle.nav__el}><NavLink to ="/dialogs" activeClassName = {navStyle.activeLink}>Сообщения</NavLink></div>
        <div className={navStyle.nav__el}><NavLink to ="#" >Новости</NavLink></div>
        <div className={navStyle.nav__el}><NavLink to ="#" >Музыка</NavLink></div>
        <div className={navStyle.nav__el}><NavLink to ="#" >Настройки</NavLink></div>
      </nav>
    );
}

export default Nav;