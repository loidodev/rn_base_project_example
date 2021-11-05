import RootNavigator from '@navigator';
import store from '@store';
import React from 'react';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
