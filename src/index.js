import {STORAGE_KEYS} from '@constants';
import RootNavigator from '@navigator';
import store from '@store';
import actions from '@store/actions';
import {handleTokenUser} from '@utils';
import {default as Storage, default as storage} from '@utils/storage';
import locale from 'locale';
import React, {useEffect} from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useDispatch, useSelector} from 'react-redux';

const RootApp = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  useEffect(() => {
    Storage.getItem('LANGUAGE').then(language => {
      locale.locale = language || 'vi';
    });

    dispatch({type: actions.GET_TOKEN});
  }, [dispatch]);

  useEffect(() => {
    if (token.data) {
      dispatch({type: actions.GET_CONFIG});
      storage.getItem(STORAGE_KEYS.tokenUser).then(tokenUser => {
        if (tokenUser) {
          handleTokenUser(tokenUser);
          dispatch({type: actions.GET_USER, params: {tokenUser}});
        }
      });
    }
  }, [dispatch, token]);

  return token.data && <RootNavigator />;
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MenuProvider>
          <RootApp />
        </MenuProvider>
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
