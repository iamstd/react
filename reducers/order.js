import order from '../actions/order';

var initialState = {
    name: 'lee',
    age: 24
}
function addTODO(state = initialState, action) {
    switch (action.type) {
        case addTODO:
        return action.text
    }
}
function todoList(state = initialState, action) {
    switch(action.type){
        case todoList:
        return action.index
    }
}