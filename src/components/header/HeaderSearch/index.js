import {Block, Text} from '@components';
import {SIZES} from '@theme';
import React, {useState} from 'react';
import IconGroup from '../IconGroup';

const HeaderSearch = ({title}) => {
  const [widthIcon, setWidthIcon] = useState(null);

  const _onLayout = ({nativeEvent}) => {
    setWidthIcon(nativeEvent.layout.width);
  };

  return (
    <Block rowCenter space="between" padding={SIZES.medium}>
      {widthIcon && <Block style={{width: widthIcon}} />}
      <Text flex center medium bold color="primary" numberOfLines={2}>
        {title}
      </Text>
      <IconGroup onLayout={_onLayout} />
    </Block>
  );
};

export default HeaderSearch;
