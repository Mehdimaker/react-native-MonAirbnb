import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Picker,
  Switch,
  Modal
} from 'react-native';

import {Actions , ActionConst} from 'react-native-router-flux';

import AppStore from '../store/AppStore';

import Layout from '../configs/Layout';
import Label from '../components/form/Label';
import MyTextInputStored from '../components/form/MyTextInputStored';
import MyDatePicker from '../components/form/MyDatePicker';
import MyPicker from '../components/form/MyPicker';



export default class SignUp extends React.Component{
  state = {
    name : '',
    gender: 'homme',
    isHost: true,
    date: new Date(),
  }

  changeDate = (date) => {
    this.setState({date})
  }

  changeGender = (gender) => {
    this.setState({gender})
  }

  render(){

    return(

      <ScrollView style={styles.container}>
        <View style={{marginBottom:20,alignItems:'center'}}>
          <Text style={{color:'white',fontWeight:'bold',fontSize:40}}>
          MonAirbnb
          </Text>
        </View>

        <Label title='Votre Nom'>
          <MyTextInputStored
            style={styles.textInput}
            placeholder="Votre Nom"/>
        </Label>

        <Label title='Votre date de naissance'>
          <MyDatePicker
            date={this.state.date}
            changeDate={this.changeDate}/>
        </Label>

        <Label title='Etes vous un homme ou une femme ?'>
          <MyPicker
            gender={this.state.gender}
            changeGender={this.changeGender}/>
        </Label>

        <Label title='Etes vous host ?'>
          <Switch
            value= {this.state.isHost}
            onValueChange={() => this.setState({isHost: !this.state.isHost})}/>
            <Text> is Hoste</Text>

        </Label>

        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => {
            alert(JSON.stringify(AppStore.getValues()));
            //alert(JSON.stringify(this.state));
            Actions.tabbar({type: ActionConst.RESET});
          }}>

          <Text style={{color:'white',fontWeight:'bold',fontSize:24}}>
            Sign up
          </Text>

        </TouchableOpacity>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Layout.mainColor,
    padding:15,
    paddingTop:40,
  },
  textInput:{
    backgroundColor: Layout.mainColor,
    height:40,
  },
  buttonSubmit:{
    flex:1,
    backgroundColor:'grey',
    height:50,
    justifyContent:'center',
    alignItems: 'center',


  }
})
