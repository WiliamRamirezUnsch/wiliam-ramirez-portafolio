import React, { useEffect } from 'react';

interface CustomDialogProps {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  children?: JSX.Element | JSX.Element[];
}

const CustomDialog = ({ isOpen, children }: CustomDialogProps) => {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
    }
    if (!isOpen) {
      body.style.height = '';
      body.style.overflowY = '';
    }
  }, [isOpen]);

  return (
    <>
      <div className={`dialog ${isOpen ? 'dialog__visible' : 'dialog__hidden'}`}>
        <div
          className={`dialog__content ${
            isOpen ? 'dialog__content__visible' : 'dialog__content__hidden'
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default CustomDialog;
