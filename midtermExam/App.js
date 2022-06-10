import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{backgroundColor: 'green'}}>
       <Text>IS650 Midterm</Text>
      </View>
      <View>
        <View style={styles.inputRowBoxes}>
          <View style={{alignItems:'flex-start'}}><Text>{`Number 1 [10 to 20]`}</Text></View>
          <View><TextInput style={styles.input}/></View>
        </View>
        <View style={styles.inputRowBoxes}>
        <View style={{alignItems:'flex-start'}}><Text>{`Number 2 [100 to 200]`}</Text></View>
          <View><TextInput style={styles.input}/></View>
        </View>
        <View style={styles.inputRowBoxes}>
          <View><Text>{`Number 1 [10 to 20]`}</Text></View>
          <View><TextInput style={styles.input}/></View>
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputRowBoxes: {
   flex: 3,
   flexDirection: 'row',

  },
});
