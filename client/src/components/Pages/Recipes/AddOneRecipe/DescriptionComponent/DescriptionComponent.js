import React from 'react';
import CustomInput from '../../../../SharedComponents/CustomInputs/CustomInputField';

const DescriptionComponent = (props) => {

  return (
    <div className="Form-section">
      <label className="Form-label" htmlFor="new-recipe-descriptions">Description: </label>
      <CustomInput elementType="textarea"
                   validationType="isNotBlank"
                   classList={["Form-textArea", "col-6"]}
                   name="description"
                   placeholder="Give your recipe a description"
                   value={ props.description }
                   handleChange={ props.handleChange }
      />
    </div>
  )
};

export default DescriptionComponent;
