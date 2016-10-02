import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  DatePickerIOS,
  Picker,
  Switch,
  Modal
} from 'react-native';

import {Actions , ActionConst} from 'react-native-router-flux';

import AppStore from '../store/AppStore';

import Layout from '../configs/Layout';
import Label from '../components/form/Label';
import MyTextInput from '../components/form/MyTextInput';
import RenderAppStore from '../components/form/RenderAppStore';



export default class SignUp extends React.Component{
  state = {
    name : '',
    gender: 'homme',
    isHost: true,
    date: new Date(),
  }

  render(){

    return(
        <ScrollView style={styles.container}>

          <Label title='Votre Nom'>
            <MyTextInput
              style={styles.textInput}
              placeholder="Votre Nom"/>
          </Label>

          <Label title='Votre date de naissance'>
            <DatePickerIOS
              style={styles.datePicker}
              date={this.state.date}
              mode="date"
              onDateChange={(date) => this.setState({date})}/>
          </Label>

          <Label title='Etes vous un homme ou une femme ?'>
            <Picker
              style={styles.picker}
              selectedValue={this.state.gender}
              onValueChange={(gender) => this.setState({gender})}>
              <Picker.Item label="Homme" value="homme" />
              <Picker.Item label="Femme" value="femme" />
            </Picker>
          </Label>

          <Label title='Etes vous host ?'>
            <Switch
              value= {this.state.isHost}
              onValueChange={() => this.setState({isHost: !this.state.isHost})}/>
              <Text> is Hoste</Text>
              
          </Label>
          <TouchableOpacity onPress={() => {
            alert(JSON.stringify(AppStore.getValues()));
            //alert(JSON.stringify(this.state));
            Actions.tabbar({type: ActionConst.RESET});
          }}>
            <Text>
              Sign up
            </Text>
          </TouchableOpacity>

          {/*<Modal
           animationType={"slide"}
           transparent={false}
           visible={this.state.modalVisible}
           onRequestClose={() => {alert("Modal has been closed.")}}
           >
           <Text>hey</Text>
           </Modal>*/}
        </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Layout.mainColor,
    paddingTop:40,
  },
  textInput:{
    backgroundColor: Layout.mainColor,
    height:40,
  },
  datePicker:{
  },
  picker:{
  }
})
