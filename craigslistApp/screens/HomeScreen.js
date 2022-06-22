import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';


const HomeScreen = ({ navigation }) => {
  return (
    
<SafeAreaView style={styles.container}>
    <View style={{ flexDirection: 'row' }}>
      <View>
        <View><Text>Button</Text></View>
        <View><Text>Button</Text></View>
        <View><Text>Button</Text></View>
        <View><Text>Button</Text></View>
      </View>
      <View>
        <View><Text>Button</Text></View>
        <View><Text>Button</Text></View>
        <View><Text>Button</Text></View>
        <View><Text>Button</Text></View>
      </View>
    </View>
</SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF4C3',

    },

});