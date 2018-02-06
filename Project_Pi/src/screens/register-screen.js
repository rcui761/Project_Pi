import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import PropTypes from 'prop-types';
import InputRow from './components/InputRow';
import GenesisButton from './components/GenesisButton';
import LoadingIndicator from './components/LoadingIndicator';
// import RoundGradientButton from './components/RoundGradientButton';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false };
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        navigation: PropTypes.object.isRequired,
        updateTitle: PropTypes.func.isRequired,
        setCamera: PropTypes.func.isRequired,
        meterNo: PropTypes.string.isRequired,
        deviceNo: PropTypes.string.isRequired,
        cameraType: PropTypes.string.isRequired,
        registrationFromAPI: PropTypes.func.isRequired,
        register: PropTypes.array
    }

    componentWillMount = () => {
        this.props.updateTitle('Register Page');
    }

    render = () => {
        return (
            <View style={styles.container}>
                {this.showLoading()}
                <InputRow
                    label="Meter No: "
                    onChangeText={(meterNo) => this.props.setMeterNo(meterNo)}
                    text={this.props.meterNo}
                    buttonOnPress={() => {
                        this.props.setCameraType('meterNo');
                        this.props.setCamera(true);
                        this.props.navigation.navigate('Camera')
                    }
                    } />
                <InputRow
                    label="Device No: "
                    onChangeText={(deviceNo) => this.props.setDeviceNo(deviceNo)}
                    text={this.props.deviceNo}
                    buttonOnPress={() => {
                        this.props.setCameraType('deviceNo');
                        this.props.setCamera(true);
                        this.props.navigation.navigate('Camera')
                    }
                    } />
                <Text>{"\n"}{"\n"}</Text>
                <GenesisButton
                    onPress={async () => {
                        if (this.props.meterNo == "" || this.props.deviceNo == "") {
                            //alert("Please input both Meter No and Device No.");
                            Alert.alert('',
                                'Please input both Meter No and Device No.',
                                [{ text: "OK" }]
                            )
                        } else {
                            this.setState({ loading: true });

                            await this.props.registrationFromAPI(this.props.meterNo, this.props.deviceNo);
                            if (this.props.register[0] == false) {
                                Alert.alert('',
                                    'Sorry, the meter No and device No are not matched.',
                                    [{ text: "OK" }]
                                )
                            } else {
                                if (this.props.register[1] == false) {
                                    Alert.alert('',
                                        'You have already registered.',
                                        [{ text: "OK" }]
                                    )
                                } else {
                                    Alert.alert('',
                                        'Regeister sucessfully',
                                        [{ text: "OK" }]
                                    )
                                }
                            }
                            this.setState({ loading: false });
                            this.props.setMeterNo("");
                            this.props.setDeviceNo("");
                        }
                    }}
                    title="Register"
                />
            </View>
        )
    }
    showLoading = () => {
        if (this.state.loading == true) {
            return (
                <LoadingIndicator />
            )
        }
    }
}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

// Helps to connect to the store and get state from redux
const mapStateToProps = state => ({
    title: state.title,
    meterNo: state.meterNo,
    deviceNo: state.deviceNo,
    cameraType: state.cameraType,
    register: state.register

});

// Helps to connect to the store and fire actions to the reducer 
const mapDispatchToProps = dispatch =>
    bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
