import {STORAGE_KEYS} from '@constants';
import RootNavigator from '@navigator';
import store from '@store';
import actions from '@store/actions';
import {handleTokenUser} from '@utils';
import storage from '@utils/storage';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useDispatch, useSelector} from 'react-redux';

const RootApp = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.data);
  const config = useSelector(state => state.config.data);

  useEffect(() => {
    dispatch({type: actions.GET_TOKEN});
  }, [dispatch]);
  useEffect(() => {
    if (token) {
      dispatch({type: actions.GET_CONFIG});
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      storage.getItem(STORAGE_KEYS.tokenUser).then(tokenUser => {
        console.log(tokenUser);
        if (tokenUser) {
          handleTokenUser(tokenUser);
          dispatch({type: actions.GET_USER});
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
