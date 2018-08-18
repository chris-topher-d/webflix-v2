import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
  render() {
    const { searchResults } = this.props;
    const noMatches = <h1>No matches found</h1>;

    const results = searchResults.map(result => {
      if (result.poster_path) {
        let poster = 'https://image.tmdb.org/t/p/w500' + result.poster_path;
        return (
          <div className='movie-result' key={result.id}>
            <div className='poster'>
              <img src={poster} alt='movie poster'/>
              <Link to={{ pathname: '/movie', state: { id: `${result.id}` }}}><i className="fas fa-play"></i></Link>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      <div>
        <div className='search-container'>
          <h1>Search Results</h1>
          <div className='search-results'>
            {results.length > 0 ? results : noMatches}
          </div>
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

export default connect(mapStateToProps)(SearchResults);
