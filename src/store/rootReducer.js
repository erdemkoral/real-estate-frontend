import { combineReducers } from 'redux';
import auth from '../components/auth/reducers';
import listings from '../components/listings/reducers';
import user from '../components/users/reducers';

export default combineReducers({
  auth,
  listings,
  user
});