import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Gallery from "./Gallery";
import Headline from "./Headline";

export default class Row extends React.Component {
  render () {
    const {title, ratingValue, reviews, user, photos, price} = this.props;

    return (
      <View>
        <Gallery photos={photos} price={price} />
        <View style={styles.row}>
          <Headline
            title={title}
            ratingValue={ratingValue}
            reviews={reviews}
            user={user}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row:{
    paddingTop: 10,
  }
})

Row.defaultProps = {
  title: "Un titre",
  ratingValue: 3,
  reviews: 19,
  user: "Mehdi",
  photos: "une photos",
  price: "un prix"
}

Row.propTypes = {
  title: React.PropTypes.string,
  ratingValue: React.PropTypes.number,
  reviews: React.PropTypes.number,
  user: React.PropTypes.object,
  photos: React.PropTypes.array,
  price: React.PropTypes.string,
}
