import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Row from "./Row";

export default class ListScrollView extends React.Component{

  renderRows(){
    return this.props.rooms.map((room, index)=>{
      return(
        <Row key={index} {...room}/>
      )
    })
  }

  render(){
    return(
      <ScrollView
         style={styles.scrollView}>

               {this.renderRows()}
      </ScrollView>
    )
  }
}


ListScrollView.defaultProps = {
  rooms: [],
}
ListScrollView.propTypes = {
  rooms: React.PropTypes.array,
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: 300,
    paddingHorizontal:15,
  }
});
