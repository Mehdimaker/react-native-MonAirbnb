import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Avatar from '../components/user/Avatar';
import Name from '../components/user/Name';
import Biography from '../components/user/Biography';



export default class Profile extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Avatar avatar="https://firebasestorage.googleapis.com/v0/b/leairbnb-da99e.appspot.com/o/images%2Fusers%2Fuser2.jpg?alt=media"/>
        <Name />
        <Biography />
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
