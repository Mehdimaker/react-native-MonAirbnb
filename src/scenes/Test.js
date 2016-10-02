import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Layout from '../configs/Layout';
import RenderAppStore from '../components/form/RenderAppStore';
import ErrorModal from '../components/core/ErrorModal';

export default class Test extends React.Component{

  state = {
    showModal : true,
  }

  render(){

      return (
        <View style={styles.container}>
          <ErrorModal showModal={this.state.showModal}/>
          <TouchableOpacity
            onPress={()=>this.setState({showErrorModal:true})}>
            <Text>Show Modal</Text>
          </TouchableOpacity>
          <RenderAppStore/>

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
