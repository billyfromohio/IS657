import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';

import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ }}
        />
        <Tab.Screen
        name="Info"
        component={ProfileScreen}
        initialParams={{ name: 'Alice' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate()}>
      <Image  style={{height:50,width:50}}  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png' }} />
</Pressable>
    </View>
  );
}
function ProfileScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is {route.params.name}'s profile</Text>
      <Pressable onPress={() => navigation.navigate('Home', { name: 'Me' })}>
      <Image  style={{height:50,width:50}}  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png'}}/>
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

  typeStyle: {
    color: "white",

  },
});
