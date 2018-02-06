import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import ReduxNavigation from './navigation/redux-navigation';

import reducers from './reducers';

const configureStore = (initialState) => {
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
  )
  return createStore(reducers, initialState, enhancer)
}

const store = configureStore({})

// TO DO: Implement Thunk/ middle ware
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    )
  }
}

export default App;


