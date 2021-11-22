/* eslint-disable react-native/no-inline-styles */
import {Block, Shimmer} from '@components';
import {height} from '@utils/responsive';
import React from 'react';

const BirthdayHolder = () => {
  return (
    <Block flex margin={12}>
      <Block>
        <Shimmer height={15} marginVertical={6}/>
        <Shimmer height={height} />
      </Block>
    </Block>
  );
};

export default BirthdayHolder;
