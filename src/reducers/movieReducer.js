import { FETCH_MOVIE, FETCH_ERROR, CLEAR_PAGE } from '../actions/types';

const initialState = {
  details: {},
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        details: action.payload,
        loading: false
      };

    case CLEAR_PAGE:
    return {
      ...state,
      details: {},
      loading: true
    };

    case FETCH_ERROR:
      return console.log(action.payload);

    default:
      return state;
  }
}
