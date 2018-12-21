import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class FabricItem extends Component {
  render() {
    return (
      <View style={styles.fabric}>
        <Image
          style={styles.fabricImage}
          source={(this.props.data.thumbnail) ? this.props.data.thumbnail : require('../assets/images/capture.png')}
        />
        <View style={styles.fabricInfo}>
          <Text style={styles.fabricTitle}>{this.props.data.title}</Text>
          <Text style={styles.fabricDescription}>{this.props.data.description}</Text>
          <Text style={styles.fabricQuantity}>{this.props.data.quantity} peças</Text>
        </View>
      </View>
    )
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  fabric: {
    width: fullWidth,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 10,
    borderRadius: 5,
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  fabricImage: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  fabricInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  fabricTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  fabricDescription: {
    fontSize: 18,
    color: '#777',
  },
  fabricQuantity: {
    fontSize: 16,
    color: '#999',
  }
});