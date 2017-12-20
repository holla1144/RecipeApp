import React from 'react';
import CustomInput from '../../../../SharedComponents/CustomInputs/CustomInputField';

const DirectionStep = (props) => {
  return (
    <div className="Directions-inputContainer">
      <label className="Directions-stepLabel" htmlFor={ 'stepinput-' + props.index }>Step { props.index + 1 }:</label>
      <CustomInput elementType="textarea"
                   classList={["Form-textArea", "Directions-stepInput", "col-6"]}
                   placeholder={ "Describe step " + (props.index + 1) }
                   value={ props.text }
                   index={ props.index }
                   handleChange={ props.handleChange }
                   validationType="isNotBlank"
      />
      <span className={props.index === 0 ? "hidden" : "Directions-stepRemove"} onClick={ () => {props.handleRemove( props.index ) }} >x</span>
    </div>
  )
};

export default DirectionStep;
