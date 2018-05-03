import { LOAD_LISTINGS, ADD_LISTING, ADD_LISTING_IMAGE } from './constants';

export default function(state = [], { type, payload }) {
  switch(type) {
    case LOAD_LISTINGS:
      return payload ;
    case ADD_LISTING :
      return [
        ...state,
        payload
      ];
    case ADD_LISTING_IMAGE:
      return state.map(list => list._id === payload._id ? { ...list, images: [...list.images, payload.image] } : list);
    default:
      return state;
  }
}