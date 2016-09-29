import {
  Platform,
} from 'react-native';

// COLOR
const mainColor = 'rgb(255, 55, 84)';
const mainColorOpacity = 'rgba(255, 55, 84, 0.5)';
const secondColor = '#FFF';
const greyColor = '#CCC';
//DIMENSION
const marginDefault = 15;
const navbarHeight = Platform.OS === 'ios' ? 64 : 54;

export default {
  mainColor,
  mainColorOpacity,
  secondColor,
  greyColor,
  navbarHeight,
  marginDefault,
  scene:{
    navigationBarStyle:{
      backgroundColor: mainColor,
      borderBottomColor: 'transparent'
    },
    titleStyle:{
      color: 'white',
      fontWeight: 'bold'
    },
    backButtonTextStyle:{
      color:'white'
    },
    tabBar:{
      backgroundColor: secondColor,
      borderTopWidth: 2,
      borderTopColor: greyColor,
    }
  },
  container: {
    flex: 1,
    paddingTop: navbarHeight,
    backgroundColor: secondColor,
  }
}
