import { LOAD_LISTINGS, ADD_LISTING } from './constants';

export default function(state = [], { type, payload }) {
  switch(type) {
    case LOAD_LISTINGS:
      return payload ;
    case ADD_LISTING :
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}