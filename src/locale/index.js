import I18n from 'react-native-i18n';

import en from './language/en';
import vi from './language/vi';

I18n.defaultLocale = 'vi';
I18n.fallbacks = true;
I18n.translations = {en, vi};

export default I18n;
