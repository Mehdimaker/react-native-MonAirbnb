import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Room from './scenes/Room';
import RoomList from './scenes/RoomList';
import TabIcon from './components/core/TabIcon';
import Profile from './scenes/Profile';


export default class App extends Component {
  render() {
    const TabHome = (<TabIcon name={'md-home'}/>);
    const TabProfile = (<TabIcon name={'md-contact'}/>);
    return (
      <Router>
        <Scene key="root" >
          <Scene  key="tabbar" tabs={true} style={{backgroundColor:'white'}} >
              <Scene
                initial
                key="roomList"
                component={RoomList}
                title="MonAirbnb"
                icon={(props)=> <TabIcon {...props} name='md-home'/>}
                navigationBarStyle={{backgroundColor:'white'}}
                />
              <Scene
                key="profile"
                component={Profile}
                title="Profile"
                icon={(props) => <TabIcon {...props} name='md-contact'/>}
                navigationBarStyle={{backgroundColor:'white'}}
                />
          </Scene>
          <Scene key="room" component={Room} title="Room" />

        </Scene>
      </Router>
    );
  }
}
