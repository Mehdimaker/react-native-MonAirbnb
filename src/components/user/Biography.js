import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class Biography extends React.Component {
  render(){
    return (
      <Text numberOfLines={0} style={styles.biography}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  biography:{
    fontSize: 14
  }
})

Biography.defaultProps = {
  children: "Une biographie",
}

Biography.propTypes = {
  children: React.PropTypes.string,
}
