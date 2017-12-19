import React from 'react';
import AlertBody from './AlertBody';

class AlertContainer extends React.Component{
  constructor(props){
    super(props)
  };


  render() {
    return (
      <div className="alert">
        <AlertBody />
        <span className="alert_close">x</span>
      </div>
    )
  }
};

export default AlertContainer;
