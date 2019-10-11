import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class Counter extends Component {
    constructor() {
        super();

        this.state = {
            num: 0,
        };

        this._onIncreamentNum = this._onIncreamentNum.bind(this);
    }

    _onIncreamentNum() {
        const { num } = this.state;

        this.setState({ num: num + 1 });
    }

    render() {
        const { num } = this.state;

        return (
            <View style={styles.container}>
                <Text>{num}</Text>
                <TouchableOpacity onPress={this._onIncreamentNum}>
                    <View>
                        <Text>Increament</Text>
                    </View>
                </TouchableOpacity>
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
});
