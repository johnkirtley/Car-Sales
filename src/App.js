import React from 'react';

import Nav from './components/Nav';
import Home from './components/Home'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';

const App = (props) => {


  return (

    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <div className="boxes">
        <div className="box">
          <Route exact path="/features">
            <Header car={props.car} />
            <div className="additional-features box">
              <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
              <Total car={props.car} additionalPrice={props.additionalPrice} />
            </div>
            <AddedFeatures car={props.car} />
          </Route>
        </div>
      </div>
    </Router>

  );
};

// Allowing state to be stored in Redux store
const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(App);
