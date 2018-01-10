import React from 'react';
import { toTitleCase, truncateText } from '../../../../services/helpers';
import {
  Link
} from 'react-router-dom'

class RecipeCard extends React.Component{
  constructor(props) {
    super(props);

  }

  render(){
    const recipeTitle = toTitleCase(this.props.recipeData.title);
    const recipeDescription = truncateText(this.props.recipeData.description, 150);
    const categories = this.props.recipeData.category.map((category, index) => {return <p key={"recipeCategory-" + index} className="RecipeCard-category"> {toTitleCase(category)} </p>});

    return (
      <article className="RecipeCard col-12 col-md-6">
        <Link className="RecipeCard-link" to={this.props.linkTo}>
          <div className="RecipeCard-inner centered" id={ this.props.recipeData._id}>
            <div className="RecipeCard-imageWrap">
              <img className="RecipeCard-image" src={'/images/recipe_images/' + this.props.recipeData.imagePath}/>
            </div>
            <h2 className="RecipeCard-title"> { recipeTitle }</h2>
             { categories }
            <p className="RecipeCard-description"> { recipeDescription }</p>
            <p className="RecipeCard-likeCounter"> Likes { this.props.recipeData.upvotes }</p>
            <p className="RecipeCard-commentsCounter"> Reviews 0 </p>
          </div>
        </Link>
      </article>
    )
  }
};

export default RecipeCard;
