import * as React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import { AppLoading }  from 'expo-splash-screen';
import { ImageBackground } from 'react-native';



export default function App() {

  const Tab = createBottomTabNavigator();
  const [loaded] = useFonts({
    MouseMemoirs: require('./assets/fonts/MouseMemoirs-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
    
  return (
    
    
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'green',
        tabBarActiveTintColor: 'blueviolet',

        tabBarStyle: { 
          tabBarVisible: false,
          tabBarButton: () => null,
          fontSize: 30,
          height: 70,
          backgroundColor: 'black', 
          color: 'black',
        } 
      }}>
        <Tab.Screen
          name="Wizard"
          component={MainScreen}
         options={{ headerShown: false, }} 
        />
        <Tab.Screen
        name="Magic"
        component={MagicScreen}
        initialParams={{}}
        options={{ headerShown: false, }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
//first screen
function MainScreen({ navigation }) {
  return (
    <ImageBackground  style={{height:'100%', width:'100%'}}  source={ require('./assets/wizardImg.png' ) }>
      <View style={styles.wizardContainer}>
        <View style={{flex: 1, justifyContent: 'center',}}>
        </View>
        <View style={{flex: 2, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Pressable onPress={() => navigation.navigate('Magic', )}><Text style={styles.textStyle}>If you want to be a wizard...</Text>
          <Text style={styles.textStyle}>...just touch your wand!</Text><View style={{alignItems: 'center'}}><Image style={{height: 220, width: 100}} source={require ( './assets/wand.png')}></Image></View>      
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

// second screen
function MagicScreen({ navigation, route }) {
  return (
    
    <View style={styles.container}>
      
     <Pressable onPress={() => navigation.navigate('Wizard', { name: 'Me' })}>
      <Text style={styles.magicTextStyle}>Oh, that's too bad.</Text>
      <Text style={styles.magicTextStyle}>{'\t'}You see, there's actually no such
      thing as magic.</Text><Text style={styles.magicTextStyle}>{'\t'} It's really just a combination of distraction, illusion and a whole lot of 
      wishful thinking.</Text><Text style={styles.magicTextStyle}> But, it is still fun!</Text>
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
  wizardContainer: {
    flex: 1,
   // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'MouseMemoirs',
  },

  magicTextStyle: {
    color: "white",
    fontSize: 32,
    fontFamily: 'MouseMemoirs',
    margin: 10,
  },
});
