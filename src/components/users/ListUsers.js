import React from 'react';
import {
  View,
  StyleSheet,
  ListView,
  Text
} from 'react-native';
import Layout from '../../configs/Layout';


export default class ListUsers extends React.Component{
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.users),
    };

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.users){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.users)
      });
    }
  }

  //declarer les fonctions sans les binder
  renderRow = (rowData,sectionID,rowID) => {
    return(
      <View>
        <Text>Name: {rowData.name}</Text>
        <Text>Username: {rowData.username}</Text>
        <Text>Email: {rowData.email}</Text>
        <Text>Phone: {rowData.phone}</Text>
        <Text>Website: {rowData.website}</Text>
        <Text>Name: {rowData.company.name}</Text>
      </View>

    )
  }

  renderSeparator = (sectionID, rowID) => {
    return(
      <View key={rowID} style={styles.separator}/>
    )
  }

  render (){ 
    return(
      <ListView
        style={styles.scrollView}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
        enableEmptySections={true}
        contentContainerStyle={{paddingTop: Layout.marginDefault}}
      />
    )
  }
}

ListUsers.defaultProps = {
  users: [],
}
ListUsers.propTypes = {
  users: React.PropTypes.array,
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: 300,
    paddingHorizontal:15,
  },
  separator:{
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCC',
    marginVertical: 15,
  }
});
