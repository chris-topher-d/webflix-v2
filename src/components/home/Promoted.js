import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPromoted, clearPage } from '../../actions/actions';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

class Promoted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.slider();
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  slider() {
    let slide = this.state.currentSlide;
    slide === 2 ? slide = 0 : slide++;

    this.setState({currentSlide: slide});
  }

  handleSelect = (e) => {
    this.setState({currentSlide: Number(e.target.id)})
  }

  render() {
    const promotedMovies = this.props.promoted.map((info, i) => {
      let divStyle = {backgroundImage: `url("https://image.tmdb.org/t/p/original${info.backdrop_path}")`};
      let overview = info.overview.length > 500 ? info.overview.slice(0, 500).concat('...') : info.overview;

      return (
        <div className='promoted-movie' key={i}>
          <div className='promoted-bg' style={divStyle}></div>
          <div className='gradient-bg'>
            <div className='promoted-info'>
              <p id='title'>{info.title}</p>
              <p id='rating'>Rating: {info.vote_average}</p>
              <p id='overview'>{overview}</p>
              <Link to={{ pathname: '/movie', state: { id: `${info.id}` }}}><button id='movie-info'>Preview</button></Link>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='promoted'>
        <CSSTransitionGroup
          transitionName='fade'
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {promotedMovies[this.state.currentSlide]}
        </CSSTransitionGroup>
        <div className='movie-selector'>
          <div className={'selector' + (this.state.currentSlide === 0 ? ' selected' : '')} id='0' onClick={this.handleSelect}></div>
          <div className={'selector' + (this.state.currentSlide === 1 ? ' selected' : '')} id='1' onClick={this.handleSelect}></div>
          <div className={'selector' + (this.state.currentSlide === 2 ? ' selected' : '')} id='2' onClick={this.handleSelect}></div>
        </div>
      </div>
    );
  }
}

Promoted.propTypes = {
  fetchPromoted: PropTypes.func.isRequired,
  promoted: PropTypes.array.isRequired,
  clearPage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  promoted: state.movies.promoted
});

export default connect(mapStateToProps, { fetchPromoted, clearPage })(Promoted);
