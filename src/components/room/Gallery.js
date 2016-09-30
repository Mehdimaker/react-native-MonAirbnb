import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Image from 'react-native-image-progress';

export default class Gallery extends React.Component {
  render () {
    //const {width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.photos[1]}}
          style={[styles.photo]}>

          <View style={styles.containerPrice} >
            <Text style={styles.textPrice} >
              {this.props.price}
            </Text>
          </View>

        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
  },
  photo: {
    flex: 1,
  },
  containerPrice:{
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    width: 45,
    height: 30,
    bottom: 20,
    position:'absolute'
  },
  textPrice: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
})
Gallery.defaultProps = {
  //TODO ajouter default image
  photos: [],
  price: '0',
}

Gallery.propTypes = {
  photos: React.PropTypes.array,
  price: React.PropTypes.string,
}
