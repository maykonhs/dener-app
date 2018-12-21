import React, { Component } from 'react'

import { 
  Text,
  View,
  TextInput } from 'react-native'

export default class LoginScreen extends Component {
  state = {
    isLogged: false,
    login: '',
    password: ''
  }

  render() {
    return (
      <View>
        <TextInput
          autoCapitalize='none'
          style={styles.boxInput}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='login'
          value={this.state.login}
          onChangeText={login => this.setState({ login })} />

        <TextInput
          autoCapitalize='none'
          keyboardType='numeric'
          style={styles.boxInput}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='senha'
          value={this.state.password}
          onChangeText={password => this.setState({ password })} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    width: 280,
  },
  boxTitle: {
    fontFamily: 'Caviar Dreams',
    fontWeight: 'bold',
    fontSize: 20,
  },
  boxInput: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    height: 40,
    borderRadius: 3
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customButton: {
    width: 50,
    height: 50,
    marginVertical: 20
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  cancelButton: {
    marginHorizontal: 20
  },
  addButton: {
    marginHorizontal: 20
  },
  buttonText: {
    fontFamily: 'Caviar Dreams',
    fontSize: 20,
    color: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  loadTextButton: {
    fontFamily: 'Caviar Dreams',
    fontSize: 30,
    color: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 20
  },
})

LoginScreen.navigationOptions = {
  title: 'Login',
  header: null
}
