import React from 'react';
import {
  View,
  TextInput,
  Text,
} from 'react-native';
import {inject, observer} from 'mobx-react/native';
//import SignUpStore from '../../store/SignUpStore';

@inject('SignUpStore') @observer
export default class TextWidget extends React.Component{
  render(){
    return (
      <Text>
      {this.props.SignUpStore.getName()}
      </Text>
    )
  }
}

TextWidget.wrappedComponent.defaultProps = {

}
