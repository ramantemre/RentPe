import React, {Component} from 'react';
import {StyleSheet, View,Image,Text,TouchableOpacity,StatusBar,TextInput} from 'react-native';


export default class Login extends Component{
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#0060cb'
          barStyle='light-content'
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>SignUp</Text>
        </View>
        <View style={styles.signUpDetail}>
          
           <TextInput style={styles.inputBox}
            placeholder='Name'
            placeholderTextColor = "#000000"
            selectionColor='#000000'
            keyboardType='default'
          />
           <TextInput style={styles.inputBox}
            placeholder='Phone Number'
            placeholderTextColor = "#000000"
            selectionColor='#000000'
            keyboardType='number-pad'
          />
          <TextInput style={styles.inputBox}
            placeholder='Email'
            placeholderTextColor = "#000000"
            selectionColor='#000000'
            keyboardType='email-address'
          />
          <TextInput style={styles.inputBox}
              placeholder='Password'
              secureTextEntry={true}
              placeholderTextColor = "#000000"
          />
        
        
            <TouchableOpacity>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
            
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
    flex :1,
    backgroundColor : '#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
  
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
    flex :6,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
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
    marginBottom:20,
    marginTop:30,
    fontWeight:'bold',
    alignContent:'center',
    alignItems:'center',

  },


});