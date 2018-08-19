import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/store';

import Header from './components/layout/Header';
import Home from './components/home/Home';
import Movie from './components/movie-detail/MovieDetail';
import Search from './components/search-results/SearchResults';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import './sass/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toSearch: false
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop>
            <div className='app'>
              <Header />
              <Switch>
                <Route
                  exact path={'/webflix'}
                  render={()=><Home />}
                />
                <Route exact path={'/movie'} component={Movie} />
                <Route exact path={'/search'} component={Search} />
              </Switch>
              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}

export default App;
