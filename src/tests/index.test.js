import React from 'react';
import { TextInput } from 'react-native';
import {mount, shallow, render} from 'enzyme';

import MainChatPage from '../index';
import ChatWindow from '../chat_window';
import ChatBox from '../chat_box';
import SendButton from '../send_button';
import ChatBubble from '../chat_bubble';
// import UserAvatar from '../user_avatar';

describe('Index Page', () => {
    describe('Rendering components', () => {
        const chatComponent = shallow(<MainChatPage />);

        it('should render chat window', () => {
            expect(chatComponent.find(ChatWindow).length).toEqual(1);
        });

        it('should render chat box', () => {
            expect(chatComponent.find(ChatBox).length).toEqual(1);
        });

        it('should render send chat button', () => {
            expect(chatComponent.find(SendButton).length).toEqual(1);
        });

        // it('should render user avatar', () => {
        //     expect(chatComponent.find(UserAvatar).length).toEqual(1);
        // });
    });

    describe('Test Chat Window Component', () => {
        const messages = [
            {id: '1', message: 'hi', sender: '3no12n31o23n13n432no', sentAt: new Date()},
            {id: '2', message: 'hello', sender: '434jnkj55b2k3b2kbk5b4', sentAt: new Date()},
        ];
        const chatWindowComponent = shallow(<ChatWindow messages={messages} />);
        const chatWindowInstace = chatWindowComponent.instance();

        it('should check message prop', () => {
            expect(Array.isArray(chatWindowInstace.props.messages)).toBe(true);
        });

        it('should render chat bubble', () => {
            expect(chatWindowComponent.find(ChatBubble).length).toEqual(1);
        });
    });

    describe('Test Chat Bubble', () => {
        const chatInfo = {id: '1', message: 'hi', sender: '3no12n31o23n13n432no', sentAt: new Date()};
        const chatBubbleComponent = shallow(<ChatBubble chatInfo={chatInfo} />);
        const chatBubbleInstance = chatBubbleComponent.instance();

        it('should check chatinfo props datatype', () => {
            expect(chatBubbleInstance.props.chatInfo instanceof Object).toBe(true);
        });

        it('should render the name of the user who sends the message', () => {
            expect(chatBubbleComponent.findWhere((node) => node.prop('testID') === 'chat_user_name')).toHaveLength(1);
        });

        it('should render the message of the user', () => {
            expect(chatBubbleComponent.findWhere((node) => node.prop('testID') === 'chat_user_message')).toHaveLength(1);
        });

        it('should render the date when the message was sent', () => {
            expect(chatBubbleComponent.findWhere((node) => node.prop('testID') === 'chat_sent_at')).toHaveLength(1);
        });
    });

    describe('Test Chat Box', () => {
        const _onSendMessage = jest.fn();

        const chatBoxComponent = shallow(<ChatBox />);
        const SendButtonComponent = shallow(<SendButton onPress={_onSendMessage} />);

        const chatBoxComponentInstance = chatBoxComponent.instance();
        const sendButtonInstance = SendButtonComponent.instance();

        it('should render a textbox', () =>{
            expect(chatBoxComponent.find(TextInput)).toHaveLength(1);
        });
        it('should hide keyboard when textbox is unblur', () => {
            const Keyboard = {
                dismiss: jest.fn(),
            };
            const _onBlurChatBox = jest.fn(() => Keyboard.dismiss());
            const textInputComponent = shallow(<TextInput onBlur={_onBlurChatBox} />);
            const textInputInstance = textInputComponent.instance();

            textInputInstance.props.onBlur();

            expect(_onBlurChatBox).toHaveBeenCalled();
            expect(_onBlurChatBox).toHaveBeenCalledTimes(1);

            expect(Keyboard.dismiss).toHaveBeenCalled();
            expect(Keyboard.dismiss).toHaveBeenCalledTimes(1);
        });
        it('should clear when send button is clicked', () => {
            sendButtonInstance.prop._onSendMessage();
            expect(_onSendMessage).toHaveBeenCalled();
            expect(_onSendMessage).toHaveBeenCalledTimes(1);
            // WRTITE A TEST TO CLEAR TEXT INPUT 
        });
    });

    describe('Test Send Button', () => {
        it('should render send message button', () => {

        });
        it('should call sendMessage event onPress', () => {

        });
    });

    describe('Test Avatar icon', () => {
        it('should render avatar component', () => {

        });
        it('should render default avatar if no icon added', () => {

        });
        it('should render proper icon if icon selected', () => {

        });
    });

});