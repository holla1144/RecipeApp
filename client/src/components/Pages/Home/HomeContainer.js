import React from 'react';

class HomePage extends React.Component{
  constructor(props) {
    super(props);

    }

  render() {

    return (
      <div className="HomeContainer">
        <div className="HomeSearch col-12">
          <div className="HomeSearch-background">
            <div className="HomeSearch-filter">
              <div className="HomeSearch-formContainer right-align-block col-12 col-lg-6 col-xl-4">
                <p className="HomeSearch-headline">Find Something Good to Eat</p>
                <input type="text" name="home-search" className="HomeSearch-textInput" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
