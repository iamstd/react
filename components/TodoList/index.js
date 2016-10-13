import React, { Component, PropTypes } from 'react';

export default class AddTODO extends Component {
  constructor(){
    super()
    this.state={
      value: ''
    }
  }
  handleClick = (e) => {
    const value = this.refs.add.value.trim();
    if (value) {
      this.props.onclick(value);
    };
  }
  render(){
    const { todo } = this.props;
    return (
      <ul>
        {
          todo.map((ele, index) => {
            return(
              <li key={key}>ele.text</li>
            )
          })
        }
      </ul>
    )
  }
}
AddTODO.defaultProps = {
  onclick:() => {}
}
AddTODO.PropTypes = {
  onclick: PropTypes.func.isrequired,
  todo: PropTypes.array.isrequired
}