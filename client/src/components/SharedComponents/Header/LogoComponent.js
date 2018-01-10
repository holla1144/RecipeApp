import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <h1 className="logo text-center">Reciprocity</h1>
    </Link>
  )
};

export default Logo;
