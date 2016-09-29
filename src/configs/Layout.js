import {
  Platform
} from 'react-native';


const mainColor = '#FF3754';
const backgroundColor = '#FFFFFF';


const screen = {
  flex: 1,
  paddingTop: Platform.Os === 'ios' ? 64 : 54,
  backgroundColor: backgroundColor,
}


export default {
  mainColor: mainColor,
  tabContainer: {
    ...screen,
    marginBottom: 44,
  }
}
