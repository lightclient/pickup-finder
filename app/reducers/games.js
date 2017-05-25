import {
  ADD_GAME,
  REMOVE_GAME,
  ADD_GAME_SUCCESS,
  REMOVE_GAME_SUCCESS,
} from '../actions/games'

const initialState = {
  games: [],
}

export default function reducer(state = initialState, action) {
  let list

  switch (action.type) {

    case ADD_GAME_SUCCESS:
    list = state.onlineList.concat([action.gameData]).sort((a, b) => b.time - a.time)
      return {
        ...state,
        games: list,
      }

    case REMOVE_GAME_SUCCESS:
      list = state.games.slice(0)
      const index = list.map(i => i.id).indexOf(action.id)
      list.splice(index, 1)
      return {
        ...state,
        games: list,
      }

    default:
      return state
  }
}

