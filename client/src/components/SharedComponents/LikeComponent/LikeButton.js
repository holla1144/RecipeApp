import React from 'react';

const LikeButton = (props) => {
  return (
    <div className={`LikeButton ${props.active ? 'active' : 'inactive'}`} onClick={props.handleClick}>{props.active ? 'Unlike' : 'Like'}</div>
  )
};

export default LikeButton;
