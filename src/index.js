import RootNavigator from '@navigator';
import store from '@store';
import actions from '@store/actions';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useDispatch, useSelector} from 'react-redux';
import storage from '@utils/storage';
import {STORAGE_KEYS} from '@constants';
import {handleTokenUser} from '@utils';

const RootApp = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  useEffect(() => {
    dispatch({type: actions.GET_TOKEN});
  }, [dispatch]);

  useEffect(() => {
    if (token.data) {
      storage.getItem(STORAGE_KEYS.tokenUser).then(tokenUser => {
        if (tokenUser) {
          handleTokenUser(tokenUser);
          dispatch({type: actions.GET_USER, params: {tokenUser}});
        }
      });
    }
  }, [dispatch, token]);

  return <RootNavigator />;
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootApp />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
