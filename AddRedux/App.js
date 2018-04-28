import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

console.disableYellowBox = true;

import Gallery from './src/screens/Gallery'
import Login from './src/screens/Login'

export default class App extends Component {

  state = {
    username: null
  }

  onLogin = (username) => {
    this.setState({ username })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.username ? <Gallery /> : <Login onLogin={this.onLogin} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
