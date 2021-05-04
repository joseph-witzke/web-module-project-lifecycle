import React from 'react'
import axios from 'axios'

class Followers extends React.Component {
    componentDidMount() {
        axios.get('https://api.github.com/users/joseph-witzke/followers')
          .then(res => {
            console.log(res)
            this.setState({
              followers: res.data})
          })
          .catch(err => {
            console.log(err);
          })
      }
    render() {
        return (
            <div>
                <h1>Followers</h1>
                <img src={this.props.followers} alt=""/>
                {/* {this.props.followers.map(item => {
                    return 
                })} */}
            </div>
        )
    }
}

export default Followers
