import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Room from './scenes/Room';
import RoomList from './scenes/RoomList';
import TabIcon from './components/core/TabIcon';
import Profile from './scenes/Profile';

import Layout from './configs/Layout';

export default class App extends Component {

  componentWillMount(){
    if(Platform.OS === 'ios'){
      StatusBar.setBarStyle('light-content');
    }
  }

  render() {
    const TabHome = (<TabIcon name={'md-home'}/>);
    const TabProfile = (<TabIcon name={'md-contact'}/>);
    return (
      <Router>
        <Scene key="root" >
          <Scene  key="tabbar" tabs={true} style={Layout.scene.tabBar} >
              <Scene
                initial
                key="roomList"
                component={RoomList}
                title="MonAirbnb"
                icon={(props)=> <TabIcon {...props} name='md-home'/>}
                navigationBarStyle={Layout.scene.navigationBarStyle}
                titleStyle={Layout.scene.titleStyle}
                leftButtonIconStyle={{tintColor:'white'}}
                />
              <Scene
                key="profile"
                component={Profile}
                title="Profile"
                icon={(props) => <TabIcon {...props} name='md-contact'/>}
                navigationBarStyle={Layout.scene.navigationBarStyle}
                titleStyle={Layout.scene.titleStyle}
                leftButtonIconStyle={{tintColor:'white'}}
                />
          </Scene>
          <Scene
            key="room"
            component={Room}
            title="Room"
            navigationBarStyle={Layout.scene.navigationBarStyle}
            titleStyle={Layout.scene.titleStyle}
            leftButtonIconStyle={{tintColor:'white'}}/>

        </Scene>
      </Router>
    );
  }
}
