import router from '@router';
//import auth
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
//import bottom
import Home from './bottom/Home';
import Profile from './bottom/Profile';
import QrCode from './bottom/QrCode';
import Shopping from './bottom/Shopping';
import Voucher from './bottom/Voucher';
import BirthdayScreen from './common/BirthdayScreen';
//import common
import GetStart from './common/GetStart';
import Menber from './common/Menber';
import Menber_Details from './common/Menber/components/Menber_Details';
import PartnerScreen from './common/PartnerScreen';
import SearchScreen from './common/SearchScreen';

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

export const common = {
  [router.GET_START_SCREEN]: GetStart,
  [router.GET_SEARCH_SCREEN]: SearchScreen,
  [router.GET_BIRTHDAY_SCREEN]: BirthdayScreen,
  [router.GET_PARTNER_SCREEN]: PartnerScreen,
  [router.GET_MENBER_SCREEN]: Menber,
  [router.GET_MENBER_DERAILS]: Menber_Details,
};
