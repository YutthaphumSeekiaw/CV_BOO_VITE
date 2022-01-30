import React from 'react';
import './profile.css'
import { useTranslation } from 'react-i18next'
import profilepic from '../img/profile.jpg'

let bannerData = {
    title:"React Landing Page",
     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sapiente cum ab laborum voluptatum atque alias sint ipsa? Saepe dolor sequi ex sint tenetur quaerat numquam magni aspernatur perspiciatis id?"
}

function Profile() {

    const { t, i18n } = useTranslation();

  return <div className='banner-bg' id='profile'>
      <div className='contrainner'>
          <div className='banner-con'>
              <div className='banner-text'>
                  <img src={profilepic} title="profile" className='profilepic'></img>
                  <h1>{t('banner.title')}</h1>
                  <p>
                      {bannerData.desc}
                  </p>
                  <a href='#' className='banner-btn'>Lean More</a>
              </div>
          </div>
      </div>
  </div>;
}

export default Profile;
