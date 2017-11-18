import React, { Component } from 'react';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
// https://github.com/kenny-hibino/react-places-autocomplete
import Checkbox from '../../Components/Checkbox'

import './Post.css';

// import API from '../Utils/API'


class PostToilet extends Component {
    state = {
        gendered: false,
        unisex: false,
        geocoords: [],
        address: "",
    }

    //onchange for address
    onChange = (address) => this.setState({ address })

    handleChange = (e) => {
        // console.log(e.target.name);
        this.setState({[e.target.name]: e.target.clicked});
    }

    handleCheckbox = (e) => {
        this.setState({[e.target.name]: e.target.checked});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]) )
        .then(({ lat, lng }) => {
            this.setState({
                geocoords : [lat, lng]
            })
            const object = this.state

            //Post this all state then clear
            console.log(object);
        })
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }   

        return (
        <form>
            <PlacesAutocomplete inputProps={inputProps} required/>
            <div className="postCheckboxFlex">
                <Checkbox 
                    type={this.state.gendered}
                    name='gendered'
                    label='Gendered (Male/Female)'
                    onChange={this.handleCheckbox}
                />
                <Checkbox
                    type={this.state.unisex}
                    name='unisex'
                    label='Unisex'
                    onChange={this.handleCheckbox}
                />
            </div>

            <input type="submit" className="ghost-button" value="add to database" onClick={this.handleSubmit} ></input>
        </form>
        )
    }
}

export default PostToilet;
