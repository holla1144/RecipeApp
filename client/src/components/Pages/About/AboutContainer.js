import React from 'react';
import MainContainer from '../../MainContent/MainContainer';

class AboutPage extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MainContainer pageName="About" />
    )
  }
}

export default AboutPage;