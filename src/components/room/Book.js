import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

import Layout from '../../configs/Layout';

export default class Book extends React.Component {

  render(){
    return(
      <TouchableHighlight
        style={styles.button}
        onPress={() => console.log('test')}
        underlayColor={Layout.mainColorOpacity}
        >
          <Text style={styles.textButton}>
            Book
          </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: Layout.mainColor,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
  }
});
