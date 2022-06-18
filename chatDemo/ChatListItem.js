import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { ListItem, Avatar } from '@rneui/base';

import {
  collection,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import firebaseApp from './firebase';


const ChatListItem = ({ id, chatName, enterChat }) => {

    
  return (
    <View>
      <Text>ChatListItem</Text>
    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({})