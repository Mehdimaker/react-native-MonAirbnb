import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class Name extends React.Component {
  render () {
    return (
      <Text numberOfLines={1} style={styles.userName}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  userName: {
    fontSize: 20,
  }
})

Name.defaultProps = {
  children: 'Nom d\'utilisateur',
}

Name.propTypes = {
  children: React.PropTypes.string,
}
