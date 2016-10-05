import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ADDTODO
} from '../constants/actiontype';





// 订单请求信息
export function orderfetch(info) {
    return {
        type: ORDER_REQUEST,
        info
    }
}

export function addTodo(text) {
    return {
      type: ADDTODO,
      text         
    }
}

export function todoList(index) {
  return {
    type: TODOLIST,
    index
  }
}