import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import Shape from './components/Shape'

import Circle from 'images/shapes/circle.png'
import Square from 'images/shapes/square.png'
import Triangle from 'images/shapes/triangle.png'
import Star from 'images/shapes/star.png'

export default class About extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Shape Gallery</Text>

        <View style={styles.gallery}>
          <Shape image={Circle} />
          <Shape image={Square} />
          <Shape image={Triangle} />
          <Shape image={Star} />
        </View>

      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  header: {
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
    fontWeight: "200",
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})
