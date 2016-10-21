import React, { Component, PropTypes } from 'react';

export default class AddTODO extends Component {
  constructor(){
    super()
    this.state={
      value: ''
    }
  }
  handleItem = (e) => {
    this.props.onToggle(index)
  }
  render(){
    const { todo } = this.props;
    return (
      <ul>
        {
          todo.map((ele, index) => {
            return(
              <li key={index} onClick={this.handleItem}>ele.text</li>
            )
          })
        }
      </ul>
    )
  }
}
AddTODO.defaultProps = {
  onToggle:() => {}
}
AddTODO.PropTypes = {
  onToggle: PropTypes.func.isrequired,
  todo: PropTypes.array.isrequired
}