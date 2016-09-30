import React from 'react';
import {
  View,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import List from '../components/room/List';
import Layout from '../configs/Layout';
import Backend from '../configs/Backend';
import Loader from '../components/core/Loader';

export default class RoomList extends React.Component{
  state = {
    rooms : [],
    isLoading: true,
  }

  //eviter de faire async dans componentWillMount, plutot le faire dans le componentdidMount
  async persistRoom(room){
    try{
      // await gère les prommesse , rend le code synchrone unnisuement dans cette fonction
      // toujours les faire dans les try catch
      // toujours déclarer la fonction en async
      // awit dit: attend le resultat de cette fonction avant de passer à la suite
      await AsyncStorage.setItem('room', JSON.stringify(room));
    }catch(error){
        // eror saving data
    }
  }

  async getStoredRoom(){
    try{
      const value = await AsyncStorage.getItem('room');
      if(value !== null){
        console.log(value);
        const roomObject = JSON.parse(value);
        console.log(roomObject);
      }
    }catch(error){
        // eror saving data
    }
  }


  render(){
    if (this.state.isLoading) return <Loader/>;

    return(
      <View style={[Layout.container, {marginBottom: 44}]}>
        <List
          rooms={this.state.rooms}
          onPress={(room) => { Actions.room({room}) }}/>
      </View>
    )
  }

  componentWillMount(){
    Backend.getRooms((room) => {
      //this.persistRoom(room);
      this.getStoredRoom();

      this.setState({
        isLoading:false,
        rooms: this.state.rooms.concat(room),
        //rooms: this.state.rooms.push(room)
      });
    });
  }

}
