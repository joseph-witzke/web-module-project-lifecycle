import './App.css';
import React from 'react'
import axios from 'axios';


class App extends React.Component {
  state = {
    name: "",
    avatar_url: ""
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/joseph-witzke')
      .then(res => {
        console.log(res)
        this.setState(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Lifecycles</h1>
      </div>
    );
  } 
}

export default App;
