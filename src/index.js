import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import User from './components/users/user';
import Listing from './components/listings/listing';
import AllListings from './components/listings/allListings';
import ListingForm from './components/listings/listingForm';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App/>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/alllistings" component={AllListings} />
        <Route path="/listingform" component={ListingForm} />
        <Switch>
          <Route exact path="/mylistings" component={User}/>
          <Route path="/mylistings/:id" component={Listing}/>
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
