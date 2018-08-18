import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovie, fetchCast, clearPage } from '../../actions/actions';

import Spinner from '../common/Spinner';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.state.id,
    }
  }

  componentDidMount() {
    this.props.fetchMovie(this.state.id);
    this.props.fetchCast(this.state.id);
  }

  componentWillUnmount() {
    this.props.clearPage();
  }

  render() {
    const { movie, cast } = this.props;
    const poster = 'https://image.tmdb.org/t/p/w500' + this.props.movie.details.poster_path;
    let movieDetails;

    const castList = this.props.cast.details.map((actor, i) => {
      if (i === 4) return actor.name;
      return actor.name + ', ';
    });

    if (movie.loading || cast.loading) {
      movieDetails = (
        <Spinner />
      );
    } else {
      movieDetails = (
        <div className='movie-container'>
          <div className='movie-poster'>
            <img src={poster} alt='Movie Poster'/>
          </div>
          <div className='movie-info'>
            <p id='movie-title'>{movie.details.title}</p>
            <p id='year-release'>{movie.details.release_date ? movie.details.release_date.slice(0, 4) : null}</p>
            <p id='rating'>Rating: {movie.details.vote_average !== 0 ? movie.details.vote_average : 'No rating yet'}</p>
            <p id='runtime'>Runtime: {movie.details.runtime} minutes</p>
            <div id='movie-cast'>Cast: {castList.length > 0 ? castList : 'Not available'}</div>
            <p id='overview'>{movie.details.overview}</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        {movieDetails}
      </div>
    );
  }
}

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  cast: PropTypes.object.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  fetchCast: PropTypes.func.isRequired,
  clearPage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie,
  // movieLoading: state.movie.loading,
  cast: state.cast
});

export default connect(mapStateToProps, { fetchMovie, fetchCast, clearPage })(MovieDetail);
