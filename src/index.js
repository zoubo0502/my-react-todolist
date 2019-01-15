import React from 'react';
import ReactDOM from 'react-dom';
import { TestComponent } from './TestComponent'
import { Provider } from 'react-redux';
import { createStore } from "redux";
import app from './reducers/index'

const store = createStore(app);

ReactDOM.render(<Provider store={store}>
  <TestComponent />
</Provider>, document.getElementById('root'));
