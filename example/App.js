/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import AMapGeolocation from '@uiw/react-native-amap-geolocation';
// import TransportLocation from '@uiw/react-native-transport-location';

export default class App extends Component {
  state = {
    status: 'starting',
    message: '--',
  };

  componentDidMount() {
    // let apiKey = ''
    // if (Platform.OS === 'ios') {
    //   apiKey = '00b74444d56a1f9e036b608a52f0da33';
    // }
    // if (Platform.OS === 'android') {
    //   apiKey = '2d36ea36f37fb156a691d27901db0897';
    // }

    // if (apiKey) {
    //   AMapGeolocation.setApiKey(apiKey);
    // }
    // // iOS 指定所需的精度级别
    // // AMapGeolocation.setDesiredAccuracy(3);
    // // Android 指定所需的精度级别，可选设置，默认 高精度定位模式
    // // AMapGeolocation.setLocationMode(1);
    // // 定位是否返回逆地理信息
    // // AMapGeolocation.setLocatingWithReGeocode(true);
    // 当设备可以正常联网时，还可以返回该定位点的对应的中国境内位置信息（包括：省、市、区/县以及详细地址）。
    // AMapGeolocation.addLocationListener((location) => {
    //   console.log('返回定位信息', location);
    // });
    // AMapGeolocation.start();

    // const init = await TransportLocation.init("com.zkdata.ptug.truck", "8a744876-b716-4f4f-af99-46975162fb8a", "3337057", "release")
    // console.log('~9999999,,,', init);
    // TransportLocation.start("HT-HZ52008030000962", "0000", "320116", "421022")
    // TransportLocation.stop("HT-HZ52008030000962", "0000", "320116", "421022")
    // console.log('~sdsd55555,,,')
  }
  render() {
    // console.log('~~~~:::4441')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆RNTransportLocation example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
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
    color: '#333333',
    marginBottom: 5,
  },
});
