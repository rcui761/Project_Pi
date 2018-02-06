import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppRegistry, TextInput, Text, View, TouchableOpacity } from 'react-native';

export default class InputRow extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View style={styles.row}>
        <Text>{this.props.label}</Text>

        <TextInput
          width={180}
          keyboardType="numeric"
          underlineColorAndroid="#f58025"
          maxLength={15}
          onChangeText={this.props.onChangeText}
          value={this.props.text} />

        <TouchableOpacity onPress={this.props.buttonOnPress}>
          <Icon name="camera" size={30} color='#f58025' />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}


