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
                <Link href='#profile' to='profile'  spy="true" smooth="true" offset={50} duration={500}>{t('header.home')}</Link>
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
               <Link  to="skills" spy="true" smooth="true" offset={50} duration={500} href='#skills' onClick={closeMobileMenu}>{t('header.skills')}</Link>
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
               <Link  to="experiences" spy="true" smooth="true" offset={50} duration={500} href='#experiences' onClick={closeMobileMenu}>{t('header.experiences')}</Link>
            </li>
            <li className='menu-link' onClick={closeMobileMenu}>
               <Link  to="education" spy="true" smooth="true" offset={50} duration={500} href='#education' onClick={closeMobileMenu}>{t('header.education')}</Link>
            </li>

            <li className='menu-link' onClick={closeMobileMenu}>
               <a style={{cursor:"pointer"}} onClick={() => handleClickLang('en')}>EN</a>
               <a>  |  </a>
               <a  style={{cursor:"pointer"}} onClick={() => handleClickLang('th')}>TH</a>
            </li>

          </ul>
          <div style={{cursor:"pointer"}} className='mobile-menu' onClick={handleClick}>
            {click?(<FiX/>):(<FiMenu/>)}
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default header;
