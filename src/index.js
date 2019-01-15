import React from 'react';
import ReactDOM from 'react-dom';
import { TestComponent } from './TestComponent'
import { Provider } from 'react-redux';
import { createStore } from "redux";
import todos from './reducers/todos'

const store = createStore(todos);

ReactDOM.render(<Provider store={store}>
  <TestComponent />
</Provider>, document.getElementById('root'));
