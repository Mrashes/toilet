import React, { Component } from 'react';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
// https://github.com/kenny-hibino/react-places-autocomplete

import './Post.css';

// import API from '../Utils/API'


class PostToilet extends Component {
    state = {
        toilet: {
            name: "",
        },
        address: ''
    }

    onChange = (address) => this.setState({ address })

    handleChange = (e) => {
        this.setState({ toilet: {[e.target.name]: e.target.value}
        });
      }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // this.setState({
        //   oldtag: this.state.tag,
        //     tag: '',
        // });
        geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) => console.log('Successfully got latitude and longitude', { lat, lng }))
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }   

        return (
        <form>
            <input type="text" name="name" placeholder="Name"  onChange={this.handleChange} value={this.state.toilet.name} required></input>
            <PlacesAutocomplete inputProps={inputProps} required/>
            <input type="submit" className="ghost-button" value="add to database" onClick={this.handleSubmit} ></input>
        </form>
        )
    }
}

export default PostToilet;
