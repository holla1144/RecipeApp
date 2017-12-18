import React from 'react';

const TitleComponent = (props) => {

  return (
    <div className="add-recipe-form_section">
      <label htmlFor="new-recipe-title">Title: </label>
      <input className="col-6" type="text" name="title" id="new-recipe-title" value={ props.title } onChange={ props.handleChange }/>
    </div>
  )
};

export default TitleComponent;
