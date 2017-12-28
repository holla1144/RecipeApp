import React from 'react';
import { validateOneInput } from '../../../services/formValidation';
import { validateForm } from '../../../services/formValidation';
import { loginUser } from '../../../services/httpRequests';
import CustomInput from '../../SharedComponents/CustomInputs/Input';

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

  handleFormValidation(e) {
    validateOneInput(e.target);
    const formIsValid = validateForm('login-form');

    this.setState({
      formIsValid: formIsValid
    });
  }

  handleLoginFormSubmit(e){
    e.preventDefault();


    if (!this.state.formIsValid) {
      this.props.modalOpen('negative', 'Looks like you have one or more errors in the login form');
      return;
    }

    let candidateLoginData = {};
    candidateLoginData.username = this.state.candidateUsername;
    candidateLoginData.password = this.state.candidatePassword;

    loginUser(candidateLoginData).then((response) => {
      if (response.status !== 200) {
        throw new Error('Something went wrong');
      }

      return response.json();
    }).then((jsonResponse) => {
      const data = jsonResponse.data;

      if (data.status !== 200) {
        throw new Error(data.message);
      }

      this.props.modalOpen('positive', data.message);

    }).catch(( err ) => {
      this.props.modalOpen('negative', err.message);
    });
  }

  render() {
    return (
      <div>
        <form className="Form LoginForm" onKeyDown={ this.handleFormValidation } onChange={ this.handleFormValidation } id="login-form">
          <div className="Form-section">
            <label className="Form-sectionLabel" htmlFor="candidateUsername">Username: </label>
            <CustomInput id="candidateUsername" name="candidateUsername" value={ this.state.candidateUsername } onChange={ this.handleInputChange } type="text" validation="isNotBlank" required/>
          </div>
          <div className="Form-section">
            <label className="Form-sectionLabel" htmlFor="candidatePassword">Password: </label>
            <CustomInput id="candidatePassword" name="candidatePassword" value={ this.state.candidatePassword } onChange={ this.handleInputChange } type="password" validation="isNotBlank" required/>
          </div>
          <button className="Form-greenBtn" onClick={ this.handleLoginFormSubmit }>Log In</button>
        </form>
      </div>
    )
  }
};

export default LoginForm;
