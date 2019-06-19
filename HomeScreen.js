import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import User from './User';

export  default class Home extends React.Component {

  static navigationOptions = {
    title: 'RentPE'
  }

  _logout = async () => {
    await AsyncStorage.clear(); 
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View>
        <Text>This is the home screen</Text>
        <Text>{User.Email}</Text>
        <TouchableOpacity onPress={this._logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
