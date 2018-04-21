import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

store.dispatch({
  type : 'INCREMENT',
  jump : 5
})


// store.getState()
// store.dispatch()
// store.subscribe()


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
