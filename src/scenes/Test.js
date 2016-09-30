import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Layout from '../configs/Layout';

export default class Test extends React.Component{

  render(){
      return (
        <View style={styles.container}>

        </View>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
