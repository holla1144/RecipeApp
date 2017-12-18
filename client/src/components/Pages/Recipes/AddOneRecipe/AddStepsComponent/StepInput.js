import React from 'react';

const StepInput = (props) => {
  console.log(props)
  return (
    <div className="step_input-container">
      <label className="step_input-container_label" htmlFor={ 'stepinput-' + props.index }>Step { props.index + 1 }:</label>
      <textarea className="col-6 step_input-container_input" id={ 'stepinput-' + props.index } value={ props.text } index={ props.index } onChange={ props.handleChange }></textarea>
      <span className={props.index === 0 ? "hidden" : "step_input-container_remove"} onClick={ () => {props.handleRemove( props.index ) }} >x</span>
    </div>
  )
};

export default StepInput;
