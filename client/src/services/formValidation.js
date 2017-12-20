const formValidation = (() => {
  const testResult = {
    isValid: '',
    message: ''
  };
  const isNotBlank = (value) => {
    const isValid = value.length > 0;

    if (!isValid) {
      testResult.message = 'Value cannot be blank'
    }

    testResult.isValid = isValid;

    return testResult
  };

  const validate = (validationType, value) => {
    switch (validationType) {
      case 'isNotBlank':
        return isNotBlank(value);
      default:
        return true;
    }
  };

  return {
    validate: validate
  }
})();

module.exports = formValidation;
