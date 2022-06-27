import React from 'react';
import CustomDialog from './CustomDialog';
import ImageAsbancLogin from '../../assets/images/asbanc/asbanc-login.png';
import ImageAsbancResources from '../../assets/images/asbanc/asbanc-resources.png';
import ImageAsbancCourses from '../../assets/images/asbanc/asbanc-courses.png';
import ImageAsbancProfile from '../../assets/images/asbanc/asbanc-profile.png';

interface DialogThirdProjectProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogThirdProject = ({ open, setOpen }: DialogThirdProjectProps) => {
  return (
    <CustomDialog setIsOpen={setOpen} isOpen={open}>
      <div className={'dialog__container-header'}>
        <div />
        <h1 className={'dialog__title '}>Asbanc Crehana</h1>
        <div onClick={() => setOpen(false)} className='dialog__close'>
          &times;
        </div>
      </div>
      <div className={'dialog__content-body'}>
        <div className={'dialog__text'}>
          <p>
            <b>Resumen: </b>Asbanc Crehana es una Plataforma de educación en línea.
          </p>
          <p>
            <b>Tiempo de Elaboración: </b> 3 meses.
          </p>
          <p>
            <b>Tecnologías aplicadas: </b> Next.Js, Axios, React Hooks, React Hook Form, Sass,
            otros.
          </p>
        </div>
        <div className={'dialog__images'}>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageAsbancLogin} alt='Firecity Login' />
          </div>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageAsbancResources} alt='Firecity Login' />
          </div>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageAsbancCourses} alt='Firecity Login' />
          </div>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageAsbancProfile} alt='Firecity Login' />
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default DialogThirdProject;
