import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ChatBubble from './Chatbubble';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {

    AsyncStorage.getItem('messages').then((storedMessages) => {
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    });
  }, []);

  const sendMessage = () => {
    const newMessages = [...messages, inputText];
    setMessages(newMessages);
    AsyncStorage.setItem('messages', JSON.stringify(newMessages));
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatBubble message={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default ChatScreen;
