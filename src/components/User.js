import React, { Component } from 'react';


class User extends Component {
 constructor(props) {
   super(props);

        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);

        this.state = {
          username: ''
        }
    }
    usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
    }
    usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
    }
    signInWithPopup(){
      const provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.firebase.auth().signInWithPopup( provider );

    }


render() {
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h5>Chat Login</h5>
        <div>
          <button type="chatlogin" onClick={this.signInWithPopup}>Login</button>
        </div>
      </form>
    );
  }
}

export default User;
