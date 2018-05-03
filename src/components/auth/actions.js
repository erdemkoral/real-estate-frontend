import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './constants';

const ROOT_URL = 'http://localhost:3001/api';

export function signupUser(signupData) {
  return function(dispatch) {
    return axios.post(`${ROOT_URL}/auth/signup`, signupData)
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
      })
      .catch((err) => {
        dispatch(authError('Invalid Credentials!'));
        throw err;
      });
  };
}

export function signinUser(signinData) {
  return function(dispatch) {
    return axios.post(`${ROOT_URL}/auth/signin`, signinData)
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
      })
      .catch((err) => {
        dispatch(authError('Invalid Login Info!'));
        throw err;
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