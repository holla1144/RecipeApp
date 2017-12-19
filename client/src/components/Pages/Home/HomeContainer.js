import React from 'react';
import MainContainer from '../../SharedComponents/MainContent/MainContainer';

class HomePage extends React.Component{
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <MainContainer pageName="Home" />
    )
  }
}

export default HomePage;
