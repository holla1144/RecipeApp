import React from 'react';
import MainContainer from '../../SharedComponents/MainContent/MainContainer';
import LoginForm from './LoginForm';

const LoginContainer = ( props ) => {
  return (
    <MainContainer pageName="Login">
      <LoginForm setToken={props.setToken} modalOpen={props.modalOpen}/>
    </MainContainer>
  )
};

export default LoginContainer;
