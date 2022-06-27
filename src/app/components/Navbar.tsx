import React from 'react';
import LogoWiliam from '../assets/images/logo_white_wiliam.png';

import { Link } from 'react-scroll';

interface NavbarProps {
  isOpenSidebar: boolean;
  handleIsOpenSidebar: () => void;
}

const Navbar = ({ isOpenSidebar, handleIsOpenSidebar }: NavbarProps) => {
  return (
    <>
      <nav className={'navbar'}>
        <div className={'navbar__logo'}>
          <img src={LogoWiliam} width={'100%'} height={'100%'} alt={'LogoWiliam'} />
        </div>

        {/*        <div className={'navbar__sidebar'}>*/}
        <div onClick={handleIsOpenSidebar} className={'navbar__button'}>
          {/* <input
            onClick={handleIsOpenSidebar}
            type='checkbox'
            className='navbar__checkbox'
            id='navi-toggle'
          />
          <label htmlFor='navi-toggle' className='navbar__button'>*/}
          <span
            className={`navbar__icon ${
              !isOpenSidebar ? 'navbar__icon--open' : 'navbar__icon--close'
            }`}
          >
            &nbsp;
          </span>
          {/* </label>*/}
        </div>
        {/*   </div>*/}

        <ul>
          <li>
            <Link
              to='home'
              activeClass={'navbar-active'}
              className={'btn btn-text btn--br-10'}
              smooth
              spy
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to='about-me'
              activeClass={'navbar-active'}
              className={'btn btn-text btn--br-10'}
              smooth
              spy
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              activeClass={'navbar-active'}
              className={'btn btn-text btn--br-10'}
              smooth
              spy
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to='skills'
              activeClass={'navbar-active'}
              className={'btn btn-text btn--br-10'}
              smooth
              spy
            >
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              activeClass={'navbar-active'}
              className={'btn btn-text btn--br-10'}
              smooth
              spy
            >
              Contáctame
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
