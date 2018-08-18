import { FETCH_CAST, FETCH_ERROR } from '../actions/types';

const initialState = {
  details: [],
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAST:
      return {
        details: action.payload,
        loading: false
      };

    case FETCH_ERROR:
      return console.log(action.payload);

    default:
      return state;
  }
}
