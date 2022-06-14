import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageBackground } from 'react-native';

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
          name="Wizard"
          component={MainScreen}
        />
        <Tab.Screen
        name="Magic"
        component={MagicScreen}
        initialParams={{}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
//first screen
function MainScreen({ navigation }) {
  return (
    <ImageBackground  style={{height:'100%', width:'100%'}}  source={ require('./assets/wizardImg.png' ) }>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Magic', )}>
          <Text style={styles.textStyle}>So you want to be a wizard?</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

// second screen
function MagicScreen({ navigation, route }) {
  return (
    
    <View style={styles.magicContainer}>
      
     <Pressable onPress={() => navigation.navigate('Wizard', { name: 'Me' })}>
      <Text style={styles.magicTextStyle}>Oh, that's too bad.</Text>
      <Text style={styles.magicTextStyle}>{'\t'}You see, there's really no such
      thing as magic.</Text><Text style={styles.magicTextStyle}>{'\t'} It's really just a combination of distraction, illusion and a whole lot of 
      wishful thinking.</Text><Text style={styles.magicTextStyle}>{'\t'} But, it is still fun!</Text>
      </Pressable>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  magicContainer: {
    flex: 1,
    backgroundColor: '#000',
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
