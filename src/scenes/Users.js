import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Layout from '../configs/Layout';
import ListUsers from '../components/users/ListUsers';
import Loader from '../components/core/Loader';

export default class Users extends React.Component{
  state = {
    isLoading : true,
  }

  render(){
    if (this.state.isLoading) return <Loader/>;

    return(
      <View style={Layout.container}>
        <ListUsers users={this.state.users}/>
      </View>
    )
  }

  componentDidMount(){
    // ajouter async plutot dans le did mount 
    // mettre setimeout
    // si au bout de 5 sec pas de reponse afficher alert pas de connexion
    // donc recuperer data su asynstorage
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoading: false,
        users: json
      })
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d35400',
  },

  spinner: {
    marginBottom: 50
  },

  btn: {
    marginTop: 20
  },

  text: {
    color: "white"
  }
});
