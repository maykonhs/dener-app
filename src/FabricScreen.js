import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage,
  FlatList
} from 'react-native';

import FabricItem from './components/FabricItem'
import NewProductModal from './components/NewProductModal'

import uuid from 'react-native-uuid'
import ItemModal from './components/ItemModal';

export default class FabricScreen extends Component {

  state = {
    itemModalVisible: false,
    item: {},
    modalVisible: false,
    imageSource: {},
    fabric: []
  }

  async componentDidMount() {
    const fabric = JSON.parse(await AsyncStorage.getItem('@VilaMariaApp:fabric'))
    if (fabric) {
      this.setState({ fabric })
    }
  }

  _addRepository = async (newTitle, newThumbnail = null, newDescription, newQuantity) => {

    const newId = uuid.v4()
    const newItem = {
      id: newId,
      thumbnail: newThumbnail,
      title: newTitle,
      description: newDescription,
      quantity: newQuantity
    }

    await this.setState({
      modalVisible: false,
      fabric: [
        ...this.state.fabric,
        newItem
      ]
    })

    await AsyncStorage.setItem('@VilaMariaApp:fabric', JSON.stringify(this.state.fabric))
  }

  _removeElement = async (item) => {
    for (let i = 0; i < this.state.fabric.length; i++) {
      const element = this.state.fabric[i]
      if (element.id === item.id) {
        await this.state.fabric.splice(i, 1);
        await this.setState({
          modalVisible: false,
          fabric: [
            ...this.state.fabric
          ]
        })
      }
    }
    return await AsyncStorage.setItem('@VilaMariaApp:fabric', JSON.stringify(this.state.fabric))
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          keyExtractor={item => item.id}
          data={this.state.fabric}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => this.setState({ itemModalVisible: true, item: item })}>
              <FabricItem data={item} />
            </TouchableOpacity>}>
        </FlatList>

        <TouchableOpacity style={styles.addButton} onPress={() => this.setState({ modalVisible: true })}>
          <Image style={styles.addImage} source={require('./assets/images/add.png')} />
        </TouchableOpacity>

        <NewProductModal onCancel={() => this.setState({ modalVisible: false })}
          onAdd={this._addRepository}
          visible={this.state.modalVisible} />

        <ItemModal onCancel={() => this.setState({ itemModalVisible: false })}
          visible={this.state.itemModalVisible}
          onEdit={() => this.setState({ modalVisible: true })}
          onRemove={this._removeElement}
          data={this.state.item} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  list: {
    marginVertical: 10
  },
  plusText: {
    color: '#FFF',
    fontSize: 60,
    textAlign: 'center',
    bottom: 10,
    fontFamily: 'Caviar Dreams'
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addImage: {
    width: 60,
    height: 60
  },
})

FabricScreen.navigationOptions = {
  title: 'Tecidos',
  header: null
}
