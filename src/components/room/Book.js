import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

export default class Book extends React.Component {

  render(){
    return(
      <TouchableHighlight
        style={styles.button}
        onPress={() => console.log('test')}
        underlayColor={'rgba(254, 145,0, 0.6)'}
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
    backgroundColor: 'rgb(254, 145, 0)',
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
