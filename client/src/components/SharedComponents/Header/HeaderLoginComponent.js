import React from 'react';
import { Link }from 'react-router-dom'
import VisibilityComponent from '../../SharedComponents/VisibilityComponent/VisibilityComponent';

const HeaderLoginComponent = ( props ) => {
  return (
    <div className="HeaderLogin">
      <VisibilityComponent visible={props.userLoggedIn} >
        <span className="HeaderLogin-item" onClick={props.handleUserLogout}>Logout</span>
      </VisibilityComponent>
      <VisibilityComponent visible={!props.userLoggedIn} >
        <Link className="HeaderLogin-item" to='/login' >Login</Link>
        <Link className="HeaderLogin-item" to='/signup'>Sign Up</Link>
      </VisibilityComponent>
    </div>
  )
};

export default HeaderLoginComponent;
