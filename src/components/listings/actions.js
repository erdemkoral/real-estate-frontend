import axios from 'axios';
import { LOAD_LISTINGS, LOAD_LISTING, ADD_LISTING, ADD_LISTING_IMAGE, DELETE_LISTING, UPDATE_LISTING } from './constants';
const ROOT_URL = 'http://localhost:3001/api';

export function loadListings() {
  return function(dispatch) {
    return axios.get(`${ROOT_URL}/listings`)
      .then(response => {
        dispatch({
          type: LOAD_LISTINGS,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function loadListing(id) {
  return function(dispatch) {
    return axios.get(`${ROOT_URL}/listings/${id}`)
      .then(response => {
        dispatch({
          type: LOAD_LISTING,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function addListing(data) {
  return function(dispatch) {
    return axios.post(`${ROOT_URL}/listings`, data, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: ADD_LISTING,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function addListingImage(id, image) {
  return function(dispatch) {
    return axios.post(`${ROOT_URL}/listings/${id}/images`, image, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: ADD_LISTING_IMAGE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function deleteListing(id) {
  return function(dispatch) {
    return axios.delete(`${ROOT_URL}/listings/${id}`,{
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: DELETE_LISTING,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function updateListing(id, data) {
  return function(dispatch) {
    return axios.put(`${ROOT_URL}/listings/${id}`, data, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: UPDATE_LISTING,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}