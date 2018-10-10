import {
  SET_NAME
} from '../actions/some_actions';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return Object.assign({}, state, {
        name: action.name
      });
    default:
      return state;
  }
}
