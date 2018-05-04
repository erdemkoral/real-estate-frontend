import axios from 'axios';
import { LOAD_USER } from './constants';
const ROOT_URL = 'http://localhost:3001/api';

export function loadUser() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/auth/me`, {
      headers: { authorization: localStorage.getItem('token')
      } })
      .then(response => {
        dispatch({
          type: LOAD_USER,
          payload: response.data
        });
      })
      .catch();
  };
}