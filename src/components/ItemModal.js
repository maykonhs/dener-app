import React, { Component } from 'react'
import {
  View,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'

export default class ItemModal extends Component {

  state = {}

  render() {
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => { }}>
        <View style={styles.modalContainer}>
          <View style={styles.boxContainer}>

            <Text style={styles.boxTitle}>O que você deseja fazer ?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onRequestClose={() => { }}
                onPress={() => {
                  Alert.alert(
                    'Tem certeza que deseja apagar?',
                    'Esse item será removido',
                    [
                      {
                        text: 'Sim', onPress: () => {
                          this.props.onCancel()
                          this.props.onRemove(this.props.data)
                          return console.log('OK Pressed')
                        }
                      },
                      { text: 'Cancelar', onPress: () => console.log('Cancelar Pressed') },
                    ],
                    { cancelable: false }
                  )
                }}>
                <Image style={[styles.cancelButton, styles.customButton]} source={require('../assets/images/delete.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                onRequestClose={() => { }}
                onPress={() => {
                  this.props.onCancel()
                  this.props.onEdit()
                }}>
                <Image style={[styles.submitButton, styles.customButton]} source={require('../assets/images/edit.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.cancelModalButton}
              onRequestClose={() => { }}
              onPress={this.props.onCancel}>
              <Text style={styles.cancelModalText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  },
  cancelButton: {
    marginHorizontal: 20
  },
  submitButton: {
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
  cancelModalButton: {
    marginTop: 20
  },
  cancelModalText: {
    fontSize: 20
  }
})