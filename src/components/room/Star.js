import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';


export default class Star extends React.Component {
  render(){
    return(
      <Text style={[styles.star,{
        color: this.props.disabled ? 'orange' : 'grey',
      }]}>
        ★
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  star: {
    fontSize: 16,
  },
})

Star.defaultProps = {
  disabled: false
}

Star.propTypes = {
  disabled: React.PropTypes.bool,
}
