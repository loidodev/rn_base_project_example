import router from '@router';
//import auth
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
//import bottom
import Home from './bottom/Home';
import Shopping from './bottom/Shopping';
import QrCode from './bottom/QrCode';
import Voucher from './bottom/Voucher';
import Profile from './bottom/Profile';

export const auth = {
  [router.SIGN_IN_SCREEN]: SignIn,
  [router.SIGN_UP_SCREEN]: SignUp,
};

export const bottom = {
  [router.HOME_SCREEN]: Home,
  [router.SHOPPING_SCREEN]: Shopping,
  [router.QR_CODE_SCREEN]: QrCode,
  [router.VOUCHER_SCREEN]: Voucher,
  [router.PROFILE_SCREEN]: Profile,
};

export const common = {};
