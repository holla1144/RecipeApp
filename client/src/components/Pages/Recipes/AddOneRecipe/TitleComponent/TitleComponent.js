import React from 'react';

const TitleComponent = (props) => {

  return (
    <div className="add-recipe-form_section">
      <label htmlFor="new-recipe-title">Title: </label>
      <input type="text" className="col-6"  placeholder="Add a title" name="title" value={ props.title } onChange={ props.handleChange } id="new-recipe-title" />
    </div>
  )
};

export default TitleComponent;
