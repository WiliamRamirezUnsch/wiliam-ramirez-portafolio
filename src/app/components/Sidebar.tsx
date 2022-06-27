import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

interface SidebarProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: (isOpenSidebar: boolean) => void;
}
const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }: SidebarProps) => {
  useEffect(() => {
    const body = document.body;
    setTimeout(() => {
      if (isOpenSidebar) {
        body.style.height = '100vh';
        body.style.overflowY = 'hidden';
      }
      if (!isOpenSidebar) {
        body.style.overflowY = '';
      }
    }, 500);
  }, [isOpenSidebar]);

  const handleCloseSidebar = () => {
    setIsOpenSidebar(false);
  };

  const onClickLink = () => {
    /* scroller.scrollTo(section, {});*/
    /*    e.preventDefault();*/
    setIsOpenSidebar(false);
  };

  return (
    <>
      <div className={`sidebar ${isOpenSidebar ? 'sidebar__show' : 'sidebar__hidden'}`}>
        <div className={'sidebar__container-close'}>
          <div onClick={handleCloseSidebar} className={'sidebar__close'}>
            <span>&times;</span>
          </div>
        </div>
        <ul className='sidebar__list'>
          <li className='sidebar__item'>
            <Link
              onClick={onClickLink}
              to='home'
              activeClass={'sidebar__link-active'}
              className='sidebar__link'
              smooth
              spy
            >
              Inicio
            </Link>
          </li>
          <li className='sidebar__item'>
            <Link
              onClick={onClickLink}
              to='about-me'
              activeClass={'sidebar__link-active'}
              className='sidebar__link'
              smooth
              spy
            >
              Sobre mí
            </Link>
          </li>
          <li className='sidebar__item'>
            <Link
              onClick={onClickLink}
              to='projects'
              activeClass={'sidebar__link-active'}
              className='sidebar__link'
              smooth
              spy
            >
              Proyectos
            </Link>
          </li>
          <li className='sidebar__item'>
            <Link
              onClick={onClickLink}
              to='skills'
              activeClass={'sidebar__link-active'}
              className='sidebar__link'
              smooth
              spy
            >
              Habilidades
            </Link>
          </li>
          <li className='sidebar__item'>
            <Link
              onClick={onClickLink}
              to='contact'
              activeClass={'sidebar__link-active'}
              className='sidebar__link'
              smooth
              spy
            >
              Contáctame
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
