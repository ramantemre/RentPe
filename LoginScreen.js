import React from 'react';
import {StyleSheet, View,Image,Text,TouchableOpacity,StatusBar,TextInput,Button} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import User from './User';
import HomeScreen from './HomeScreen';
import AuthLoading from './AuthLoading';

const AppStack = createStackNavigator({ HomeScreen: HomeScreen });
const AuthStack = createStackNavigator({ LoginScreen: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class LoginScreen extends React.Component{

  static navigationOptions = {
    header: null
  }

  state = {
    Email: '',
    Password: ''
  }

  handleChange = key => val => {
    this.setState({ [key]: val})
  }

  componentWillMount(){
    AsyncStorage.getItem('EmailAddress').then(val=>{
      if(val){
        this.setState({Email:val})
      }
    })
  }

  submitFrom = async () => {
    await AsyncStorage.setItem('EmailAddress',this.state.Email);
    User.Email=this.state.Email;
    firebase.database().ref("users/" + User.Email).set({Password: this.state.Password})
    this.props.navigation.navigate('App');
  
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#0060cb'
          barStyle='light-content'
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.loginDetail}>
          <TextInput style={styles.inputBox}
            placeholder='Email'
            placeholderTextColor = "#000000"
            selectionColor='#000000'
            keyboardType='email-address'
            value={this.state.Email}
            onChangeText={this.handleChange('Email')}
            
          />
          <TextInput style={styles.inputBox}
              placeholder='Password'
              secureTextEntry={true}
              placeholderTextColor = "#000000"
              keyboardType='password'
              value={this.state.Password}
              onChangeText={this.handleChange('Password')}
          />
        
        
            <TouchableOpacity onPress={this.submitFrom}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Button
              title="Sign In With Google"
              onPress={() => alert('button pressed')}
            />
            
        </View>
      </View>
    );
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

  header:{
    flex :2,
    backgroundColor : '#FFFFFF',
    justifyContent:'center'
  
  },
  headerText:{
    fontSize : 50,
    fontWeight :'700',
    alignItems:'center',
    flexDirection:'row',
    marginLeft: 10,
    color:'#000000',
    
  },
  
  loginDetail:{
    flex :4,
    justifyContent: 'center',
    alignItems:'center',
  },
  inputBox:{
    width:300,
    backgroundColor: '#7abbff',
    borderRadius: 25,
    paddingHorizontal:18,
    borderColor : '#000000',
    fontSize: 16,
    color : '#000000',
    marginVertical: 10,
    borderColor :'#358cff'
  },
  buttonText:{
    width:150,
    height:50,
    textAlign:'center',
    backgroundColor:'#358cff',
    borderRadius:40,
    paddingHorizontal:10,
    paddingVertical:8,
    fontSize:20,
    color:'#FFFFFF',
    marginVertical:20,
    marginBottom:10,
    marginTop:40,
    fontWeight:'bold'
  },
  
 
});