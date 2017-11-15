import React, { Component } from 'react';
import './Post.css';

// import API from '../Utils/API'


class PostToilet extends Component {
    state = {
        toilet: {
            name: "",
        }
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state.toilet.name)
      }
    
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //       oldtag: this.state.tag,
    //         tag: '',
    //     });
    
    // }

    render() {
        return (
        <form>
            <input type="text" name="toilet.name" className="ghost-input" placeholder="Name"  onChange={this.handleChange} value={this.state.toilet.name} required></input>
            <input type="submit" className="ghost-button" value="Get Images"></input>
        </form>
        )
    }
}

export default PostToilet;
