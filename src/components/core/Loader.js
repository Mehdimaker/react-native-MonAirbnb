import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

export default class Loader extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator
          size={'large'}
        />
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
