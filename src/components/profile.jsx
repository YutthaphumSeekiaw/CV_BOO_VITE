import React from 'react';
import './profile.css'
import { useTranslation } from 'react-i18next'
import profilepic from '../img/profile.jpg'


function Profile() {

    const { t, i18n } = useTranslation();

  return (
      <>
      <div className='banner-bg' id='profile'>
      <div className='contrainner'>
          <div className='banner-con'>
              <div className='banner-text'>
                  <img src={profilepic} title="profile" className='profilepic'></img>
                  {/* <h1>{t('banner.title')}</h1> */}
                  <h2>{t('profile.title')}</h2>
                  <p>
                  {t('profile.person')}
                  </p>
                  <p>
                  {t('profile.address')}
                  </p>
                  <p>
                  {t('profile.mobile')}
                  </p>
                  <p>
                  {t('profile.email')}
                  </p>
                  <a href='#' className='banner-btn'>{t('profile.btn')}</a>
              </div>        
          </div>
          

      </div>    
  </div>
  </>

   );
}

export default Profile;
