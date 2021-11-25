import {Block, Empty} from '@components';
import {LOTTIES} from '@constants';
import React from 'react';

const EmptyProductByType = () => {
  return (
    <Block flex>
      <Empty lottie={LOTTIES.empty} />
    </Block>
  );
};

export default EmptyProductByType;
