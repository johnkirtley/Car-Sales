import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/removeFeature';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature.id)}>X</button>
      <p key={props.feature.id}>{props.feature.name}</p>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    features: [...state.car.features],
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
