import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import addTODO from '../Components/AddTODO';
export default class Pages extends Component {
    constructor() {
        super()
        this.state = {
            name: 1,
            disable: false
        }
    }
    handlleAddTodo = (text) => {
        
    }
    render() {
        return (
            <div>
              <AddTODO onclick={this.handleClick} />
            </div>
        )
    }
}
Pages.defaultProps = {

}
Pages.propTypes = {
    
}
