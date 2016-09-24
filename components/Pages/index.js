import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Pages extends Component {
    constructor() {
        super()
        this.state = {
            name: 1,
            disable: false
        }
    }
    render() {
        return (
            <div>
            this is a react compponent
            </div>
        )
    }
}
Pages.defaultProps = {

}
Pages.propTypes = {
    
}