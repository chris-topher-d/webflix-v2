import { FETCH_SEARCH, CLEAR_SEARCH, FETCH_ERROR } from '../actions/types';

export default function(searchResults = [], action) {
  switch (action.type) {
    case FETCH_SEARCH:
      return searchResults = action.payload;

    case CLEAR_SEARCH:
      return searchResults = action.payload;

    case FETCH_ERROR:
      return console.log(action.payload);

    default:
      return searchResults;
  }
}
