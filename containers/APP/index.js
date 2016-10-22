import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddTODO from '../../components/AddTODO';
import { bindActionCreators } from 'redux';
import  orderActions from '../../actions/order';
class APP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 1,
            disable: false,
            age: 27
        }
    }
    handlleAddTodo = text => {
        const { dispatch, orderAction } = this.props;
        orderAction.addTodo(text);
    }
    render() {
        return (
            <div>
              <AddTODO onClick={this.handlleAddTodo} />
              <TodoList todo={this.props.todo|| this.state.todo} onToggle={(index) => this.handleToggle(index)}/>
            </div>
        )
    }
};
const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
    orderAction: bindActionCreators(orderActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (APP);