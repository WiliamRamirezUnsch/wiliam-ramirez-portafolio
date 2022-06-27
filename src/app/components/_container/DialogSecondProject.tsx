import React from 'react';
import CustomDialog from './CustomDialog';
import ImageRimacSosLogin from '../../assets/images/rimac-sos/rimac-sos-login.png';
import ImageRimacSosDashboard from '../../assets/images/rimac-sos/rimac-sos-dashboard.png';
import ImageRimacSosDashboardCases from '../../assets/images/rimac-sos/rimac-sos-dashboard-cases.png';
import ImageRimacSosDashboardCaseMap from '../../assets/images/rimac-sos/rimac-sos-dashboard-case-map.png';
import ImageRimacSosDashboardProvider from '../../assets/images/rimac-sos/rimac-sos-dashboard-provider.png';
import ImageRimacSosDashboardProviderMap from '../../assets/images/rimac-sos/rimac-sos-dashboard-provider-map.png';

interface DialogSecondProjectProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogSecondProject = ({ open, setOpen }: DialogSecondProjectProps) => {
  return (
    <CustomDialog setIsOpen={setOpen} isOpen={open}>
      <div className={'dialog__container-header'}>
        <div />
        <h1 className={'dialog__title '}>Rimac SOS</h1>
        <div onClick={() => setOpen(false)} className='dialog__close'>
          &times;
        </div>
      </div>
      <div className={'dialog__content-body'}>
        <div className={'dialog__text'}>
          <p>
            <b>Resumen: </b>Rimac SOS es una Plataforma web para la gestión de ambulancias y de
            subasta de casos en tiempo Real.
          </p>
          <p>
            <b>Tiempo de Elaboración: </b> 4 meses.
          </p>
          <p>
            <b>Tecnologías aplicadas: </b> Vue.Js, Vuetify, VueX ,Amplify, Google Maps, Leaflet,
            Firebase, Firebase Realtime Database, Firebase Cloud Messaging.
          </p>
        </div>
        <div className={'dialog__images'}>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageRimacSosLogin} alt='ImageRimacSosLogin' />
          </div>
          <div className={'dialog__container-image'}>
            <img width={'100%'} src={ImageRimacSosDashboard} alt='ImageRimacSosDashboard' />
          </div>
          <div className={'dialog__container-image'}>
            <img
              width={'100%'}
              src={ImageRimacSosDashboardCases}
              alt='ImageRimacSosDashboardCases'
            />
          </div>
          <div className={'dialog__container-image'}>
            <img
              width={'100%'}
              src={ImageRimacSosDashboardCaseMap}
              alt='ImageRimacSosDashboardCaseMap'
            />
          </div>
          <div className={'dialog__container-image'}>
            <img
              width={'100%'}
              src={ImageRimacSosDashboardProvider}
              alt='ImageRimacSosDashboardProvider'
            />
          </div>
          <div className={'dialog__container-image'}>
            <img
              width={'100%'}
              src={ImageRimacSosDashboardProviderMap}
              alt='ImageRimacSosDashboardProviderMap'
            />
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default DialogSecondProject;
