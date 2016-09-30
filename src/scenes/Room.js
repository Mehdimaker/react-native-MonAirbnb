import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import Layout from '../configs/Layout';

import Gallery from '../components/room/Gallery';
import Description from '../components/room/Description';
import Headline from '../components/room/Headline';
import Map from '../components/room/Map';
import Book from '../components/room/Book';

export default class Room extends React.Component{
  render(){
    const {photos, price, title, ratingValue, reviews, user, description, location}= this.props.room;
    return(
      <ScrollView style={Layout.container}>

        <Gallery
          photos={photos}
          price={price}/>

        <View style={styles.container}>
          <Headline
            title={title}
            ratingValue={ratingValue}
            reviews={reviews}
            user={user}/>
          <Description
            description={description}/>
          <Map
            latitude={location.latitude}
            longitude={location.longitude}/>
          <Book />
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    margin: 15,
  }
})
