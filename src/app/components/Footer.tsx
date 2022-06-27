import React from 'react';
import LogoImage from '../assets/images/logo_white_wiliam_ramirez.png';

const Footer = () => {
  return (
    <>
      <footer className={'footer'}>
        <div className={'container container--lg'}>
          <div className={'footer__container'}>
            <div className={'footer__logo'}>
              <div className={'footer__container-image'}>
                <img className={'footer__image'} src={LogoImage} alt={'LogoImage'} />
              </div>
            </div>
            <div className={'footer__info'}>
              Elaborado por Wiliam Eduar, Ramirez Gutierrez, Ayacucho - Perú, web hecha con React 18
            </div>
          </div>
        </div>
        <div className={'footer__copyright'}>
          © Todos los Derechos Reservados {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
