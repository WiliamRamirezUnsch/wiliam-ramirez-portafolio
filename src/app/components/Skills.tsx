import React from 'react';
import ImageHtml from '../assets/images/html.png';
import ImageCss3 from '../assets/images/css-3.png';
import ImageSass from '../assets/images/sass.png';
import ImageBoostrap from '../assets/images/bootstrap.png';
import ImageJavaScript from '../assets/images/js.png';
import ImageTypeScript from '../assets/images/typescript.png';
import ImageNextJs from '../assets/images/nextjs.png';
import ImageReactJs from '../assets/images/reactjs.png';
import ImageRedux from '../assets/images/redux.png';
import ImageMaterialUI from '../assets/images/material-ui-logo.png';
import ImageVueJs from '../assets/images/vuejs.png';
import ImageVuetify from '../assets/images/vuetify-logo.png';

const SvgComponentPrimaryBottom = () => {
  return (
    <svg
      width='100%'
      height='100%'
      id='svg'
      viewBox='0 0 1440 500'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
    >
      <defs>
        <linearGradient id='gradient-about-me-primary-bottom' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='15%' stopColor='#f4a261'></stop>
          <stop offset='85%' stopColor='#e76f51'></stop>
        </linearGradient>
      </defs>
      <path
        d='M 0,500 C 0,500 0,250 0,250 C 54.67115550622766,301.37634726846716 109.34231101245533,352.75269453693426 162,325 C 214.65768898754467,297.24730546306574 265.3019114564064,190.3655691207301 311,177 C 356.6980885435936,163.6344308792699 397.45004316191887,243.78502898014546 455,250 C 512.5499568380811,256.21497101985454 586.8979158959182,188.4943149586879 650,190 C 713.1020841040818,191.5056850413121 764.9582932544087,262.23771118510297 814,281 C 863.0417067455913,299.76228881489703 909.268911086447,266.5548403009002 966,243 C 1022.731088913553,219.44515969909978 1089.9660623998027,205.5429276112961 1149,201 C 1208.0339376001973,196.4570723887039 1258.866839314342,201.2734492539154 1306,211 C 1353.133160685658,220.7265507460846 1396.566580342829,235.3632753730423 1440,250 C 1440,250 1440,500 1440,500 Z'
        stroke='none'
        strokeWidth='0'
        fill='url(#gradient-about-me-primary-bottom)'
        className='transition-all duration-300 ease-in-out delay-150 path-0'
      ></path>
    </svg>
  );
};

const SvgComponentPrimaryTop = () => {
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
        <linearGradient id='gradient-about-me-primary-top' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='15%' stopColor='#f4a261'></stop>
          <stop offset='85%' stopColor='#e76f51'></stop>
        </linearGradient>
      </defs>
      <path
        d='M 0,500 C 0,500 0,250 0,250 C 60.64861265260821,291.4335676408928 121.29722530521641,332.86713528178564 180,319 C 238.70277469478359,305.13286471821436 295.4597114317425,235.9650265137502 347,238 C 398.5402885682575,240.0349734862498 444.86392896781365,313.2727586632137 498,314 C 551.1360710321864,314.7272413367863 611.0845726970032,242.94393883339498 659,248 C 706.9154273029968,253.05606116660502 742.7977802441732,334.95148600320636 798,320 C 853.2022197558268,305.04851399679364 927.7243063263043,193.25011715377974 978,183 C 1028.2756936736957,172.74988284622026 1054.3049944506104,264.0480453816747 1095,276 C 1135.6950055493896,287.9519546183253 1191.0557158712543,220.5577013195215 1251,203 C 1310.9442841287457,185.4422986804785 1375.4721420643727,217.72114934023926 1440,250 C 1440,250 1440,500 1440,500 Z'
        stroke='none'
        strokeWidth='0'
        fill='url(#gradient-about-me-primary-top)'
        className='transition-all duration-300 ease-in-out delay-150 path-0'
        transform='rotate(-180 720 250)'
      ></path>
    </svg>
  );
};

const Skills = () => {
  return (
    <>
      <section id='skills'>
        <div
          style={{
            marginTop: '8rem',
            height: '17rem',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <SvgComponentPrimaryBottom />
        </div>

        <div className={'section-skills'}>
          <div className={'container container--lg'}>
            <div
              style={{
                textAlign: 'center'
              }}
            >
              <h2 className={'heading-secondary heading-secondary--white u-marginY-4'}>
                Habilidades
              </h2>
            </div>
            <div className={'section-skills__grid'}>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageHtml} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>Html 5</span>
              </div>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageCss3} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>CSS 3</span>
              </div>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageSass} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>Sass</span>
              </div>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageBoostrap} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>Boostrap 4,5</span>
              </div>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageJavaScript} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>JavaScript</span>
              </div>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageTypeScript} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>TypeScript</span>
              </div>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageNextJs} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>Next.Js</span>
              </div>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageReactJs} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>React.Js</span>
              </div>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageRedux} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>Redux</span>
              </div>
              <div className={'skill__container-image tooltip'}>
                <span className={'tooltip-box'}>Material UI</span>
                <img className={'skill__image'} src={ImageMaterialUI} alt={'ImageAboutMe'} />
              </div>
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageVueJs} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>Vue.Js 2,3</span>
              </div>{' '}
              <div className={'skill__container-image tooltip'}>
                <img className={'skill__image'} src={ImageVuetify} alt={'ImageAboutMe'} />
                <span className={'tooltip-box'}>Vuetify</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginBottom: '8rem',
            height: '17rem',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <SvgComponentPrimaryTop />
        </div>
      </section>
    </>
  );
};

export default Skills;
