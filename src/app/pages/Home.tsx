import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import { BREAKPOINTS } from '../common/constants/breakpoints';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isShowNavbar, setIsShowNavbar] = useState<boolean>(false);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const handleIsOpenSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 150;
      if (show) {
        setIsShowNavbar(true);
        setIsFirstLoad(false);
      } else {
        setIsShowNavbar(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > BREAKPOINTS.md) {
        setIsOpenSidebar(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/*<Navbar />*/}
      <main className={'container-home'}>
        <Sidebar setIsOpenSidebar={setIsOpenSidebar} isOpenSidebar={isOpenSidebar} />
        {!isFirstLoad && (
          <div className={`navigation ${isShowNavbar ? 'navigation__show' : 'navigation__hide'}`}>
            <div className={'container container--lg'}>
              <Navbar handleIsOpenSidebar={handleIsOpenSidebar} isOpenSidebar={isOpenSidebar} />
            </div>
          </div>
        )}
        <Header handleIsOpenSidebar={handleIsOpenSidebar} isOpenSidebar={isOpenSidebar} />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
