import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import NavigationService from '../NavigationService';


export default function LoginScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      SIGN IN
      </Text>
      <Text style={styles.textologin}>
        STEAM ACCOUNT NAME
      </Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.textologin}>
        PASSWORD
      </Text>
      <TextInput
        style={styles.input}
      />
      <View style={styles.screenContainer}>
        <TouchableOpacity onPress={() => NavigationService.navigate('profile')} style={{ height: 60, backgroundColor:'#216dae' , alignItems: 'center', borderRadius: 5}}>
        <Text style={{color: '#93b4d0', marginTop: 15, fontSize: 20}}>Sign in</Text>
        </TouchableOpacity>
      </View>
       <Text style={styles.textoforgot}>
        Forgot your account name or password?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2a2c34',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 45,
    color: '#c6cacd',
    textAlign: 'center',
  },
  screenContainer: {
    justifyContent: "center",
    padding: 10
  },
  textologin: {
    color: '#c6cacd',
    marginLeft: 12,
  },
  input: {
    backgroundColor: '#1f2127',
    color: '#c6cacd',
    width: 380,
    height: 65,
    fontSize: 20,
    margin: 12,
    padding: 10,
  },
  textoforgot: {
    fontSize: 16,
    marginBottom: 340,
    textAlign: 'center',
    marginTop: 15,
    color: '#c6cacd'

  }
});