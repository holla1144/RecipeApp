import React from 'react';
import MainContainer from '../../SharedComponents/MainContent/MainContainer';
import SignUpForm from './SignUpForm';

const SignUpContainer = ( props ) => {
  return (
    <MainContainer pageName="Sign Up">
      <SignUpForm modalOpen={props.modalOpen}/>
    </MainContainer>
  )
};

export default SignUpContainer;
