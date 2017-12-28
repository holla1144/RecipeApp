import React from 'react';
import CustomTextarea from '../Textarea';

const DirectionItem = (props) => {
  return (
    <div className="Directions-inputContainer">
      <CustomTextarea onChange={props.onChange} index={props.index} placeholder={"Step " + (props.index + 1)} validation={props.validation} required/>
      <span className={props.index === 0 ? "hidden" : "Directions-stepRemove"} onClick={ () => {props.removeDirection( props.index ) }} >x</span>
    </div>
  )
};

export default DirectionItem;
