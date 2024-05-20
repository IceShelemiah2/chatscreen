import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatScreen from './Chatscreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ChatScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
