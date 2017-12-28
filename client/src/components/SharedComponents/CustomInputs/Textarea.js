import React from 'react';

const CustomTextarea = ( props ) => {
  return (
    <div className="CustomInput CustomInput--textarea">
      <textarea className="CustomInput-field" { ...props} ></textarea>
      <span className="CustomInput-error"> { props.error } </span>
    </div>
  )
};

export default CustomTextarea;
