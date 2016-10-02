import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Layout from '../../configs/Layout';

export default class Label extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        {this.props.children}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom:5
  },
  text:{
    color: Layout.mainColor,
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom:5
  }
})
