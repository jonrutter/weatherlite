import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';

// fonts
import '@fontsource/open-sans';
import '@fontsource/nunito';

// import { worker } from './api/server';

// import { store } from './app/store';

// app
import { App } from './app';
// import { saveState } from './app/localStorage';

// styles
import './styles/index.css';

// store.subscribe(() => {
// saveState(store.getState().location);
// });

// async function start() {
//   // Start our mock API server
//   await worker.start({ onUnhandledRequest: 'bypass' });

//   ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// start();

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./app/mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
