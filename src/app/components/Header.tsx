import React from 'react';
import HeaderImage from '../assets/images/gifs/header-frontend.gif';
import { ReactComponent as GithubSvg } from '../assets/images/svg/github.svg';
import { ReactComponent as LinkedinSvg } from '../assets/images/svg/linkedin.svg';
import { ReactComponent as TwitterSvg } from '../assets/images/svg/twitter.svg';
import Navbar from './Navbar';
export function SvgComponent() {
  return (
    <svg
      width='100%'
      height='100%'
      id='svg'
      viewBox='0 0 1440 500'
      xmlns='http://www.w3.org/2000/svg'
      className='transition duration-300 ease-in-out delay-150'
      preserveAspectRatio='none'
    >
      <defs>
        <linearGradient id='gradient-header' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='5%' stopColor='#e76f51'></stop>
          <stop offset='95%' stopColor='#f4a261'></stop>
        </linearGradient>
      </defs>
      <path
        d='M 0,500 C 0,500 0,250 0,250 C 34.99350292770389,227.10982545138717 69.98700585540777,204.2196509027743 99,224 C 128.01299414459223,243.7803490972257 151.04547950607278,306.23122184028995 186,316 C 220.95452049392722,325.76877815971005 267.83107612030113,282.855461736066 303,283 C 338.16892387969887,283.144538263934 361.6302160127227,326.3469312154461 386,310 C 410.3697839872773,293.6530687845539 435.6480598288082,217.75681340214965 470,196 C 504.3519401711918,174.24318659785035 547.7775446720445,206.6258151759554 583,221 C 618.2224553279555,235.3741848240446 645.241761483014,231.73992589402854 674,248 C 702.758238516986,264.26007410597146 733.2554093958996,300.4144812479305 763,297 C 792.7445906041004,293.5855187520695 821.7366009333874,250.60214911424947 850,223 C 878.2633990666126,195.39785088575053 905.7981868705506,183.17692229507156 943,206 C 980.2018131294494,228.82307770492844 1027.0706515844106,286.6901617054643 1066,273 C 1104.9293484155894,259.3098382945357 1135.9192067918075,174.06243088307139 1161,171 C 1186.0807932081925,167.93756911692861 1205.2525212483597,247.06011476225007 1239,270 C 1272.7474787516403,292.93988523774993 1321.0707082147542,259.6971100679285 1357,247 C 1392.9292917852458,234.30288993207148 1416.464645892623,242.15144496603574 1440,250 C 1440,250 1440,500 1440,500 Z'
        stroke='none'
        strokeWidth='0'
        fill='url(#gradient-header)'
        className='transition-all duration-300 ease-in-out delay-150 path-0'
        transform='rotate(-180 720 250)'
      ></path>
    </svg>
  );
}

/*export default SvgComponent*/

/*export default SvgComponent;*/
interface HeaderProps {
  isOpenSidebar: boolean;
  handleIsOpenSidebar: () => void;
}

const Header = ({ isOpenSidebar, handleIsOpenSidebar }: HeaderProps) => {
  const handleRedirect = (path: string) => {
    window.open(path, '_blank');
  };

  return (
    <>
      <section id='home' className={'header'}>
        <div
          style={{
            height: '20rem',
            width: '100%',
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            zIndex: -1
          }}
        >
          <SvgComponent />
        </div>
        <div className={'container container--lg'}>
          <div className={'header__grid'}>
            <div className={'header__grid__navigation'}>
              <Navbar handleIsOpenSidebar={handleIsOpenSidebar} isOpenSidebar={isOpenSidebar} />
            </div>

            <div className={'header__grid__info'}>
              <h1 className={'header__grid__info__name'}>Wiliam Ramirez</h1>
              <h4 className={'header__grid__info__position'}>Desarrollador Front-End Junior</h4>
              <div className={'header__grid__info__icons u-margin-top-2'}>
                <GithubSvg
                  onClick={() => handleRedirect('https://github.com/WiliamEduarRamirez')}
                  className={'icon'}
                />

                <LinkedinSvg
                  onClick={() =>
                    handleRedirect(
                      'https://www.linkedin.com/in/wiliam-eduar-ramirez-gutierrez-481317210/'
                    )
                  }
                  className={'icon u-marginX-2'}
                />
                <TwitterSvg
                  onClick={() => handleRedirect('https://twitter.com/wiliam_eduar')}
                  className={'icon'}
                />
              </div>
            </div>
            <div className={'header__grid__image'}>
              <img src={HeaderImage} alt={''} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
