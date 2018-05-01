import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Signup from './components/auth/signup';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';

// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
