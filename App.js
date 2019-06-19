import React from 'react';
import {StyleSheet, View,Image,Text,TouchableOpacity,StatusBar} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/HomeScreen';
import AuthLoading from './screens/AuthLoading';
import firebase from 'firebase'; 

class Start extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#0060cb'
          barStyle='light-content'
        />
         <View style={styles.logo}>
            <Image
              source={require('./images/house.png')}
              style={{ width:200 , height: 200 }}
            />
              <Text style={{color:'#000000',fontSize:40,fontWeight
              :'600',textAlign:'center',marginTop:15}}>RentPe</Text>
          </View>
          <View>
          <TouchableOpacity onPress ={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={styles.lineText}>or Login later</Text> 
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Start: Start,
    Login: LoginScreen,
    SignUp : SignUp,
    HomeScreen : HomeScreen,
    AuthLoading : AuthLoading, 
    
  },  
  {
    initialRouteName: 'Start',
    headerMode:'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent:'space-around',
  },
  logo: {
    flexDirection: 'column',
    flex : 1,
    justifyContent:'center',
    alignContent:'center',
    marginTop:20,
  },
  buttonText:{
    
    width:180,
    height:40,
    textAlign:'center',
    backgroundColor:'#358cff',
    borderRadius:40,
    paddingHorizontal:10,
    paddingVertical:5,
    fontSize:20,
    color:'#FFFFFF',
    marginVertical:20,
    marginBottom:10,
    marginTop:20,
    fontWeight:'bold'
  },
  lineText:{
    fontSize:15,
    textAlign:'center',
    color:'#000000',
    fontWeight:'400',
    marginTop:10,
    marginBottom : 15,
  },
  
 
});