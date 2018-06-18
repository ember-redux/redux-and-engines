import { connect } from 'ember-redux';

const stateToComputed = state => ({
  name: state.foo.name
});

const dispatchToActions = dispatch => ({
  rename: () => dispatch({type: 'RENAME', name: 'engine'})
});

export default connect(stateToComputed, dispatchToActions)();
