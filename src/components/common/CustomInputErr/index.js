import {Block, Icon} from '@components';
import {SIZES} from '@theme';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomInputErr = ({renderInputErr}) => {
  return (
    <Block rowCenter>
      <Icon
        IconType={Ionicons}
        iconName="warning"
        iconColor="red"
        iconSize={13}
        marginRight={SIZES.normal}
        marginTop={SIZES.normal}
      />
      {renderInputErr()}
    </Block>
  );
};

export default CustomInputErr;
