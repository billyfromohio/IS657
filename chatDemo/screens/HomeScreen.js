import React, { useEffect, useLayoutEffect, useState} from 'react'
import { 
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { Avatar, Text } from '@rneui/base';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import { getAuth, signOut } from 'firebase/auth';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import  firebaseApp  from '../firebase';
import ChatListItem from '../ChatListItem'

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const HomeScreen = ({ navigation }) => {
    const [chats, setChats] = useState([]);


        useEffect(() => {
            
            const unsubscribe = onSnapshot(collection(db, 'chats'), (snapshot) => {
              setChats(
                snapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
                }))
              );
            });
            return unsubscribe;
          }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat Home',
            headerStyle: { backgroundColor: 'white' },
            headerTitleStyle: { color: 'black' },
            headerTintColor: 'black',

            
            headerLeft: () => (

                
                <View style={{ marginLeft: 20 }}>

                    <Pressable onPress={logout}> 
                        <Avatar
                        onPress={logout}
                        rounded
                        source={{ uri: auth?.currentUser?.photoURL }}
                        />
                    </Pressable>


                </View>
            ),

            headerRight: () => {
                <View
                    style={styles.headerRight}
                >
                    <Pressable>
                        <AntDesign name='camerao' size={24} color='black' />
                    </Pressable>
                    <Pressable activeOpacity={0.5}>
                        <AntDesign name='pencil-square-o' size={24} color='black' />
                      
                    </Pressable>
                </View>

            }
        });
    }, [navigation]);



    function logout () {
        signOut(auth).then(() => {
            navigation.replace('Login');
        });
    }

    function enterChat(id, chatName) {
        navigation.navigate('Chat', {id, chatName});
    }

    function createItem(chat) {
        const {
            id,
            data: { chatName },
        } = chat;

        return (
            <ChatListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
            />
        );
    }
    return (
        <SafeAreaView>
            <ScrollView>{chats.map(createItem)}</ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    headerRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        marginRight: 20,
    },

})