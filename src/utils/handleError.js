import store from '@store';
import actions, {_onUnmount} from '@store/actions';
import {handleTokenUser} from '@utils';
import {CustomToast} from '@utils/helper';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';

export const hanldeError = error => {
  if (error.data.code === 401) {
    Alert.alert(
      'Phiên bản đăng nhập hết hạn',
      'Khỏi động lại ứng dụng của bạn',
      [
        {
          text: 'Đồng ý',
          onPress: () => RNRestart.Restart(),
        },
      ],
      {cancelable: false},
    );
  } else if (error.data.code === 403) {
    Alert.alert(
      'Phiên bản đăng nhập hết hạn',
      'Vui lòng đăng nhập lại tài khoản của bạn',
      [
        {
          text: 'Đồng ý',
          onPress: () => {
            handleTokenUser();
            store.dispatch({type: _onUnmount(actions.GET_USER_INFORMATION)});
          },
        },
      ],
      {cancelable: false},
    );
  } else {
    console.error(error.data.message);
    CustomToast(error.data.message);
  }
};
