import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  container_: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#e00',
    borderRadius: 10,
  },
});

export default ChatBubble;
