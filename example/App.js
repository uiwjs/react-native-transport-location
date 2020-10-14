/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransportLocation from '@uiw/react-native-transport-location';

export default class App extends Component {
  state = {
    status: 'starting',
    message: '--',
  };

  async componentDidMount() {
    try {
      const init = await TransportLocation.init("com.zkdata.ptug.truck", "8a744876-b716-4f4f-af99-46975162fb8a", "3337057", "release")
      if (init && init.message) {
        this.setState({ message: init.message });
      }
      console.log('1--->', init);
      const start = await TransportLocation.start("HT-HZ52008030000962", "0000", "320116", "421022");
      console.log('2--->', start);
    } catch (error) {
      console.log('error::3--->', error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆RNTransportLocation Example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆返回状态☆</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'green',
    marginBottom: 5,
  },
});
