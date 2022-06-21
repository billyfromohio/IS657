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
    <View>
      <Text>This is the HomeScreen</Text>
    </View>
</SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF4C3',

    },

});