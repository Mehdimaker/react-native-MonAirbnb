import React from 'react';
import {
  View,
  TextInput,
  Text,
} from 'react-native';
import {inject, observer} from 'mobx-react/native';

@inject('AppStore') @observer
export default class MyTextInputStored extends React.Component{
  render() {
    return (
      <TextInput
        onChangeText={(text)=>{this.props.AppStore.setName(text)}}
        value={this.props.AppStore.getName()}
        style={this.props.style}
        placeholder={this.props.placeholder}
      />
    )
  }
}

MyTextInputStored.wrappedComponent.defaultProps = {}
