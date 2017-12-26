import React from 'react';
import CustomInput from '../../SharedComponents/CustomInputs/CustomInputField';
import { validate } from '../../../services/formValidation';
import { signupUser } from '../../../services/httpRequests';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmaion: '',
      formIsValid: false
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormChange(){

  };

  handleFormSubmit(e){
    e.preventDefault();

  };

  handleInputChange(e){
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form onChange={ this.handleFormChange }>
          <label htmlFor="signup-username">Enter a username: </label>
          <CustomInput id="signup-username" name="username" elementType="textInput" validationType='isNotBlank'/>
          <label htmlFor="signup-email" >Enter an email: </label>
          <CustomInput id="signup-email" validationType='isValidEmail' name="email" elementType="emailInput" />
          <label htmlFor="signup-password">Enter a password: </label>
          <CustomInput id="signup-password" validationType='isValidPassword' name="password" elementType="password" />
          <button onClick={ this.handleFormSubmit }>Sign up</button>
        </form>
      </div>
    )
  }
}

export default SignupForm;
