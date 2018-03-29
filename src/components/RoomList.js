import React, { Component } from 'react';


class RoomList extends Component {
 constructor(props) {
   super(props);

    this.roomsRef = this.props.firebase.database().ref('rooms');

    this.state = {
        rooms: []
      };
   }

   render(){
     return (
       <table className='applistsidebar'>
         <tbody className='listofroomstop'>
          <tr>
             {this.state.rooms.map((rooms, index) =>
              <td className='roomidlist'key={index}>{rooms.name}</td>
            )}
          </tr>
         </tbody>
       </table>
     )
   }

  componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
      });
    }
  }

export default RoomList;
