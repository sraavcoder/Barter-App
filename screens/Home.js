import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        return alert('Successfully Login');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  userSignUp = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        return alert('User Added Successfully');
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 1, height:300 }}>
        <Text
          style={{
            fontSize: 35,
            backgroundColor: '#f47b9d',
            color: 'white',
            marginTop: 1,
            height: 60,
            paddingTop: 4,
            paddingLeft: 5,
            textAlign:'center',
          }}>
          Barter App
        </Text>
        </View>

        
         <Image 
           style={{ width: 280, height: 300, marginTop:15, alignSelf:'center'}}
            source={require('../assets/barter.jpg')}
          />

        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.loginBox}
            placeholder="Enter Your ID"
            placeholderTextColor="#a4ddf2"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="Enter Your Password"
            placeholderTextColor="#a4ddf2"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}>
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
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#00adb5',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#f47b9d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: '#ffff',
    fontWidth:200,
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
