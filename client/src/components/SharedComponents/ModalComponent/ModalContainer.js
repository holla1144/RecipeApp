import React from 'react';
import ModalBody from './ModalBody';

const Modal = ( props ) => {
  return (
    <div onClick={ props.handleModalClose } className={props.modalVisible ? 'Modal' : 'Modal hidden'}>
      <ModalBody message={ props.modalMessage } />
    </div>
  )
};

export default Modal;
