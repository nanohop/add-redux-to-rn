import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

console.disableYellowBox = true;

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import Gallery from './src/screens/Gallery'
import Login from './src/screens/Login'

import rootReducer from './src/reducers'

const store = createStore(rootReducer)

class LoginGate extends Component{

  render() {
    if(this.props.username) {
      return <Gallery />
    } else {
      return <Login />
    }
  }

}

const ConnectedLoginGate = connect(state => ({
  username: state.auth.username
}))(LoginGate)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedLoginGate />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
