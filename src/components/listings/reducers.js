import { LOAD_LISTINGS,LOAD_LISTING, ADD_LISTING, ADD_LISTING_IMAGE, DELETE_LISTING, UPDATE_LISTING } from './constants';

export default function(state = [], { type, payload }) {
  switch(type) {
    case LOAD_LISTINGS:
      return payload ;
    case LOAD_LISTING:
      return payload ;
    case ADD_LISTING :
      return [
        ...state,
        payload
      ];
    case ADD_LISTING_IMAGE:
      return state.map(list => list._id === payload._id ? { ...list, images: [...list.images, payload.image] } : list);
    case DELETE_LISTING:
      return state.filter(listing => listing._id !== payload);
    case UPDATE_LISTING:
      return state.map(listing => listing._id === payload._id ? { ...listing, ...payload } : listing);
    default:
      return state;
  }
}