const formValidation = (() => {
  const testResult = (isValid, message) => {
    return {
      isValid: isValid,
      message: message
    }
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

  const validate = (validationType, value) => {
    switch (validationType) {
      case 'isNotBlank':
        return isNotBlank(value);
        break;
      case 'hasLength':
        return hasLength(value);
        break;
      case 'oneIngredient':
        return oneIngredient(value);
        break;
      default:
        return true;
    }
  };

  return {
    validate: validate
  }
})();

module.exports = formValidation;
