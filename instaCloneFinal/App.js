import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/auth/Landing';
import Register from './components/Register';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from './firebase';
import { SafeAreaInsetsContext, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  // Check for user status
});


const Stack = createStackNavigator();
export default function App() {
  return (
<SafeAreaProvider style={{ flex: 1, margin: 15 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false}} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
</SafeAreaProvider>
  );
}
