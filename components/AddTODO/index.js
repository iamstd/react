import React, { Component, PropTypes } from 'react';

export default class AddTODO extends Component {
    constructor(){
        super()
        this.state={
            value: ''
        }
    }
    handleClick = (e) => {
        this.props.onclick(this.refs.add.value);
    }
    render(){
        return(
            <div>
                <input type='text' ref='add' placeholder="add what you love" />
                <button onclick={this.handleClick}>Add</button>
            </div>
        )
    }
} 
AddTODO.defaultProps = {
    onclick:() => {}
}
AddTODO.PropTypes = {
    onclick: PropTypes.func.isrequired
}