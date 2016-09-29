import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TabIcon extends React.Component{
  render(){
    const {color, name, selected} = this.props;
    return(
      <Icon name={this.props.name} size={27} color={selected? color : '#BBBBBB'} />
    )
  }
}

TabIcon.defaultProps = {
  name: 'md-home',
}
TabIcon.propTypes = {
  name: React.PropTypes.string,
}
