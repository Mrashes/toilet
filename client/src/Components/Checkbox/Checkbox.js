import React from 'react';

import './Checkbox.css';

function Checkbox(props) {
    return (
        <div>
            <input type="checkbox" name={props.name} checked={props.type} onChange={props.onChange}/>
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default Checkbox;
