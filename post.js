import React, { Component } from 'react';
import { AppRegistry, Text, View,TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';


export default class Example extends Component {

    render() {
      return (
        <View style={styles.screen}>
          <View style={styles.container}>
            <Text style={styles.bigBlue}>Enter Your Details</Text>
            <TextField
              value=''
              label='Enter Full Name :'              
            />
            <TextField
              value=''
              label='Enter Contact Number :'              
            />
            <TextField
              value=''
              label='Enter E-mail ID :'              
            />  
            <View>                    
              <Dropdown
                      label='locality'
                      data={locality}
              />
            </View>
            <View>                    
              <Dropdown
                      label='Type of People'
                      data={typeofpeople}
              />
            </View>
            <View>                    
              <Dropdown
                      label='Type of House'
                      data={typeofhouse}
              />
            </View>
            <View>                    
              <Dropdown
                      label='Parking'
                      data={parking}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Dropdown
                  label='House Size'
                  data={housesize}
                />
              </View>

              <View style={{ width: 96, marginLeft: 8 }}>
                <Dropdown
                  label='Price'
                  data={price}
                />
              </View>
            </View>
          </View>

          <View style={[styles.container]}>
             <TouchableOpacity style={styles.button}>
                <Text> Submit </Text>
              </TouchableOpacity>
          </View>
        </View>
      );
    }
}
AppRegistry.registerComponent('example', () => Example);


const styles = {
  screen: {
    flex: 1,
    padding: 4,
    paddingTop: 56,
    backgroundColor: '#E8EAF6',
  },

  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 6,
  },

  text: {
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 8,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },

  textContainer: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 16,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
};

const locality = [
  { value: 'Malwa Mill'},
  { value: 'Khajarana' },
  { value: 'Vijay Nagar' },
  { value: 'LIG' },
  { value: 'Rajwada' },
  { value: 'Annapurana' },
  { value: 'Palasia' },
];

const typeofpeople = [
  { value: 'Bachelor'},
  { value: 'Student' },
  { value: 'Couple Family' },
  { value: 'Girls' },
  { value: 'Boys' },
];

const typeofhouse = [
  { value: 'Grounded'},
  { value: 'Appartment' },
  { value: 'Flat' },
  { value: 'Single Room' },
  { value: 'Single Room with Bathroom' },
];

const parking = [
  { value: 'Two-Wheeler'},
  { value: 'Four-Wheeler' },
  { value: 'Three-Wheeler' },
];

const housesize = [
  { value: '1BHK' },
  { value: '2BHK' },
  { value: '3BHK' },
];

const price = [
  { value: '1000', props: { disabled: true } },
  { value: '2000' },
  { value: '3000' },
  { value: '4000' },
];