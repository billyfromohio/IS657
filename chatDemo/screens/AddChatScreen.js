import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Input } from "@rneui/base";
import { AntDesign } from '@expo/vector-icons';

import { addDoc, collection, getFirestore } from 'firebase/firestore';
import firebaseApp from '../firebase';
import { useLayoutEffect } from 'react';

const db = getFirestore(firebaseApp);

export default function AddChatScreen({ navigation }) {
    const [chatName, setChatName] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a New Chat',
            headerBackTitle: 'Chats',
        });
    }, [navigation]);

    async function createChat() {
        try {
            await addDoc(collection(db, 'chats'), { chatName });
            navigation.goBack();
        } catch (error) {
            alert(error.message);
        }
    }


  return (
    <View style={styles.container}>
     <Input
        placeholder="Enter a chat name"
        leftIcon={<AntDesign name="wechat" size={24} color="black" />}
        onChangeText={setChatName}
        onSubmitEditing={createChat}
        />
        <Button
            disabled={!chatName}
            onPress={createChat}
            title="Create a New Chat"
        />
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%',
    },
});