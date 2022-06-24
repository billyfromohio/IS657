import { TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import firebase from 'firebase'

//eventually change old states to useState

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    
    const onSignUp = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
 }

    return (
      <View>
        <TextInput 
            placeholder='email'
            onChangeText={(email) => setEmail({ email })}
        />
        <TextInput 
            placeholder='password'
            secureTextEntry={true}
            onChangeText={(password) => setPassword({ password })}
        />
        <Button 
            onPress={() => onSignUp()}
            title='Sign In'
        />
      </View>
    )
  };