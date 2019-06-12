import React from 'react';
import './App.css';

import axios from 'axios';

import List from './components/List/List';
import FriendForm from './components/FriendForm/FriendForm'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      id: "",
      name: "",
      age: "",
      email: "",
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err)
      })
  }

  addFriend = e => {
    e.preventDefault();

    const newFriend = {
      id: this.state.friends.length + 1,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    this.setState({
      friends: [...this.state.friends, newFriend],
      id: "",
      name: "",
      age: "",
      email: "",
    })
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  selectFriend = id => {
    const getFriend = this.state.friends.filter(friend => friend.id === id)[0];
    this.setState({
      id: getFriend.id,
      name: getFriend.name,
      age: getFriend.age,
      email: getFriend.email,
    })
  }

  updateFriend = e => {
    e.preventDefault();

    const friendData = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }

    const updatedFriends = [...this.state.friends]
    const index = this.state.friends.findIndex(friend => friend.id === this.state.id);
    updatedFriends[index] = friendData;
    this.setState({
      friends: updatedFriends
    })
  }

  deleteFriend = e => {
    e.preventDefault();

    let updatedFriends = [...this.state.friends]
    const index = this.state.friends.findIndex(friend => friend.id === this.state.id);
    updatedFriends.splice([index], 1)
    this.setState({
      friends: updatedFriends
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return <List
                    key={friend.id}
                    friend={friend}
                    selectFriend={this.selectFriend}
                  />
        })}

        <FriendForm
          addFriend={this.addFriend}
          handleChanges={this.handleChanges}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          updateFriend={this.updateFriend}
          deleteFriend={this.deleteFriend}
        />
      </div>
    )
  }
}

export default App;
