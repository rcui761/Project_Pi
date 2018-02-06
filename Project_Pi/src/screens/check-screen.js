import React, { Component } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import PropTypes from 'prop-types';
import InputRow from './components/InputRow';
import GenesisButton from './components/GenesisButton';
import LoadingIndicator from './components/LoadingIndicator';
// import RoundGradientButton from './components/RoundGradientButton';

class CheckScreen extends Component {
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
        cameraType: PropTypes.string.isRequired,
        check: PropTypes.bool,
        checkFromAPI: PropTypes.func.isRequired
    }

    componentWillMount = () => {
        this.props.updateTitle('Check Page');
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
                        this.props.navigation.navigate('Camera');
                    }}
                />
                <Text>{"\n"}{"\n"}</Text>
                <GenesisButton
                    title="Check"
                    onPress={async () => {
                        if (this.props.meterNo == "") {
                            Alert.alert('',
                                'Please input your Meter No.',
                                [{ text: "OK" }]
                            )
                        } else {
                            // this.setState(previousState => {
                            //     return { loading: !previousState.loading};
                            //   });
                            this.setState({ loading: true });

                            await this.props.checkFromAPI(this.props.meterNo);
                            // console.log("this is the check value:" + this.props.check);
                            if (this.props.check) {
                                Alert.alert('',
                                    'You can register your meter with Pi product.',
                                    [{ text: "OK" }]
                                )
                            } else {
                                Alert.alert('',
                                    'Your meter is not an advanced meter',
                                    [{ text: "OK" }]
                                )
                            }
                            this.setState({ loading: false });
                            this.props.setMeterNo("");
                        }
                    }
                    }

                />
            </View>)
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
const mapStateToProps = state => ({
    title: state.title,
    meterNo: state.meterNo,
    cameraType: state.cameraType,
    check: state.check

});


const mapDispatchToProps = dispatch =>
    bindActionCreators(ActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CheckScreen);