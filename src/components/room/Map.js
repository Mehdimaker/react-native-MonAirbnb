import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Linking,
  Platform,
} from 'react-native';

import MapView from 'react-native-maps';

const LAT_DELTA = 0.0420;
const LON_DELTA = 0.0420;

export default class Map extends React.Component{

  render(){
    const {latitude,longitude} = this.props;
    const {width} = Dimensions.get('window');
    const height = (width * 9) / 16; // 16/9ème !

    return (
      <MapView
        initialRegion = {{
          latitude,
          longitude,
          latitudeDelta: LAT_DELTA,
          longitudeDelta: LON_DELTA,
        }}
        scrollEnabled={false}
        rotateEnabled={false}
        zoomEnabled={false}
        pitchEnabled={false}
        style = {[styles.map]}

        onPress ={()=> {
          if (Platform.OS === 'ios'){
            Linking.openURL(`http://maps.apple.com/?ll=${latitude},${longitude}`);
          }else {
            Linking.openURL(`http://maps.google.com/maps?q=${latitude},${longitude}`);
          }
        }}>

        <MapView.Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title={'title'}
          description={'description'}/>
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    height: 200,
    marginVertical: 15
  }
})

Map.defaultProps = {
  latitude: 0,
  longitude: 0,
}

Map.propTypes = {
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number,
}
