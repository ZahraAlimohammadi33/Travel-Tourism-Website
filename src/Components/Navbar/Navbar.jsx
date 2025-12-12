import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState, useEffect } from 'react'
import Button from '../UI/Button'

const Navbar = ()=>{

    const [menuState, setMenuState] = useState(false)
    const [buttonState, setButtonState] = useState(() =>
  typeof window !== "undefined"
    ? window.matchMedia("(min-width: 961px)").matches
    : true
);

    const menuHandler = ()=>{setMenuState(!menuState)}
    const closeMenu = ()=>{setMenuState(false)}

    useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 961px)");
    const handleMediaChange = (e) => {
      setButtonState(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
   

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to={'/'}  className='navbar-logo'>
                Travel <i className='fab fa-typo3'></i>
                </Link>
                <div className='menu-icon' onClick={menuHandler}>
                    <i className={menuState ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={menuState ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-links' onClick={closeMenu}>صفحه اصلی</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/tourism'} className='nav-links' onClick={closeMenu}>گردشگری</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/tour'} className='nav-links' onClick={closeMenu}>تور</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/sign-up'} className='nav-links-mobile' onClick={closeMenu}>ثبت نام</Link>
                    </li>
                </ul>
                { buttonState ? <Button buttonStyle='btn--outline' buttonSize='btn--medium' to={'/sign-up'}>ثبت نام</Button> : null }
            </div>
        </nav>
    )
}

export default Navbar