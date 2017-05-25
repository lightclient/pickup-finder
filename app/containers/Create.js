import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity, Dimensions, StyleSheet, View, Image } from 'react-native'
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GamesActions from '../actions/games'

class Create extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Create</Text>
        
      </View>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GamesActions, dispatch)
}

export default connect(mapDispatchToProps)(Games)
