import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import Title from './Title'
import Rating from './Rating'
import Avatar from '../user/Avatar'

export default class Headline extends React.Component {

  render () {
    const {title, ratingValue, reviews, user} = this.props

    return (
      <View style={styles.container}>

        <View style={styles.leftContainer}>
          <Title>{title}</Title>
          <Rating
            ratingValue={ratingValue}
            reviews={reviews}
          />
        </View>

        <Avatar avatar={user.avatar} size={'small'} />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 5
  }
})

Headline.defaultProps = {
  title: '',
  ratingValue: 0,
  reviews: 0,
  user: {}
}

Headline.propTypes = {
  title: React.PropTypes.string,
  ratingValue: React.PropTypes.number,
  reviews: React.PropTypes.number,
  user: React.PropTypes.object,
}
