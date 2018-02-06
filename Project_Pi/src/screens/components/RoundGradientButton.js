import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RoundGradientButton = ({
    title,
    titleStyle,
    containerStyle,
    onPress,
    colors = ['white', 'white'],
    start = { x: 0, y: 0 },
    end = { x: 1, y: 0 },
    height = 70
}) => (
        <TouchableOpacity
            onPress={onPress}
        >
            <LinearGradient
                start={start}
                end={end}
                colors={colors}
                style={[
                    styles.defaultContainerStyle,
                    { height, borderRadius: height / 2 },
                    containerStyle
                ]}
            >
                <Text
                    style={[styles.defaultTitleStyle, titleStyle]}
                >
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )

RoundGradientButton.propTypes = {
    title: PropTypes.string.isRequired,
    titleStyle: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.object
    ]).isRequired,
    containerStyle: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.object),
        PropTypes.object
    ]).isRequired,
    onPress: PropTypes.func.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string),
    start: PropTypes.object,
    end: PropTypes.object,
    height: PropTypes.number
}

const styles = {
    defaultContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultTitleStyle: {
        color: 'black',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'transparent'
    }
}

export default RoundGradientButton
