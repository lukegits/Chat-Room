import React, { Component } from 'react';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import './App.css';


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

    this.setUser = this.setUser.bind(this);
    this.state = {
      selectedRoom: '',
      user: ''
    }
  }
  handleRoomSelection(selectedRoom) {
    this.setState({selectedRoom: selectedRoom})
    console.log(selectedRoom);
  }
  setUser(user){
    debugger;
    this.setState({ user: user});
    // this.setState({ user: {displayName: 'Luke Chavez', email: 'luket.chavez@gmail.com'} });
 }
  render() {
     const displayMessages = this.state.selectedRoom;
     const displayName = this.state.user === null ? 'Guest' : this.state.user.displayName;;
    return (

       <div className='headerMain'>
         <h3 className='title'> **Bloc Chat App** </h3>
          <User className="User"
          firebase={firebase}
           setUser={this.setUser}
            displayName ={displayName}
             />
             <aside className="roomList">
              <RoomList firebase={firebase}
              onRoomSelection={(selected) => this.handleRoomSelection(selected)}/>

               <main className="activeroom">
                <h2>{this.state.selectedRoom.name}</h2>
               {displayMessages ? (<MessageList firebase={firebase} selectedRoom={this.state.selectedRoom.key} user={this.state.user.displayName} />) : (null)
              }
            </main>
        </aside>
      </div>
    );
  }
}

export default App;
