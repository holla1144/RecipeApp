import React from 'react';
import { Link }from 'react-router-dom'
import VisibilityComponent from '../../SharedComponents/VisibilityComponent/VisibilityComponent';

const HeaderLoginComponent = ( props ) => {
  return (
    <div>
      <VisibilityComponent visible={props.userLoggedIn} >
        <span onClick={props.handleUserLogout}>Logout</span>
      </VisibilityComponent>
      <VisibilityComponent visible={!props.userLoggedIn} >
        <Link to='/login' >Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </VisibilityComponent>
    </div>
  )
};

export default HeaderLoginComponent;
