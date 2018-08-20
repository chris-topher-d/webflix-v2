import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPromoted, fetchUpcoming, fetchPopular, fetchTopRated } from '../../actions/actions';

import Spinner from '../common/Spinner';
import Promoted from './Promoted';
import Upcoming from './Upcoming';
import Popular from './Popular';
import TopRated from './TopRated';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPromoted();
    this.props.fetchUpcoming();
    this.props.fetchPopular();
    this.props.fetchTopRated();
  }

  render() {
    const { promotedLoading, upcomingLoading, popularLoading, topRatedLoading } = this.props.movies;
    let homeContent;

    if (promotedLoading || upcomingLoading || popularLoading || topRatedLoading) {
      homeContent = <Spinner />;
    } else {
      homeContent = (
        <div>
          <Promoted />
          <Upcoming />
          <Popular />
          <TopRated />
        </div>
      );
    }

    return (
      <div className='home-container'>
        {homeContent}
      </div>
    );
  }
}

Home.propTypes = {
  movies: PropTypes.object.isRequired,
  fetchPromoted: PropTypes.func.isRequired,
  fetchUpcoming: PropTypes.func.isRequired,
  fetchPopular: PropTypes.func.isRequired,
  fetchTopRated: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps, { fetchPromoted, fetchUpcoming, fetchPopular, fetchTopRated })(Home);
