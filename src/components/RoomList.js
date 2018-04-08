import React, { Component } from 'react';


class RoomList extends Component {
 constructor(props) {
   super(props);

      this.roomsRef = this.props.firebase.database().ref('rooms');

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        name: '',
        rooms: []
      };
   }

   componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({ rooms: this.state.rooms.concat( room ) })
       });
     }

    handleChange(event){
       this.setState({name: event.target.value})
     }

    handleSubmit(event) {
       event.preventDefault();
         if (this.state.name.length < 4){
           console.log('Room name must be over 4 characters')
         } else {
           const roomsRef = this.props.firebase.database().ref('rooms');
           const room = {
         name: this.state.name
       }
       roomsRef.push(room);
       this.setState({ rooms: this.state.rooms.concat( room ) })

      }
    }

   render(){
     return (
       <form className="createroom" onSubmit={this.handleSubmit}>
         New Chat Room Name:
         <input placeholder="Room Name" type="text" value={this.state.name} onChange={this.handleChange}/>
         <input type="submit" />
       <table className='applistsidebar'>
         <tbody className='listofroomstop'>
          <tr>
             {this.state.rooms.map((room, index) =>
              <td className='roomidlist'key={index} onClick={() => this.props.onRoomSelection(room)}>{room.name}</td>
            )}
          </tr>
         </tbody>
       </table>
     </form>
      )
    }
  }

export default RoomList;
