import React from 'react';
import CustomInput from '../../../../SharedComponents/CustomInputs/CustomInputField';

const TitleComponent = (props) => {

  return (
    <div className="Form-section">
      <label className="Form-label" htmlFor="new-recipe-title">Title:</label>
      <div className="RecipeTitle">
        <CustomInput elementType="textInput"
                   classList={ ["col-6"] }
                   placeholder="Add a title"
                   name="title"
                   value={ props.title }
                   handleChange={ props.handleChange }
                   validationType="isNotBlank"
        />
        </div>
    </div>
  )
};

export default TitleComponent;
