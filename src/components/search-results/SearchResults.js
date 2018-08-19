import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';

class SearchResults extends Component {
  render() {
    const { results, loading } = this.props.search;
    let searchContent;

    if (loading) {
      searchContent = <Spinner />;
    } else {
      if (results.length > 0) {
        searchContent = results.map(result => {
          if (result.poster_path) {
            let poster = 'https://image.tmdb.org/t/p/w500' + result.poster_path;
            return (
              <div className='movie-result' key={result.id}>
                <div className='poster'>
                  <img src={poster} alt={result.title}/>
                  <Link to={{ pathname: '/movie', state: { id: `${result.id}` }}}><i className="fas fa-play"></i></Link>
                </div>
              </div>
            );
          } else {
            return null;
          }
        });
      } else {
        searchContent = <h1>No matches found</h1>;
      }
    }

    return (
      <div>
        <div className='search-container'>
          <h1>Search Results</h1>
          <div className='search-results'>
            {searchContent}
          </div>
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  search: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});

export default connect(mapStateToProps)(SearchResults);
