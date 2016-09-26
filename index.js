import React from 'react';
import { render } from 'react-dom';
import { createstore } from 'redux';
import { Provider, connect } from 'react-redux';

import App from './container/App';
import todoApp from './reducer/order';
var store = createstore(todoApp);
render(
    <Provider store={store}>
     <App />
    </Provider>,
    document.getElementById('root')
)
