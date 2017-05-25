import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { connect } from 'react-redux'

import Games from './Games'
import Create from './Create'

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key={'root'}>
          <Scene initial key={'games'} component={Games} title={'Games'} />
          <Scene key={'newGame'} component={Create} title={'Create'}/>
        </Scene>
      </Router>
    )
  }
}

export default connect()(AppRouter)
