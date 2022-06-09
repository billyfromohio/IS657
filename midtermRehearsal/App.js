import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, TextInput } from 'react-native';

export default function App() {


  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('');
  
  function getSquare() {
    const squared = number * number;
    return `The square of ${number} is ${squared}.`;
  }

  function onChangeText(input) {
    const inputNumber = parseInt(input) || 0;
    setNumber(inputNumber);
  }

  return (
    <View style={styles.container}>
      <Text>Input a number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={ number.toString() }
          keyboardType={"numeric"}
          />
          <Button title="Calc Square" onPress={() => setMessage(getSquare())} />
          <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
