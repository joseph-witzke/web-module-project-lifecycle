import './App.css';
import React from 'react'
import axios from 'axios';
//imported components
import Followers from './components/Followers';


class App extends React.Component {
  state = {
    gitProfiles: {},
    followers: ["https://avatars.githubusercontent.com/u/76233443?v=4"]
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/joseph-witzke')
      .then(res => {
        console.log(res)
        this.setState({
          gitProfiles: res.data})
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="App">
        <h1>{this.state.gitProfiles.name}</h1>
        <img src={this.state.gitProfiles.avatar_url} alt="profile pic"/>
        <p>Github Profile: {this.state.gitProfiles.html_url}</p>
        <Followers followers={this.state.followers}/>
      </div>
    );
  } 
}

export default App;
