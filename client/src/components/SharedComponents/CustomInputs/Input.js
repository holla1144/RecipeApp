import React from 'react';

const CustomInput = ( props ) => {
  return (
    <div className="CustomInput CustomInput--input">
      <input className="CustomInput-field" { ...props} />
      <span className="CustomInput-error"> { props.error } </span>
    </div>
    )

};

export default CustomInput;
