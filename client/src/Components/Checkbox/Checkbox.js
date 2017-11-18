import React, { Component } from 'react';

import './Checkbox.css';

// var MyForm = React.createClass({
//     save: function(){
//         console.log(this.refs.check_me.value);
//     },

//     render: function(){
//         return <div><h1>MyForm</h1>
//             <div className="checkbox">
//                 <label>
//                     <input type="checkbox" ref="check_me" /> Check me out
//                 </label>
//             </div>
//             <button className="btn btn-default" onClick={this.save}>Submit</button>
//         </div>
//     }
// });


class Checkbox extends Component {
    // state = {isChecked: true}

    // handleCheckboxChange = (event) => {
    //     console.log("checkbox changed!", event);
    //     this.setState({isChecked: event.target.checked});
    // }

    // toggleIsChecked = () => {
    //     console.log("toggling isChecked value!");
    //     this.setState({isChecked: !this.state.isChecked});
    // }

    // handleButtonClick = (event) => {
    //     console.log("button was pressed!", event);
    //     this.toggleIsChecked();
    // }

    // render() {
    //     return (
    //         <div>
    //             <input type="checkbox" onChange={this.handleCheckboxChange} checked={this.state.isChecked} />
    //             <button onClick={this.handleButtonClick}>change checkbox state using this button</button>
    //         </div>
    //     );
    // }

    render() {
        return (
            <div>
                <input type="checkbox" id={this.props.name}
                name={this.props.name} checked={this.props.type} onChange={this.props.onChange}/>
                <label htmlFor={this.props.name}>{this.props.label}</label>
            </div>
        )
    }
}

export default Checkbox;
