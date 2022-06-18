import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Styles from './styles';
export default function App() {
  return (
    <View style={Styles.container}>
      <ImageBackground
        resizeMode={'cover'}
        style={Styles.image}
        source={require('./assets/images/ModelS.jpeg'
        )}>
      <View style={Styles.titles}>
      <Text style={Styles.title}>Model S</Text>
      <Text style={Styles.subtitle}>Starting at $69,420</Text>
      </View>    
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
