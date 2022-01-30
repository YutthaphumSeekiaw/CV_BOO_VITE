import React ,{useState} from 'react';
import { FiActivity,FiMenu,FiX } from "react-icons/fi";
import './header.css'
import { useTranslation } from 'react-i18next'
import profilepic from '../img/profile.jpg'

import { Link, Button, Element, Events, scrollToTop,animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Profile  from './profile';

function header() {
  const [click,setClick] = useState(false)
  const handleClick = () =>{
    setClick(!click)
  }
  const closeMobileMenu = () => {
    setClick(false)
  }

  const { t, i18n } = useTranslation();

  const handleClickLang =(lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <>
    <div className='header'>
      <div className='contrainer'>
        <div className='header-con'>
          <div className='logo-contrainer'>
            <a href='#'>CV <FiActivity/></a>
          </div>
          <ul className={click?"menu active":"menu"}>
          <li className='menu-link' onClick={closeMobileMenu}>
               {/* <Link  to="banner" spy={true} smooth={true} offset={50} duration={500} href='#banner' onClick={closeMobileMenu}>Home</Link> */}
               <Link href='#profile' to='profile'  spy="true" smooth="true" offset={50} duration={500}>{t('header.home')}</Link>
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
               <Link  to="profile" spy="true" smooth="true" offset={50} duration={500} href='#profile' onClick={closeMobileMenu}>{t('header.about')}</Link>
            </li>
            {/* <li className='menu-link' onClick={closeMobileMenu}>
               <Link to="calltoaction" spy={true} smooth={true} offset={50} duration={500} href='#calltoaction' onClick={closeMobileMenu}>{t('header.contract')}</Link>
            </li> */}
            <li className='menu-link' onClick={closeMobileMenu}>
               <a onClick={() => handleClickLang('en')}>EN</a>
               <a>  |  </a>
               <a onClick={() => handleClickLang('th')}>TH</a>
            </li>
            {/* <li className='menu-link' onClick={closeMobileMenu}>
               <a href='#'>Blog</a>
            </li> */}
            
          </ul>
          <div className='mobile-menu' onClick={handleClick}>
            {click?(<FiX/>):(<FiMenu/>)}
          </div>
        </div>

        {/* <div className="profile-con">
        <img src={profilepic} title="profile" className='profilepic'></img>
        </div>  */}
        
         
      </div>
      {/* <Profile></Profile> */}
    </div>
    </>
  )
}

export default header;
