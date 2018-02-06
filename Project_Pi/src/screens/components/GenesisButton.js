import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppRegistry, Button, TouchableOpacity, Text, TouchableHighlight,View } from 'react-native';

export default class GenesisButton extends Component {

    render() {
        return (
            <TouchableHighlight underlayColor="#ff5504" activeOpacity={0.8} onPress={this.props.onPress} style={{
                backgroundColor: '#f58025',
                borderRadius: 20,
                paddingTop: 10,
                paddingBottom: 10,
                width: 300,

            }}>
            <View style={{}}>
                <Text style={{
                    color: 'white',
                    fontSize: 15,
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}>{this.props.title}</Text>
                </View>
            </TouchableHighlight >
        );
    }
}
