import React, { Component } from 'react';
import {  Text, View, ActivityIndicator } from 'react-native';

export default class LoadingIndicator extends Component {
    render(){
        return(
            <View style={{
                zIndex: 10, backgroundColor: 'rgba(128, 128, 128, 0.5)', position: 'absolute', width: '100%', height: '100%'
            }}>
                <ActivityIndicator size="large" color="#f58025"
                    style={{
                        display: 'flex',
                        flex: 1
                    }} />
            </View>
        )
    }
}