import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts} from 'expo-font';
import AppLoading  from 'expo-splash-screen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    
    
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'green',
        tabBarActiveTintColor: 'blueviolet',
        tabBarStyle: {
          fontSize: 30,
          height: 50,
          backgroundColor: 'black', } 
        
      }}>
        <Tab.Screen
          name="Main"
          component={MainScreen}
        //  options={{tabBarButton: () => null,}} 
        />
        <Tab.Screen
        name="Magic"
        component={MagicScreen}
        // options={{tabBarButton: () => null,}}
        initialParams={{}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
//first screen
function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Magic', { name: 'Jane' })}>
      <Image  style={{height:700, width:300}}  source={ require('./assets/wizardImg.png' ) } />
</Pressable>
    </View>
  );
}

// second screen
function MagicScreen({ navigation, route }) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.magicTextStyle}>Oh, that's too bad.</Text>
      <Text style={styles.magicTextStyle}>{'\t'}You see, there's really no such
      thing as magic.</Text><Text style={styles.magicTextStyle}>{'\t'} It's really just a combination of distraction, illusion and a whole lot of 
      wishful thinking.</Text><Text style={styles.magicTextStyle}> But, it is still fun!</Text>
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
    fontSize: 32,
    fontFamily: 'MouseMemoirs',
    margin: 10,
  },
});
