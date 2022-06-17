import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import {Button, Input, Image} from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase';

const auth = getAuth(firebaseApp);

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser){
    navigation.replace('Home');
    }
  });
  return unsubscribe;
}, [navigation]);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password).catch((errpr) => alert(error))
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}> 
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}/>
    
    <View style={styles.inputContainer}>
        <Input 
          placeholder="Email"
          autoFocus 
          type="email" 
          value={email} 
          onChangeText={(text) => setEmail(text)} 
          />
        <Input 
          placeholder="Password" 
          sercureTextEntry 
          type="password"  
          value={password} 
          onChangeText={(text) => setPassword(text)} 
          />
        
    </View>

    <Button containerStyle={styles.button} onPress={signIn} title='Login' />
    <Button containerStyle={styles.button} type='outline' onPress={ () => navigation.navigate('Register') } title='Register' />
    <View style={{ height: 200 }}/>
    </KeyboardAvoidingView> 
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: 10,
  backgroundColor: 'white',},

  inputContainer: {
    width: 300,

  },
  button: {
    width: 200,
    marginTop: 10,
  },


});