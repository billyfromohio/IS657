import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from 'react-native-elements';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import firebaseApp from '../firebase';
import 'firebase/compat/auth'
const auth = getAuth(firebaseApp);

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        });
    }, [navigation]);
    // function register() {
    //     createUserWithEmailAndPassword(auth, email, password)
    //       .then((userCredential) => {
    //         updateProfile(userCredential.user, {
    //           displayName: name,
    //           photoURL: imageUrl,
    //         });
    //       })
    //       .catch((error) => alert(error.message));
    async function register () {
        await createUserWithEmailAndPassword(auth, email, password) 
        .then(authUser => {
            updateProfile(userCredential.user, {
                displayName: name,
                photoURL: imageUrl,
            });
        })
        .catch((error) => alert(error.message))
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>Create a signal account</Text>
      <View style={styles.inputContainer}>
        <Input
            placeholder='Full Name'
            autoFocus
            type="text"
            value={name}
            onChangeText={(text) => setName(text)}
        />
        <Input
            placeholder='Email'
            autoFocus
            type="text"
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
        <Input
            placeholder='Password'
            autoFocus
            type="text"
            value={password}
            onChangeText={(text) => setPassword(text)}
        />
        <Input
            placeholder='Profile Picture URL (optional)'
            autoFocus
            type="text"
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title='Register'
        />
        <View style={{ height: 200 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    inputContainer: {
        width: 300,

    },
    button: {
        width: 200,
        marginTop: 10,
    
    },
});