import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

const [numberText1,  setNumber1] = useState('');
const [numberText2,  setNumber2] = useState('');
// const [total, setTotal] = useState(number1 + number2);


// function addNumbers() {
//   const outputSum = number1 + number2;
//   setTotal(outputSum);
// }
function addNumbers () {
  const number1 = parseInt(numberText1);
  const number2 = parseInt(numberText2);
  return number1 + number2
}

// function onChangeText1(input) {
//   const number1 = parseInt(input) || 0;
//   setNumber1(number1);
// }

// function onChangeText2(input) {
//   const number2 = parseInt(input) || 0;
//   setNumber2(number2);
// }

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{flex:1, width: '100%', backgroundColor: 'teal', justifyContent: 'center', margin: 10,}}>
       <Text style={{fontSize: 30, color: 'gold', alignSelf: 'center'}}>IS657 Midterm</Text>
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
              <Pressable onPress={addNumbers}>
                <Text style={{ color: 'white'}}>{`CALCULATE SUM`}</Text>
                </Pressable>
              </View>
              <View style={styles.inputField}><View style={styles.input}><Text>{'total'}</Text></View></View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>

  );
console.log(addedUp);
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
  input: {

    height: 30,
    width: 100,
    //margin: 12,
    borderWidth: 1,
    //justifyContent: 'flex-end',
    //padding: 10,
  },
  inputBoxes: {
   flex: 1,
   flexDirection: 'row',
   //alignItems:'center',
   //justifyContent: 'flex-end',
//   borderWidth: 1,


  },
  inputText: {
    flex: 2,
  justifyContent: 'center',
   alignItems: 'flex-start',
   margin: 5,
  // borderWidth: 1,
    
  },
  inputField: {
    flex: 2,
  justifyContent: 'center',
   alignItems: 'flex-end',
   margin: 5,
//   borderWidth: 1,

  },
  outputBox: {
    height: 30,
    width: 100,
    // alignItems: 'flex-end',
    justifyContent: 'center',
    borderwidth: 1,
  },

});
