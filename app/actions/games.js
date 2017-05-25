import { gamesRef } from '../firebase'

export const ADD_GAME = 'ADD_GAME'
export const ADD_GAME_SUCCESS = 'ADD_GAME_SUCCESS'
export const REMOVE_GAME = 'REMOVE_GAME'
export const REMOVE_GAME_SUCCESSS = 'REMOVE_GAME_SUCCESSS'

export function addGame(game) {
  gamesRef.push(game)
  return {
    type: ADD_GAME
  }
}

export function addGameSuccess(gameData) {
  return {
    type: ADD_GAME_SUCCESS,
    gameData: gameData
  }
}

export function removeGame(id) {
  gamesRef.child(id).remove()
  return {
    type: REMOVE_GAME,
  }
}

export function removeGameSuccess(id) {
  return {
    type: REMOVE_GAME_SUCCESS,
    id: id
  }
}