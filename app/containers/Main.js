import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Dimensions, StyleSheet, View, Image } from 'react-native'
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'

import { connect } from 'react-redux'
import MapView from 'react-native-maps';

import { globalActionCreators } from '../redux/global'

import {
  NavigationIcon,
  LocationButtonGroup
} from '../components'

const mapStateToProps = (state) => ({
  source: state.global.source,
})

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      markers: [
        { latlng: 
          { 
            latitude: 34.076222, 
            longitude: -118.444465
          }
        }
      ]
    };
  }

  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({initialPosition:position});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({lastPosition:position});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const initialPosition = this.state.initialPosition;
    const lastPosition = this.state.lastPosition;
    const {width: windowWidth, height: windowHeight} = Dimensions.get('window')
    const style = {
      height: windowHeight,
      width: windowWidth,
      zIndex: 0,
    }
    if (initialPosition!='unknown') {
      let position = initialPosition
      if (lastPosition!='unknown')
        position = lastPosition
      console.log(position)
      return (
      <View
        style={styles.main}
      >
        <MapView
          style={style}
          initialRegion={{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.latlng}
            />
          ))}
        </MapView>
      </View>
    )
    }
    return (
      <View></View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    top: 20,
  },
  controlButton: {
    position: 'absolute',
    height: 20,
    width: 20,
    top: 10,
    left: 10,
    zIndex: 10,
  }
})

export default connect(mapStateToProps, globalActionCreators)(Main)
