import React, { Component } from 'react';
import '../App.css';


class User extends Component {
 constructor(props) {
   super(props);

<<<<<<< HEAD
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
=======
      this.signIn = this.signIn.bind(this);
      this.signOut = this.signOut.bind(this);

  }

  signOut(){
    this.props.firebase.auth().signOut();
    this.props.setUser('');
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
     this.props.firebase.auth().signInWithPopup( provider ).then((result) => {
       debugger
     var user = result.user;
     this.props.setUser(user);
  })
}
  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {

});
  }
>>>>>>> user


render() {
    return (
<<<<<<< HEAD
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h5>Chat Login</h5>
        <div>
          <button type="chatlogin" onClick={this.signInWithPopup}>Login</button>
        </div>
      </form>
=======
        <div className="signButtons">
         <h4 className='signintext'>Hello, {this.props.displayName}</h4>

          <button type="signIn" onClick={this.signIn}>Sign-in</button>
          <button type="signOut" onClick={this.signOut}>Sign-out</button>

        </div>
>>>>>>> user
    );
  }
}

export default User;
