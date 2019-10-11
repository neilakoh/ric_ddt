import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import ChatWindow from './chat_window';

const {width} = Dimensions.get('screen');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ChatWindow />

        <View style={styles.chatBoxWrapper}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  chatBoxWrapper: {
    width,
    height: 60,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'red'
  },
});
