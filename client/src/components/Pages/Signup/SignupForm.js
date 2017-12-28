import React from 'react';
import CustomInput from '../../SharedComponents/CustomInputs/Input';
import { validateOneInput } from '../../../services/formValidation';
import { validateAllInputs } from '../../../services/formValidation';
import { validateForm } from '../../../services/formValidation';
import { signupUser } from '../../../services/services';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      formIsValid: false
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormChange(e){
    validateOneInput(e.target);
    const formIsValid = validateForm('form-signup');

    this.setState({
      formIsValid: formIsValid
    })
  };

  handleFormSubmit(e){
    e.preventDefault();

    if (!this.state.formIsValid) {
      validateAllInputs();
      this.props.modalOpen('negative', 'It looks like there are some mistakes in your form');
      return;
    }

    const newUserData = {};
    newUserData.username = this.state.username;
    newUserData.email = this.state.email;
    newUserData.password = this.state.password;

    signupUser(newUserData).then((response) => {
      if (response.status !== 200) {
        throw new Error('Sorry, something went wrong');
      }

      return response.json();

    }).then((jsonResponse) => {

      if (jsonResponse.status !== 200) {

        throw new Error(jsonResponse.data.message);
      }

      this.props.setToken(jsonResponse.data.token);
      this.props.modalOpen('positive', jsonResponse.data.message);
    }).catch((err) => {

      this.props.modalOpen('negative', err.message);
    })
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
      <form className="Form SignUpForm" onChange={ this.handleFormChange } id='form-signup'>
        <div className="Form-section">
          <label className="Form-sectionLabel" htmlFor="signup-username">Enter a username: </label>
          <CustomInput id="signup-username" onChange={ this.handleInputChange } name="username" type="text" validation='isNotBlank' required/>
        </div>

        <div className="Form-section">
          <label className="Form-sectionLabel" htmlFor="signup-email" >Enter an email: </label>
          <CustomInput id="signup-email" onChange={ this.handleInputChange } validation='isNotBlank' name="email" type="email" required/>
        </div>

        <div className="Form-section">
          <label className="Form-sectionLabel" htmlFor="signup-password">Enter a password: </label>
          <CustomInput id="signup-password" onChange={ this.handleInputChange } validation='isValidPassword' name="password" type="password" required/>
        </div>

        <button className="Form-greenBtn" onClick={ this.handleFormSubmit }>Sign up</button>
      </form>
    )
  }
}

export default SignupForm;
