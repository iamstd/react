import order from '../actions/order';

function todoList (state = [{text:'react.js', index: 2}], action) {
  switch(action.type){
    case todoList:
    return action.index
  }
}

export default todoList;