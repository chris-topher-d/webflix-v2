import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPopular } from '../../actions/actions';
import { Link } from 'react-router-dom';

class Popular extends Component {
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
    const movies = this.props.popular.reduce((acc, next, idx) => {
      if (idx < this.state.slide) acc.push(next);
      return acc;
    }, [...this.props.popular.slice(this.state.slide)])
      .map(movie => {
        let poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        return (
          <div className='poster' key={movie.id}>
            <img src={poster} alt='movie poster'/>
            <Link to={{ pathname: '/movie', state: { id: `${movie.id}` }}}><i className="fas fa-play"></i></Link>
          </div>
        );
      });

    return (
      <div className='slider'>
        <p>Popular</p>
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

Popular.propTypes = {
  fetchPopular: PropTypes.func.isRequired,
  popular: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  popular: state.movies.popular
});

export default connect(mapStateToProps, { fetchPopular })(Popular);
