import {Block, Shimmer} from '@components';
import {SIZES} from '@theme';
import React from 'react';

const HolderManagement = () => {
  const _renderItem = () => {
    return (
      <Block
        backgroundColor="white"
        padding={12}
        radius={8}
        marginBottom={SIZES.medium}>
        <Block row alignCenter space="between">
          <Shimmer
            width={150}
            height={15}
            radius={SIZES.small}
            marginBottom={SIZES.small}
          />
          <Shimmer
            width={80}
            height={15}
            radius={SIZES.small}
            marginBottom={SIZES.small}
          />
        </Block>
        <Shimmer
          width={200}
          height={15}
          radius={SIZES.small}
          marginBottom={SIZES.small}
        />
        <Shimmer
          width={150}
          height={15}
          radius={SIZES.small}
          marginBottom={SIZES.small}
        />
        <Shimmer
          width={170}
          height={15}
          radius={SIZES.small}
          marginBottom={SIZES.small}
        />
        <Shimmer
          width={190}
          height={15}
          radius={SIZES.small}
          marginBottom={SIZES.small}
        />
      </Block>
    );
  };

  return (
    <Block flex>
      {_renderItem()}
      {_renderItem()}
      {_renderItem()}
      {_renderItem()}
      {_renderItem()}
    </Block>
  );
};

export default HolderManagement;
