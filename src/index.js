import RootNavigator from '@navigator';
import store from '@store';
import actions from '@store/actions';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useDispatch, useSelector} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  useEffect(() => {
    dispatch({type: actions.GET_TOKEN});
  }, [dispatch]);
  return <RootNavigator />;
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};
export default AppWrapper;
