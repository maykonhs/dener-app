import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage,
  FlatList
} from 'react-native';

import StockItem from './components/StockItem'
import NewProductModal from './components/NewProductModal'

import uuid from 'react-native-uuid'
import ItemModal from './components/ItemModal';

export default class StockScreen extends Component {

  state = {
    itemModalVisible: false,
    item: {},
    modalVisible: false,
    imageSource: {},
    stock: []
  }

  async componentDidMount() {
    const stock = JSON.parse(await AsyncStorage.getItem('@VilaMariaApp:stock'))
    if (stock) {
      this.setState({ stock })
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
      stock: [
        ...this.state.stock,
        newItem
      ]
    })

    await AsyncStorage.setItem('@VilaMariaApp:stock', JSON.stringify(this.state.stock))
  }

  _removeElement = async (item) => {
    for (let i = 0; i < this.state.stock.length; i++) {
      const element = this.state.stock[i]
      if (element.id === item.id) {
        await this.state.stock.splice(i, 1);
        await this.setState({
          modalVisible: false,
          stock: [
            ...this.state.stock
          ]
        })
      }
    }
    return await AsyncStorage.setItem('@VilaMariaApp:stock', JSON.stringify(this.state.stock))
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          keyExtractor={item => item.id}
          data={this.state.stock}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => this.setState({ itemModalVisible: true, item: item })}>
              <StockItem data={item} />
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

StockScreen.navigationOptions = {
  title: 'Estoque',
  header: null
}
