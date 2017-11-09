import  React, { Component } from 'react';
let firebase = require('firebase');

const config = {
  apiKey: "AIzaSyDwDublhQs9lKOLXVJyAO6U36W9JKSAgHE",
  authDomain: "react-auth-4b893.firebaseapp.com",
  databaseURL: "https://react-auth-4b893.firebaseio.com",
  projectId: "react-auth-4b893",
  storageBucket: "react-auth-4b893.appspot.com",
  messagingSenderId: "850939451114"
};
firebase.initializeApp(config);

export default class Authen extends Component {

login(event){
  const email = this.refs.email.value;
  const password = this.refs.password.value;
console.log('email:' + email,'password:' + password);

const auth = firebase.auth();

const promise = auth.signInWithEmailAndPassword(email,password);

promise.then(user => {
  let lout = document.getElementById('logout');
  lout.classList.remove('hide');
});

promise.catch(e => {
  let err = e.message;

console.log(err);

this.setState({err:err});

});

}

signUp(){
  const email = this.refs.email.value;
  const password = this.refs.password.value;
console.log('email:' + email,'password:' + password);

const auth = firebase.auth();

const promise = auth.createUserWithEmailAndPassword(email, password);

promise.then(user =>{

let err = "Welcome " + user.email;
firebase.database().ref('users/' + user.uid).set({
  email: user.email
});
console.log(user);
this.setState({err:err});
});
promise.catch(e =>{
  let err = e.message;
  console.log(err);
  this.setState(({err:err}));
})
}

logOut(){
firebase.auth().signOut();
let lout = document.getElementById('logout');
lout.classList.add('hide');
}

  constructor(props){
    super(props);

    this.state = {
      err: ''

    };
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  render(){
    return(
      <div>
      <input id='email' ref='email' type='email' placeholder='Enter E-Mail'/> <br />
      <input id='pass' ref='password' type='password' placeholder='Enter Password'/> <br />
      <p>{this.state.err}</p>
      <button onClick={this.login}>Log In</button>
      <button onClick={this.signUp}>Sign Up</button>
      <button id='logout' className='hide' onClick={this.logOut}>Log Out</button>
      </div>
    );
  }
}
