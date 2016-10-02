import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Picker,
} from 'react-native';

export default class MyPicker extends React.Component{

  state = {
    modalVisible:false,
  }
  render(){
    return(
      <View>

        <TouchableOpacity onPress={() => this.setState({modalVisible:true})}>
          <Text>{this.props.gender}</Text>
        </TouchableOpacity>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert('Modal has been closed')}}>

            <View style={styles.modalContainer}>

              <View style={styles.modalInnerContainer}>
              <Picker
                selectedValue={this.props.gender}
                onValueChange={(gender) => this.props.changeGender(gender)}>
                <Picker.Item label="Homme" value="homme" />
                <Picker.Item label="Femme" value="femme" />
              </Picker>
              </View>

              <TouchableOpacity
                style={{flex:1}}
                onPress={() => this.setState({modalVisible:false})}/>

            </View>

         </Modal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer:{
    flex:1,
    flexDirection: 'column-reverse',
  },
  modalInnerContainer:{
    backgroundColor:'rgba(255, 255, 255, 0.95)',
  }
})
