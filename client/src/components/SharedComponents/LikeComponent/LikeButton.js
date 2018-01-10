import React from 'react';

const LikeButton = (props) => {
  return (
    <div className={`LikeButton ${props.active ? 'active' : 'inactive'}`} onClick={props.handleClick}>Like</div>
  )
};

export default LikeButton;
