'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Button,
    Alert
} from 'react-native';
import Camera from 'react-native-camera';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ActionCreators from '../actions';

class CameraScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        updateTitle: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    }
    // constructor(props) {
    //     super(props);
    //     // this.props.setCamera(true);
    //     // this.state = {
    //     //     showCamera: true,
    //     // }
    //     console.log('re rendering');
    //     console.log(this.props.cameraActive);
    // }
    componentWillMount = () => {
        this.props.updateTitle('Camera Page');
    }


    onBarCodeRead(e) {



        this.props.setCamera(false);

        if (this.props.cameraType == 'meterNo') {
            Alert.alert(
                'Barcode detected',
                "Data: " + e.data,
                [
                    {
                        text: 'Cancel', onPress: () => {
                            this.props.setCamera(true)
                        }
                    },
                    {
                        text: 'OK', onPress: () => {

                            this.props.setCamera(true);
                            this.props.setMeterNo(e.data);

                            this.props.navigation.goBack(null);
                        }
                    },
                ],
                { cancelable: false }
            )
        }


        if (this.props.cameraType == 'deviceNo') {
            Alert.alert(
                'QRcode detected',
                "Data: " + e.data,
                [
                    {
                        text: 'Cancel', onPress: () => {
                            this.props.setCamera(true)
                        }
                    },
                    {
                        text: 'OK', onPress: () => {

                            this.props.setCamera(true);
                            this.props.setDeviceNo(e.data);

                            this.props.navigation.goBack(null);
                        }
                    },
                ],
                { cancelable: false }
            )
        }




    }

    render() {
        if (this.props.cameraActive) {
            return (
                <View style={styles.container}>
                    <Camera
                        // ref={(cam) => {
                        //     this.camera = cam;
                        // }}
                        ref="camera"
                        onBarCodeRead={this.onBarCodeRead.bind(this)}
                        style={styles.preview}
                        aspect={Camera.constants.Aspect.fill}>
                    </Camera>
                </View>
            )
            // return (
            // <View>
            // <Text>Camera</Text>
            // <Button onPress={ () => this.props.setCamera(false)} title="turn off" />
            // </View>)

        }
        else {
            return <View />
        }
    }

}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
}
// Helps to connect to the store and get state from redux/reducer
const mapStateToProps = state => ({
    title: state.title, // home usage is now connected to title reducer
    cameraActive: state.cameraActive,
    meterNo: state.meterNo,
    deviceNo: state.deviceNo,
    cameraType: state.cameraType
});

//Helps to connect to the store and fire actions to the reducer 
const mapDispatchToProps = dispatch =>
    bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);