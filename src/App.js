import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar
} from 'react-native';

import { Router, Scene, ActionConst } from 'react-native-router-flux';

import Layout from './configs/Layout';
import Room from './scenes/Room';
import RoomList from './scenes/RoomList';
import TabIcon from './components/core/TabIcon';
import Profile from './scenes/Profile';
import Users from './scenes/Users';
import Test from './scenes/Test';
import SignUp from './scenes/SignUp';


export default class App extends React.Component {

  componentWillMount(){
    if(Platform.OS === 'ios'){
      StatusBar.setBarStyle('light-content');
    }
  }

  render() {

    return (
      <Router>
        <Scene key="root" >
          <Scene key='signup' hideNavBar component={SignUp} title='Sign up' />
          <Scene  key="tabbar" tabs={true} style={Layout.scene.tabBar} type={ActionConst.JUMP}>

              {/*possibilité de : {...Layout.navigationBar} sans toute les scenes  */}
              <Scene
                initial
                key="roomList"
                component={RoomList}
                title="MonAirbnb"
                icon={(props)=> <TabIcon {...props} name='ios-home'/>}
                navigationBarStyle={Layout.scene.navigationBarStyle}
                titleStyle={Layout.scene.titleStyle}

                />
              <Scene
                key="profile"
                component={Profile}
                title="Profile"
                icon={(props) => <TabIcon {...props} name='ios-contact'/>}
                navigationBarStyle={Layout.scene.navigationBarStyle}
                titleStyle={Layout.scene.titleStyle}
                />
              <Scene
                key="users"
                component={Users}
                title="Users"
                icon={(props) => <TabIcon {...props} name='ios-contacts'/>}
                navigationBarStyle={Layout.scene.navigationBarStyle}
                titleStyle={Layout.scene.titleStyle}
                />
                <Scene
                  key="test"
                  component={Test}
                  title="test"
                  icon={() => <Text>Test</Text>}
                  navigationBarStyle={Layout.scene.navigationBarStyle}
                  titleStyle={Layout.scene.titleStyle}
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
