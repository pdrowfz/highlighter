import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Highlighter from './components/Highlighter';

import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Highlighter text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
