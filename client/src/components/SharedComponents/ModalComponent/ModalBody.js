import React from "react";

const ModalBody = ( props ) => {
  const modalHead = props.modalStyle === 'negative' ? <h1 className="Modal-head Modal-head--negative">Whoops!</h1> : <h1 className="Modal-head Modal-head--positive">Great!</h1>;
  return (
    <div className={"Modal-body" + " " + props.modalStyle}>
      { modalHead }
      <p> { props.message } </p>
    </div>
  )
};

export default ModalBody;
