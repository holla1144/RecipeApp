import React from 'react';
import PageHeader from '../PageHeader/PageHeader'

class MainContainer extends React.Component{
  constructor(props) {
    super(props)


    console.log(this.props);
  }

  render() {
    return (
      <main className="main-content centered">
        <PageHeader pageName={ this.props.pageName }/>
      </main>
    )
  }

}

export default MainContainer;
