import { 
    StyleSheet, 
    Text, 
    View, 
    Keyboard, 
    KeyboardAvoidingView, 
    Platform, 
    SafeAreaView, 
    ScrollView,
    TouchableOpacity,
    TextInput,
 } from 'react-native';
import React, {useEffect, useLayoutEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Avatar } from '@rneui/base';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

import { getAuth } from 'firebase/auth';
import {
    addDoc,
    collection,
    getFirestore,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
} from 'firebase/firestore';
import firebaseApp from '../firebase';


const ChatScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style='light' />
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
                {messages.map(showMessage)}
            </ScrollView>
        </TouchableWithoutFeedback>
        <View style={styles.footer}>
            <TextInput
                style={styles.textInput}
                onSubmitEditing={sendMessage}
                placeholder='Chat Message'
                onChangeT={setInput}
            />
            <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name='send' size={24} color='blue' />
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
textInput: {
    bottom: 0,
    height: 40,
    flex: 1, 
    marginRight: 15,
    borderColor: 'transparent',
    backgroundColor: '#ECECEC',
    padding: 10,
    color: 'grey',
    borderRadius: 30,
},



})