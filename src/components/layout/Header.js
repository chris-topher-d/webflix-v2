import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleSearch, clearSearch } from '../../actions/actions';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  handleClick = () => {
    if (this.state.value !== '') {
      this.props.clearSearch();
      this.props.handleSearch(this.state.value);

      this.setState({
        value: ''
      });

      this.props.history.push('/search');
    }
  }

  render() {
    return (
      <div className='header'>
        <Link to='/webflix'><h1>WEBFLIX</h1></Link>
        <div className='search-bar'>
          <input
            id='input'
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder='Search for movies'
          />
          <i className="fas fa-search" onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired
};

export default connect(null, { handleSearch, clearSearch })(withRouter(Header));
