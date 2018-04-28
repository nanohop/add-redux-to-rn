import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';

export default class About extends Component {

  render() {
    return (
      <View style={styles.shape}>
        <Image 
          source={this.props.image}
          resizeMode="contain"
          style={{ width: 300 }}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  shape: {
    padding: 10,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
