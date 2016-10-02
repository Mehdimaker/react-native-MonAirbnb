import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar
} from 'react-native';

import { Router, Scene, ActionConst } from 'react-native-router-flux';

import {Provider, observer} from 'mobx-react/native';
import AppStore from './store/AppStore';

import Layout from './configs/Layout';
import Room from './scenes/Room';
import RoomList from './scenes/RoomList';
import TabIcon from './components/core/TabIcon';
import Profile from './scenes/Profile';
import Users from './scenes/Users';
import Test from './scenes/Test';
import SignUp from './scenes/SignUp';

@observer
export default class App extends React.Component {

  componentWillMount(){
    if(Platform.OS === 'ios'){
      StatusBar.setBarStyle('light-content');
    }
  }

  render() {

    return (
      <Provider AppStore={AppStore} >
        <Router>
          <Scene key="root" >
            <Scene key='signup' hideNavBar component={SignUp} title='Sign up' />

            <Scene  key="tabbar" tabs={true} style={Layout.tabBar} type={ActionConst.JUMP}>

                <Scene
                  initial
                  key="roomList"
                  component={RoomList}
                  title="MonAirbnb"
                  icon={(props)=> <TabIcon {...props} name='ios-home'/>}
                  {...Layout.navigationBar}
                  />
                <Scene
                  key="profile"
                  component={Profile}
                  title="Profile"
                  icon={(props) => <TabIcon {...props} name='ios-contact'/>}
                  {...Layout.navigationBar}
                  />
                <Scene
                  key="users"
                  component={Users}
                  title="Users"
                  icon={(props) => <TabIcon {...props} name='ios-contacts'/>}
                  {...Layout.navigationBar}
                  />
                <Scene
                  key="test"
                  component={Test}
                  title="test"
                  icon={() => <Text>Test</Text>}
                  {...Layout.navigationBar}
                  />
            </Scene>

            <Scene
              key="room"
              component={Room}
              title="Room"
              {...Layout.navigationBar}
              leftButtonIconStyle={{tintColor:'white'}}/>

          </Scene>
        </Router>
      </Provider>
    );
  }
}
