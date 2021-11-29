import {Empty} from '@components';
import {LOTTIES} from '@constants';
import locale from '@locale';
import React from 'react';

const EmptyManagement = () => {
  return (
    <Empty
      lottie={LOTTIES.empty}
      content={locale.t('commission.empty')}
      contentMore={locale.t('commission.emptyMore')}
    />
  );
};

export default EmptyManagement;
