import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const {width} = Dimensions.get('screen');

class ChatBubble extends Component {
  render() {
    const currentuser = '3no12n31o23n13n432no';
    const { chatInfo: { sender, message, sentAt } } = this.props;
    const renderContainerType = sender === currentuser ? styles.containerSender : styles.containerIncoming;
    const renderBubbleWrapper = sender === currentuser ? styles.senderStyle : styles.incomingMsgStyle;

    return (
      <View style={renderContainerType}>
        <View style={renderBubbleWrapper}>
          <Text testID='chat_user_name'>{sender}</Text>
          <Text testID='chat_user_message'>{message}</Text>
          <Text testID='chat_sent_at'>{sentAt}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSender: {
    width,
    padding: 5,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  containerIncoming: {
    width,
    padding: 5,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  senderStyle: {
    position: 'relative',
    zIndex: 2,
    overflow: 'hidden',
    padding: 5,
    backgroundColor: '#a6ffcb',
    borderRadius: 5,
  },
  incomingMsgStyle: {
    position: 'relative',
    zIndex: 2,
    overflow: 'hidden',
    padding: 5,
    backgroundColor: '#ffe0a6',
    borderRadius: 5,
  },
});

ChatBubble.propTypes = {
  chatInfo: PropTypes.object.isRequired,
}

export default ChatBubble;