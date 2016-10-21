import React from 'react';
import { render } from 'react-dom';
import { createstore } from 'redux';
import { Provider, connect } from 'react-redux';

import App from '../containers/App';
import todoApp from '../reducers/order';
const store = createstore(todoApp);

// react组件全部从此处引入
// import config from '../component-config';
// const { Com, testData } = config;

// class App extends Component {
//   render() {
//     const { data, activeIndex } = this.props;
//     console.log('props: ', data[activeIndex])
//     return <Com {...data[activeIndex]} />;
//   }
// }
// App.PropTypes = {
//   data: PropTypes.array.isRequired,
//   activeIndex: PropTypes.number.isRequired
// }
// App = connect(state => state)(App);

// const NEXT_PROPS = 'NEXT_PROPS';
// function nextProps() {
//   return {
//     type: 'NEXT_PROPS'
//   };
// }
// function rootReducer(state = { data: [], activeIndex: 0 }, action) {
//   switch (action.type) {
//     case NEXT_PROPS:
//       let activeIndex = state.activeIndex + 1;
//       if (activeIndex >= state.data.length) {
//         activeIndex = 0;
//       }
//       return { ...state, activeIndex}

//     default:
//       return state;
//   }
// }


render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
