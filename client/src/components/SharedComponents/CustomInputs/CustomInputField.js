import React from 'react';
import ErrorContainer from './ErrorContainer';
import { validate } from '../../../services/formValidation';

class CustomInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classList: '',
      touched: false,
      errorValue: '',
      isValid: true,
      containerClass: 'CustomInput'
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.addOneClass = this.addOneClass.bind(this);
    this.removeOneClass = this.removeOneClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount() {
    //Expect an array of classes
    if (this.props.classList) {

      const initialClassList = this.props.classList.join(" ");

      this.setState({
        classList: initialClassList
      })
    }

    if (this.props.containerClass) {
      const newContainerClassList = this.state.containerClass + " " + this.props.containerClass;
      this.setState({
        containerClass: newContainerClassList
      })
    }
  }

  addOneClass(className) {
   const classListArr = this.state.classList.split(" ");

   if (classListArr.indexOf(className) !== -1) {
     //Do not add if element already has class
     return
   }

   classListArr.push(className);

   const newClassList = classListArr.join(" ");

   this.setState({
     classList: newClassList
   })
  }

  removeOneClass(className) {
    const classListArr = this.state.classList.split(" ");

    if (classListArr.indexOf(className) === -1) {
      //Return if className is not in array
      return;
    }

    classListArr.splice(classListArr.indexOf(className), 1);

    const newClassList = classListArr.join(" ");

    this.setState({
      classList: newClassList
    })
  }

  handleChange(e){
    if (this.props.handleChange){
      this.props.handleChange(e)
    }

    if (this.props.validationType) {
      this.handleValidation(e);
    }
  }

  handleFocus() {
    this.addOneClass('touched');

    this.setState({
      touched: true
    })
  }

  handleValidation(e){
    const value = e.target.value;
    const validationType = this.props.validationType;
    const testResult = validate(validationType, value);

    if (testResult.isValid) {
      this.removeOneClass('invalid');
      this.addOneClass('valid');

      this.setState({
        isValid: true
      })

    } else {

      this.removeOneClass('valid');

      this.addOneClass('invalid');

      const errorValue = testResult.message;

      this.setState({
        isValid: false,
        errorValue: errorValue

      })
    }
  }

  render() {
    const getElementType = () => {
      switch (this.props.elementType) {
        case 'textInput':
          return <input type="text"
                        className={"CustomInput-field " + this.state.classList}
                        onFocus={this.handleFocus}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        value={this.props.value}
                        onKeyUp={this.handleChange}
                        onChange={this.handleChange}
                        index={ this.props.index }
                        id={this.props.id}
                        autoComplete='off'
                      />;
          break;

        case 'password':
          return <input type="password"
                        className={"CustomInput-field " + this.state.classList}
                        onFocus={this.handleFocus}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        value={this.props.value}
                        onKeyUp={this.handleChange}
                        onChange={this.handleChange}
                        index={ this.props.index }
                        id={this.props.id}
                        autoComplete='off'
          />;
          break;

        case 'textarea':
          return <textarea className={"CustomInput-field " + this.state.classList}
                           onFocus={this.handleFocus}
                           placeholder={this.props.placeholder}
                           name={this.props.name}
                           value={this.props.value}
                           onKeyUp={this.handleChange}
                           onChange={this.handleChange}
                           index={ this.props.index }
                           id={this.props.id} >

                  </textarea>;
          break;
      }
    };

    const element = getElementType();

    return (
      <div className={this.state.containerClass} >
        { element }
        <ErrorContainer isVisible={ !this.state.isValid } errorText={ this.state.errorValue }/>
      </div>
    )
  };
}

export default CustomInput;
