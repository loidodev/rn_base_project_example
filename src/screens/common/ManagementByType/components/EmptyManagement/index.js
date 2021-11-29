import {Empty} from '@components';
import {LOTTIES, MANAGEMENT_TYPE} from '@constants';
import locale from '@locale';
import React, {useMemo} from 'react';

const EmptyManagement = ({type}) => {
  let message = useMemo(() => {
    switch (type) {
      case MANAGEMENT_TYPE.point:
        return 'commission.empty';

      case MANAGEMENT_TYPE.history_point:
        return 'commission.empty';

      case MANAGEMENT_TYPE.rose:
        return 'commission.empty';

      default:
        return 'commission.empty';
    }
  }, [type]);

  return <Empty lottie={LOTTIES.empty} content={locale.t(message)} />;
};

export default EmptyManagement;
