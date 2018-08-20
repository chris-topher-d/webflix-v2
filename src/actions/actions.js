import {
  FETCH_PROMOTED,
  FETCH_UPCOMING,
  FETCH_POPULAR,
  FETCH_TOPRATED,
  FETCH_MOVIE,
  FETCH_CAST,
  FETCH_SEARCH,
  CLEAR_SEARCH,
  FETCH_ERROR,
  CLEAR_PAGE
} from './types';
import { api } from '../apiKey';

const url = 'https://api.themoviedb.org/3/movie/';
const searchUrl = 'https://api.themoviedb.org/3/search/movie?';

// Fetch Promoted content
export const fetchPromoted = () => dispatch => {
  fetch(`${url}popular?api_key=${api}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_PROMOTED,
        payload: [...data.results.slice(0, 3)]
      })
    )
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data
      })
    });
}

// Fetch Upcoming movies
export const fetchUpcoming = () => dispatch => {
  fetch(`${url}upcoming?api_key=${api}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_UPCOMING,
        payload: [...data.results]
      })
    )
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data
      })
    });
}

// Fetch Popular movies
export const fetchPopular = () => dispatch => {
  fetch(`${url}popular?api_key=${api}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_POPULAR,
        payload: [...data.results]
      })
    )
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data
      })
    });
}

// Fetch Top Rated movies
export const fetchTopRated = () => dispatch => {
  fetch(`${url}top_rated?api_key=${api}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_TOPRATED,
        payload: [...data.results]
      })
    )
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data
      })
    });
}

// Fetch movie info
export const fetchMovie = (movieId) => dispatch => {
  fetch(url + movieId + '?api_key=' + api)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_MOVIE,
        payload: data
      })
    )
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data
      })
    });
}

// Fetch cast for movie
export const fetchCast = (movieId) => dispatch => {
  fetch(url + movieId + '/credits?api_key=' + api)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_CAST,
        payload: [...data.cast.slice(0, 5)]
      })
    )
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data
      })
    });
}

// Search for movie
export const handleSearch = (searchValue) => dispatch => {
  fetch(`${searchUrl}api_key=${api}&language=en-US&page=1&include_adult=false&query=${searchValue}`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_SEARCH,
        payload: [...data.results]
      })
    )
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data
      })
    });
}

// Clear Search Results page
export const clearSearch = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH,
    payload: []
  });
}

// Clear page
export const clearPage = () => dispatch => {
  dispatch({
    type: CLEAR_PAGE,
    payload: []
  });
}
