import {
  FETCH_PROMOTED,
  FETCH_UPCOMING,
  FETCH_POPULAR,
  FETCH_TOPRATED,
  FETCH_ERROR,
  CLEAR_PAGE
} from '../actions/types';

const initialState = {
  promoted: [],
  upcoming: [],
  popular: [],
  topRated: [],
  promotedLoading: true,
  upcomingLoading: true,
  popularLoading: true,
  topRatedLoading: true,
  error: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROMOTED:
      return {
        ...state,
        promoted: action.payload,
        promotedLoading: false
      };

    case FETCH_UPCOMING:
      return {
        ...state,
        upcoming: action.payload,
        upcomingLoading: false
      };

    case FETCH_POPULAR:
      return {
        ...state,
        popular: action.payload,
        popularLoading: false
      };

    case FETCH_TOPRATED:
      return {
        ...state,
        topRated: action.payload,
        topRatedLoading: false
      };

    case CLEAR_PAGE:
      return {
        ...state,
        promoted: action.payload
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
