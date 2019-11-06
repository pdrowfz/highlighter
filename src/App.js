import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App" />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
