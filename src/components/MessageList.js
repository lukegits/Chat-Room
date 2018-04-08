import React, { Component } from 'react';



class MessageList extends Component {
 constructor(props) {
   super(props);

        this.messagesRef = this.props.firebase.database().ref('messages');
        this.createMessage= this.createMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
          messages: [],
          newMessage: '',
          content:'',
          sentAt:'',
          roomId:''
        };
      }
      componentDidMount() {
      this.messagesRef.on('child_added', snapshot => {
        const message = snapshot.val();
        message.key = snapshot.key;
        this.setState({ messages: this.state.messages.concat( message ) })
       });
      }
      handleChange(event){
         this.setState({
          content: event.target.value,
          sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
          roomId: this.props.selectedRoom
     })
       }
      handleSubmit(event) {
         event.preventDefault();
        }
      createMessage(event) {
           event.preventDefault();
            this.messagesRef.push({
             sentAt: this.state.sentAt,
             roomId: this.state.roomId,
             content: this.state.content
          });
        }
    render() {
      console.log(this.state.roomId);
      const selectedRoom = this.props.selectedRoom;
      const messageList = this.state.messages

          .filter(message => message.roomId === selectedRoom)
          .map(message => {
          return <li className="current-chat-message" key={message.key}>  {message.content} </li>
          })
          return(
            <div className="messageschat">
              <ul>{messageList} </ul>
              <form className="messageform" onSubmit={this.handleSubmit}>
                <input type ="text"  name="message" placeholder="New Message" value={this.state.content} onChange={this.handleChange}/>
                <button type="submit" onClick={this.createMessage}>Send</button>
                </form>

            </div>
        );
      }
    }
export default MessageList;
