import {Shimmer} from '@components';
import {SIZES} from '@theme';
import {createDataTemplate} from '@utils';
import {width} from '@utils/responsive';
import React from 'react';
import {ScrollView} from 'react-native';

const DATA = createDataTemplate(8);

const HomeHolder = () => {
  return (
    <ScrollView>
      {/* banner */}
      <Shimmer
        width={width - SIZES.medium * 2.2}
        height={width / 2.3}
        marginTop={SIZES.medium}
        marginHorizontal={SIZES.medium}
      />
    </ScrollView>
  );
};

export default HomeHolder;
