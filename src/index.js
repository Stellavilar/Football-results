import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App';
import axios from 'axios';

axios.defaults.baseURL = 'https://tdyu6gkdd7.execute-api.us-east-1.amazonaws.com/production/'

const rootReactElement = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

const target = document.getElementById('root');
render(rootReactElement(), target);