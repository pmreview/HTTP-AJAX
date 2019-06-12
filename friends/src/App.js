import React from 'react';
import './App.css';

import axios from 'axios';

import List from './components/List/List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
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

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => {
          return <List key={friend.id} friend={friend}/>
        })}
      </div>
    )
  }
}

export default App;
