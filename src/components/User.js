import React, { Component } from 'react';
import '../App.css';


class User extends Component {
 constructor(props) {
   super(props);

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


render() {
    return (
        <div className="signButtons">
         <h4 className='signintext'>Hello, {this.props.displayName}</h4>

          <button type="signIn" onClick={this.signIn}>Sign-in</button>
          <button type="signOut" onClick={this.signOut}>Sign-out</button>

        </div>
    );
  }
}

export default User;
