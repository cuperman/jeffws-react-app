import { connect } from 'react-redux';

import Greeting from '../components/greeting.js';
import { setName } from '../actions/some_actions';

function mapStateToProps(state) {
  return {
    name: state.some.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: name => dispatch(setName(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
