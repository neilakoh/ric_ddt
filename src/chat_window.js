import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import ChatBubble from './chat_bubble';

const {width} = Dimensions.get('screen');

export default class ChatWWindow extends Component {
  render() {
    const messages = [
      {id: '1', message: 'hi', sender: '3no12n31o23n13n432no', sentAt: '10/20/2020'},
      {id: '2', message: 'hello', sender: '434jnkj55b2k3b2kbk5b4', sentAt: '10/20/2020'},
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={messages}
          inverted={true}
          renderItem={({ item }) => (
            <ChatBubble chatInfo={item} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
});
