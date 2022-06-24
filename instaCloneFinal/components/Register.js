import { TextInput, View, Button, Text } from 'react-native';
import React, { useState } from 'react';


//eventually change old states to useState
export default function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    
    const onSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(name, email, password)
 }

    return (
      <View>
        <TextInput 
            placeholder='name'
            onChangeText={(name) => setName({ name })}
        />
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
            title='Sign Up'
        />
      </View>
    )
  };