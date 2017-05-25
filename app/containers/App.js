
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Games from '../containers/Games'
import * as GamesActions from '../actions/games'

function mapStateToProps(state) {
  return {
    games: state.games.games,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GamesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)