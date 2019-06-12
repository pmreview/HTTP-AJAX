import React from 'react';
import './App.css';

import axios from 'axios';
import { Agent } from 'https';


import List from './components/List/List';
import FriendForm from './components/FriendForm/FriendForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: null,
      email: "",
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err)
      })
  }

  addFriend = e => {
    e.preventDefault();

    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    this.setState({
      friends: [...this.state.friends, newFriend],
      name: "",
      age: null,
      email: "",
    })
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return <List key={friend.id} friend={friend}/>
        })}

        <FriendForm
          addFriend={this.addFriend}
          handleChanges={this.handleChanges}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        />
      </div>
    )
  }
}

export default App;
