import React from 'react';
import ImageAboutMe from '../assets/images/about-me.png';
import { COLORS } from '../common/constants/colors';

const SvgComponentSecondaryBottom = () => {
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
        <linearGradient id='gradient-about-me-bottom' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='5%' stopColor={COLORS.primary}></stop>
          <stop offset='95%' stopColor={COLORS.secondary}></stop>
        </linearGradient>
      </defs>
      <path
        d='M 0,500 C 0,500 0,250 0,250 C 54.67115550622766,301.37634726846716 109.34231101245533,352.75269453693426 162,325 C 214.65768898754467,297.24730546306574 265.3019114564064,190.3655691207301 311,177 C 356.6980885435936,163.6344308792699 397.45004316191887,243.78502898014546 455,250 C 512.5499568380811,256.21497101985454 586.8979158959182,188.4943149586879 650,190 C 713.1020841040818,191.5056850413121 764.9582932544087,262.23771118510297 814,281 C 863.0417067455913,299.76228881489703 909.268911086447,266.5548403009002 966,243 C 1022.731088913553,219.44515969909978 1089.9660623998027,205.5429276112961 1149,201 C 1208.0339376001973,196.4570723887039 1258.866839314342,201.2734492539154 1306,211 C 1353.133160685658,220.7265507460846 1396.566580342829,235.3632753730423 1440,250 C 1440,250 1440,500 1440,500 Z'
        stroke='none'
        strokeWidth='0'
        fill='url(#gradient-about-me-bottom)'
        className='transition-all duration-300 ease-in-out delay-150 path-0'
      ></path>
    </svg>
  );
};

const SvgComponentSecondaryTop = () => {
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
        <linearGradient id='gradient-about-me-top' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='5%' stopColor={COLORS.primary}></stop>
          <stop offset='95%' stopColor={COLORS.secondary}></stop>
        </linearGradient>
      </defs>
      <path
        d='M 0,500 C 0,500 0,250 0,250 C 60.64861265260821,291.4335676408928 121.29722530521641,332.86713528178564 180,319 C 238.70277469478359,305.13286471821436 295.4597114317425,235.9650265137502 347,238 C 398.5402885682575,240.0349734862498 444.86392896781365,313.2727586632137 498,314 C 551.1360710321864,314.7272413367863 611.0845726970032,242.94393883339498 659,248 C 706.9154273029968,253.05606116660502 742.7977802441732,334.95148600320636 798,320 C 853.2022197558268,305.04851399679364 927.7243063263043,193.25011715377974 978,183 C 1028.2756936736957,172.74988284622026 1054.3049944506104,264.0480453816747 1095,276 C 1135.6950055493896,287.9519546183253 1191.0557158712543,220.5577013195215 1251,203 C 1310.9442841287457,185.4422986804785 1375.4721420643727,217.72114934023926 1440,250 C 1440,250 1440,500 1440,500 Z'
        stroke='none'
        strokeWidth='0'
        fill='url(#gradient-about-me-top)'
        className='transition-all duration-300 ease-in-out delay-150 path-0'
        transform='rotate(-180 720 250)'
      ></path>
    </svg>
  );
};

const AboutMe = () => {
  const redirectCvOnline = () => {
    //window.open('https://drive.google.com/file/d/1P5IUPQc4zhw3jlrgreDeL58QB8Iak77f/view', '_blank');
    window.open('https://drive.google.com/file/d/1-CKmy90s3z0nlFkAUeG0vyoDitCsNLCU/view', '_blank');
  };

  return (
    <>
      <section id='about-me'>
        <div
          style={{
            marginTop: '8rem',
            height: '17rem',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <SvgComponentSecondaryBottom />
        </div>
        <div className={'section-about-me'}>
          <div className={'container container--lg'}>
            <div className={'section-about-me__grid'}>
              <div className={'section-about-me__grid__title'}>
                <h2 className={'heading-secondary heading-secondary--white'}>Sobre mi</h2>
              </div>
              <div className={'about-me__image'}>
                <div className={'about-me__container-image'}>
                  <img src={ImageAboutMe} alt={'ImageAboutMe'} />
                </div>
              </div>
              <div className={'about-me__info'}>
                <p>
                  Hola, me llamo Wiliam, soy desarrollador Frontend con más de tres años experiencia
                  en tecnologías Frontend (React y VueJs), En mi experiencia he implementado aplicaciones
                  en el sector privado. Me considero una persona autodidacta y con ganas de afrontar nuevos
                  retos, en cada oportunidad siempre tengo como prioridad la calidad del código fuente y las
                  buenas prácticas que conllevan estas.
                </p>
                <p
                  style={{
                    padding: '2rem 0'
                  }}
                >
                  Participe en la implementación de Firecity (Sistema contra incendios en tiempo real) y de
                  la plataforma web RimacSOS (Monitoreo de ambulancias en tiempo real).
                </p>
                <p>
                  Actualmente, tengo un nuevo reto en una de las principales aseguradoras peruanas,
                  especializada en Rentas Vitalicias, Seguros de Vida y Bancaseguros, Interseguro, del grupo
                  Intercorp, perteneciendo al equipo Vida Cash.
                </p>
                <div className={'about-me__buttons'}>
                  <a
                    href='/CV-WILIAM-RAMIREZ.pdf'
                    download={true}
                    className={'btn btn--radius btn--white u-margin-top-2'}
                  >
                    Descargar CV
                  </a>
                  <div
                    onClick={redirectCvOnline}
                    className={'btn btn--disabled btn--radius btn--white u-margin-top-2'}
                  >
                    Ver CV en línea
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '8rem', height: '17rem', width: '100%', overflow: 'hidden' }}>
          <SvgComponentSecondaryTop />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
