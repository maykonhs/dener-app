import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}>
        </Image>
        <Text style={styles.headerText}>{this.props.titleText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  header: {
    height: (Platform.OS === 'ios') ? 90 : 70,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#000080',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  headerText: {
    fontSize: 27,
    fontFamily: 'Caviar Dreams',
    color: '#FFF',
  }
});