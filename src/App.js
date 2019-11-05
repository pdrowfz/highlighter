import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App" />
    </Provider>
  );
}

export default App;
