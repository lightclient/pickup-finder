import { initializeApp } from 'firebase'
import { addGameSuccess, removeGameSuccess } from './actions/games'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDK9Bpn_x_buSPVahLtpAkpon09qcQbeZc",
  authDomain: "pickup-finder.firebaseapp.com",
  databaseURL: "https://pickup-finder.firebaseio.com",
  projectId: "pickup-finder",
  storageBucket: "pickup-finder.appspot.com",
  messagingSenderId: "418889323507"
})
export const gamesRef = firebaseApp.database().ref('games')
export const userRef = firebaseApp.database().ref('users')

export function syncFirebase(store) {
  gamesRef.on('child_added', (snapshot) => {
    store.dispatch(addGameSuccess(snapshot.val()))
  })

  gamesRef.on('child_removed', (snapshot) => {
    store.dispatch(removeGameSuccess(snapshot.val().id))
  })
}
