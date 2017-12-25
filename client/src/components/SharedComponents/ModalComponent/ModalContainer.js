import React from 'react';
import ModalBody from './ModalBody';
import VisibilityComponent from '../VisibilityComponent/VisibilityComponent'

const Modal = ( props ) => {
  return (
    <VisibilityComponent visible={ props.visible }>
      <div onClick={ props.handleModalClose } className="Modal">
        <ModalBody modalStyle={ props.modalStyle } message={ props.modalMessage } />
      </div>
    </VisibilityComponent>
  )
};

export default Modal;
