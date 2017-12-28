const formValidation = (() => {
  const testResult = (isValid, message) => {
    return {
      isValid: isValid,
      message: message
    }
  };

  const validateOneInput = (input) => {
    const target = input;

    if (target.hasAttribute('required')) {
      const value = target.value;
      const validation = target.getAttribute('validation');
      const validationResults = validate(validation, value);

      if (validationResults.isValid) {
        target.parentElement.classList.remove('invalid');
        target.parentElement.classList.add('valid');
        target.parentElement.querySelector('span').innerHTML = '';

      } else {

        target.parentElement.classList.remove('valid');
        target.parentElement.classList.add('invalid');
        target.parentElement.querySelector('span').innerHTML = validationResults.message;
      }

      return;
    }
    target.classList.add('valid');
  };

  const validateAllInputs = () => {
    const inputs = [...document.querySelectorAll('input, textarea, select')];
    inputs.forEach((input) => {
      validateOneInput(input);
    })
  };

  const validateForm = (formId) => {
    const form = document.getElementById(formId);
    const formInputs = [...form.querySelectorAll('input, select, textarea')];
    const validationResults = formInputs.map((input) => {
      let inputValidation = input.getAttribute('validation');
      let inputValue = input.value;
      return validate(inputValidation, inputValue).isValid;
    });

    if (validationResults.indexOf(false) !== -1) {
      return false
    };

    return true
  };

  const oneIngredient = (value) => {
    //Expect value to be an array of Ingredients object
    let isValid = true;
    let errorMessage = '';

    for (let property in value[0]) {
      if (value[0][property] === '') {
        isValid = false;
        errorMessage = 'You must add at least one ingredient';
      }
    }

    return testResult(isValid, errorMessage);
  };

  const isValidEmail = (value) => {
    const isValid = true;

    return testResult(isValid);
  };

  const isMatch = (value1, value2) => {
    let isValid = true;
    let errorMessage = '';

    if (value1 !== value2) {
      isValid = false;
      errorMessage = 'Passwords must match'
    }

    return testResult(isValid, errorMessage);
  };

  const isValidPassword = (value) => {
  //For our purposes, a valid password is a word with 6 or more letters
    let isValid = true;
    let errorMessage = '';

    if (value.length < 6) {
      isValid = false;
      errorMessage = 'Password must be six characters or longer';
    };

    return testResult(isValid, errorMessage);
  };

  const hasLength = (value) => {
    let isValid = true;
    let errorMessage = '';

    if (!value.length > 0) {
      isValid = false;
      errorMessage = 'You left at least one field blank';
    }

    return testResult(isValid, errorMessage);
  };

  const isNotBlank = (value) => {
    const isValid = value.length > 0;
    let errorMessage = '';

    if (!isValid) {
      errorMessage = 'Value cannot be blank'
    }

    return testResult(isValid, errorMessage);
  };

  const validate = (validationType, value, value2) => {
    switch (validationType) {
      case 'isNotBlank':
        return isNotBlank(value);
        break;
      case 'hasLength':
        return hasLength(value);
        break;
      case 'isValidEmail':
        return isValidEmail(value);
        break;
      case 'isValidPassword':
        return isValidPassword(value);
        break;
      case 'isMatch':
        return isMatch(value, value2);
        break;
      case 'oneIngredient':
        return oneIngredient(value);
        break;
      default:
        return true;
    }
  };

  return {
    validate: validate,
    validateOneInput: validateOneInput,
    validateAllInputs: validateAllInputs,
    validateForm: validateForm
  }
})();

module.exports = formValidation;
