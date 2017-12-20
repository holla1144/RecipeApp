import React from 'react';

const ErrorContainer = (props) => {
  return (
    <div className={ props.isVisible ? 'ErrorContainer' : 'hidden' }>
      <p className="ErrorContainer-text"> { props.errorText } </p>
    </div>
  )
};

export default ErrorContainer;
