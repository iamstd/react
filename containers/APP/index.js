import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddTODO from '../../components/AddTODO';
import  orderActions from '../../actions/order';
class APP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 1,
            disable: false
        }
    }
    handlleAddTodo = text => {
        const { dispatch, orderActions } = this.props;
        orderActions.addTodo(text);
    }
    render() {
        return (
            <div>
              <AddTODO onclick={this.handlleAddTodo} />
              <TodoList onToggle={} />
            </div>
        )
    }
};
const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
    orderActions: bindActionCreators(orderActions, dispatch)
});

export default connect (mapStateToProps, mapDispatchToProps) (APP);