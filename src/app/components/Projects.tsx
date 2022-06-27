import React, { useState } from 'react';
import DialogFirstProject from './_container/DialogFirstProject';
import DialogSecondProject from './_container/DialogSecondProject';
import DialogThirdProject from './_container/DialogThirdProject';

const Projects = () => {
  const [isOpenDialogFirstProject, setIsOpenDialogFirstProject] = useState<boolean>(false);
  const [isOpenDialogSecondProject, setIsOpenDialogSecondProject] = useState<boolean>(false);
  const [isOpenDialogThirdProject, setIsOpenDialogThirdProject] = useState<boolean>(false);
  return (
    <>
      <section id='projects' className={'section-projects'}>
        <div className={'container container--lg'}>
          <div className={'section-projects__title'}>
            <h2 className={'heading-secondary heading-secondary--primary u-marginY-2'}>
              Proyectos
            </h2>
          </div>
          <div className={'section-projects__description'}>
            Estos son algunos proyectos que he implementado en el desarrollo de aplicaciones web.
          </div>
          <div className={'section-projects__grid'}>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--1'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--1'>Firecity</span>
                </h4>
                <div className='card__details card__details--1'>
                  <p>Implementación de la plataforma web Firecity.</p>
                  <b>Plataforma de monitorio contra incendios en tiempo real.</b>
                </div>
              </div>
              <div className='card__side card__side--back card__side--back-1'>
                <div className='card__cta'>
                  <div className='card__technology-box'>
                    <p className='card__technology-only'>Tecnologías utilizadas:</p>
                    <div className={'card__technology-list'}>
                      <ul>
                        <li>VueJs 2</li>
                        <li>Vuetify</li>
                        <li>Amplify</li>
                        <li>AWS</li>
                        <li>Api Gateway</li>
                      </ul>
                    </div>
                    <div
                      onClick={() => setIsOpenDialogFirstProject(true)}
                      className={'btn btn--white btn--radius u-margin-top-1'}
                    >
                      Mas información
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--2'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--2'>Rimac SOS</span>
                </h4>
                <div className='card__details card__details--2'>
                  <p>Implementación de la plataforma web RimacSOS.</p>
                  <b>Monitoreo de ambulancias en tiempo real, y subasta de casos en tiempo real.</b>
                </div>
              </div>
              <div className='card__side card__side--back card__side--back-2'>
                <div className='card__cta'>
                  <div className='card__technology-box'>
                    <p className='card__technology-only'>Tecnologías utilizadas:</p>
                    <div className={'card__technology-list'}>
                      <ul>
                        <li>VueJs 2</li>
                        <li>Amplify</li>
                        <li>Api Gateway</li>
                        <li>Firebase</li>
                        <li>Google Maps</li>
                      </ul>
                    </div>
                    <div
                      onClick={() => setIsOpenDialogSecondProject(true)}
                      className={'btn btn--white btn--radius u-margin-top-1'}
                    >
                      Mas información
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card__side card__side--front'>
                <div className='card__picture card__picture--3'>&nbsp;</div>
                <h4 className='card__heading'>
                  <span className='card__heading-span card__heading-span--3'>Asbabc Crehana</span>
                </h4>
                <div className='card__details card__details--3'>
                  <p>Implementación de la plataforma web Asbanc Crehana.</p>
                  <b>Plataforma de aprendizaje en línea.</b>
                </div>
              </div>
              <div className='card__side card__side--back card__side--back-3'>
                <div className='card__cta'>
                  <div className='card__technology-box'>
                    <p className='card__technology-only'>Tecnologías utilizadas:</p>
                    <div className={'card__technology-list'}>
                      <ul>
                        <li>NextJs</li>
                        <li>ReactJs</li>
                        <li>Sass</li>
                        <li>Axios</li>
                        <li>React - Hooks</li>
                      </ul>
                    </div>
                    <div
                      onClick={() => setIsOpenDialogThirdProject(true)}
                      className={'btn btn--white btn--radius u-margin-top-1'}
                    >
                      Mas información
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DialogFirstProject open={isOpenDialogFirstProject} setOpen={setIsOpenDialogFirstProject} />
      <DialogSecondProject
        open={isOpenDialogSecondProject}
        setOpen={setIsOpenDialogSecondProject}
      />
      <DialogThirdProject open={isOpenDialogThirdProject} setOpen={setIsOpenDialogThirdProject} />
    </>
  );
};

export default Projects;
