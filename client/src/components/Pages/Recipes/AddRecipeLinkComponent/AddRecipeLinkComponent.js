import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

const AddRecipeLinkComponent = () => {
  return (
    <span className="add-recipe-link_span"><Link to={'/recipe/new'} className="add-recipe-link_span_text"> Add </Link></span>
  )
};

export default AddRecipeLinkComponent;
