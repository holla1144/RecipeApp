import React from 'react';
import CustomInput from '../../SharedComponents/CustomInputs/CustomInputField';
import { validate } from '../../../services/formValidation';

class LoginForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      candidateUsername: '',
      candidatePassword: '',
      formIsValid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this);
    this.handleFormValidation = this.handleFormValidation.bind(this);
  }

  componentDidMount(){
    const newCandidateUsername = document.getElementById('candidateUsername').value;
    const newCandidatePassword = document.getElementById('candidatePassword').value;
    console.log(newCandidateUsername);
    console.log(newCandidatePassword);

    this.setState({
      candidateUsername: '',
      candidatePassword: ''
    });
  }

  handleInputChange(e){
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormValidation() {
    const userNameValid = validate('isNotBlank', this.state.candidateUsername).isValid;
    const passwordValid = validate('isNotBlank', this.state.candidatePassword).isValid;
    console.log(userNameValid)
    console.log(passwordValid)

    if (userNameValid && passwordValid) {
      this.setState({
        formIsValid: true
      });

    } else {

      this.setState({
        formIsValid: false
      });
    }
  }

  handleLoginFormSubmit(e){
    e.preventDefault();


    if (!this.state.formIsValid) {
      this.props.modalOpen('negative', 'Looks like you have one or more errors in the login form');
      return;
    }
    let candidateLoginData = {};
    candidateLoginData.candidateUsername = this.state.candidateUsername;
    candidateLoginData.candidatePassword = this.state.candidatePassword;

    this.props.modalOpen('positive', 'Form valid');
  }

  render() {
    return (
      <div>
        <form onKeyDown={ this.handleFormValidation } onKeyUp={ this.handleFormValidation } >
          <label htmlFor="candidateUsername">Username: </label>
          <CustomInput id="candidateUsername" name="candidateUsername" value={ this.state.candidateUsername } handleChange={ this.handleInputChange } elementType="textInput" validationType="isNotBlank" />
          <label htmlFor="candidatePassword">Password: </label>
          <CustomInput id="candidatePassword" name="candidatePassword" value={ this.state.candidatePassword } handleChange={ this.handleInputChange } elementType="password" validationType="isNotBlank" />
          <button onClick={ this.handleLoginFormSubmit }>Log In</button>
        </form>
      </div>
    )
  }
};

export default LoginForm;
