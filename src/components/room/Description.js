import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

export default class Description extends React.Component {
  state = {
    lines: 3,
  }

  toggleLines () {
    let newLines = this.state.lines === 3 ? 0 : 3;
    this.setState({
      lines: newLines
    })
  }

  render(){
    return (
      <Text
        numberOfLines={this.state.lines}
        style={styles.description}
        onPress={() => {
          this.toggleLines();
        }}>
        {this.props.description}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  description:{
    fontSize: 14,
    marginTop: 15
  }
})

Description.defaultProps = {
  description: 'Une description',
}

Description.propTypes = {
  description: React.PropTypes.string,
}
