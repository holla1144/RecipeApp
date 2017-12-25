import React from 'react';

const VisibilityComponent = ( props ) => {
  return (
    <div className={ props.visible ? '' : 'hidden'}>
      { props.children }
    </div>
  )
};

export default VisibilityComponent;
