import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const submitSendEmail = (event: any) => {
    event.preventDefault();

    emailjs.sendForm('service_g2hkprb', 'template_lnaumfq', event.target, 'fDPJxTko7WUi5qaiH').then(
      function () {
        alert('El mensaje se ha enviado correctamente');
      },
      function (err) {
        console.log('FAILED...', err);
      }
    );
  };

  return (
    <>
      <section id={'contact'} className={'section-contact'}>
        <div className={'container container--lg'}>
          <div className={'contact'}>
            <div className={'contact__form'}>
              <form onSubmit={submitSendEmail} className='form'>
                <div className='u-margin-bottom-3'>
                  <h2 className={'heading-secondary'}>Contáctame</h2>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='Nombres'
                    id='name'
                    name='name'
                    required
                  />
                  <label htmlFor='name' className='form__label'>
                    Nombres
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='email'
                    className='form__input'
                    placeholder='Correo electrónico'
                    id='email'
                    name='email'
                    required
                  />
                  <label htmlFor='email' className='form__label'>
                    Correo electrónico
                  </label>
                </div>

                <div className='form__group'>
                  <textarea
                    rows={3}
                    className='form__input'
                    placeholder='Mensaje'
                    id='message'
                    name='message'
                    required
                  />
                  <label htmlFor='message' className='form__label'>
                    Mensaje
                  </label>
                </div>

                <div className='form__group'>
                  <button type={'submit'} className='btn btn--radius btn--white'>
                    Enviar &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
