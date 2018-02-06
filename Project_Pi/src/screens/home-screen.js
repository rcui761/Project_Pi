import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import GenesisButton from './components/GenesisButton';

import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions';

const remote = 'https://static1.squarespace.com/static/53bbb23ee4b0ef294e4f862e/572d6bc42fe131e2fe823454/572d6bcf8a65e2444c0b1be5/1462594515256/Genesis+Energy+images_2.jpg?format=2500w';

class HomeScreen extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        updateTitle: PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.updateTitle('Home Page');
    }

    render() {
        const resizeMode = 'cover';
        return (
            <View style={{ flex: 1 }} >
                <View style={styles.imageView}>
                    <Image
                        style={{ flex: 1, resizeMode }}
                        source={{ uri: remote }}
                    />
                </View>
                <View style={styles.form}>
                    <View style={styles.background}>
                        <Text style={styles.title}>Welcome to join Project Pi</Text>
                        <GenesisButton
                            onPress={() => this.props.navigation.navigate('Check')}
                            title="Check Your Meter" />
                        <Text>{"\n"}</Text> 
                        <GenesisButton
                            onPress={() => this.props.navigation.navigate('Register')}
                            title="Register Your Device" />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = {
    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#db6102",
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    imageView: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    form: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 50,
        paddingRight: 50,
        width: '100%',
       
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

// Helps to connect to the store and get state from redux/reducer
const mapStateToProps = state => ({
    title: state.title,
});

//Helps to connect to the store and fire actions to the reducer 
const mapDisatchToProps = dispatch =>
    bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDisatchToProps)(HomeScreen);