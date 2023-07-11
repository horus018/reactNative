import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Aboutscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>About Screen</Text> */}
        <Image
        style={{height: 300, width: 300}}
        source={require('../assets/andrezao.jpg')}
      />
      </View>
    )
  }
}

