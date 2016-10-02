import React from 'react';
import {
  View,
  TextInput,
  Text,
} from 'react-native';
import {inject, observer} from 'mobx-react/native';

@inject('AppStore') @observer
export default class RenderAppStore extends React.Component{
  render(){
    return (
      <Text>
      Your Name : {this.props.AppStore.getName()}
      </Text>
    )
  }
}

RenderAppStore.wrappedComponent.defaultProps = {

}
