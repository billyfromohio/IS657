import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const Nav = createBottomTabNavigator();




export default function App() {
  return (
    
    
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen
          name="Main"
          component={MainScreen}
          options={{ }}
        />
        <Nav.Screen
        name="Magic"
        component={MagicScreen}
        initialParams={{ name: 'Alice' }} />
      </Nav.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Magic', { name: 'Jane' })}>
      <Image  style={{height:400,width:400}}  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png' }} />
</Pressable>
    </View>
  );
}
function MagicScreen({ navigation, route }) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.magicTextStyle}>Oh, that's too bad. You see, there's really no such
      thing as magic. It's really just a combination of distraction, illusion and a whole lot of 
      wishful thinking. But, it is still fun!</Text>
      <Pressable onPress={() => navigation.navigate('Main', { name: 'Me' })}>
    
</Pressable>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',

  },

  magicTextStyle: {
    color: "white",
    fontSize: 20,
    fontFamily: 'MouseMemoirs',

  },
});
