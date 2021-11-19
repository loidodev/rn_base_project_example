import {Shimmer} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {ScrollView} from 'react-native';

const HomeHolder = () => {
  return (
    <ScrollView>
      {/* banner */}
      <Shimmer width={width - 24} height={width / 2.3} />
    </ScrollView>
  );
};

export default HomeHolder;
