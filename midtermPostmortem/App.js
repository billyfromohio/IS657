import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [input1, setNumber1] = useState('');
  const [input2, setNumber2] = useState('');
  const [total, setMessage] = useState('');

  function getSum() {
    const number1 = parseInt(input1);
    const number2 = parseInt(input2);
    // if (!number1.isInteger || number2.isInteger || 9 < number1 < 21 || 99 < number2 < 201) {
    //   setMessage('GTFO');
    // }else{
      const sum = number1 + number2;
      setMessage(sum.toString());
    // }
console.log(number2);
console.log(number2);
  }


  return (
    <View style={styles.container}>
     <View style={{flex:1, width: '100%', backgroundColor: 'teal', justifyContent: 'center', margin: 10,}}>
       <Text style={{ fontSize: 30, color: 'gold', alignSelf: 'center' }}>IS657 Midterm</Text>
      </View>
      <View style={{flex: 1, width: '100%'}}>
        <View style={styles.inputBoxes}>
          <View style={styles.inputText}><Text>{`Number 1 [10 to 20]`}</Text></View>
          <View style={styles.inputField}><TextInput style={styles.input} onChangeText={setNumber1}  keyboardType={'numeric'} /></View>
        </View>
        <View style={styles.inputBoxes}>
          <View style={styles.inputText}><Text>{`Number 2 [100 to 200]`}</Text></View>
          <View style={styles.inputField}><TextInput style={styles.input} onChangeText={setNumber2} keyboardType={'numeric'} /></View>
        </View>
        <View style={styles.inputBoxes}>
          <View style={styles.inputText}>
            <View style={{backgroundColor: 'dodgerblue', width: 130, height: 30, justifyContent: 'center', alignItems: 'center',}}>
              <Pressable onPress={(getSum)}>
                <Text style={{ color: 'white'}}>{`CALCULATE SUM`}</Text>
                </Pressable></View>
              </View>
              <View style={styles.inputField}><View style={styles.input}><Text style={styles.outputText}>{total}</Text></View></View>         
        </View>
      </View>
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
    margin: 20,
    maxWidth: 350,
    maxHeight: 400,
  },

  inputBoxes: {
    flex: 1,
    flexDirection: 'row',

  },

  // formats the text on left
  inputText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 5,
    
  },

  // formats the box arount the input
  inputField: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 5,

  },

    // formats the type in the input fields
    input: {
      height: 30,
      width: 100,
      justifyContent: 'center',
      alignItems: 'flex-start', 
      borderWidth: 1,
      margin: 5,
   
    },

  //formats the box around the output
  outputBox: {
    height: 30,
    width: 100,
    justifyContent: 'center',
    borderwidth: 1,
  },

  // formats the output
  outputText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 5,
  
  },

});
