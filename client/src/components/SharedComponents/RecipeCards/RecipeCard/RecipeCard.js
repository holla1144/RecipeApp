import React from 'react';
import { toTitleCase } from '../../../../services/helpers';
import {
  Link
} from 'react-router-dom'

class RecipeCard extends React.Component{
  constructor(props) {
    super(props)
  }

  render(){
    const recipeTitle = toTitleCase(this.props.recipeData.title);
    return (
      <div className="RecipeCard col-12 col-md-6 col-lg-4 col-xl-3">
        <Link className="RecipeCard-link" to={this.props.linkTo}>
          <div className="RecipeCard-inner" id={ this.props.recipeData._id}>
            <img height='auto' width='auto' src={'/images/recipe_images/' + this.props.recipeData.imagePath}/>
            <h2 className="RecipeCard-title"> { recipeTitle }</h2>
            <p className="RecipeCard-description"> { this.props.recipeData.description }</p>
          </div>
        </Link>
      </div>
    )
  }
};

export default RecipeCard;
