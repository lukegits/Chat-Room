import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDRZQ_IcWAw_YV2mYtTnyNFeP4G_ORZllA",
  authDomain: "bloc-chat-33ecf.firebaseapp.com",
  databaseURL: "https://bloc-chat-33ecf.firebaseio.com",
  projectId: "bloc-chat-33ecf",
  storageBucket: "bloc-chat-33ecf.appspot.com",
  messagingSenderId: "72083612873"
};
firebase.initializeApp(config);

class App extends Component {

  render() {
    return (
      <div>
          <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
