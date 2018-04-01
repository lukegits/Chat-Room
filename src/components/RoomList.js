import React, { Component } from 'react';


class RoomList extends Component {
 constructor(props) {
   super(props);

      this.roomsRef = this.props.firebase.database().ref('rooms');

      this.state = {
        rooms: []
      };
   }
   createRoom() {
     this.roomsRef.push({
       rooms: this.createRoom.newName
     });
   }
   componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({ rooms: this.state.rooms.concat( room ) })
       });
     }

   render(){
     return (
       <form className="createroom">
         New Chat Room Name:
         <input type="text" defaultValue='Example' onChange={this.createRoom.newName} />
         <input type="submit" onSubmit={this.createRoom} />
       <table className='applistsidebar'>
         <tbody className='listofroomstop'>
          <tr>
             {this.state.rooms.map((rooms, index) =>
              <td className='roomidlist'key={index}>{rooms.name}</td>
            )}
          </tr>
         </tbody>
       </table>
     </form>
      )
    }
  }

export default RoomList;
