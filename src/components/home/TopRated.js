import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopRated } from '../../actions/actions';
import { Link } from 'react-router-dom';

class TopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 19
    }
  }

  slideRight() {
    let slide = this.state.slide;
    this.state.slide < 19 ? slide += 1 : slide = 0;
    this.setState({slide: slide});
  }

  slideLeft() {
    let slide = this.state.slide;
    this.state.slide > 0 ? slide-- : slide = 19;
    this.setState({slide: slide});
  }

  render() {
    const movies = this.props.topRated.reduce((acc, next, idx) => {
      if (idx < this.state.slide) acc.push(next);
      return acc;
    }, [...this.props.topRated.slice(this.state.slide)])
      .map(movie => {
        let poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        return (
          <div className='poster' key={movie.id}>
            <img src={poster} alt={movie.title}/>
            <Link to={{ pathname: '/movie', state: { id: `${movie.id}` }}}><i className="fas fa-play"></i></Link>
          </div>
        );
      });

    return (
      <div className='slider'>
        <p>Top Rated</p>
        <div ref={this.myInput} className='posters'>
          {movies}
          <div className='arrows'>
            <div className='arrow-block-left' onClick={() => {this.slideLeft()}}>
              <i className="fas fa-angle-left"></i>
            </div>
            <div className='arrow-block-right' onClick={() => {this.slideRight()}}>
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TopRated.propTypes = {
  fetchTopRated: PropTypes.func.isRequired,
  topRated: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  topRated: state.movies.topRated
});

export default connect(mapStateToProps, { fetchTopRated })(TopRated);
