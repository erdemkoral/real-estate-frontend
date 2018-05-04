import { LOAD_USER } from './constants';

export default function(state={}, { type, payload }) {
  switch(type) {
    case LOAD_USER:
      return payload ;
    default:
      return state;
  }
}