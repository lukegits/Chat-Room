import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: ''
    }
  }

  handleRoomSelection(selectedRoom) {
    this.setState({selectedRoom: selectedRoom})
    console.log(selectedRoom);
  }

  render() {
     const displayMessages = this.state.selectedRoom;
    return (

      <div>
         <h3> Bloc Chat App </h3>
         <aside className="roomList">
          <RoomList firebase={firebase}
            onRoomSelection={(selected) => this.handleRoomSelection(selected)}/>

      <main className="active-chat-room">
           <h2>{this.state.selectedRoom.name}</h2>
           {displayMessages ?
                (<MessageList firebase={firebase}
                  selectedRoom={this.state.selectedRoom.key}
                   />) :

                  (null)
              }
            </main>
        </aside>
      </div>
    );
  }
}

export default App;
