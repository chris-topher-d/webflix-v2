import { combineReducers } from 'redux';
import homepageReducer from './homepageReducer';
import movieReducer from './movieReducer';
import castReducer from './castReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  movies: homepageReducer,
  movie: movieReducer,
  cast: castReducer,
  search: searchReducer
});

export default rootReducer;
