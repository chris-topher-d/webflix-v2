import { FETCH_SEARCH, CLEAR_SEARCH, FETCH_ERROR } from '../actions/types';

const initialState = {
  results: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        results: action.payload,
        loading: false
      };

    case CLEAR_SEARCH:
      return {
        results: action.payload,
        loading: true
      };

    case FETCH_ERROR:
      return console.log(action.payload);

    default:
      return state;
  }
}
