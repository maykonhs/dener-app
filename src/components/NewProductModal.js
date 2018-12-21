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

import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'NOVA FOTO',
  takePhotoButtonTitle: 'Capturar...',
  chooseFromLibraryButtonTitle: 'Selecionar na galeria...',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

export default class NewProductModal extends Component {

  state = {
    newThumbnail: null,
    newTitle: '',
    newDescription: '',
    newQuantity: ''
  }

  clearInputText = () => {
    this.setState({
      newTitle: '',
      newThumbnail: null,
      newDescription: '',
      newQuantity: ''
    })
  }

  render() {
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => { }}>
        <View style={styles.modalContainer}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxTitle}>Adicionar produto</Text>
            <TouchableOpacity
              onPress={() => {
                ImagePicker.showImagePicker(options, (response) => {
                  console.log('Response = ', response);

                  if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else {
                    const source = { uri: response.uri };

                    // You can also display the image using data:
                    //const source = { uri: 'data:image/jpeg;base64,' + response.data }

                    this.setState({
                      newThumbnail: source,
                    });
                  }
                })
              }}>
              <Image style={[styles.customButton, styles.captureButton]} source={(this.state.newThumbnail) ? this.state.newThumbnail : require('../assets/images/capture.png')} />
            </TouchableOpacity>
            <TextInput
              autoCapitalize='none'
              required
              style={styles.boxInput}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Nome do produto'
              value={this.state.newTitle}
              onSubmitEditing={() => { clear() }}
              onChangeText={newTitle => this.setState({ newTitle })} />

            <TextInput
              autoCapitalize='none'
              style={styles.boxInput}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Descrição do produto'
              value={this.state.newDescription}
              onChangeText={newDescription => this.setState({ newDescription })} />

            <TextInput
              autoCapitalize='none'
              keyboardType='numeric'
              style={styles.boxInput}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Quantidade'
              value={this.state.newQuantity}
              onChangeText={newQuantity => this.setState({ newQuantity })} />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={ () => {
                  this.clearInputText()
                  this.props.onCancel()
                }}>
                <Image style={[styles.cancelButton, styles.customButton]} source={require('../assets/images/cancel.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                onRequestClose={() => { }}
                onPress={() => {

                  if (!this.state.newTitle ||
                    !this.state.newDescription ||
                    !this.state.newQuantity) {
                    return Alert.alert(
                      'Por favor,',
                      'Preencha todos os campos',
                      [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                      ],
                      { cancelable: false }
                    )
                  }

                  this.props.onAdd(this.state.newTitle,
                    this.state.newThumbnail,
                    this.state.newDescription,
                    this.state.newQuantity)

                  this.clearInputText()

                  return
                }}>
                <Image style={[styles.addButton, styles.customButton]} source={require('../assets/images/add.png')} />
              </TouchableOpacity>

            </View>
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