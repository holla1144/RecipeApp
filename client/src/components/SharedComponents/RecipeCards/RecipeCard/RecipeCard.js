import React from 'react';
import { toTitleCase } from '../../../../services/helpers'

class RecipeCard extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    const recipeTitle = toTitleCase(this.props.recipeData.title);
    return (
      <div className="RecipeCard" id={ this.props.recipeData._id}>
        <h2 className="RecipeCard-title"> { recipeTitle }</h2>
        <p className="RecipeCard-description"> { this.props.recipeData.description }</p>
      </div>
    )
  }
};

export default RecipeCard;
