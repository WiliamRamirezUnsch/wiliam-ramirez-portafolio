import React from 'react';
import CustomDialog from './CustomDialog';
import ImageFirecityLogin from '../../assets/images/firecity/firecity-login.png';
import ImageFirecityDashboard from '../../assets/images/firecity/firecity-dashboard.png';
import ImageFirecityDashboardDark from '../../assets/images/firecity/firecity-dashboard-dark.png';
import ImageFirecityBluePrints from '../../assets/images/firecity/firecity-blueprint.png';

interface DialogFirstProjectProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogFirstProject = ({ open, setOpen }: DialogFirstProjectProps) => {
  return (
    <CustomDialog setIsOpen={setOpen} isOpen={open}>
      <div className={'dialog__container-header'}>
        <div />
        <h1 className={'dialog__title '}>Firecity</h1>
        <div onClick={() => setOpen(false)} className='dialog__close'>
          &times;
        </div>
      </div>
      <div className={'dialog__content-body'}>
        <div className={'dialog__text'}>
          <p>
            <b>Resumen: </b>Firecity es una Plataforma Integral Para Gestión De Sistemas Contra
            Incendios. Este cuenta con dos módulos; panel administrativo y panel de planos.
          </p>
          <p>
            <b>Tiempo de Elaboración: </b> 3 meses.
          </p>
          <p>
            <b>Tecnologías aplicadas: </b> Vue.Js, Vuetify, VueX , AWS IoT, Amplify, AWS-Amplify,
            otros.
          </p>
        </div>
        <div className={'dialog__images'}>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageFirecityLogin} alt='Firecity Login' />
          </div>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageFirecityDashboard} alt='Firecity Login' />
          </div>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageFirecityDashboardDark} alt='Firecity Login' />
          </div>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageFirecityBluePrints} alt='Firecity Login' />
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default DialogFirstProject;
