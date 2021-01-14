import headerStyle from './header.module.css'

function Header(){
    return (
        <header className={headerStyle.header}>
        <img className = {headerStyle.header__logo}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
          alt="logo"
          width="40px"
        />
      </header>
    );
}

export default Header;