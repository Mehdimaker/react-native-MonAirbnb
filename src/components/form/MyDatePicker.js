import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  DatePickerIOS,
} from 'react-native';

export default class MyDatePicker extends React.Component{

  state = {
    modalVisible:false,
  }
  render(){
    return(
      <View>

        <TouchableOpacity onPress={() => this.setState({modalVisible:true})}>
          <Text>{this.props.date.toString()}</Text>
        </TouchableOpacity>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert('Modal has been closed')}}>

            <View style={styles.modalContainer}>

              <View style={styles.modalInnerContainer}>
                <DatePickerIOS
                  style={styles.datePicker}
                  date={this.props.date}
                  mode="date"
                  onDateChange={(date) => this.props.changeDate(date)}/>
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
