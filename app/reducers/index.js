import { combineReducers } from 'redux';
import someReducers from './some_reducers';

export default combineReducers({
  some: someReducers
});
