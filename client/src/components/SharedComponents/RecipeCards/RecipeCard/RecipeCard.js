import React from 'react';

class RecipeCard extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="RecipeCard" id={ this.props.recipeData._id}>
        <h2 className="RecipeCard-title"> { this.props.recipeData.title }</h2>
        <p className="RecipeCard-description"> { this.props.recipeData.description }</p>
      </div>
    )
  }
};

export default RecipeCard;
