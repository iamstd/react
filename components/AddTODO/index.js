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
    } else {
      alert('it is valid');
    };
  }
  render(){
    return(
      <div>
        <input type="text"/>
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