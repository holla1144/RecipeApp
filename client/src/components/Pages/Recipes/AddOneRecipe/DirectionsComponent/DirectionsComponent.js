import React from 'react';
import DirectionStep from './DirectionStep';

const DirectionsComponent = (props) => {
  const directionSteps = props.initialSteps.map((element, index) => {
    return <DirectionStep key={'newRecipeStep-' + index} text={element.stepText} index={index}
                      handleChange={ props.handleChange } handleRemove={ props.handleRemove } />
  });

  return (
     <div className="Form-section">
       <label className="Form-label">Directions:</label>
       <div className="Directions">
         { directionSteps }
       </div>
       <span className="Form-greenBtn" onClick={ props.handleAdd }>Add</span>
     </div>
  )
};

export default DirectionsComponent;
