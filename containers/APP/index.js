import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import addTODO from '../Components/AddTODO';
import  orderaction from '../actions/order';
export default class APP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 1,
            disable: false
        }
    }
    handlleAddTodo = (text) => {
        const { dispatch, orderAction } = this.props;
        orderAction.addTodo(text);
    }
    render() {
        return (
            <div>
              <AddTODO onclick={this.handleClick} />
            </div>
        )
    }
}
APP.mapStateToProps = (state) => {

}
APP.mapProps = {
    orderaction: this.props.order
}
export default connect (mapStateToProps, mapActionstoProps) (APP);