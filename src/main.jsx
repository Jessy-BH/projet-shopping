import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { reducerCart } from './reducers/cart';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(reducerCart);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
