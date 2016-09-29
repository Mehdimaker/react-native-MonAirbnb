import React from 'react'
import {
  StyleSheet,
  Text,
} from 'react-native'

export default class Title extends React.Component {
  render () {
    return (
      <Text style={styles.roomName} numberOfLines={1}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  roomName: {
    fontSize: 16,
  },
});

Title.defaultProps = {
  children: 'Appartement',
}

Title.propTypes = {
  children: React.PropTypes.string,
}
