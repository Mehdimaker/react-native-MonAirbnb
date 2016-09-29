import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Gallery from '../components/room/Gallery';
import Description from '../components/room/Description';
import Headline from '../components/room/Headline';
import Map from '../components/room/Map';
import Book from '../components/room/Book';

export default class Room extends React.Component{
  render(){
    const {photos, price, title, ratingValue, reviews, user, description}= this.props.room;
    const {latitude,longitude} = this.props.room.location;
    console.log(this.props.room);
    return(
      <View>
        <Gallery photos={photos} price={price}/>
        <View style={styles.container}>
          <Headline title={title} ratingValue={ratingValue} reviews={reviews} user={user}/>
          <Description description={description}/>
          <Map latitude={latitude} longitude={longitude}/>
          <Book />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    margin: 15,
  }
})
