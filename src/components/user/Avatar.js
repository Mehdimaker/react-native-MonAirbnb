import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Image from 'react-native-image-progress';

export default class Avatar extends React.Component {
  render () {
    return (
      <View>
        <Image source={{uri: this.props.avatar}} style={styles[this.props.size]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  small: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  large: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})
Avatar.defaultProps = {
  avatar: 'https://firebasestorage.googleapis.com/v0/b/leairbnb-da99e.appspot.com/o/images%2Fusers%2Fuser2.jpg?alt=media',
  size: 'large',
}

Avatar.propTypes = {
  avatar: React.PropTypes.string,
  size: React.PropTypes.string,
}
