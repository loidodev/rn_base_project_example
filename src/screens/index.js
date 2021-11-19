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
import BirthdayScreen from './common/Birthday';
import EditUser from './common/EditUser';
//import common
import GetStart from './common/GetStart';
import {MemberDetails, MenberMain} from './common/Member';
import PartnerScreen from './common/Partner';
import SearchScreen from './common/Search';

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
  [router.EDIT_USER_SCREEN]: EditUser,
  [router.GET_SEARCH_SCREEN]: SearchScreen,
  [router.GET_BIRTHDAY_SCREEN]: BirthdayScreen,
  [router.GET_PARTNER_SCREEN]: PartnerScreen,
  [router.GET_MEMBER_SCREEN]: MenberMain,
  [router.GET_MEMBER_DERAILS]: MemberDetails,
};
