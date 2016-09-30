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

import Layout from '../configs/Layout';
import Label from '../components/form/Label';
import TextInputWidget from '../components/form/TextInputWidget';
import SignUpStore from '../store/SignUpStore';
import {Provider, observer} from 'mobx-react/native';
import TextWidget from '../components/form/TextWidget';

@observer
export default class SignUp extends React.Component{
  state = {
    name : '',
    gender: 'homme',
    isHost: true,
    date: new Date(),
  }

  render(){
    return(
      <Provider SignUpStore={SignUpStore} >
      {/*en general mettre le provider au dessu du root*/}
        <ScrollView style={styles.container}>

          <TextInputWidget/>
          <TextWidget/>
          
          <Label title='Votre Nom'>
            <TextInput
              style={styles.textInput}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
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
              <Text> is Host</Text>
          </Label>

          <TouchableOpacity onPress={() => {
            alert(JSON.stringify(SignUpStore.getValues()));
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
      </Provider>
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
