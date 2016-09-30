import React from 'react';
import {
  View,
  TextInput,
  Text,
} from 'react-native';
import {inject, observer} from 'mobx-react/native';

@inject('SignUpStore') @observer
export default class TextInputWidget extends React.Component{
  render() {
    return (
      <TextInput
        onChangeText={(text)=>{this.props.SignUpStore.setName(text)}}
        value={this.props.SignUpStore.getName()}
        style={{
          height:30,
          backgroundColor: '#CCC',
        }}
      />
    )
  }
}

TextInputWidget.wrappedComponent.defaultProps = {}
