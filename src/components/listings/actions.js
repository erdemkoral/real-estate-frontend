import axios from 'axios';
import { LOAD_LISTINGS, ADD_LISTING } from './constants';
const ROOT_URL = 'http://localhost:3001/api';

export function loadListings() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/listings`)
      .then(response => {
        dispatch({
          type: LOAD_LISTINGS,
          payload: response.data
        });
      })
      .catch();
  };
}

export function addListing(data) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/listings`, data, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: ADD_LISTING,
          payload: response.data
        });
      })
      .catch();
  };
}