import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class StockItem extends Component {
  render() {
    return (
      <View style={styles.stock}>
        <Image
          style={styles.stockImage}
          source={(this.props.data.thumbnail) ? this.props.data.thumbnail : require('../assets/images/capture.png')}
        />
        <View style={styles.stockInfo}>
          <Text style={styles.stockTitle}>{this.props.data.title}</Text>
          <Text style={styles.stockDescription}>{this.props.data.description}</Text>
          <Text style={styles.stockQuantity}>{this.props.data.quantity} peças</Text>
        </View>
      </View>
    )
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  stock: {
    width: fullWidth,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 10,
    borderRadius: 5,
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  stockImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  stockInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  stockTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  stockDescription: {
    fontSize: 18,
    color: '#777',
  },
  stockQuantity: {
    fontSize: 16,
    color: '#999',
  }
});