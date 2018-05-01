import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3001/api';

export function signupUser({ name, email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/auth/signup`, { name, email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
      })
      .catch(() => {
        dispatch(authError('Invalid Credentials!'));
      });
  };
}

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/auth/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
      })
      .catch(() => {
        dispatch(authError('Invalid Login Info!'));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser(){
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}