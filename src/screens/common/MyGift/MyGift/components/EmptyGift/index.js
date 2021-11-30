import {Empty} from '@components';
import {LOTTIES} from '@constants';
import locale from '@locale';
import React from 'react';

const EmptyGift = () => {
  return (
    <Empty
      lottie={LOTTIES.empty}
      content={locale.t('profileScreen.emptyGift')}
    />
  );
};

export default EmptyGift;
