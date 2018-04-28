import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import Circle from 'images/shapes/circle.png'

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  onLogin = () => {
    this.props.onLogin(this.state.username)
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Shape Gallery</Text>

          <Image 
            source={Circle}
            style={styles.image}
            resizeMode="contain"
          />

          <TextInput 
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            placeholder='Username'
            style={styles.input}
            autoCapitalize={'none'}
            underlineColorAndroid={'transparent'}
          />
          
          <TextInput 
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder='Password'
            style={styles.input}
            autoCapitalize={'none'}
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}
          />

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={this.onLogin}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 300
  },
  header: {
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
    fontWeight: "200",
  },
  image: {
    marginTop: 60,
    marginBottom: 60,
    width: 200,
    height: 200,
    alignSelf: 'center'
  },
  input: {
    margin: 20,
    fontSize: 18,
    fontWeight: '200',
    marginTop: 0,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  loginButton: {
    alignSelf: 'stretch',
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0066cc'
  },
  loginText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '200'
  }
})
