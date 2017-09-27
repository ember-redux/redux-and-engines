import Ember from 'ember';
import { connect } from 'ember-redux';

const stateToComputed = state => {
  return {
    name: state.foo.name
  };
};

const dispatchToActions = dispatch => {
  return {
    rename: () => dispatch({type: 'RENAME', name: 'engine'})
  };
};

export default connect(stateToComputed, dispatchToActions)();
