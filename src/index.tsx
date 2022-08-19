import React from 'react';
import ReactDOM from 'react-dom';

// fonts
import '@fontsource/nunito';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';

// app
import { App } from './app';

// global styles
import './styles/index.css';

// use msw mock server in development
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./app/mocks/browser');
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

// render app to dom
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
