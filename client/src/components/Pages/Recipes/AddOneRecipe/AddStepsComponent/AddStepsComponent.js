import React from 'react';
import StepInput from './StepInput';

const AddStepsComponent = (props) => {
  const stepInuts = props.initialSteps.map((element, index) => {
    return <StepInput key={'newRecipeStep-' + index} text={element.stepText} index={index}
                      handleChange={ props.handleChange } handleRemove={ props.handleRemove } />
  });

  return (
     <div className="step add-recipe-form_section">
       { stepInuts }
       <span className="step_add-button add-item-button" onClick={ props.handleAdd }>Add</span>
     </div>
  )
};

export default AddStepsComponent;
