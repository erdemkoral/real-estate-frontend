import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import AllListings from './components/listings/allListings';
import ListingForm from './components/listings/listingForm';

// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/alllistings" component={AllListings} />
        <Route path="/listingform" component={ListingForm} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
