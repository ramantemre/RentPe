import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import firebase from 'firebase';
import User from './User';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount() {
       // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB9azyc0Vo4DcKfapSrLAMYVkkg8Wj3G9M",
        authDomain: "rentpe-8a66b.firebaseapp.com",
        databaseURL: "https://rentpe-8a66b.firebaseio.com",
        projectId: "rentpe-8a66b",
        storageBucket: "rentpe-8a66b.appspot.com",
        messagingSenderId: "674022569926"
    };
    firebase.initializeApp(config);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.Email = await AsyncStorage.getItem('EmailAddress');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(User.Email ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}