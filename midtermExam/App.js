import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{flex:1, backgroundColor: 'teal', justifyContent: 'center'}}>
       <Text style={{fontSize: 40, color: 'gold'}}>IS650 Midterm</Text>
      </View>
      <View style={{flex: 1,}}>
        <View style={styles.inputRowBoxes}>
          <View style={styles.inputText}><Text>{`Number 1 [10 to 20]`}</Text></View>
          <View style={{alignItems:'flex-end'}}><TextInput style={styles.input}/></View>
        </View>
        <View style={styles.inputBoxes}>
          <View style={{alignItems:'flex-start'}}><Text>{`Number 2 [100 to 200]`}</Text></View>
          <View><TextInput style={styles.input}/><TextInput style={styles.input}/></View>
        </View>
        <View style={styles.inputRowBoxes}>
          <View><Text style={{}}>{`CALCULATE SUM`}</Text></View>
          <View style={styles.inputText}><View style={styles.outputBox}></View></View>
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
  },
  input: {

    height: 30,
    margin: 12,
    borderWidth: 1,
    //padding: 10,
  },
  inputRowBoxes: {
   flex: 1,
   flexDirection: 'row',
   // alignItems:'flex-start',

  },
  inputText: {
    justifyContent: 'center',
    
  },
  outputBox: {
    flex:1,
    alignItems: 'flex-end',
    borderwidth: 1,
  },

});
