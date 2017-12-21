import React from 'react';
import ModalBody from './ModalBody';

const Modal = ( props ) => {
  return (
    <div onClick={ props.handleModalClose } className={props.modalVisible ? 'Modal' : 'Modal hidden'}>
      <ModalBody modalStyle={ props.modalStyle } message={ props.modalMessage } />
    </div>
  )
};

export default Modal;
