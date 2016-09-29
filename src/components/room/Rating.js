import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Star from './Star.js';

export default class Rating extends React.Component {

  renderStars(){
    const stars = [];
    for (let i = 0; i < 5; i++){
      stars.push(
        <Star key={i} disabled={i < this.props.ratingValue ? true : false}/>
      );
    }
    return stars;
  }

  render () {
    return(
        <View style={styles.rating}>
          {this.renderStars()}

          <Text style={styles.reviewNumber}>{this.props.reviews}</Text>
          <Text>reviews</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  rating:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviewNumber:{
    fontWeight: 'bold',
    marginRight: 3,
    marginLeft: 3,
  }

})

Rating.defaultProps = {
  ratingValue: 0,
  reviews: 0,
}

Rating.propTypes = {
  ratingValue: React.PropTypes.number,
  reviews: React.PropTypes.number,
}
