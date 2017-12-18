import React from 'react';

const DescriptionComponent = (props) => {

  return (
    <div className="add-recipe-form_section">
      <label htmlFor="new-recipe-descriptions">Description: </label>
      <textarea className="col-6" name="description" id="new-recipe-description" value={ props.description } onChange={ props.handleChange }/>
    </div>
  )
};

export default DescriptionComponent;
